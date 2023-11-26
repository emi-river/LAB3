FROM node AS build
COPY package*.json ./
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
FROM nginx as frontend
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080

RUN echo "gzip on;" >> /etc/nginx/conf.d/default.conf
RUN echo "gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;" >> /etc/nginx/conf.d/default.conf
