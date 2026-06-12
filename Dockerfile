# Usa a imagem estável e leve do Nginx
FROM nginx:alpine

# Copia os arquivos estáticos do AdotaPet para a pasta pública do Nginx
COPY . /usr/share/nginx/html

# Altera a configuração interna do Nginx para rodar na porta 8080
RUN sed -i 's/listen[:[:space:]]*80;/listen 8080;/g' /etc/nginx/conf.d/default.conf

# Expõe a porta 8080 para o Back4app
EXPOSE 8080

# Inicia o servidor
CMD ["nginx", "-g", "daemon off;"]