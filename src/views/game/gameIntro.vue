<template>
  <div>
    <HeaderComponent />
    <main class="gameMain">
      <div class="choseRoleRwd">
        <h2>選擇角色/組合裝備</h2>
        <p class="chose Rwd">用50元搭配出最棒的能力吧！(每種裝備限購一款)</p>
      </div>
    </main>
    <Maintain/>
    <Footer/>
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent";
import Footer from "../../components/Footer.vue";
import Maintain from "../../components/Maintain.vue";

export default {
  name: "gameIntro",
  components: { HeaderComponent, Footer, Maintain },
  mounted() {
        document.body.className = "gameIntro";
    },
    beforeDestroy(){
        document.body.className = " ";
    }
};
</script>

<style lang="scss">
.gameIntro{
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
    .game_nav {
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