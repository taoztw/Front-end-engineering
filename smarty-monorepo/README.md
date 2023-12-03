```bash
├── packages
| ├── pkg1
| | ├── package.json
| ├── pkg2
| | ├── package.json
├── package.json
```
monorepo 最主要的好处是统⼀的⼯作流和 Code Sharing。⽐如我想看⼀个 pacakge的代码、了解某段逻辑，不需要找它的 repo，直接就在当前 repo；当某个需求要修改多个 pacakge 时，不需要分别到各⾃的 repo 进⾏修改、测试、发版或者 npm link，直接在当前 repo 修改，统⼀测试、统⼀发版。只要搭建⼀套脚⼿架，就能管理（构建、测试、发布）多个 package。

## pnpm实现Monorepo
```bash
mkdir smarty
cd smarty
pnpm init -y

mkdir scripts
# 在目录下放置一个preinstall.js 并且在package.json 中进行配置
```

建立工作空间
pnpm-workspace.yml
```ts
packages:
# all packages in subdirs of packages/ and components/
- 'packages/**'
```

在packages目录下分别创建, admin 和 utils目录
smarty-admin
@smarty-admin/utils

```bash
# 子package安装, 给utils下安装vue
pnpm i vue -r --filter @smarty-admin/utils 

# 内部依赖package安装， 给admin下安装utils
pnpm i @smarty-admin/utils -r --filter smarty-admin
```

> node preinstall 有些问题，之后解决
```js
// preinstall.js
if (!/pnpm/.test(process.env.npm_execpath || '')) {
    console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager `
    ` for scripts to work properly.\u001b[39m\n`
    )
    process.exit(1)
}
```
