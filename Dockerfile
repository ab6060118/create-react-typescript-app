FROM node

COPY package.json tsconfig.json webpack.config.js server.js /app/
COPY src/ /app/src/

WORKDIR /app

RUN npm install && npm cache clean --force
RUN npm run build

CMD node server.js
