# FROM node:16
# WORKDIR ./
# COPY package.json /server
# RUN npm install
# COPY .
# EXPOSE 
# CMD nodemon server.js

FROM node:16-alpine

RUN mkdir -p /backend
WORKDIR /backend

COPY package.json /backend

COPY . /backend

RUN npm install

CMD ["node", "server.js"]
