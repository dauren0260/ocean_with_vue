<template>
  <div class="shopPage">
    <HeaderComponent />
    <div class="lightbox-block1">
      <div class="lightbox1">
        <div class="button_closeBox1">
          <button type="button" class="btn_modal_close">✖</button>
        </div>
        <h3 style="margin-bottom: 20px"></h3>
        <p style="color: black"></p>
      </div>
    </div>
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
          <AddBubbleBtn @click.prevent="showdetail" hrefText="查看詳情" otherClass="detail" :idText="item.detailID"></AddBubbleBtn>
          <AddBubbleBtn hrefText="加入購物車" otherClass="addCart" :idText="item.itemID"></AddBubbleBtn>
        </div>
        <font-awesome-icon icon="fa-solid fa-heart"></font-awesome-icon>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Swal from 'sweetalert2';

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
          detailID:"DA0001"
        },
        {
          itemName: "水中看得見",
          itemImg: require("../../assets/img/shop/mask2@2x.png"),
          itemPrice: 6550,
          itemID: "A0002",
          detailID:"DA0002"
        },
        {
          itemName: "水中看得到",
          itemImg: require("../../assets/img/shop/mask3@2x.png"),
          itemPrice: 2150,
          itemID: "A0003",
          detailID:"DA0003"
        },
        {
          itemName: "眼睛進水啦",
          itemImg: require("../../assets/img/shop/mask4@2x.png"),
          itemPrice: 1250,
          itemID: "A0004",
          detailID:"DA0004"
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
  methods: {
    showdetail(){
      Swal.fire({
        title: '水中看得清',
        text: '顧名思義看得清楚，視力就像2.0一樣',

      })
    }
  },

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