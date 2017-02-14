<template>
  <div class="toprow">
    
    <div class="first-row">
      
      <div class="content scene">
        <a id="about" class="anchor"></a>
        <h3>Take</h3>
        <p class="bio">
          Write up a bio here. Something something yada yada.
        </p>
      </div>

      <hr class="left vertical">

      <div class="content take">
        <h3>Roll</h3>
        <flickity ref="flickity" :options="flickityOptions">
            <div class="carousel-cell">
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MTgxODkwMV5BMl5BanBnXkFtZTgwODk5MjcxMDE@._V1_.jpg" alt="pic1">
            </div>
            <div class="carousel-cell">
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BOTQzMDYzNzE1NV5BMl5BanBnXkFtZTcwMDk4NDY1OA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg" alt="pic2">
            </div>
            <div class="carousel-cell">
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MzM3NjU2OV5BMl5BanBnXkFtZTcwNDcxNTM4OQ@@._V1_.jpg" alt="pic3">
            </div>
            <div class="carousel-cell">
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BODE1OTE1MTkxMF5BMl5BanBnXkFtZTcwNDg4NDY1OA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg" alt="pic4">
            </div>
            <div class="carousel-cell">
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNzA3OTI0OV5BMl5BanBnXkFtZTcwOTUwNzk3Nw@@._V1_.jpg" alt="pic5">
            </div>
            <div class="carousel-cell">
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0NDI3MTcwNF5BMl5BanBnXkFtZTgwNTU4MjcxMDE@._V1_.jpg" alt="pic6">
            </div>
        </flickity>

        <button @click="previous()"><img src="../assets/ic_navigate_before_black_24dp_2x.png" alt="previous"></button>
        <button @click="next()"><img src="../assets/ic_navigate_next_black_24dp_2x.png" alt="next"></button>
      </div>

      <hr class="right vertical">

      <div class="content roll">
        <h3>Production</h3>
        <ul>
          <li>Larry Moss - Acting Coach</li>
          <li>Sheila Grey - Sensory Work</li>
          <li>Leslie Kahn - Comedy Intensive</li>
        </ul>
      </div>

    </div>
    <hr>
  </div>
</template>


<script>
  import Vue from 'vue';
  import Flickity from 'vue-flickity';
  Vue.component('flickity', Flickity);

  export default {
    name: 'toprow',
    data () {
        return {
          play: true,
          time: 5000,
          flickityOptions: {
              initialIndex: 3,
              prevNextButtons: false,
              // groupCells: false,
              // autoplay: true,
              // contain: true,
              // cellAlign: 'center',
              pageDots: false,
              wrapAround: true,
              accessibility: false,
          },
        }
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding-top: 1em;
  opacity: 1;
  background-color:rgba(0, 0, 0, 0);
  border: 0px;
  outline: none;
  padding-bottom: 2em;
  margin-bottom: -1em;
}

.first-row {
  display: flex;
}

.content {
  flex: 1;
}

.take {
  overflow: hidden;
}

flickity {
  /*overflow: hidden;*/
  /*background: black;*/
}

.carousel-cell {
  height: 350px;
  display: block;
}

button > img {
  background: white;
  box-shadow: 0px 0px 8px black;
  border-radius: 10px;
  z-index: 1;
}

button > img:active {
  -webkit-filter: drop-shadow(2px 2px 25px rgba(0,0,0,0.5));
}

.carousel-cell>img {
  height: 350px;
}

</style>
