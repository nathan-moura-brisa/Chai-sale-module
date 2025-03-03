# Etapa 1: Construção da aplicação Angular
FROM node:20 AS build

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando o package.json e o package-lock.json (se existir) para instalar as dependências
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante dos arquivos
COPY . .

# Executando o build do módulo Anakin-sale-module para produção
RUN npm run build:single-spa:Anakin-sale-module

# Etapa 2: Servindo a aplicação com Nginx
FROM nginx:alpine

# Copiando o arquivo de configuração do Nginx (caso necessário)
COPY nginx.conf /etc/nginx/nginx.conf

# Definindo a permissão correta para o diretório do Nginx
RUN chmod -R 777 /usr/share/nginx/html

# Copiando os arquivos de build do Angular para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expondo a porta 80 para servir a aplicação
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
