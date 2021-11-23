FROM node:15.5.0

WORKDIR /my_app

COPY ./app/package*.json ./

RUN npm install

COPY ./app ./

EXPOSE 3000

CMD ["node","app.js"]

