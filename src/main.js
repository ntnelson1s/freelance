// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import VueYouTubeEmbed from 'vue-youtube-embed';
import App from './App';

Vue.use(VueYouTubeEmbed);
Vue.use(VueCarousel);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
