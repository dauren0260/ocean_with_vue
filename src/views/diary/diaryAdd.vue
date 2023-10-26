<template>
    <div>
        <HeaderComponent/>
        <Maintain />
        <Footer/>
    </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent";
import Footer from "../../components/Footer.vue";
import Maintain from "../../components/Maintain.vue";
export default{
    name:'diaryAdd',
    components: { HeaderComponent ,Maintain, Footer },
    mounted() {
        document.body.className = "diaryAdd";
    },
    beforeDestroy(){
        document.body.className = " ";
    }
}
</script>

<style lang="scss">
.diaryAdd{
    #app>div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }

    .signboard-wrapper{
        margin: 0 auto;
    }

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

}
</style>