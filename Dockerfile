FROM node:14.16.0-alpine
# create destination directory
RUN mkdir -p /var/www/app
WORKDIR /var/www/app
# update and install dependency
RUN apk update && apk upgrade
#RUN npm install -g yarn
# copy project and instal dependancy
COPY . /var/www/app
RUN yarn install
# build via npm
RUN yarn build

# expose 5000 on container
EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=3000

# start the app
CMD [ "yarn", "start" ]
