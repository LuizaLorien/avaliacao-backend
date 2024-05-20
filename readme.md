### **Rotas da Aplicação**

1. **POST /pessoas**:
    - Descrição: Esta rota permite que os usuários se cadastrem na plataforma.
    - Funcionalidade: Cadastro de Pessoa
    - Método HTTP: POST
    - Corpo da Requisição: Deve conter nome, idade e email.
2. **POST /pessoas/endereco/{id_pessoa}**:
    - Descrição: Esta rota permite que os usuários cadastrem um endereço para uma pessoa específica.
    - Funcionalidade: Cadastro de Endereço
    - Método HTTP: POST
    - Parâmetros da URL: ID da pessoa.
    - Corpo da Requisição: Deve conter rua, número, cidade, estado e CEP.
3. **POST /pessoas/telefones/{id_pessoa}**:
    - Descrição: Esta rota permite que os usuários cadastrem telefones para uma pessoa específica.
    - Funcionalidade: Cadastro de Telefone
    - Método HTTP: POST
    - Parâmetros da URL: ID da pessoa.
    - Corpo da Requisição: Deve conter tipo de telefone (celular, residencial, comercial) e número.
4. **GET /pessoas/{id_pessoa}**:
    - Descrição: Esta rota permite visualizar as informações de uma pessoa específica.
    - Funcionalidade: Visualização de Pessoa
    - Método HTTP: GET
    - Parâmetros da URL: ID da pessoa.
    - Resposta: Nome, idade, e-mail, endereço e telefone da pessoa.
5. **PUT /pessoas/endereco/{id_pessoa}**:
    - Descrição: Esta rota permite atualizar o endereço de uma pessoa específica.
    - Funcionalidade: Atualização de Endereço
    - Método HTTP: PUT
    - Parâmetros da URL: ID da pessoa.
    - Corpo da Requisição: Pode conter rua, número, cidade, estado e/ou CEP.
6. **DELETE /pessoas/telefones/{id_pessoa}**:
    - Descrição: Esta rota permite deletar um telefone específico de uma pessoa.
    - Funcionalidade: Deletar de Telefone
    - Método HTTP: DELETE
    - Parâmetros da URL: ID da pessoa.
    - Corpo da Requisição: Pode conter tipo e/ou número.
7. **GET /pessoas**:
    - Descrição: Esta rota permite visualizar todas as pessoas cadastradas na plataforma.
    - Funcionalidade: Listagem de Pessoas
    - Método HTTP: GET