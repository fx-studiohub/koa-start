const Koa = require('koa')
const path = require('path')
const cors = require('@koa/cors')
const { koaBody } = require('koa-body')
const json = require('koa-json')
const helmet = require('koa-helmet')
const statis = require('koa-static')
const router = require('./routes/routes')

// 初始化程序
const app = new Koa()

app.use(koaBody()) //解析 http 中 body 的部分的中间件
app.use(cors()) //解决跨域问题
app.use(json()) //格式化json
app.use(helmet()) //安全的一个请求头部
app.use(statis(path.join(__dirname, '../public'))) //静态文件处理
app.use(router()) //路由
app.listen(3000)
