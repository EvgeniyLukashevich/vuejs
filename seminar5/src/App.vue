<template>
  <main class="center">
    <h1 class="title">SEMINAR 5. HOMEWORK</h1>
    <ProductDetailsComp/>
  </main>
</template>

<script>
import ProductDetailsComp from './components/ProductDetailsComp.vue'

export default {
  name: 'App',
  components: {
    ProductDetailsComp
  }
}
</script>

<style lang="sass">
*
  font-family: Arial, Helvetica, sans-serif
  box-sizing: border-box
  text-decoration: none
  padding: 0
  margin: 0
.center
  padding-left: calc(50% - 486px)
  padding-right: calc(50% - 486px)
.title
  margin-top: 32px
  color: rgba(46, 124, 209, 1)
</style>
