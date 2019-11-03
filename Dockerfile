# Initializing base image [ALPINE].
FROM node:10-slim

# Set package maintainer.
LABEL maintainer="Modenero <support@modenero.com>"

# Create a working directory.
WORKDIR /usr/src/app

RUN apt-get update \
    && npm install -g yarn

# Copy package information.
# NOTE: A wildcard is used to ensure both package.json AND package-lock.json
#       are copied where available (npm@5+).
COPY package*.json ./

# Install app dependencies.
RUN npm install

# Bundle app source (to working directory).
COPY . .

# Expose (default) HTTP port.
EXPOSE 80

# Start the server.
CMD [ "npm", "start" ]
