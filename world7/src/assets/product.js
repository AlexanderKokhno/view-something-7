var app = new Vue({
  el: "#app",
  data: {
    productD: "socks",
    image: "./media/sexy-socks.jpg",
    inventory: 7,
    inStock: false,
    details: ["80% cotton", "20% polyester", "Stay on during ***"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./media/sexy-socks-Hdrip.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./media/sexy-socks-Adrip.jpg"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});
