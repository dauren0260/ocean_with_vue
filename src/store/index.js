import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
    item_Count_Cart(context,value) {
        context.commit("ITEM_COUNT_CART",value)
    },
}
const mutations = {
    ITEM_COUNT_CART(state,value) {
        if (value) {
            var productsNum = sessionStorage.getItem("addItem").split(",");
            if(productsNum != ""){
                state.itemCounting = productsNum.length;
            }else{
                state.itemCounting = 0
            }
        // }else{
        //     var productsNum = sessionStorage.getItem("addItem");
        //     state.itemCounting = productsNum.length;
        //     // console.log(typeof productsNum)
        }
    },
}
const state = {
    itemCounting: 0,
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})