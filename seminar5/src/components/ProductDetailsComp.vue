<template>
  <div class='product'>
    <h2 class='product__name'>{{product.name}}</h2>
    <p class='product__price'>Price: {{formattedPrice}}</p>
    <button @click="changeAvailability()" class='product__button'>Сhange availability status</button>
    <p v-if="product.available" class='product__status product__status-available'>Available</p>
    <p v-else class='product__status product__status-not-available'>Out of stock</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailsComp',
  data () {
    return {
      product: {
        name: 'Laptop',
        price: 500,
        available: true
      }
    }
  },
  methods: {
    changeAvailability () {
      this.product.available = !this.product.available
    }
  },
  computed: {
    formattedPrice () {
      return `$${this.product.price}`
    }
  }
}
</script>

<style lang="sass" scoped>
.product
    display: flex
    flex-direction: column
    justify-content: space-between
    gap: 24px
    padding: 24px 16px
    width: 30%
    margin-top: 64px
    border: 1px solid rgba(46, 124, 209, 1)
    border-radius: 24px
    transition: all .3s
    &:hover
      box-shadow: 8px 8px 8px rgba(46, 46, 46, .1)
    &__name
      color: rgba(46, 124, 209, 1)
      font-size: 32px
    &__price
      color: rgba(46, 124, 209, .8)
      font-size: 20px
    &__button
      align-self: center
      background-color: #fff
      border: 1px solid rgba(46, 124, 209, 1)
      border-radius: 16px
      cursor: pointer
      width: 90%
      font-size: 16px
      color: rgba(46, 124, 209, 1)
      padding: 12px 8px
      transition: all .2s
      &:hover
        background-color: rgba(46, 124, 209, 1)
        color: #fff
    &__status
      text-align: center
      font-size: 22px
      &-available
        color: rgba(45, 153, 100, .7)
      &-not-available
        color: rgba(201, 64, 121, .7)
</style>
