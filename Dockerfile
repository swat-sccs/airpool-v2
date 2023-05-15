FROM node:lts-bullseye
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
RUN npm install --production --silent && mv node_modules ../ &&\
  chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
