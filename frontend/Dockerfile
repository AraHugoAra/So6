# FROM node:latets
# WORKDIR ./src
# COPY package.json /src
# RUN npm install
# COPY . /src
# EXPOSE 5173
# CMD npm run dev


FROM node:16-alpine

RUN mkdir -p /frontend
WORKDIR /frontend

COPY package.json /frontend
COPY . /frontend

RUN npm install

CMD ["npm", "start"]