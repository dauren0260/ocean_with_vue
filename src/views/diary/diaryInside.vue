<template>
  <div>
    <HeaderComponent />
    <div class="carousel" @mousemove="getMouseInfo($event)">
      <div class='cursor' ref="cursor"></div>
      <div class='cursor2' ref="cursor2"></div>
      <div class='cursor3' ref="cursor3"></div>
      <div class="section">
        <ul class="case-study-wrapper">
          <li class="case-study-name" v-for="(area, index) in areaList" :key="index">
            <a href="#" class="hover-target" @mouseenter="changeLiClass(index)" @mouseover="addHoverList"
              @mouseout="removeHoverList">{{ area.stationName }}</a>
          </li>
        </ul>
        <ul class="case-study-images">
          <li v-for="(item, i) in areaList" :key="i" @mouseenter="changeLiClass(i)">
            <div class="img-hero-background">
              <span v-for="(img, imgIndex) in item.stationImg" :key="imgIndex">
                <img :src="img" alt="info">
              </span>
            </div>
            <div class="hero-number-back">{{ item.stationDiaryNum }}篇日誌</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="diary_diaryTitleH3">
      <h2>所有日誌</h2>
      <BubbleBtn hrefText="我想新增日誌" otherClass="addDiaryBtn" />
    </div>
    <div class="diary_formSelect">
      <form>
        <div class="diarySelect">日誌篩選
          <select id="diarySelect" v-model="diveTypeFilter">
            <option v-for="(item, index) in diveTypes" :value="item" :key="index">{{ item }}</option>
          </select>
        </div>

        <div class="diveAreaSelect">潛域篩選
          <select v-model="showDiveArea">
            <option v-for="area in areaList" :value="area.stationName" :key="area.stationId">
              {{ area.stationName }}
            </option>
          </select>
          <label v-for="item in showAreaFilter" :key="item.itemId" :for="`area_${item.itemId}`">
            <input type="checkbox" :name="`area_${item.itemId}`" :id="`area_${item.itemId}`" :value="item.itemName"
              class="diveclass" />{{ item.itemName }}
          </label>
        </div>
      </form>
    </div>
    <div class="diaryCardArea">
      <diaryCard/>
      <diaryCard/>
      <diaryCard/>
      <diaryCard/>
      <diaryCard/>
      <diaryCard/>
      <diaryCard/>
      <diaryCard/>
      <diaryCard/>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent";
import Footer from "../../components/Footer.vue";
import diaryCard from "./diaryCard.vue";
import BubbleBtn from "../BubbleBtn.vue";

