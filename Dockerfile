# Node Version 18
FROM node:18
COPY package*.json ./

WORKDIR /app

COPY . /app/

RUN npm install node

EXPOSE 8000

CMD [ "node", "app/index.js"]