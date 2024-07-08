# Lembretes front-end

## Descrição do projeto:
   Este repositório faz parte das exigências da sprint Arquitetura de Software
  da pós graduação da PUC-Rio, curso Engenharia de Software, turma de julho de 2023.
   Neste repositório se encontra o front-end que faz chamadas às rotas de criação,
  edição, deleção, busca de todos lembretes, além de criação, login e logout
  de usuário. Este componente se conecta diretamente com o componente api1.

   Esta aplicação foi iniciada na sprint Desenvolvimento Fullstack Básico.
  Nesta sprint, possui como melhorias a componentização mais granular, redesenho
  do layout, orquestração de componentes via docker compose, criação, login
  e logout de usuário, além de outras melhorias que serão descritas em detalhes
  em cada componente que as implementa.

   As linguagens utilizadas são HTML, CSS e Javascript.

## Árvore de módulos. O sistema de pastas e arquivos do projeto está estruturado:
    frontend
    |__ images
        |__ edit.png
        |__ trash.png
    |__ nginx
        |__ nginx.conf
    |__ static
        |__ favicon.png
    |__ Dockerfile
    |__ home.html
    |__ login.html
    |__ logout.html
    |__ register.html
    |__ README.md
    |__ scripts.js
    |__ users.js
    |__ styles.css

## Como executar
   Para instruções detalhadas de como executar, verificar o README da api1.

## Responsabilidades dos arquivos do projeto

## Pasta images:
  ### edit.png e trash.png
   Arquivos de ícones utilizados na aplicação.

## Pasta nginx:
  ### nginx.conf
   Arquivo de configuração do servidor web que gerencia solicitações HTTP.

## Pasta static:
  ### favicon.png
   Arquivo de favicon, que adiciona ícone customizado à aba do navegador.

## Pasta raiz da aplicação:
  ### Dockerfile
   Arquivo de configuração docker, específico para o serviço frontend.

  ### home.html
   Índice de lembretes do usuário logado. Rota protegida.
  
  ### login.html
   Arquivo responsável pelo login do usuário já cadastrado.
  
  ### logout.html
   Arquivo responsável pelo logout do usuário já cadastrado. Rota protegida.
  
  ### register.html
   Arquivo responsável pelo cadastro do usuário na aplicação.

  ### README.md
   Este arquivo. Responsável por descrever a aplicação, seus objetivos
  e instruções para execução.

  ### scripts.js
   Possui a lógica javascript genérica da aplicação, bem como a lógica específica
   das rotas dos lembretes. Entre suas funções estão a comunicação com a api1,
   manuseio das respostas, validações dos inputs HTML e montagem da lista de lembretes.

  ### users.js
   Possui a lógica javascript voltada para as rotas de usuários.
   Entre suas funções estão a comunicação com a api1, manuseio das respostas,
   validações dos inputs HTML e gerenciamento da sessão de usuário.

  ### styles.css
   Arquivo responsável pela estilização dos arquivos HTML.
