<template>
  <div class="shop">
    <div class="demoMan">
      <img src="../../assets/img/index/demoman.png" />
    </div>
    <div class="itemList">
      <div class="mask item" id="mask">
        <span class="line"></span>
        <div>
          <img src="../../assets/img/index/shopMask.png" @click="openLightBox"/>
          <span>面鏡</span>
        </div>
      </div>
      <div class="watch item" id="watch">
        <span class="line"></span>
        <div>
          <img src="../../assets/img/index/shoeWatch.png" />
          <span>潛水錶</span>
        </div>
      </div>
      <div class="gloves item" id="gloves">
        <span class="line"></span>
        <div>
          <img src="../../assets/img/index/shopGlove.png" />
          <span>手套</span>
        </div>
      </div>
      <div class="frogshoes item" id="frogshoes">
        <span class="line"></span>
        <div>
          <img src="../../assets/img/index/shopShoe.png" />
          <span>蛙鞋</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  methods:{
    openLightBox(e){
      this.$bus.$emit('lightBox',true)
    }
  },
};
</script>

<style lang="scss">
.shop {
  max-width: 1200px;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  position: relative;

  .demoMan img {
    width: 150px;
    margin-left: 150px;
    margin-top: 50px;
  }
  img {
    width: 150px;
  }

  .itemList {
    margin: 80px 0 0 100px;
    position: relative;

    span {
      color: #fefefe;
      font-weight: 700;
      font-size: 24px;
    }

    .item img,
    .item span {
      vertical-align: middle;
    }

    .item {
      margin-bottom: 30px;

      img {
        width: 130px;
        padding: 0;
      }

      .line {
        display: inline-block;
        position: absolute;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-image: linear-gradient(#fefefe, #fefefe);
        background-size: 0 100%;
        transition: background-size linear 0.5s;
        height: 2px;
        width: 300px;
      }

      &:hover {
        cursor: pointer;

        .line {
          background-size: 100% 100%;
        }
      }
    }

    .mask,
    .watch,
    .gloves,
    .frogshoes {
      position: relative;
    }

    .mask,
    .gloves {
      margin-left: 140px;
    }

    .mask .line {
      left: -167%;
      top: 30%;
      width: 300px;
      transform: rotate(9deg);
    }

    .watch .line {
      left: -32%;
      top: 54%;
      width: 102px;
    }

    .gloves .line {
      left: -138%;
      top: -8%;
      width: 262px;
      transform: rotate(16deg);
    }

    .frogshoes .line {
      left: -43%;
      top: 45px;
      width: 142px;
      transform: rotate(20deg);
    }
  }
}

@media (max-width:992px){
  .shop{
    .demoMan{
      display: none;
    }

    .itemList{
      .item:hover{

        .line {
          display: none;
        }

      }

      .mask,
      .gloves {
        margin-left: 0px;
      }

      .item{
        display: inline-block;
        margin: 10px 40px;
      }


    }

  }
}
@media (max-width:767px){
  .shop{
    .itemList{
      .item{
        span{
          font-size: 20px;
        }
      }
    }
  }
}
@media (max-width:577px){
  .shop{
    .itemList{
      margin: 0 auto;
      width: 90%;
      text-align: center;

      .item{
        margin: 20px;
      }

      span{
        font-size: 16px;
        display: block;
        text-align: center;
        margin-top: 10px;
      }
    }
  }
}
</style>