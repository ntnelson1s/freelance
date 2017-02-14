<template>
  <div id="app">
    <Clapper></Clapper>
    <div class="tape">
      <h1>David Bittick</h1>
    </div>
    <TopRow></TopRow>
    <Board></Board>
    <Footnote></Footnote>
  </div>
</template>

<script>
import Clapper from './components/Clapper';
import Board from './components/Board';
import TopRow from './components/TopRow';
import Footnote from './components/Footnote';

export default {
  name: 'app',
  components: {
    Clapper,
    TopRow,
    Board,
    Footnote,
  },
};
</script>

<style>
.tape {
  background-image: url("./assets/tape.png");
  background-size: 600px 300px;
  position: fixed;
  top: 400px;
  left: 20px;
  height: 300px;
  width: 600px;
  z-index: -1;
}

h1 {
  position: fixed;
  top: 540px;
  left: 80px;
  font-size: 60px;
  -ms-transform: rotate(-6deg); /* IE 9 */
  -webkit-transform: rotate(-6deg); /* Chrome, Safari, Opera */
  transform: rotate(-6deg);
}

h3 {
  text-decoration: underline;
}

@font-face {
  font-family: Chalk;
  src: url("./assets/chalk.ttf") format("truetype");
}

@font-face {
  font-family: Eraser;
  src: url("./assets/EraserRegular.ttf") format("truetype");
}

@font-face {
  font-family: Backup;
  src: url("./assets/EraserDust.ttf") format("truetype");
}

#app {
  font-family: 'Eraser', 'Backup', 'Chalk', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 138px;
  font-size: 1em;
  box-shadow: 0px 0px 20px black;
  min-width: 100%;
  box-sizing: border-box;
}

.anchor {
  display: block;
  position: relative;
  top: -200px;
  visibility: hidden;
}
</style>
