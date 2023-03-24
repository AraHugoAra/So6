# Source image
FROM node:18-alpine

# Install dependencies such as C++ compiler which is needed by some nodejs packages
# RUN apt update && apt install build-essential -y

RUN mkdir -p /app 
# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

# Update npm | Install pnpm | Set PNPM_HOME | Install global packages
    # Install pnpm
    # npm install -g pnpm; \
    # # Install node dependencies
    # pnpm i

# Bundle app source
COPY . /app

RUN npm i
# exposes port 8080
EXPOSE 8080

CMD [ "node", "server.js" ]