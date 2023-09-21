# 使用多段镜像构建 镜像110M
# FROM node:16-alpine # 方案1
FROM node:16-alpine AS appbuild # 方案2
MAINTAINER gjw<2315162186@qq.com>
WORKDIR /usr/src/app
COPY ./ ./
RUN npm install && npm run build

FROM  node:16-alpine
WORKDIR /usr/src/app
#COPY --from=0 /usr/src/app/dist ./dist # 方案1
COPY --from=appbuild /usr/src/app/dist ./dist  # 方案2
RUN npm i http-server
EXPOSE 4002
CMD cd ./dist && npx http-server -p 4002
