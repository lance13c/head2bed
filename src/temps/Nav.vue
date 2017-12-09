<template>
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="../assets/head2bed.png" alt="Head 2 Bed Icon" width="112" height="28">
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">
        Home
      </router-link>
      <router-link to="/events" class="navbar-item">
        Events
      </router-link>
      <router-link  to="/learn" class="navbar-item" href="https://bulma.io/">
        Learn
      </router-link>
      <router-link to="/volenteer" class="navbar-item" href="https://bulma.io/">
        Volenteer
      </router-link>
      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped hb-social-media-btns">
          <p class="control">
            <a class="bd-tw-button button" href="https://twitter.com/">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button" href="https://twitter.com/">
              <span class="icon">
                <i class="fa fa-facebook"></i>
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button" href="https://twitter.com/">
              <span class="icon">
                <i class="fa fa-instagram"></i>
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button" href="https://twitter.com/">
              <span class="icon">
                <i class="fa fa-youtube"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

$color-accent: #E6E6FA;

.hb-social-media-btns {
  p {
    a {
      background-color: white;

      &:hover {
        background-color: $color-accent;
      }
    }
  }
}



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
