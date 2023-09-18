# 使用docker部署nodejs的极简DEMO

1. 构建镜像 `docker build -f dockerfile -t my-server:1.0 .`
2. 启动容器 `docker run -it -p 3002:3000 my-server:1.0  -- --env=你好`
3. 本地访问 [http://localhost:3002/](http://localhost:3002/)