<template>
  <section id="app-body">
    <div class="columns">
      <div class="column level">

        <div class="hb-home-events"></div>

        <h1 class="title">
          <router-link to="/foo">Go to Foo</router-link>
        </h1>
        
      </div>
      <div class="column hb-home-learn">
        Second column
      </div>
      <div class="column hb-home-volenteer">
        Third column
      </div>
    </div>
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

<style lang="scss">

  #app-body {
    padding-top: 12px;
  }

  .columns {
     height: 90vh;
     min-height: 90vh;

      .level {
        margin-bottom: 0;
        overflow: hidden;
      }

      .column {
        position: relative;
        width: 100%;
        padding: 0;
        background-position-y: -150px;
        background-repeat: no-repeat;
        

        .level-item {
          height: 100%;
        }

        a {
          display: inline;
          width: 100%;
          position: absolute;
          text-align: center;
          top: 50%;
          color: green;
        }

        &:hover {
          a {
            color: purple;
          }
        }
        

      .hb-home-events {
        height: 100%;
        background-image: url('../assets/event.png');

        &:hover {
          filter: sepia(1);
        }
      }

      .hb-home-learn {
          background-image: url('../assets/learn.png');
      }

      .hb-home-volenteer {
          background-image: url('../assets/volunteer.png');
      }
     
     }


    @media screen and (max-width: 1200px) {
      .column {
        width: 100%;
        height: 200px;
        background-position-y: -200px;
      }
    }
  }
    
</style>