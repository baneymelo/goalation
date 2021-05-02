FROM node:10.19
WORKDIR '/app'
COPY package*.json ./
RUN npm install -s
COPY ./ ./
EXPOSE 30000