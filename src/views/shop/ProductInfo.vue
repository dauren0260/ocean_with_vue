<template>
  <div>
    <div
      :id="item.itemID"
      class="prodInfo"
      v-for="(item, id) of products"
      :key="id"
    >
      <div class="prodPic">
        <img v-bind:src="item.itemImg" alt="" />
      </div>
      <div class="prodName">{{ item.itemName }}</div>
      <div class="prodPrice">{{ item.itemPrice }}</div>
      <div class="prodNumber">
        <font-awesome-icon
          icon="fa-solid fa-minus"
          @click="minusNum($event)"
        ></font-awesome-icon>
        <input type="text" :value="item.itemNum" readonly name="number" />
        <font-awesome-icon
          icon="fa-solid fa-plus"
          @click="addNum($event)"
        ></font-awesome-icon>
      </div>
      <div class="subTotal">{{ item.subtotal }}</div>
      <div class="trashcan">
        <font-awesome-icon icon="fa-solid fa-trash" @click="deleteItem($event)"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    addNum($event) {
      var idItem = $event.currentTarget.parentElement.parentElement.id;
      this.products.forEach((item) => {
        if (item.itemID == idItem) {
          item.itemNum++;
          item.subtotal = item.itemNum * item.itemPrice;
        }
      });
    },
    minusNum($event) {
      var idItem = $event.currentTarget.parentElement.parentElement.id;
      this.products.forEach((item) => {
        if (item.itemID == idItem) {
          item.itemNum--;
          if(item.itemNum<=0){
            item.itemNum = 0
          }
          item.subtotal = item.itemNum * item.itemPrice;
        }
      });
    },
    computeSubtotal(){
      var allItemSum = 0
      this.products.forEach((el)=>{
        allItemSum += el.subtotal
      })

      this.$bus.$emit('allSubTotal',allItemSum)
    },
    deleteItem($event){
      var currentID = $event.currentTarget.parentElement.parentElement.id;
      sessionStorage.removeItem(currentID)

      var arr = sessionStorage.getItem("addItem").split(",")
      var newArr = arr.filter((val)=>{
        return val != currentID
      })
      sessionStorage.setItem("addItem", newArr)

      this.$bus.$emit('updateAddItem', newArr)

      for (let i = 0; i < this.products.length; i++) {
        if(this.products[i].itemID == currentID){
          this.products.splice(i,1)
          break;
        }
      }

      this.$store.dispatch('item_Count_Cart',true)
      this.computeSubtotal()
    }
  },
  beforeMount(){
    var list = sessionStorage.getItem("addItem").split(",");
    if(list != ""){
      for (let i = 0; i < list.length; i++) {
        var obj = {};
        obj.itemID = list[i];
  
        var content = sessionStorage.getItem(list[i]).split("|");
        obj.itemName = content[0];
        obj.itemImg = content[1];
        obj.itemPrice = content[2];
        obj.itemNum = 1;
        obj.subtotal = obj.itemPrice * obj.itemNum;
        this.products = [...this.products, obj];
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.computeSubtotal()
    })
  },
  updated(){
    this.computeSubtotal()
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/mixin.scss";

.listRow {
  .prodInfo {
    text-align: center;
    align-items: center;
    display: flex;
    // justify-content: space-around;
    color: $keyBlack;
    padding: 20px 0;
    border-bottom: 1px solid $keyBlack;

    .prodPic {
      flex: 1.2;
      width: 7%;
      img {
        max-width: 60%;
      }
    }
    @include breakpoint(577) {
      div {
        font-size: 14px;
      }
    }
    .prodName {
      flex: 1.3;
    }
    .prodPrice {
      flex: 1;
    }
    .prodNumber {
      flex: 1;
      // width: 150px;
      input {
        width: 48px;
        text-align: center;
        margin: 0 5px;
      }
      svg {
        cursor: pointer;
        background-color: $keyBlue;
        color: $keyWhite;
        border-radius: 10px;
        margin: 0 5px;
        padding: 3px;
        font-size: 16px;
        vertical-align: middle;
      }
    }
    .subTotal {
      flex: 1;
    }
    .trashcan {
      flex: 1;
    }
  }
  .fa-trash {
    cursor: pointer;

    &:hover {
      color: #e6ae2c;
    }
  }
}
</style>