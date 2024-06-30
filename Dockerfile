# Usa a imagem oficial do Nginx do Docker Hub
FROM nginx:alpine

# Copia a configuração do Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY . /usr/share/nginx/html
