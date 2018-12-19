FROM node:8.14.0

WORKDIR /server
COPY . .
RUN yarn install && \
    yarn run build
CMD npm rebuild grpc --target=8.14.0 --target_arch=x64 --target_platform=linux --target_libc=glibc && \
    yarn start
EXPOSE 9090
