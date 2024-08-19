[English](./README.en.md) | 中文

# C26H52的个人空间


📝 **C26H52的开发、安全、DL笔记本（也许会有一些随笔？）** 

特别鸣谢：Charles7c，本博客改编自https://github.com/Charles7c/charles7c.github.io

## 如何部署一个自己的博客（以vercel为例）

```bash
# 1.克隆本仓库
git clone https://github.com/C26H52/C26H52.git
# 2.安装 PNPM
npm install pnpm -g
# 3.设置淘宝镜像源
pnpm config set registry https://registry.npmmirror.com/
# 4.安装依赖
pnpm install
# 5.dev 运行，访问：http://localhost:5173
pnpm dev
```
## vercel配置
1. 在vercel的dashboard中选择Add New->Project，在Import Git Repository中导入自己博客的仓库
2. **找到Output Directory，改为docs/.vitepress/dist**
![image.png](https://s2.loli.net/2024/08/19/emfAuh4cgOq6CdV.png)
3. 点击deploy，等待vercel将博客部署到vercel服务上
