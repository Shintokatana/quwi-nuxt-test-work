<template>
  <div class="main-layout">
    <TheNavBar />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheNavBar from '~/components/BasicComponents/TheNavBar'

export default {
  components: {
    TheNavBar
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html,
body,
#__nuxt,
#__layout,
.main-layout,
.container {
  height: 100%;
}

.container {
  max-width: 800px;
  margin: 80px auto 30px;
  padding: 0 15px;
}

body {
  background-color: rgba(204, 204, 204, 0.5);
}

a {
  color: #000000;
  transition: .4s ease all;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  opacity: .7;
}

.btn {
  height: 34px;
  padding: 0 15px;
  text-transform: uppercase;
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-shadow: 1px 1px 1px rgba(0,0,0,.5);
  background: #395378;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: .4s ease all;

  &:hover {
     opacity: .7;
     text-decoration: none;
   }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
