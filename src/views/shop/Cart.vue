<template>
  <div>
    <HeaderComponent />
    <div class="title">
      <h2>購物車</h2>
    </div>
    <div class="container">
      <div class="wrap">
        <div class="listHeader">
          <h4>商品圖片</h4>
          <h4>商品名稱</h4>
          <h4>單價</h4>
          <h4>數量</h4>
          <h4>小計</h4>
          <h4>刪除</h4>
        </div>

        <div class="listRow" v-if="addItem.length">
          <ProductInfo />
        </div>
      </div>
      <div id="madaBuy" v-if='addItem==""'>
        您還沒挑選任何商品，歡迎到商城逛逛唷！
      </div>
      <div class="totalContent">
        <div v-show="billInfo" class="gamePlay">
          <span>玩遊戲獲取紅利點數!</span>
          <BubbleBtn
            hrefText="前往遊戲"
            otherClass="demo-btn"
            pathText="gameIntro"
          ></BubbleBtn>
        </div>
        <div :class="calcClassName">
          <p v-if="billInfo" class="bill">
            您挑選了{{addItem.length }}項物品，總金額為：${{ sum }}
          </p>
          <p v-if="billInfo" class="point">您目前持有點數：0</p>
          <p v-if="billInfo" class="usePointsP">
            使用點數：<input type="text" name="usePointShow" value="0" />
          </p>
          <p v-if="billInfo" class="total">總計：${{ sum }}</p>
        </div>
      </div>

      <div class="cartBtn" v-if="!billInfo">
        <BubbleBtn
          hrefText="繼續購物"
          otherClass="buymore"
          pathText="shop"
        ></BubbleBtn>
        <BubbleBtn
          hrefText="進行結帳"
          otherClass="thebill"
          idText="goingBill"
          @click.native="checkLogin"
          pathText=""
        ></BubbleBtn>
      </div>

      <div class="billSet" v-if="billInfo">
        <section class="writeInfo">
          <div class="information">
            <h3>填寫資料</h3>
            <form class="wrap" method="post" action="#" id="theForm">
              <div class="writeInfoCol">
                <h4>收件人資訊</h4>
                <p>
                  姓名：
                  <input
                    v-model="customerInfo.orderName"
                    type="text"
                    name="orderName"
                  />
                </p>
                <p>
                  電話：
                  <input
                    v-model="customerInfo.orderTel"
                    type="text"
                    name="orderTel"
                  />
                </p>
                <p>
                  地址：
                  <input
                    v-model="customerInfo.orderAddress"
                    type="text"
                    name="orderAddress"
                  />
                </p>
              </div>
              <div class="writeInfoCol creditCard">
                <h4>信用卡付款資訊</h4>
                <p>
                  信用卡帳號：
                  <input type="text" id="card1" maxlength="4" name="card1" />
                  -
                  <input
                    type="password"
                    id="card2"
                    maxlength="4"
                    name="card2"
                  />
                  -
                  <input type="text" id="card3" maxlength="4" name="card3" />
                  -
                  <input type="text" id="card4" maxlength="4" name="card4" />

                  <span id="creditCardMsg"></span>
                </p>
                <p>
                  有效期限：
                  <input id="month" type="text" name="month" />
                  月
                  <input id="year" type="text" name="year" />
                  年
                  <span id="monthMsg"></span>
                  <span id="yearMsg"></span>
                </p>
                <p>
                  安全碼：
                  <input id="safe" type="text" />
                  <span id="safeMsg"></span>
                </p>
              </div>
              <div class="subBtn">
                <BubbleBtn
                  hrefText="回上一步"
                  otherClass="toBack"
                  pathText=""
                  @click.native="toback"
                ></BubbleBtn>
                <BubbleBtn
                  hrefText="確認送出"
                  otherClass="sent"
                  pathText=""
                  idText="sentName"
                  @click.native="showLightBox(true)"
                ></BubbleBtn>
              </div>
              <div class="lightbox-block1" v-show="isShowLightBox">
                <div class="lightbox1">
                  <div class="confirmContainer">
                    <button type="button" class="btn_modal_close" @click="showLightBox(false)" > ✖ </button>
                    <p
                      class="confirmTitle"
                      style="text-align: center; font-size: 26px"
                    >
                      請確認您的資料
                    </p>
                    <br />
                    <p>姓名：{{ customerInfo.orderName }}</p>
                    <br />
                    <p>行動電話：{{ customerInfo.orderTel }}</p>
                    <br />
                    <p>地址：{{ customerInfo.orderAddress }}</p>
                    <br />
                    <p>消費金額：{{ sum }}</p>
                    <input type="hidden" name="orderTotal" value="" />
                    <input type="hidden" name="usePoint" value="" />
                    <input type="hidden" name="leftPoints" value="" />
                    <button type="submit" class="confirmBtn">確認送出</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Swal from "sweetalert2";

import HeaderComponent from "../HeaderComponent";
import Footer from "../../components/Footer.vue";
import BubbleBtn from "../BubbleBtn";
import ProductInfo from "./ProductInfo.vue";

