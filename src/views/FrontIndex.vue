<template>
  <div>
    <HeaderComponent />
    <div id="waterWaveBubble" class="waterWaveBubble">
      <div class="innerWrap water-animate">
        <h3 class="downH3">
          I don't need therapy, I just need to go scuba diving
        </h3>
        <div class="logo shake-hard_12"></div>
        <div class="water_waves shake-hard_15 shake-vertical_12">
          <div class="bubble">
            <div class="bubble4 rand_big_small"></div>
            <div class="bubble2 rand_big_small"></div>
            <div class="bubble3 rand_big_small_3"></div>
            <div class="b1-bubble logoBubble"></div>
            <div class="b2-bubble logoBubble"></div>
            <div class="b3-bubble logoBubble"></div>
            <div class="b4-bubble logoBubble"></div>
            <div class="b5-bubble logoBubble"></div>
          </div>
        </div>
      </div>
    </div>
    <h2>潛點推薦</h2>
    <div id="container" class="container">
      <p class="spotTitle">
        綠島 鋼鐵礁
        <input type="hidden" value="1001411" />
      </p>
      <div id="scene" class="scene">
        <div data-depth="1.00" ref="fishBallon">
          <img src="../assets/img/index/fish_Ballon.png" />
        </div>
        <div data-depth-x="0.80" data-depth-y="-0.80" ref="fishTurtle">
          <img src="../assets/img/index/Fish_turtle.png" />
        </div>
        <div data-depth-x="-0.60" data-depth-y="-0.20" ref="fishGold">
          <img src="../assets/img/index/Fish_gold.png" />
        </div>
        <div data-depth="0.20" data-depth-y="-0.30" ref="fishNemo">
          <img src="../assets/img/index/Fish_Nemo.png" />
        </div>
      </div>
    </div>
    <div class="weatherNow">
      <font-awesome-icon icon="fa-solid fa-cloud"></font-awesome-icon>多雲
      <font-awesome-icon icon="fa-solid fa-water"></font-awesome-icon>漲潮
      <font-awesome-icon icon="fa-solid fa-wind"></font-awesome-icon>風大
      <font-awesome-icon icon="fa-solid fa-temperature-high"></font-awesome-icon
      >超熱
      <p>
        資料來源：中央氣象局 <span>{{ showTime }}</span>
      </p>
    </div>
    <div class="spotBtn">
      <BubbleBtn
        hrefText="潛點日誌"
        otherClass="spot_logBtn"
        pathText="/diaryInside"
      ></BubbleBtn>
      <BubbleBtn
        hrefText="潛點介紹"
        otherClass="spot_detailBtn"
        pathText="/spotRefer/22665"
      ></BubbleBtn>
    </div>
    <h2>潛水課程</h2>
    <div class="containerCourse">
      <Submarine />
      <div class="courseList">
        <CourseList />
        <CourseList />
        <CourseList />
      </div>
    </div>
    <h2>潛水商城</h2>
    <Shop />
    <div class="lightbox-block2" ref="showLightBox">
      <ShopItem />
    </div>
    <BubbleBtn
      hrefText="查看更多"
      otherClass="shopBtn"
      pathText="/shop"
    ></BubbleBtn>
    <h2>潛水日誌</h2>
    <Diary />
    <h2>潛水遊戲</h2>
    <div class="bottomSunhoo">
      <div class="gameCenter">
        <h3 class="gameH3">快來玩遊戲，賺紅利，體驗潛水的樂趣！</h3>
        <div class="diveGif">
          <img src="../assets/img/index/game.gif" alt="gameView" />
        </div>
        <BubbleBtn hrefText="進入遊戲" otherClass="gameBtn" pathText="/gameIntro"></BubbleBtn>
      </div>
      <div class="rank">
        <div class="nameList">
          <p class="top">野比大雄</p>
          <p class="second">多啦美</p>
          <p class="third">谷川小夫</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Parallax from 'parallax-js'

import HeaderComponent from "./HeaderComponent";
import BubbleBtn from "./BubbleBtn";
import Submarine from "./front_Index/Submarine";
import CourseList from "./front_Index/CourseList";
import Shop from "./front_Index/Shop";
import ShopItem from "./front_Index/ShopItem";
import Diary from "./front_Index/Diary.vue";
import Footer from "../components/Footer.vue"

export default {
  name: "FrontIndex",
  components: {
    HeaderComponent,
    BubbleBtn,
    Submarine,
    CourseList,
    Shop,
    ShopItem,
    Diary,
    Footer
  },
  data() {
    return {
      timeNow: new Date(),
      "-openbox": false,
    };
  },
  computed: {
    showTime() {
      let time = this.timeNow;
      return (
        time.getFullYear() +
        "/" +
        (time.getMonth() + 1) +
        "/" +
        time.getDate() +
        " " +
        time.getHours() +
        ":" +
        time.getMinutes() +
        ":" +
        time.getSeconds()
      );
    },
  },
  methods: {
    changeLightBoxClass(bool) {
      if (bool) {
        this.$refs.showLightBox.className += " -openbox";
      } else {
        this.$refs.showLightBox.className = "lightbox-block2";
      }
    },
  },
  mounted() {
    this.$bus.$on("lightBox", this.changeLightBoxClass);

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    this.$refs.fishBallon.style = "position:absolute; left: 30px;top: 130px;" ;
    this.$refs.fishTurtle.style = "position:absolute; left: 320px;top: 120px;" ;
    this.$refs.fishGold.style = "position:absolute; left: 150px;top: 190px;" ;
    this.$refs.fishNemo.style = "position:absolute; left: 300px;top: 200px;" ;
    document.body.className = "frontPageBackGround"
  },
  beforeDestroy(){
    document.body.className = " "
  }
};
</script>

<style lang="scss" src="../assets/scss/index.scss" scoped></style>
<style lang="scss">
body {
  background-image: url(../assets/img/diveinbg.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: auto;
  color: $keyWhite;
}

.frontPageBackGround{
  background-image: url(../assets/img/index/azurlane.jpg);
  background-position: center top;
  background-attachment: unset;
}

</style>

