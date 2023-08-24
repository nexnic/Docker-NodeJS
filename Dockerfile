# Node Version 18
FROM node:18

WORKDIR /app

RUN npm install

EXPOSE 8000

CMD [ "node", "index.js" ]