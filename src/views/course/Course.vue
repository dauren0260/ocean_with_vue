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
export default {
    name:'Course',
    components: { HeaderComponent ,Maintain, Footer },
    mounted() {
        document.body.className = "course";
    },
    beforeDestroy(){
        document.body.className = " ";
    }
}
</script>

<style lang="scss">
.course{
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
    .course_nav {
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