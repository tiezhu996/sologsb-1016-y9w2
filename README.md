# 声场 · 广播剧台词与音效提示编辑器

一个离线优先的广播剧制作台，使用 Vue 3、Vite、TypeScript 和 Naive UI 从零实现。项目按场次管理角色台词、情绪、语速、音效素材与转场提示；提示顺序改变后自动重算时长，并检查角色撞场、音效引用缺失和场次超时。

## 功能

- 场次与提示项增删改、拖动排序、场次上下移动。
- 根据台词字数、语速、标点和素材时长实时估算总时长。
- 角色撞场、缺失音效引用、场次超限实时检查与一键定位。
- 每次修改形成待确认草稿，导演可逐条接受、退回或全部接受。
- 撤销、重做、快捷键保存和自动保存到 `localStorage`，刷新或离线不丢草稿。
- 冻结不可变制作版本，生成并下载纯文本制作稿。
- Service Worker 运行时缓存，已打开过的生产页面可离线访问。

## 技术栈

- Vue 3 + Composition API
- Vite 6
- TypeScript
- Naive UI

## 本地开发

```bash
npm install
npm run dev
```

开发服务器只绑定在本地端口 `5173`，这是开发工具默认端口，不包含任何宿主映射。容器生产环境仅监听 `80`。

## 生产构建

```bash
npm install
npm run build
npm run preview
```

构建结果位于 `dist/`。

## Docker

```bash
docker build -t sologsb-1016 .
docker run --rm -p 10016:80 sologsb-1016
```

容器使用 nginx 监听 `80`，并通过 `try_files` 支持前端路由刷新。宿主端口映射由部署编排负责，源码和 Dockerfile 均未写死宿主端口。

## 数据与离线说明

数据保存在当前浏览器的 `localStorage` 中，不会上传到服务器。Service Worker 缓存生产页面与已访问的静态资源；录音、音效素材本身不在本项目中，制作稿只保存素材引用路径。
