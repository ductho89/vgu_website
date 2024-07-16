FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm install -g wait-on
COPY . .

EXPOSE 3000
CMD ["sh", "start-directus.sh"]