export default {
  name: 'diaryInside',
  components: { HeaderComponent, Footer, BubbleBtn, diaryCard },
  data() {
    return {
      diveTypeFilter: "",
      showDiveArea: "",
      diveTypes: ["旅遊潛水", "課程潛水"],
      areaList: [
        {
          stationId: 467660,
          stationName: '綠島',
          stationDiaryNum: 28,
          stationImg: [
            require("../../assets/img/diary/diaryphoto1.png"),
            require("../../assets/img/diary/diaryphoto2.png"),
            require("../../assets/img/diary/diaryphoto3.png"),
            require("../../assets/img/diary/diaryphoto4.png"),
          ],
          diveArea: [
            {
              itemId: 22665,
              itemName: '海底教堂',
            },
            {
              itemId: 22639,
              itemName: '鋼鐵礁',
            },
            {
              itemId: 22656,
              itemName: '石朗大香菇',
            },
            {
              itemId: 22691,
              itemName: '海底大峽谷',
            },
            {
              itemId: 22638,
              itemName: '雞仔礁',
            }
          ]
        },
        {
          stationId: 467620,
          stationName: '蘭嶼',
          stationDiaryNum: 24,
          stationImg: [
            require("../../assets/img/diary/diaryphoto5.png"),
            require("../../assets/img/diary/diaryphoto6.png"),
            require("../../assets/img/diary/diaryphoto7.png"),
            require("../../assets/img/diary/diaryphoto8.png"),
          ],
          diveArea: [
            {
              itemId: 22084,
              itemName: '母雞岩',
            },
            {
              itemId: 22024,
              itemName: '八代灣沉船',
            },
            {
              itemId: 22050,
              itemName: '椰油斷層',
            },
            {
              itemId: 22039,
              itemName: '野銀小峽谷',
            },
            {
              itemId: 22008,
              itemName: '四條溝',
            }
          ]
        },
        {
          stationId: 467790,
          stationName: '墾丁',
          stationDiaryNum: 57,
          stationImg: [
            require("../../assets/img/diary/diaryphoto9.png"),
            require("../../assets/img/diary/diaryphoto10.png"),
            require("../../assets/img/diary/diaryphoto11.png"),
            require("../../assets/img/diary/diaryphoto12.png"),
          ],
          diveArea: [
            {
              itemId: 21950,
              itemName: '後壁湖',
            },
            {
              itemId: 21942,
              itemName: '出水口',
            },
            {
              itemId: 21917,
              itemName: '雙峰藍洞',
            },
            {
              itemId: 21951,
              itemName: '合界',
            },
          ]
        },
        {
          stationId: 'C0R640',
          stationName: '小琉球',
          stationDiaryNum: 25,
          stationImg: [
            require("../../assets/img/diary/diaryphoto13.png"),
            require("../../assets/img/diary/diaryphoto14.png"),
            require("../../assets/img/diary/diaryphoto15.png"),
            require("../../assets/img/diary/diaryphoto16.png"),
          ],
          diveArea: [
            {
              itemId: 22355,
              itemName: '花瓶岩',
            },
            {
              itemId: 22353,
              itemName: '美人洞',
            },
            {
              itemId: 22340,
              itemName: '衫福沈船',
            },
            {
              itemId: 22320,
              itemName: '鎮海艦',
            },
            {
              itemId: 22326,
              itemName: '厚石礁群',
            },
          ]
        },
        {
          stationId: 466900,
          stationName: '東北角',
          stationDiaryNum: 28,
          stationImg: [
            require("../../assets/img/diary/diaryphoto17.png"),
            require("../../assets/img/diary/diaryphoto18.png"),
            require("../../assets/img/diary/diaryphoto19.png"),
            require("../../assets/img/diary/diaryphoto12.png"),
          ],
          diveArea: [
            {
              itemId: 25079,
              itemName: '和美',
            },
            {
              itemId: 25099,
              itemName: '龍洞',
            },
            {
              itemId: 25146,
              itemName: '潮境公園',
            },
            {
              itemId: 25129,
              itemName: '鼻頭角',
            },
          ]
        },
      ]
    }
  },
  methods: {
    getMouseInfo($event) {
      var clientX = $event.clientX
      var clientY = $event.clientY - 80
      this.$refs.cursor.style.left = clientX + "px",
      this.$refs.cursor.style.top = clientY + "px",
      this.$refs.cursor2.style.left = clientX + "px",
      this.$refs.cursor2.style.top = clientY + "px",
      this.$refs.cursor3.style.left = clientX + "px",
      this.$refs.cursor3.style.top = clientY + "px"
    },
    addHoverList() {
      this.$refs.cursor2.classList.add("hover")
      this.$refs.cursor3.classList.add("hover")
    },
    removeHoverList() {
      this.$refs.cursor2.classList.remove("hover")
      this.$refs.cursor3.classList.remove("hover")
    },
    changeLiClass(index) {
      document.querySelector(".case-study-name.active").className = "case-study-name"
      document.querySelector(".case-study-images li.show").className = ""
      document.querySelector(`.case-study-images li:nth-child(${index + 1})`).className = "show"
      document.querySelector(`.case-study-name:nth-child(${index + 1})`).className = "case-study-name active"
    }

  },
  computed: {
    showAreaFilter() {
      if (this.showDiveArea == "") {
        return []
      } else {
        var areaArr = this.areaList.filter(x => x.stationName == this.showDiveArea)
        return areaArr[0].diveArea
      }
    }
  },
  mounted() {
    document.body.className = "diary";
    this.removeHoverList();
    document.querySelector(".case-study-images li:nth-child(1)").classList.add("show")
    document.querySelector(".case-study-name:nth-child(1)").classList.add("active")
  },
  beforeDestroy() {
    document.body.className = " ";
  },
}
</script>

<style lang="scss">
.diary {
  header {
    .blog_nav {
      a {
        font-weight: 700;
      }

      a::after {
        display: block;
      }
    }
  }

  .diaryCenter::after {
    display: none;
  }
}

.carousel {
  width: 95%;
  overflow: hidden;
  position: relative;
}

/* #Cursor
 ================================================== */
.cursor,
.cursor2,
.cursor3 {
  position: absolute;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -100px;
  top: 50%;
  mix-blend-mode: difference;
}

.cursor {
  background-color: #fff;
  height: 0;
  width: 0;
  z-index: 99999;
}

