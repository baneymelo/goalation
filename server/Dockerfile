FROM node:10.19
WORKDIR '/app'
COPY package*.json ./
ENV NODE_ENV=development
RUN npm install -s
COPY ./ ./
EXPOSE 3001
CMD [ "npm", "start" ]