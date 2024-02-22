FROM node:lts-bullseye
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
RUN rm -rf node_modules
RUN chown -R node:node /usr/src/app
RUN apt update 2> /dev/null
RUN apt install -y netcat 2> /dev/null
USER node
RUN npm install
RUN npx prisma generate
