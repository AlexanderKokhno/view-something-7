<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/cursed-vue-100 x 100.png">
    <p>-------Shit Show VII--------</p>
    <HelloWorld intro="**Input Rant Here"/>
    <Product intro2= "---------Product.vue starts here-----------" />
    <h3>jyruciyciy</h3>
    <!-- <script type="application/javascript"  src="./assets/product.js"></script> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Product from './components/Product.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Product
  }
  // mounted () {
  //   const externalScript = document.createElement('script')
  //   externalScript.setAttribute('src', './assets/product.js')
  //   document.head.appendChild(externalScript)
  // }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
