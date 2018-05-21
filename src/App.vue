<template>
  <main class="bg-theme-page-background text-theme-text-content min-h-screen font-sans">
    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>
  </main>
</template>

<script type="text/ecmascript-6">
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
export default {
  name: 'App',
  components: { AppHeader, AppFooter },

  created () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style src="@/assets/css/main.css"></style>
