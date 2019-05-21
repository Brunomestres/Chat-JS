FROM node:alpine



WORKDIR /usr/app

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 30

CMD ["node" ,"app.js"]