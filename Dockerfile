FROM node:12-alpine AS build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 

COPY . .
EXPOSE 3000
CMD ["node", "app.js"]