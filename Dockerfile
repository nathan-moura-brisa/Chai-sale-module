FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:single-spa:Chai-sale-module

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN chmod -R 777 /usr/share/nginx/html

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
