# 指定node镜像的版本
FROM node:16-alpine
# 声明作者
MAINTAINER gjw<2315162186@qq.com>
# 移动当前目录下面的文件到app目录下
ADD . /app/
# 进入到app目录下面，类似cd
WORKDIR /app
# 安装依赖
RUN npm install
# 对外暴露的端口
EXPOSE 3000
# 程序启动脚本
ENTRYPOINT ["npm", "start"]
