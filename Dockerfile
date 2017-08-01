# The base image from which we are building
FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app

# Set the app directory as the active directory (like cd)
WORKDIR /usr/src/app

# Get the source
RUN git clone https://github.com/wbleonard/node-api-container.git

# Set the node-api-container as the active directory
WORKDIR /usr/src/app/node-api-container

# Install app dependencies
RUN npm install

EXPOSE 8080
CMD ["node", "app.js"]

