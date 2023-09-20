# 使用docker部署nodejs的极简DEMO

1. `git clone git@github.com:guojingwen/node_docker.git && cd cd node_docker`
2. 构建镜像 `docker build -f dockerfile -t my-server:1.0 .`
3. 启动容器 `docker run -it -p 3002:3000 my-server:1.0  -- --env=你好`
4. 本地访问 [http://localhost:3002/](http://localhost:3002/)