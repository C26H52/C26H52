[English](./README.en.md) | 中文

# Personal space of C26H52


📝 **A notebook owned by C26H52 containing development,security and Deep Learning(Maybe some essays?)** 

Thank Charles7c a lot,this blog is generated from https://github.com/Charles7c/charles7c.github.io

## How to build your own blog（take Vercel as an example）

```bash
# 1.clone this repository
git clone https://github.com/C26H52/C26H52.git
# 2.install PNPM
npm install pnpm -g
# 3.set mirror site
pnpm config set registry https://registry.npmmirror.com/
# 4.install requirements
pnpm install
# 5.run dev,visit：http://localhost:5173 to view your blog locally
pnpm dev
```
## Vercel settings
1. Choose Add New->Project on the dashboard in Vercel,and then import the repository of your own blog in the Import Git Repository.
2. **Find Output Directory，and edit the content with docs/.vitepress/dist**
![image.png](https://s2.loli.net/2024/08/19/emfAuh4cgOq6CdV.png)
3. Click deploy，and then waiting for Vercel deploy your blog on its service.