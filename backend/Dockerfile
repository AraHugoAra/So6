# FROM node:16-alpine

# RUN mkdir -p /app
# WORKDIR /app

# COPY package.json /app
# COPY . /app

# RUN npm install

# CMD ["node", "server.js"]

FROM node:16-alpine

RUN mkdir -p /backend
WORKDIR /backend

COPY package.json /backend

COPY . /backend

RUN npm install

CMD ["node", "server.js"]

