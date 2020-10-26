export default ({ app, redirect, params, query, store }) => {
  // 插件全局前置守卫
  app.router.beforeEach((to, from, next) => {
    to.name === 'index'
      ? next()
      : redirect({ name: 'index' })
  })

  // 插件全局后置守卫
  app.afterEach((to, from) => {
    console.log(to)
  })
}