.cursor2,
.cursor3 {
  height: 36px;
  width: 36px;
  z-index: 99998;
  transition: all 0.3s ease-out
}

.cursor2.hover,
.cursor3.hover {
  transform: scale(2) translateX(-25%) translateY(-25%);
  border: none
}

.cursor2 {
  border: 2px solid #fff;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
}

.cursor2.hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 0 rgba(255, 255, 255, 0.2);
}

/* #Slider
 ================================================== */

.section {
  position: relative;
  width: 100%;
  display: block;
  overflow: hidden;
  height: 85vh;
}

/* Case Study Showcase
 ================================================== */

.case-study-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  width: auto;
  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  list-style: none;
}

.case-study-wrapper .case-study-name {
  margin: 0 auto;
  text-align: center;
}

.case-study-wrapper .case-study-name a {
  position: relative;
  list-style: none;
  margin: 0 auto;
  display: inline-block;
  text-align: center;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 8vh;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: 3px;
  color: #fff;
  text-decoration: none;
  transition: all 300ms linear;
  text-decoration: none;
}

.case-study-wrapper .case-study-name a:hover {
  text-decoration: none;
}

.case-study-wrapper .case-study-name.active a {
  color: #fcd374;
}

.case-study-wrapper .case-study-name a:before {
  position: absolute;
  content: '';
  left: 50%;
  bottom: 0;
  height: 6px;
  width: 0;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #fff, #e6ae2c);
  transition: all 200ms linear;
}

.case-study-name:nth-child(2) a:before,
.case-study-name:nth-child(4) a:before {
  background: linear-gradient(45deg, #e6ae2c, #fff);
}

.case-study-wrapper .case-study-name.active a:before {
  width: 100%;
}

.case-study-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 2;
}

.case-study-images li {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  list-style: none;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}

.case-study-images li .img-hero-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  list-style: none;
  opacity: 0;
  -webkit-transform: translateY(60px);
  transform: translateY(60px);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}

