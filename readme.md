# docker多阶段多阶段部署

1. 构建镜像 `docker build -m detail -t image_name .`
2. 启动容器 `docker run -d -p host_port:container_port --name container_name image_name`