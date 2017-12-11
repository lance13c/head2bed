<template>
  <section id="app-body">
    <div class="columns">
      <div class="column hb-home-events">
      </div>
      <div class="column">
        Second column
      </div>
      <div class="column">
        Third column
      </div>
      <div class="column">
        Fourth column
      </div>
    </div>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </section>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

  @media screen and (max-width: 1200px) {
    .hb-home-events {
      width: 100%;
      height: 200px;
      background-image: url('../assets/event.png');
      background-position-y: -200px;
      background-repeat: no-repeat;
    }
  }
    
</style>