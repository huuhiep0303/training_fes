<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Test from './components/Test.vue'

const msg = 'Hello Vue 3 + Vite'
const helo = "<h2>hehe</h2>"
const hehe = ['test', 'test2', 'test3']
const a = 3
const c = false

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>   
  </header>

  <main>
    <TheWelcome />
  </main> -->

  <test />
  <h2>{{ msg }}</h2>
  <div v-html="helo"></div>
  <h1>{{a+5}}</h1>

  

  <div v-for="(item, index) in hehe" :key="index">
    <div v-if="c" :id="item"> {{ item }}</div>
    <p v-else> 1111 </p>
    <!-- <p :id="index">{{ item }}</p> -->
  </div>

  
    

  
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
