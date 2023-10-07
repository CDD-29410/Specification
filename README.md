1.cra 初始项目  
2.自定义(覆盖)webpack 配置 craco

```
安装
npm i -D @craco/craco

配置文件
demo
 my-app
  ├── node_modules
+ ├── craco.config.js
  └── package.json

package.json
  "scripts": {
  "start": "craco start"
  "build": "craco build"
  "test": "craco test"
}
```

3.tailwindcss
https://www.tailwindcss.cn/docs/guides/create-react-app

4.jsconfig.json 配置路径别名的映射

5.UI 库的配置
--yarn add antd

6.请求库的配置
--yarn add axios

npx abc => 运行./node_modules/.bin/abc.js

# npx

快速执行 npm 包中的可执行文件的工具
npx 是一个由 Node.js 官方提供的用于快速执行 npm 包中的可执行文件的工具
它可以帮助我们在不全局安装某些包的情况下，直接运行该包提供的命令行工具。 npx 会在执行时，检查本地项目中是否安装了对应的依赖，如果没有安装则会自动下载安装，并执行命令。
