FROM node:10.19 as build-stage
WORKDIR '/app'
COPY package*.json ./
RUN npm install -s
COPY ./ ./
RUN npm run build

FROM nginx:1.18.0
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'