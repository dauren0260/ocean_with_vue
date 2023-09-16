<template>
  <div class="diaryArea">
    <div class="cardContainer">
      <div class="imgContainer">
        <img src="../../assets/img/diary/diaryphoto8.png" />
      </div>
      <div class="blogContent">
        <div class="profile">
          <img src="../../assets/img/member/member/1-nobita.png" />
          <input type="hidden" name="diaryNo" value="96" />
          <div class="nameDate">
            <p class="name">野比大雄</p>
            <p class="publishDate">2020/06/16</p>
          </div>
        </div>
        <div class="blogSpot">
          <div>
            <p>日誌類型<span>旅潛</span></p>
            <p>潛水區域<span>墾丁</span></p>
            <p>潛水地點<span>出海口</span></p>
          </div>
          <div class="blogWeather">
            <p>
              <font-awesome-icon icon="fa-solid fa-sun" style="color: #E6AE2C;"/>
              <span>晴</span>
            </p>
            <p>
              <font-awesome-icon icon="fa-solid fa-eye" style="color: #E6AE2C;"/>
              <span>33.2米</span>
            </p>
            <p>
              <font-awesome-icon icon="fa-solid fa-temperature-high" style="color: #E6AE2C;"/>
              <span>23度</span>
            </p>
            <p>
              <font-awesome-icon icon="fa-solid fa-temperature-low" style="color: #E6AE2C;"/>
              <span>45度</span>
            </p>
          </div>
        </div>
        <div class="sublife">
          <p>海洋生物</p>
          <img src="../../assets/img/diary/animal1.png" />
          <img src="../../assets/img/diary/animal2.png" />
          <img src="../../assets/img/diary/animal3.png" />
        </div>
      </div>
    </div>

    <div class="smallDiary">
      <diaryCard />
      <diaryCard />
    </div>
  </div>
</template>

<script>
import diaryCard from "../diary/diaryCard.vue";

export default {
  name: "Diary",
  components: { diaryCard },
};
</script>


<style scoped lang="scss">
.diaryArea {
  margin-bottom: 130px;
}

.cardContainer {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px auto;

  .imgContainer {
    width: 425px;
    height: 425px;

    img {
      height: 100%;
      vertical-align: bottom;
    }
  }

  .blogContent {
    width: 425px;
    padding-left: 20px;
    background-color: $keyBlack;
    color: $keyWhite;
    height: 425px;
  }

  .blogContent {
    div {
      margin: 20px 0;
    }
    p {
      text-align: center;
      margin: 6px 6px;
    }
  }

  .blogSpot div {
    display: flex;
    justify-content: space-around;
  }

  .blogSpot div:first-child{
    color: $keyYellow;

    span{
      color: $keyWhite;
    }
  }

  .profile {
    text-align: center;

    img {
      width: auto;
      height: 100px;
      border-radius: 50%;
      border: 1px solid #fefefe;
      margin: 20px 0;
    }

    p {
      display: block;
    }
  }

  .sublife {
    text-align: center;

    img {
      width: 50px;
      margin: 5px 8px;
    }
    p {
      color: $keyYellow;
      display: block;
    }
  }
}

.cardContainer .blogContent span {
  display: block;
  margin-top: 2px;
}

.cardContainer .profile img,
.cardContainer .profile .nameDate {
  display: inline-block;
  vertical-align: middle;
}

.smallDiary {
  display: flex;
  justify-content: center;
}

@media all and (max-width: 767px){
    .smallDiary{
      flex-wrap: wrap;
    }
} 

</style>