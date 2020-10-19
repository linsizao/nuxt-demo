# nuxt-demo

打包：
  npm run dev
  npm run start

 ## 生命周期：

  +---------------------------------------------+
  |   server：                                  |
  |    nuxtServerInit                           |
  |    middleware                               |
  |    validate                                 |
  |    asyncData & fetch                        |
  +--------------------+------------------------+
                      |
                      v
  +--------------------+------------------------+
  |    server & client：                        |
  |                                             |
  |     beforeCreate & created                  |
  +--------------------+------------------------+
                      |
                      v
  +--------------------+------------------------+
  |   client：                                  |
  |     vue others                              |
  +---------------------------------------------+


  nuxtServerInit
    适应场景是对 store 操作
  middleware
    中间件执行顺序：
    nuxt.config.js -> layout -> page
  validate
    参数校验，校验失败，则显示错误页面
  asyncData
    异步读取数据，返回给组件 data
  fetch
    异步读取数据，返回给 vuex

  ***server 的生命周期一般操作 context，生命周期不能访问到 windows，this 为 undefined***

  beforeCreate & created

  vue others

  不存在 keep-aline 的生命周期



## 路由
  约定式路路由
    展示区：<nuxt />
    申明式跳转：
      1) <nuxt-link :to="{name: 'product-id,params:{id:1},query:{a:1,b:2}}"></nuxt-link>
        name: 路由名 （目录名-其他目录名-文件名）
        params：key 要对等文件名
      2) <nuxt-link to="product/1?a=1&b=2" ></nuxt-link>

      子路由：
        目录代表子路由，子路由内部同级的文件，代表是同一级路由

      展示区控制
        +                    +                      +
        |  PATH              |  FILE                |
      +--------------------------------------------------
        |  `/`               |  `index.vue`         |
        |  `/goods`          |  `goods/index.vue`   |
        |  `goods/123`       |  `goods/_id.vue`     |
        |  `goods/comment`   |  `goods/comment.vue` |
        |                    |                      |
        ++                   +                      +

      paegs/一级展示/二级展示
                    / index.vue 会在一级展示
                    / index.vue 空文档代表有默认页，不会找其他详情页


    配置

