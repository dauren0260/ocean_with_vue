<template>
  <div class="shopPage">
    <HeaderComponent />
    <div class="shopH2">
      <h2>潛水商城</h2>
    </div>
    <div class="itemType">
      <ul>
        <li>面鏡</li>
        <li>潛水錶</li>
        <li>手套</li>
        <li>蛙鞋</li>
      </ul>
    </div>
    <div class="foojun">
      <!-- <Product/> -->
      <div class="art" v-for="(item,id) of products" :key="id">
        <span class="itemName">{{item.itemName}}</span>
        <div class="item">
          <img v-bind:src="item.itemImg" alt="產品" />
        </div>
        <span class="NT">{{item.itemPrice}}</span>

        <div class="shopBtn">
          <AddBubbleBtn hrefText="查看詳情" otherClass="detail" :idText="item.detailID" :msg="item"></AddBubbleBtn>
          <AddBubbleBtn hrefText="加入購物車" otherClass="addCart" :idText="item.itemID" :msg="item"></AddBubbleBtn>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart"></font-awesome-icon>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import HeaderComponent from "../HeaderComponent";
import AddBubbleBtn from "../AddBubbleBtn";
// import Product from "./Product.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "Shop",
  components: { HeaderComponent, AddBubbleBtn, Footer },
  data() {
    return {
      products: [
        {
          itemName: "水中看得清",
          itemImg: require("../../assets/img/shop/mask1@2x.png"),
          itemPrice: 7500,
          itemID: "A0001",
          itemIntro: "顧名思義看得清楚，視力就像2.0一樣，真的非常清楚",
          detailID:"DA0001"
        },
        {
          itemName: "水中看得見",
          itemImg: require("../../assets/img/shop/mask2@2x.png"),
          itemPrice: 6550,
          itemID: "A0002",
          itemIntro: "看得剛剛好，輕鬆瀏覽海底事件不受影響 !",
          detailID:"DA0002"
        },
        {
          itemName: "水中看得到",
          itemImg: require("../../assets/img/shop/mask3@2x.png"),
          itemPrice: 2150,
          itemID: "A0003",
          itemIntro: "僅能看到周遭範圍，看的距離有限",
          detailID:"DA0003"
        },
        {
          itemName: "眼睛進水啦",
          itemImg: require("../../assets/img/shop/mask4@2x.png"),
          itemPrice: 1250,
          itemID: "A0004",
          itemIntro: "有預算限制在購買它吧!",
          detailID:"DA0004"
        },
        {
          itemName: "永久指針",
          itemImg: require("../../assets/img/shop/watch1@2x.png"),
          itemPrice: 8800,
          itemID: "B0001",
          itemIntro: "配戴此表保證完美紀錄最大深度、殘氮值、安全停留等所有數據!",
          detailID:"DB0001"
        },
        {
          itemName: "紀錄指針",
          itemImg: require("../../assets/img/shop/watch2@2x.png"),
          itemPrice: 6600,
          itemID: "B0002",
          itemIntro: "可以記錄這片海域的地形，掌握潛入的海域資訊。",
          detailID:"DB0002"
        },
        {
          itemName: "磁石指針",
          itemImg: require("../../assets/img/shop/watch3@2x.png"),
          itemPrice: 2200,
          itemID: "B0003",
          itemIntro: "第一款利用磁石所設計的潛水錶，非常特別，驚豔全場的指針!",
          detailID:"DB0003"
        },
        {
          itemName: "迷路指針",
          itemImg: require("../../assets/img/shop/watch4@2x.png"),
          itemPrice: 1200,
          itemID: "B0004",
          itemIntro: "給予有預算限制的人的選擇!",
          detailID:"DB0004"
        },
        {
          itemName: "紅色工作手套",
          itemImg: require("../../assets/img/shop/gloves1@2x.png"),
          itemPrice: 8800,
          itemID: "C0001",
          itemIntro: "防止被礁岩割傷，不論實用性還是美觀都是一等一的!",
          detailID:"DC0001"
        },
        {
          itemName: "藍色工作手套",
          itemImg: require("../../assets/img/shop/gloves2@2x.png"),
          itemPrice: 5800,
          itemID: "C0002",
          itemIntro: "有戴像沒戴一樣輕巧!",
          detailID:"DC0002"
        },
        {
          itemName: "綠色工作手套",
          itemImg: require("../../assets/img/shop/gloves3@2x.png"),
          itemPrice: 2600,
          itemID: "C0003",
          itemIntro: "戴的剛剛好!",
          detailID:"DC0003"
        },
        {
          itemName: "紫色工作手套",
          itemImg: require("../../assets/img/shop/gloves4@2x.png"),
          itemPrice: 1800,
          itemID: "C0004",
          itemIntro: "給予有預算限制的人的選擇!",
          detailID:"DC0004"
        },
        {
          itemName: "神速蛙鞋",
          itemImg: require("../../assets/img/shop/frogshoes1@2x.png"),
          itemPrice: 9800,
          itemID: "D0001",
          itemIntro: "給予有預算限制的人的選擇!",
          detailID:"DD0001"
        },
        {
          itemName: "噴射蛙鞋",
          itemImg: require("../../assets/img/shop/frogshoes2@2x.png"),
          itemPrice: 6500,
          itemID: "D0002",
          itemIntro: "給予有預算限制的人的選擇!",
          detailID:"DD0002"
        },
        {
          itemName: "推進蛙鞋",
          itemImg: require("../../assets/img/shop/frogshoes3@2x.png"),
          itemPrice: 4500,
          itemID: "D0003",
          itemIntro: "給予有預算限制的人的選擇!",
          detailID:"DD0003"
        },
        {
          itemName: "慢速蛙鞋",
          itemImg: require("../../assets/img/shop/frogshoes4@2x.png"),
          itemPrice: 800,
          itemID: "D0004",
          itemIntro: "給予有預算限制的人的選擇!",
          detailID:"DD0004"
        },
      ],
    };
  },
  computed:{
    perBtnClassName:{
      get(bool,id){
        return bool ? ("detail" + id) : ("addCart" + id)
      }
    }
  },
  methods:{
    showdetail(){
      alert("hiiiiii")
      console.log("shoppppppp")
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  background-image: url(../../assets/img/diveinbg.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.shopH2 {
  text-align: center;
  padding: 30px 0;
}

.itemType {
  // width: 100%;
  max-width: 1200px;
  margin: auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1200px;

    li {
      width: 80px;
      text-align: center;
      border: 2px solid $keyWhite;
      font-size: $baseFz;
      margin: 20px;
      padding: 8px 10px;
      color: $keyWhite;
      cursor: pointer;

      &:hover {
        background-color: $keyWhite;
        color: $keyBlue;
      }
    }
  }
}

.foojun {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

// 產品卡片
.shopPage {
  .art {
    width: 300px;
    position: relative;
    border: 2px solid seashell;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    margin: 20px auto;
    background-color: rgb(22, 24, 29);
    &:hover::before {
      top: -35px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;
      z-index: -1;
      background-repeat: no-repeat;
      background-image: url(../../assets/img/shop/watermom.png);
      transition: top 0.3s;
    }
    .itemName,
    .NT {
      font-size: 1.5 * $baseFz;
      font-weight: 600;
      text-align: center;
      margin: 10px;
    }

    .NT {
      font-weight: 400;
    }

    .fa-heart {
      position: absolute;
      top: 7%;
      right: 7%;
      cursor: pointer;
      font-size: 24px;
      &:hover {
        color: red;
      }
    }
  }

  .item img {
    width: 150px;
    padding: 30px;
  }


}
.swal2-header h2::before {
  content: none;
}


</style>