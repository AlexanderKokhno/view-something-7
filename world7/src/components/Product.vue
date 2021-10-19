<template>
  <div class="product">
    <h2>fcjh</h2>
    <h1>{{ intro2 }}</h1>
    <div class="product-image" id="product-image">
      <img v-bind:src=image>
    </div>
    <div class="product-info" id="product-info">
      <h1>{{ productD }}</h1>
      <p v-if="inventory > 10">In Stock</p>
      <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold out</p>
      <p v-else>Out of Stock</p>
      <p v-show="inStock">erdsfdsfds</p>
      <ul>
        <li v-bind:v-for="detail in details">{{detail}}</li>
      </ul>
      <div :v-for="variant in variants" :key="variant.variantId" class="color-box" :style="{backgroundColor:variant.variantColor}" @mouseover="updateProduct(variant.variantImage)">
      </div>
      <button v-on:click="addToCart">Add to Cart</button>
      <div class="Cart">
        <p>Cart({{cart}})</p>
      </div>
    </div>
  </div>
</template>

<script>
// Vue.loadScript("./assets/product.js")
export default {
  name: 'Product',
  props: {
    intro2: String
  },
  data () {
    return {
      productD: 'trhjhgjtyh',
      image: require('../assets/sexy-socks.jpg'),
      inventory: 0,
      inStock: false,
      details: ['80% cotton', '20% polyester', 'Stay on during ***'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: require('../assets/sexy-socks-Hdrip.jpg')
        },
        {
          variantId: 2235,
          variantColor: 'green',
          variantImage: require('../assets/sexy-socks-Adrip.jpg')
        }
      ],
      cart: 0
    }
  },
  addToCart: function () {
    this.cart += 1
  },
  updateProduct (variantImage) {
    this.image = variantImage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
