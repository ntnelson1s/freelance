<template>
  <div class="board">
    <a id="filmography" class="anchor"></a>
    <h3>Scene</h3>
    <youtube :video-id="videoId" :player-vars="{autoplay: 1}"></youtube>
    
    <hr>

    <h3>Roles</h3>
    <div class="roles">
        <h4>Film-</h4>
        <div class="list">
          <ul>
            <li>
              <a href="http://www.imdb.com/title/tt2724064/?ref_=nm_flmg_act_5">Sharknado - Supporting</a>
            </li>
            <li>
              <a href="http://www.imdb.com/title/tt1024648/?ref_=nm_flmg_act_8">Argo - Featured</a>
            </li>
            <li>
              <a href="http://www.imdb.com/title/tt2439946/?ref_=nm_flmg_act_7">40 Days and Nights</a>
            </li>
          </ul>
        </div>
        <h4>Television- </h4>
        <div class="list">
          <ul>
            <li>
              <a href="http://www.imdb.com/title/tt0056758/?ref_=nm_flmg_act_2">General Hospital - Recurring</a>
            </li>
            <li>
              <a href="http://www.imdb.com/title/tt0364845/?ref_=nm_flmg_act_1">NCIS - Co-Star</a>
            </li>
            <li>
              <a href="http://www.imdb.com/title/tt2380850/?ref_=nm_flmg_act_9">Dr0ne - Supporting</a>
            </li>
          </ul>
        </div>
    </div>
    <hr>
  
    <div class="skills">
      <ul>
        <li><h3>Skillset</h3></li>
        <li>Advanced Rescue Scuba Certified</li>
        <li>Brazilian Jiu-Jitsu</li>
        <li>Baseball</li>
        <li>Football</li>
        <li>Stunts</li>
      </ul>
    </div>

    <hr>

    <div>
      <h3>Contact</h3>
      <a id="contact"class="anchor"></a>
      <div>
        <a href="mailto:bittick@me.com?subject=Booking">
          <img src="../assets/email.png" alt="email">
        </a>
        <a href="https://www.instagram.com/dbitti/?hl=en" target="_blank">
          <img src="../assets/instagram.png" alt="instagram">
        </a>
        <a href="https://twitter.com/bittick?lang=en" target="_blank">
          <img src="../assets/twitter.png" alt="twitter">
        </a>
        <a href="http://www.imdb.com/name/nm4703907/" target="_blank">
          <img class="imdb" src="../assets/imdb.png" alt="imdb">
        </a>
        <a href="https://www.facebook.com/David-Bittick-222431674517276/" target="_blank">
          <img src="../assets/facebook.png" alt="facebook">
        </a>
      </div>
    </div>

    <hr>
  </div>
</template>

<script>
export default {
  name: 'board',
  data() {
    return {
      videoId: "rZqsWPG95sE",

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.board {
  transition: 0.7s;
}

.roles {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.skills {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -40px;
  padding-bottom: 40px;
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
}

hr.vertical {
  width: 2px;
  height: 20em;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 0px;
}

a {
  /*text-decoration: none;*/
  color: black;
}

li {
  list-style: none;
}

hr {
  margin-top: 50px;
  margin-bottom: 50px;
  height: 2px;
  width: 90%;
  background-color: black;
}
</style>
<style scoped>
img {
  height: 60px;
  padding: 30px;
}

.imdb {
  height: 110px;
  margin-bottom: -25px;
  margin-right: -35px;
  margin-left: -15px;
}
</style>
