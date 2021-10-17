<template>
  <div class="hello2">
    <h1>{{ intro2 }}</h1>
    <div class="product" id="product">
      <h1>{{ productD }}</h1>
    </div>
  </div>
</template>

<script>
// Vue.loadScript("./assets/product.js")
export default {
  name: 'Product',
  props: {
    intro2: String
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
