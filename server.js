import fs from 'node:fs';
import http from 'node:http';

const PORT = 4000;

const server = http.createServer((request, response) => {
    const { method, url } = request;

    fs.readFile('pessoas.json', 'utf8', (err, data) => {
        let jsonData = [];
        if (err) {
            response.write(500, { "Content-Type": "application.json" });
            response.end(JSON.stringify ({ jsonData }));
        };
        try {
            jsonData = JSON.parse(data);
        } catch (error) {
            console.error("erro ao ler o arquivo jsondata" + error);

        };

        if (method === "GET" && url === "/pessoas") {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify(jsonData));

        } else if (method === "GET" && url.startsWith === "/pessoas/") {//id
            const idpessoa = jsonData.length +1
            if (idpessoa === 0) {
                response.writeHead(400, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify({ message: "Não foi encontrado participantes registrados" }))
              } else {
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify({ message: `Existem ${idpessoa} participantes cadastrados!`, value: `${lengthPart}` }))
              }

        }else if (method === "POST" && url === "/pessoas") {

            let body = ""
            request.on("data", (chunk) => {
                body += chunk.toString();
            });

            request.on('end', () => {
                const newItem = JSON.parse(body);
                newItem.id = jsonData.length + 1; 
                jsonData.push(newItem);
                fs.writeFile("pessoas.json", JSON.stringify(jsonData, null, 2), (err) => {
                        if (err) {
                            response.writeHead(500, { "Content-Type": "application/json" });
                            response.end(
                                JSON.stringify({ message: "Erro interno do servidor" })
                            );
                            return;
                        }
                        response.writeHead(201, { "Content-Type": "application/json" });
                        response.end(JSON.stringify(newItem));
                    }
                )})

        } else if (method === "PUT" && url.startsWith === "/pessoas/") {
            const id = parseInt(url.split('/')[2])
            let body = '';
            request.on('end', ()=>{
                const newinfo  = JSON.parse(body);

            })
        } else if (method === "DELETE" && url.startsWith === "/pessoas/") {
            const id = parseInt(url.split("/")[2]);
            const usuario = jsonData.findUsuario((item) => item.id === id);
            if (usuario !== -1) {
                jsonData.splice(usuario, 1);
                fs.writeFile(
                  "pessoas.json",
                  JSON.stringify(jsonData, null, 2), (err) => {
                    if (err) {
                      response.writeHead(500, { "Content-Type": "application/json" });
                      response.end(
                        JSON.stringify({ message: "Erro interno do servidor" })
                      );
                      return;
                    }
                    response.writeHead(200, { "Content-Type": "application/json" });
                    response.end(
                      JSON.stringify({ message: "Usuário removido com sucesso" })
                    );
                  }
                );
              } else {
                response.writeHead(404, { "Content-Type": "application/json" });
                response.end(JSON.stringify({ message: "Usuário não encontrado" }));
              }

        } else { };
    })

});

server.listen(PORT, () => {
    console.log('Servidor on na porta: ' + PORT);
});