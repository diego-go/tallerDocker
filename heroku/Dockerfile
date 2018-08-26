FROM node
WORKDIR /app
EXPOSE $PORT 
ADD ./webapp/package.json /app
ADD ./webapp/package-lock.json /app
RUN npm install
RUN npm install -g serve
ADD ./webapp /app
RUN npm build
CMD serve -p $PORT -s build
