<template>
  <div class="footer">
    <p>&#x24B8; <a href="mailto:ntylernelson@gmail.com?subject=Development">Nicholas Tyler Nelson - Software Developer</a></p>
    <p>Handcrafted in Vue.js <img src="../assets/logo.png" alt="vue"></p>
  </div>
</template>


<script>

  export default {
    name: 'footer',
    data () {
        return {

        }
    },
  }
</script>

<style scoped>
img {
  height: 1em;
}

.footer {
  margin-top: -31px;
  padding-top: 30px;
  background: -webkit-gradient(radial, center center, 0, center center, 460, from(#ffffff), to(#2F2727));
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 5px;
}
</style>
