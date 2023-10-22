FROM node:latest as base

WORKDIR /app
# [Docker Optimization] should copy package.json outside all dir and before npm install,
# to avoid changes in src code files that run npm install every time - not run from cache,
# so we need to run npm install when only package.json is updated.
COPY package.json .

FROM base as development

RUN npm install
COPY . .
# ENV PORT=4000
EXPOSE 4000
# for hot reloading --- we add start-dev instead of start to run nodemon, and sync local dir : with container dir.
CMD [ "npm", "run" , "start-dev"]


FROM base as production

RUN npm install --only=production
COPY . .
# ENV PORT=4000
EXPOSE 4000
# for hot reloading --- we add start-dev instead of start to run nodemon, and sync local dir : with container dir.
CMD [ "npm", "start"]



