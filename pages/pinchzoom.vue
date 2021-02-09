<template>
  <div id="app">
    <h1>pinch-zoom testing....</h1>
    <div class="hello">
      <pinch-zoom>
        <img src="https://images.unsplash.com/photo-1544606402-e522c304b027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1564&q=80">
      </pinch-zoom>
    </div>
  </div>
</template>

<script>
import PinchZoom from "vue-pinch-zoom"; 

export default {
  name: "App",
  components: {
    PinchZoom,
  },
  data() {
    return {
      text: "",
      id: null,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    onDecode(a, b, c) {
      console.log(a, b, c);
      this.text = a;
      if (this.id) clearTimeout(this.id);
      this.id = setTimeout(() => {
        if (this.text === a) {
          this.text = "";
        }
      }, 5000);
      let resData = {
        resCode: '0000'
      }

      if (resData.resCode == '0000') {
        this.$router.push({ path: '/' })
      }
    },
    onLoaded() {
      console.log("load");
    },
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>