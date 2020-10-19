<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-demo
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <el-button>默认按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // middleware: 'auth'
  middleware () {
    console.log('middleware in page')
  },

  // 可用于校验参数有效性
  validate ({ params, query }) {
    console.log('validata')
    return true
  },

  // 异步读取数据，返回给组件 data
  asyncData (context) {
    return {
      b: 1
    }
  },

  // 异步读取数据，返回给 vuex
  fetch () {
    console.log('fetch')
  },

  data () {
    return {
      a: 1
    }
  },

  beforCreate () {
    console.log('beforCreate')
  },

  created () {
    console.log('created')
  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
