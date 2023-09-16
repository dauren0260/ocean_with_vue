<template>
  <div class="art" id="S1">
    <span class="itemName">水中看得到</span>
    <div class="item">
      <img src="../../assets/img/shop/mask3@2x.png" alt="產品" />
    </div>
    <span class="NT">NT$ 2350</span>

    <div class="shopBtn">
      <BubbleBtn hrefText="查看詳情" otherClass="detail"></BubbleBtn>
      <BubbleBtn hrefText="加入購物車" otherClass="addCart"></BubbleBtn>
    </div>
    <font-awesome-icon icon="fa-solid fa-heart"></font-awesome-icon>
  </div>
</template>

<script>
import BubbleBtn from "../BubbleBtn";

export default {
  name: "Product",
  components: { BubbleBtn },
};
</script>

<style lang="scss">
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

  .shopBtn {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 5px auto;
    text-align: center;
  }
}
.swal2-header h2::before {
  content: none;
}
</style>