# react-native-learning

Este é um aplicativo mobile desenvolvido com **React Native**, com funcionalidades para gerenciamento de cartões de estudo e autenticação de usuários. O projeto utiliza o Firebase para gerenciamento de autenticação e banco de dados.

## Estrutura do Projeto

### Context
O projeto conta com dois contextos principais:

- **Autenticação**: Gerencia o estado do usuário autenticado na aplicação, fornecendo controle de login e logout, além de proteger as rotas que requerem autenticação.
- **Cartões de Estudo**: Responsável pelo CRUD (criação, leitura, atualização e exclusão) dos cartões de estudo. Este contexto mantém os dados sincronizados e centralizados, facilitando o acesso e a manipulação das informações.

### Config
A pasta `config` contém as configurações de conexão com o Firebase, incluindo a inicialização do Firebase App e a integração com serviços como autenticação e Firestore.

### Screens
A pasta `screens` agrupa as telas da aplicação, divididas por funcionalidades:

- **Edição de Cartão**: Permite ao usuário criar e editar cartões de estudo.
- **Lista de Cartões**: Exibe todos os cartões de estudo do usuário.
- **Login**: Tela de autenticação para acesso ao app.
- **Registro**: Tela para cadastro de novos usuários.
- **Tarefas**: Gerencia as tarefas relacionadas ao vencimento dos cartões, ajudando o usuário a organizar os estudos.

## Dependências do Projeto

O projeto utiliza as seguintes dependências principais:

- **React Native**: Framework para desenvolvimento mobile.
- **Firebase**: Serviços para autenticação e banco de dados.
- **React Navigation**: Navegação entre telas.
- **Context API**: Gerenciamento de estado.
- **Axios** (ou fetch): Para requisições externas, se necessário.

Certifique-se de consultar o arquivo `package.json` para a lista completa de dependências e versões.

## Como Iniciar o Projeto

### Requisitos
Antes de começar, você precisa ter instalado:

- Node.js (versão recomendada: LTS)
- Expo CLI (caso use Expo)
- Um emulador Android ou iOS, ou um dispositivo físico com o app Expo Go.

### Passos para Iniciar

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
2. **Instale as Dependências**
   ```bash
   npm install
3. **Configure o Firebase**
   Atualize as credencias no arquivo de configuração localizado em config/firebaseConfig.js
3. **Inicie o Projeto**
  Via Web
   ```bash
   expo start --web
   Acesse no navegador em http://localhost:19006
  Via Androide simulador
   ```bash
   expo start

## Configuração do Arquivo `.env`

Para que a aplicação funcione corretamente, é necessário configurar um arquivo `.env` na raiz do projeto. Este arquivo deve conter as credenciais de acesso ao Firebase.

### Credenciais Necessárias

Adicione as seguintes variáveis ao arquivo `.env`:

```plaintext
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-auth-domain
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
FIREBASE_APP_ID=your-app-id
FIREBASE_MEASUREMENT_ID=your-measurement-id

  

