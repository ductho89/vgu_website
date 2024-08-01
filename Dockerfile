FROM node:latest AS builder

RUN mkdir -p /nextjs/app && chown -R node:node /nextjs/app
WORKDIR /nextjs/app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]


