###############################
# DOCKER START STAGE
###############################
FROM golang:1.19.3-buster
WORKDIR /usr/src/goapp/
USER ${USER}
COPY ./go.mod /usr/src/goapp/
COPY . /usr/src/goapp/

###############################
# DOCKER ENVIRONMENT STAGE
###############################
ENV GO111MODULE="on" \
  CGO_ENABLED="0" \
  GO_GC="off"

###############################
# DOCKER UPGRADE STAGE
###############################
RUN apt-get autoremove \
  && apt-get autoclean \
  && apt-get update \
  && apt-get upgrade -y \
  && apt-get install curl \
  build-essential -y

################################
# DOCKER INSTALL NODEJS STAGE
################################
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install nodejs

###############################
# DOCKER INSTALL & BUILD STAGE
###############################
RUN go mod tidy \
  && go mod download \
  && go build -o main .
RUN npm i pm2 -g --verbose --no-audit

###############################
# DOCKER FINAL STAGE
###############################
EXPOSE 4000
CMD pm2-runtime pm2.config.js