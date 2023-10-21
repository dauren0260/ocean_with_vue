<template>
  <div>
    <HeaderComponent />
    <main class="spotRefer_Main">
      <div class="spotReferTitle">
        <h2>潛點介紹</h2>
      </div>
      <div class="spotReferImg">
        <img :src="showImg" alt="">
        <ul>
          <li><img @click="changeImg($event)" src="../../assets/img/spot/spotGiLittle-01.png" alt=""></li>
          <li><img @click="changeImg($event)" src="../../assets/img/spot/spotSrkLittle-01.png" alt=""></li>
          <li><img @click="changeImg($event)" src="../../assets/img/spot/spotSrkLittle-02.png" alt=""></li>
        </ul>
        <div class="spotHere">
          <div class="spotHereBtn">我要踩點</div>
        </div>
      </div>
      <div class="detailArea">
        <div class="title">綠島 - 海底教堂</div>
        <p>
          綠島有一座極為神聖的海底教堂，位於馬蹄橋與大白沙之間，因特殊地形，使得整體看起來像極了教堂的屋頂，在陽光照射下，透進裂縫中的光線，被潛水客譽為是聖光。也有許多自由潛水者到此挑戰自身技巧，此潛點的最大深度15米，推薦給稍有經驗的水肺潛水客。
        </p>
        <div class="weatherInfo">
          <ul>
            <li @click="changeShowInfo(true, $event)" class="show">即時氣象</li>
            <li @click="changeShowInfo(false, $event)">未來一週</li>
          </ul>
          <div class="showNowWeather" v-if="isShowNowWeather">
            <div>
              <font-awesome-icon icon="fa-solid fa-cloud"></font-awesome-icon>
              {{ showTime }}
            </div>
            <ul>
              <li>氣溫: 26 °C </li>
              <li>風向: 西北風</li>
              <li>紫外線: 低量</li>
              <li>海溫: 20 °C</li>
              <li>浪況: 平穩</li>
              <li>累積雨量: 0.0 mm</li>
            </ul>

          </div>
          <div class="showFutureWeather" v-if="!isShowNowWeather">
            <ul>
              <li>一</li>
              <li>二</li>
              <li>三</li>
              <li>四</li>
              <li>五</li>
              <li>六</li>
              <li>七</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 class="creatureTitle">潛點生物</h2>
      <ul class="creatureArea">
          <li><img src="../../assets/img/spot/animals/animals-01.png" alt=""></li>
          <li><img src="../../assets/img/spot/animals/animals-02.png" alt=""></li>
          <li><img src="../../assets/img/spot/animals/animals-03.png" alt=""></li>
          <li><img src="../../assets/img/spot/animals/animals-04.png" alt=""></li>
      </ul>
      <h2 class="chatBoard">留言區</h2>
      <ul>
        <Message />
      </ul>
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent";
import Footer from "../../components/Footer.vue";
import BubbleBtn from "../BubbleBtn.vue";
import Message from "./Message.vue";

export default {
  name: 'SpotRefer',
  props: ['itemId'],
  components: {
    HeaderComponent,
    Footer,
    BubbleBtn,
    Message
  },
  data() {
    return {
      showImg: require('../../assets/img/spot/spotGiLittle-01.png'),
      isShowNowWeather: true,
    }
  },
  computed: {
    showTime() {
      let time = new Date();
      return (
        time.getFullYear() +
        "/" +
        (time.getMonth() + 1) +
        "/" +
        time.getDate()
      );
    },
  },
  methods: {
    changeShowInfo(bool, $event) {
      if (bool) {
        $event.currentTarget.nextSibling.className = ""
        $event.currentTarget.className = "show"
      } else {
        $event.currentTarget.previousSibling.className = ""
        $event.currentTarget.className = "show"
      }
      return this.isShowNowWeather = bool
    },
    changeImg($event){
      this.showImg = $event.currentTarget.src
    }
  },
  mounted() {
    document.body.className = "spotRefer";
  },
  beforeDestroy() {
    document.body.className = " ";
  },
}
</script>

<style lang="scss">
.spotRefer{
  header{
    .recommend_nav{
      a{
        font-weight: 700;
      }
      
      a::after{
        display: block;
      }
    }
  }
}
.spotReferTitle {
  text-align: center;
  padding: 30px 0px;
}

h2::before {
  left: auto;
}

.spotRefer_Main {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 50px;
}

.spotReferImg {
  display: inline-block;

  ul {
    margin-top: 10px;
  }

  &>img {
    max-width: 520px;
    height: 370px;
  }

  li {
    display: inline-block;
    padding: 0 5px;

    &:first-child {
      padding-left: 0;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }
}

.detailArea {
  display: inline-block;
  width: 40%;
  vertical-align: top;
  margin: 0 30px;

  .title,
  p {
    display: inline-block;
  }

  .title {
    font-size: 24px;
    position: relative;

    &:after {
      content: "";
      display: inline-block;
      background-color: $keyYellow;
      height: 7px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0%;
      z-index: -1;
    }
  }

  p {
    margin: 20px 0;
  }
}

.weatherInfo {
  display: inline-block;

  >ul li {
    display: inline-block;
    padding: 15px 20px;
    border: 1px solid white;

    &:hover {
      cursor: pointer;
    }

    &.show {
      background-color: $keyWhite;
      color: $keyBlack;
    }
  }
}

.showNowWeather {
  display: inline-block;
  border: 1px solid white;

  >div,
  svg {
    margin-top: 13px;
  }

  svg {
    padding: 0 20px;
  }

  ul {
    display: inline-block;
  }

  li {
    display: inline-block;
    margin: 13px 0px;
    width: 150px;
    padding-left: 20px;
  }
}

.showFutureWeather {
  ul {
    display: flex;
    justify-content: space-around;

    li {
      margin-top: 13px;
    }
  }
}

.spotHere {
  position: relative;
  height: 80px;
}

.spotHereBtn {
  border-radius: 50%;
  border: 1px solid $keyWhite;
  color: $keyWhite;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 14px;
  position: absolute;
  right: 0;

  &:hover {
    background-color: $keyYellow;
    cursor: pointer;
  }
}

.creatureTitle, .chatBoard{
  font-size: 24px;
  margin-top: 20px;

  &::before{
    top: 0;
    left: -2px;
  }
}

.creatureArea{
  margin-top: 30px;
  display: flex;
  justify-content: center;
  
  li{
    margin: 0 20px;
    animation: swingAnimal 10s linear none infinite;
    
    &:nth-child(2){
      animation-delay: 2.5s;
    }
    &:nth-child(3){
      animation-delay: 3.5s;
    }
    &:nth-child(4){
      animation-delay: 4.5s;
    }
  }
  img{
    width: 150px;
  }

}

@keyframes swingAnimal{
    0% {
      transform:translateY(0px) 
    }

    20% {
      transform:translateY(-7px) 
    }

    50% {
      transform:translateY(-15px) 
    }

    80% {
      transform:translateY(-10px) 
    }

    100% {
      transform:translateY(0px) 
    }
}
</style>