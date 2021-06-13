FROM node:16-alpine

RUN apk update && apk upgrade && apk add bash make git python3

# Set working directory
WORKDIR /app

# Add `/app/node_modules/bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package*.json ./
RUN npm install

EXPOSE 9229
EXPOSE 3000

# Fire it up!
CMD ["npm", "run", "start"]
