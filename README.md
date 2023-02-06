# Cadastro de Carro

**RF**

- Deve ser possivel cadastrar um novo carro.
- Deve ser possivel listar todas as categorias.

**RN**

- Não pode ser possivel cadastrar um novo carro com a mesma placa.
- Não deve ser possivel alterar a placa de um carro já cadastrado.
- O Carro deve ser cadastrado como disponivel por padrão.
- Apenas usuário administrador poderá cadastrar Carros.

# Listagem de Carros

**RF**

- Deve ser possivel listar todos os carros Disponiveis.
- Deve ser possivel listar o carro, pelo nome, marca e categorias.

**RN**

- O usuário não precisa está logado no sistema.

# Cadastro de especificação no Carros

**RF**

- Deve ser possivel cadastrar uma especificação para um carro.
- Deve ser possivel listar todas as especificações.
- Deve ser possivel listar todos os carros.

**RN**

- Não deve ser possivel cadastrar uma especificação para um carro inexistente.
- Não deve ser possivel cadastrar uma mesma especificação existente para o mesmo carro.
- Apenas usuário administrador poderá cadastrar Carros.

# Cadastro de Imagens do carro

**RF**

- Deve ser possivel cadastrar a imagem do carro.
- Deve ser possivel listar todos os carros.

**RNF**

- Utilizar o multer para upload dos arquivos.

**RN**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- Apenas usuário administrador poderá cadastrar Imagens.

# Aluguel

**RF**

- Deve ser possivel cadastrar um aluguel.

**RN**

- O Aluguel deve ter duração minima de uma 24 Horas.
- Não deve ser possivel cadastrar um novo aluguel caso já exista para um mesmo usuário/carro.
