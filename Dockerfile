# Initializing base image [ALPINE].
FROM node:10-slim

# Set package maintainer.
LABEL maintainer="Modenero <support@modenero.com>"

# Create a working directory.
WORKDIR /var/www/html

RUN apt-get update \
    && npm install -g yarn

COPY package.json .
RUN npm install

# What is this for??
COPY . ./

# Expose (default) http port.
EXPOSE 80

# CMD ["echo", "Hello JetCrypto!"]
# CMD ["node", "/var/www/html/index.js"]

# Start the server.
CMD [ "npm", "start" ]
