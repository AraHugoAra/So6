# Source image
FROM node:18-alpine

# Install dependencies such as C++ compiler which is needed by some nodejs packages
# RUN apt update && apt install build-essential -y

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

# Install node dependencies
RUN npm i

# Bundle app source
COPY . .

# exposes port 8080
EXPOSE 8080

CMD [ "node", "server.js" ]