.case-study-images li.show .img-hero-background {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.case-study-images li .hero-number-back {
  position: absolute;
  top: 7%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: block;
  list-style: none;
  opacity: 0;
  font-size: 3.5vw;
  line-height: 1;
  color: rgba(254, 254, 254, .75);
  z-index: 1;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}

.case-study-images li.show .hero-number-back {
  opacity: 1;
}


.case-study-images li .img-hero-background span img {
  width: 100%;
  height: auto;
  display: block;
  transform: scale(0.6, 1.7);
  transform-origin: center top;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.case-study-images li.show .img-hero-background span img {
  transform: scale(1);
}

.case-study-images li .img-hero-background span {
  position: absolute;
  width: 20%;
  display: block;
}

.case-study-images li:nth-child(1) .img-hero-background span {
  top: 12%;
  left: 25%;
}

.case-study-images li:nth-child(1) .img-hero-background span:nth-child(2) {
  width: 18%;
  top: 22%;
  left: 55%;
}

.case-study-images li:nth-child(1) .img-hero-background span:nth-child(3) {
  top: 55%;
  left: 75%;
}

.case-study-images li:nth-child(1) .img-hero-background span:nth-child(4) {
  width: 15%;
  top: 44%;
  left: 15%;
}

.case-study-images li:nth-child(2) .img-hero-background span {
  top: 7%;
  left: 15%;
}

.case-study-images li:nth-child(2) .img-hero-background span:nth-child(2) {
  width: 18%;
  top: 55%;
  left: 9%;
}

.case-study-images li:nth-child(2) .img-hero-background span:nth-child(3) {
  width: 14%;
  top: 17%;
  left: 72%;
}

.case-study-images li:nth-child(2) .img-hero-background span:nth-child(4) {
  width: 20%;
  top: 54%;
  left: 67%;
}

.case-study-images li:nth-child(3) .img-hero-background span {
  top: 9%;
  left: 18%;
}

.case-study-images li:nth-child(3) .img-hero-background span:nth-child(2) {
  width: 16%;
  top: 55%;
  left: 8%;
}

.case-study-images li:nth-child(3) .img-hero-background span:nth-child(3) {
  top: 11%;
  left: 62%;
}

.case-study-images li:nth-child(3) .img-hero-background span:nth-child(4) {
  width: 18%;
  top: 54%;
  left: 75%;
}

.case-study-images li:nth-child(4) .img-hero-background span {
  top: 12%;
  left: 25%;
}

.case-study-images li:nth-child(4) .img-hero-background span:nth-child(2) {
  width: 16%;
  top: 22%;
  left: 55%;
}

.case-study-images li:nth-child(4) .img-hero-background span:nth-child(3) {
  top: 58%;
  left: 75%;
}

.case-study-images li:nth-child(4) .img-hero-background span:nth-child(4) {
  width: 18%;
  top: 59%;
  left: 20%;
}

.case-study-images li:nth-child(5) .img-hero-background span {
  width: 16%;
  top: 9%;
  left: 18%;
}

.case-study-images li:nth-child(5) .img-hero-background span:nth-child(2) {
  width: 15%;
  top: 55%;
  left: 2%;
}

.case-study-images li:nth-child(5) .img-hero-background span:nth-child(3) {
  width: 20%;
  top: 11%;
  left: 62%;
}

.case-study-images li:nth-child(5) .img-hero-background span:nth-child(4) {
  width: 17%;
  top: 54%;
  left: 75%;
}

@media (max-width: 767px) {
  .case-study-wrapper .case-study-name a {
    font-size: 26px;
    letter-spacing: 1px;
  }

  .case-study-images li .hero-number-back {
    font-size: 24px;
  }
}

@media (max-width: 580px) {

  .case-study-wrapper {
    top: 41%;
  }

  .case-study-images {
    height: 80%;
  }

  .case-study-images li .hero-number-back {
    font-size: 24px;
    top: 20%;
  }

  .case-study-images li:nth-child(1) .img-hero-background span,
  .case-study-images li:nth-child(2) .img-hero-background span,
  .case-study-images li:nth-child(3) .img-hero-background span,
  .case-study-images li:nth-child(4) .img-hero-background span,
  .case-study-images li:nth-child(5) .img-hero-background span {
    width: calc(100% - 40px);
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }

  .case-study-images li:nth-child(1) .img-hero-background span:nth-child(2),
  .case-study-images li:nth-child(1) .img-hero-background span:nth-child(3),
  .case-study-images li:nth-child(1) .img-hero-background span:nth-child(4),
  .case-study-images li:nth-child(2) .img-hero-background span:nth-child(2),
  .case-study-images li:nth-child(2) .img-hero-background span:nth-child(3),
  .case-study-images li:nth-child(2) .img-hero-background span:nth-child(4),
  .case-study-images li:nth-child(3) .img-hero-background span:nth-child(2),
  .case-study-images li:nth-child(3) .img-hero-background span:nth-child(3),
  .case-study-images li:nth-child(3) .img-hero-background span:nth-child(4),
  .case-study-images li:nth-child(4) .img-hero-background span:nth-child(2),
  .case-study-images li:nth-child(4) .img-hero-background span:nth-child(3),
  .case-study-images li:nth-child(4) .img-hero-background span:nth-child(4),
  .case-study-images li:nth-child(5) .img-hero-background span:nth-child(2),
  .case-study-images li:nth-child(5) .img-hero-background span:nth-child(3),
  .case-study-images li:nth-child(5) .img-hero-background span:nth-child(4) {
    display: none;
  }
}

@media (max-width: 376px) {

  .section {
    height: 75vh;
  }
  .case-study-wrapper .case-study-name a {
    font-size: 20px;
  }
}

.diary_diaryTitleH3 {
  max-width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  h2 {
    font-size: 24px;

    &::before {
      top: 0;
      left: -2px;
    }
  }
}

.diary_formSelect {
  margin: 60px auto;
  max-width: 80%;
  padding: 5px 0 5px 80px;
  background-color: rgba(22, 24, 29, .6);
  border-radius: 5px;

  .diarySelect,
  .diveAreaSelect {
    padding: 15px 0;

    select {
      text-align: left;
      margin: 0 0;
      font-size: 16px;
      width: 160px;
      height: 30px;
      cursor: auto;
      padding: 0;
    }
  }

  .diveAreaSelect {
    label {
      vertical-align: middle;
    }

    input {
      width: 20px;
      vertical-align: middle;
      margin: 0 5px 0 15px;
    }
  }
}

@media (max-width: 580px) {

  .diary_formSelect{
    .diveAreaSelect {
      label {
        display: block;
        padding-left: 60px;
      }
    }
  }

  .diary{
    .button--bubble__container{
      margin-top: 25px;
    }
  }

  .diary_diaryTitleH3{
    display: block;
  }

}
@media (max-width: 376px) {

  .diary_formSelect{
    .diveAreaSelect {
      label {
        padding-left: 0px;
      }
    }
  }

}

.diaryCardArea{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto 100px;

  .diaryCenter{
    margin-top: 20px;
  }
}


</style>