<template>
  <div id="app">
    <GoogleMapComponent/>
  </div>
</template>

<script>
import GoogleMapComponent from './components/GoogleMapComponent.vue'

export default {
  name: 'App',
  components: {
    GoogleMapComponent
  }
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
.vue-map-container {
  z-index: -1 !important;
  width: 100% !important; 
  height: 100% !important;
}
</style>
