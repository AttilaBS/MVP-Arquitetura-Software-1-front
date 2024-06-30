# Lembretes front-end

## Vídeo de demonstração do MVP:
    Link: <_TODO_>

## Descrição do projeto:
      Este projeto faz parte das exigências da sprint Arquitetura de Software
    da pós graduação da PUC-Rio, curso Engenharia de Software, turma de julho de 2023.
    Neste projeto se encontra o front-end que faz chamadas às rotas de criação,
    edição, deleção, get de um lembrete e get de todos lembretes. Este serviço
    se conecta diretamente com o serviço api1.

      Esta aplicação foi iniciada na sprint Desenvolvimento Fullstack Básico.
    Nesta sprint, possui como melhorias a componentização mais granular, redesenho
    do layout, orquestração de componentes via docker, além de outras melhorias
    que serão descritas em detalhes em cada serviço que as implementa.

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
    |__ index.html
    |__ README.md
    |__ scripts.js
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
  ### Dockerfile:
    Arquivo de configuração docker, específico para o serviço frontend.

  ### index.html:
    Arquivo responsável pela estrutura HTML da aplicação.

  ### README.md
      Este arquivo. Responsável por descrever a aplicação, seus objetivos
    e instruções para execução.

  ### scripts.js
      Possui toda a lógica javascript da aplicação. Entre suas funções
    estão a comunicação com a API, manuseio das respostas, validações dos 
    inputs HTML e montagem da tabela.

  ### styles.css
      Arquivo responsável pela estilização do arquivo index.html.
