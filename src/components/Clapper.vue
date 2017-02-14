<template>
  <div class="clapper">
    <nav>
      <div class="name">
        <a class="me"></a>
      </div>
      <a href="#about" @click="clap">About</a>
      <a href="#filmography" @click="clap">Filmography</a>
      <a href="#contact" @click="clap">Contact</a>
    </nav>
    <div class="clapper-top">
    </div>
    <div class="clapper-bot">
    </div>
  </div>
</template>

<script>
export default {
  name: 'clapper',
  data() {
    return {
      animationEnd: this.whichAnimationEvent(),
    };
  },
  methods: {
    clap(e) {
      const top = document.querySelector('.clapper-top');
      top.classList.add('bounce');
      top.addEventListener(this.animationEnd,() => top.classList.remove('bounce'));
    },
    whichAnimationEvent() {
      let t;
      const el = document.createElement('fakeelement');
      const animations = {
        'animation': 'animationend',
        'OAnimation': 'oanimationend',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd',
      };

      for (t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  font-size: 1.17em;
}
.name {
  display: flex;
  align-items: center;
  flex: 2;
  -ms-transform: rotate(2deg); /* IE 9 */
  -webkit-transform: rotate(2deg); /* Chrome, Safari, Opera */
  transform: rotate(2deg);
}

a.me {
  font-size: 1em;
  width: 138px;
  margin: -30px;
  padding: 40px;
}

.clapper {
  z-index: 2;
  position: fixed;
  top: 0px;
  min-width: 99.5%;
  background: black;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px black;
}

nav {
  height: 40px;
  display: flex;
  align-items: center;
}

nav > a {
  display: inline-block;
  text-decoration: none;
  color: white;
  display: flex;
  flex: 1;
  flex-wrap: space-around;
  margin-left: 3em;
  margin-right: 1em;
}

@-webkit-keyframes bounce { 
  50% {-webkit-transform: translate(0px) rotate(-4deg);} 
  100% {-webkit-transform: translate(0px) rotate(0deg);} 
} 

@keyframes bounce { 
  50% {transform: translate(0px) rotate(-4deg);} 
  100% {transform: translate(0px) rotate(0deg);} 
}

.bounce { 
  -webkit-animation: bounce 0.7s linear; 
  animation: bounce 0.7s linear; 
}

.clapper-top {
  -webkit-transform: rotate(0deg);  /* Saf3.1+, Chrome */
  -ms-transform: rotate(0deg);   /* IE9 ? */
  -moz-transform: rotate(0deg);  /* FF3.5+ */
  -o-transform: rotate(0deg);  /* Opera 10.5 */
  -webkit-transform: rotate(0deg);  /* Saf3.1+, Chrome */
  transform: rotate(0deg);  /* CSS3 (for when it gets supported) */

  -webkit-animation-fill-mode: forwards; 
  animation-fill-mode: forwards;

  transform-origin: 0% 100%;
  -moz-transform-origin: 0% 100%;
  -webkit-transform-origin: 0% 100%;
  -o-transform-origin:0% 100%;
  -ms-transform-origin: 0% 100%;
  min-width: 99.5%;
  height: 50px;
  background-size: auto 250%;
  background-image: url("../assets/clapper.jpg");
  background-repeat: repeat;
  box-shadow: 0px 0px 6px white;
}

.clapper-bot {
  box-shadow: 0px 0px 5px black;
  min-width: 99.5%;
  height: 50px;
  background-size: auto 250%;
  background-image: url("../assets/clapper.jpg");
  background-repeat: repeat;
  transform: rotateX(180deg);
}
</style>
