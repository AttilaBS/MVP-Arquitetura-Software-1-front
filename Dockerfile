# Usa a imagem oficial do Nginx do Docker Hub
FROM nginx:alpine

# Copia os arquivos estáticos para o diretório do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta na qual o Nginx estará rodando
EXPOSE 80
