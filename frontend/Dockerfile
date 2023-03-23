# FROM node:16-alpine

# RUN mkdir -p /app
# WORKDIR /app

# COPY package.json /app
# COPY . /app

# RUN npm install

# CMD ["npm", "run", "dev"]

FROM node:16-alpine

RUN mkdir -p /frontend
WORKDIR /frontend

COPY package.json /frontend
COPY . /frontend

RUN npm install

CMD ["npm", "start"]
