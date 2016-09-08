FROM centos:latest
MAINTAINER erwaiyang

RUN curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
RUN yum -y install nodejs

COPY ./package.json server/
RUN cd server && npm install

COPY . /server
WORKDIR /server

CMD ["npm", "start"]
