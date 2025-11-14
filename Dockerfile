FROM node:alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
RUN rm -rf node_modules
RUN chown -R node:node /usr/src/app
USER node
RUN npm install
RUN npx prisma generate
