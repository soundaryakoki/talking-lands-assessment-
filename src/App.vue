<template>
  <div id="app">
    <GoogleMap />
    <UserLocation />
  </div>
</template>

<script>
import UserLocation from './components/UserLocation.vue'
import GoogleMap from './components/GoogleMap.vue'

export default {
  name: 'App',
  components: {
    UserLocation,
    GoogleMap
  }
}
</script>