export default {
  name: "Cart",
  components: { HeaderComponent, Footer, BubbleBtn, ProductInfo },
  data() {
    return {
      addItem: [],
      sum: 0,
      memberInfo: "",
      billInfo: false,
      customerInfo: {
        orderName: "",
        orderTel: "",
        orderAddress: "",
      },
      isShowLightBox: false,
    };
  },
  computed: {
    calcClassName() {
      return this.billInfo ? "calc" : "calc calc100";
    },
  },
  methods: {
    computeAllSubtotal(value) {
      this.sum = value;
    },
    checkLogin() {
      if (this.memberInfo == "") {
        Swal.fire({
          title: "請先登入會員",
          icon: "warning",
          confirmButtonColor: "#E6AE2C",
        });
      } else {
        this.billInfo = true;
      }
    },
    toback() {
      this.billInfo = false;
    },
    showLightBox(bool) {
      this.isShowLightBox = bool;
    },
    updateAddItemData(arr){
      this.addItem = arr
    }
  },
  beforeMount() {
    this.addItem = sessionStorage.getItem("addItem").split(",");
  },
  mounted() {
    this.$bus.$on("allSubTotal", this.computeAllSubtotal);
    this.memberInfo = sessionStorage.getItem("memberInfo");
    this.$bus.$on("updateAddItem", this.updateAddItemData)
  },
  beforeDestroy(){
    this.$bus.$off("allSubTotal")
    this.$bus.$off("updateAddItem")
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin.scss";

h2 {
  position: relative;
  display: inline-block;
}

h2::before {
  content: "";
  background: url(../../assets/img/h2bubble@2x.png) no-repeat;
  background-size: contain;
  position: absolute;
  display: inline-block;
  top: 20px;
  left: -20px;
  width: 50px;
  height: 50px;
}

.title {
  text-align: center;
  margin: 30px;
}

.container {
  max-width: 1200px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;

  #madaBuy {
    text-align: center;
    background-color: #fdf6e7;
    color: $keyBlack;
    padding: 50px;
    border-bottom: 1px solid $keyBlack;
  }
  .wrap {
    border-radius: 5px 5px 0 0;
    background-color: #fdf6e7;

    .listHeader {
      display: flex;
      text-align: center;
      background-color: $keyBlue;
      font-weight: bold;
      padding: 10px 0;
      border-radius: 5px 5px 0 0;
      justify-content: space-around;
      @include breakpoint(992) {
        h4 {
          font-size: 18px;
        }
      }
      @include breakpoint(577) {
        h4 {
          font-size: 14px;
        }
      }
    }
  }
}

.totalContent {
  margin: auto;
  padding: 30px;
  background-color: #fdf6e7;
  color: $keyBlack;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  span {
    color: red;
  }

  .calc100 {
    width: 100%;
  }

  .calc {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @include breakpoint(767) {
      align-items: flex-start;
    }

    input {
      width: 80px;
      text-align: center;
    }

    p {
      margin: 5px;
    }
  }
}

.demo-btn {
  height: 30px;
  padding: 2px 2px;
  margin: 20px auto;
  text-align: center;
}

.cartBtn {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;

  .bubbleBtn {
    margin: 30px;
  }
}

//收件人、信用卡資訊欄
.billSet {
  .writeInfo {
    margin-bottom: 50px;
    p,
    h4 {
      padding: 8px;
      color: $keyBlack;
    }
    .information {
      max-width: 1200px;
      box-sizing: border-box;
      padding: 10px;
      margin: auto;
      position: relative;
      width: 100%;
      h3 {
        text-align: center;
        background-color: $keyBlue;
        border-radius: 5px 5px 0 0;
        padding: 10px;
      }
    }
    .wrap {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      justify-content: space-around;
      background-color: #fdf6e7;

      .creditCard input {
        margin: 2px 0;
        width: 60px;
      }
    }
    .subBtn {
      width: 50%;
      display: flex;
      justify-content: center;
      margin: 20px;
      .bubbleBtn {
        margin: 0 30px;
      }
    }
  }
}

.lightbox-block1 {
  @include lightbox-block;
  z-index: 2;
  opacity: 1;
}

.lightbox1 {
  @include lightbox;
  background-color: #fdf6e7;
  max-width: 500px;
}

.btn_modal_close {
  @include btn_modal_close;
  position: absolute;
  top: 0;
}
.confirmContainer {
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  p {
    color: $keyBlack;
    text-align: left;
  }

  .confirmTitle {
    padding-top: 10px;
  }

  .rewrite {
    @include other-button(100px, 30px, 2px, 2px);
  }

  .confirmBtn {
    @include other-button(100px, 30px, 2px, 2px);
    background-color: $keyYellow;
    border: 1px solid $keyYellow;
    &:hover {
      background-color: rgb(224, 168, 36);
      border: 1px solid rgb(201, 151, 34);
    }
    &:active {
      background-color: $keyYellow;
    }
    &:focus {
      background-color: $keyYellow;
    }
  }
}
</style>