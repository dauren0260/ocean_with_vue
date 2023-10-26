<template>
  <div class="lightbox2">
    <div class="button_closeBox2">
      <button type="button" class="btn_modal_close" @click="closeLightBox">✖</button>
    </div>
    <div class="art">
      <h3>本日推薦</h3>
      <span class="itemName">水中看得到</span>
      <div class="item">
        <img src="../../assets/img/shop/mask1@2x.png" />
      </div>
      <span class="NT">2350</span>
      <p class="descript">水中看得到就是看得到而已，如果用這個等級的面鏡，可看到身邊三米左右。</p>
      <AddBubbleBtn hrefText="加入購物車" otherClass="addCart" idText="A0001" :msg="item"></AddBubbleBtn>
    </div>
  </div>
</template>

<script>
import AddBubbleBtn from "../AddBubbleBtn";

export default {
  name: "ShopItem",
  components:{AddBubbleBtn},
  data(){
    return {
      item:{
        itemName: "水中看得清",
        itemImg: require("../../assets/img/shop/mask1@2x.png"),
        itemPrice: 7500,
        itemID: "A0001",
        itemIntro: "顧名思義看得清楚，視力就像2.0一樣，真的非常清楚",
        detailID:"DA0001"
      },
    }
  },
  methods:{
    closeLightBox(){
      this.$bus.$emit('lightBox',false)
    }
  }
};
</script>

<style lang="scss">

.lightbox-block2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(2, 2, 2, 0.7);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.01s;

  .lightbox2 {
    width: 40%;
    max-width: 800px;
    background-color: #fefefe;
    border-radius: 5px;
    color: #073977;
    text-align: center;
    padding: 30px 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .button_closeBox2 {
    display: block;
    margin-left: auto;
    text-align: right;
    text-transform: none;
    text-indent: 0;

    .btn_modal_close {
      text-shadow: none;
      right: 5px;
      top: 3px;
      width: 35px;
      height: 35px;
      color: #16181d;
      background-color: transparent;
      border: none;
      outline: 0;
      cursor: pointer;
      margin-left: auto;
    }
  }

  
  .button:hover {
      background-color: #e6ae2c;
      color: #fefefe;
  }

  .button--bubble:hover+.button--bubble__effect-container .circle {
      background: #e6ae2c;
  }

  .button--bubble:hover+.button--bubble__effect-container .button {
      background: #e6ae2c;
  }
}

.lightbox-block2.-openbox {
  opacity: 1;
  z-index: 3;
}

.art {
    display: flex;
    flex-direction: column;
    align-items: center;
  
  h3 {
    margin-top: 0;
    font-size: 15px;
    color: #16181d;
  }
  
  .NT, .itemName {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    margin: 20px;
  }
  
  img{
    width: 100px;
  }
  
  .descript {
    width: 60%;
    text-align: left;
    color: #16181d;
    margin-bottom: 20px;
  }
}


@media (max-width:992px){
  .lightbox-block2{
    .lightbox2{
      width: 60%;
    }
  }
}

@media (max-width:767px){
  .lightbox-block2{
    .lightbox2{
      width: 80%;
    }
  }
}

</style>