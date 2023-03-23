FROM node:16-alpine

RUN mkdir -p /frontend
WORKDIR /frontend

COPY package.json /frontend
COPY . /frontend

RUN npm install

CMD ["npm", "start"]
