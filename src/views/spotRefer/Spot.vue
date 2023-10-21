<template>
  <div>
    <HeaderComponent />
    <main class="spotMain">
    <section>
      <div class="box spotContents" id="box">
        <router-view></router-view>
      </div>
      <div class="box spotListBlock" >
            <ul class="spotList" >
              <li v-for="(area, index) of areaList" :key="index">
                <router-link :to="{ name: 'SpotArea', params: { stationId: area.stationId }}" class="spotText" >{{ area.stationName }}</router-link>
              </li>
              <!-- <li><router-link :to="`/spot/spotArea?${stationId=467660}`" class="spotText" spotStationId="467660">綠島</router-link></li>
              <li><router-link to="/spot/spotArea" class="spotText" spotStationId="467620">蘭嶼</router-link></li>
              <li><router-link to="/spot/spotArea" class="spotText" spotStationId="467590">墾丁</router-link></li>
              <li><router-link to="/spot/spotArea" class="spotText" spotStationId="467590">小琉球</router-link></li>
              <li><router-link to="/spot/spotArea" class="spotText" spotStationId="466900">東北角</router-link></li> -->
            </ul>
      </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent";
import Footer from "../../components/Footer.vue";

export default {
  name: "Spot",
  components: { 
    HeaderComponent, 
    Footer,
  },
  data(){
    return {
      areaList:[
        {
          stationId: 467660,
          stationName: '綠島'
        },
        {
          stationId: 467620,
          stationName: '蘭嶼'
        },
        {
          stationId: 467790,
          stationName: '墾丁'
        },
        {
          stationId: 'C0R640',
          stationName: '小琉球'
        },
        {
          stationId: 466900,
          stationName: '東北角'
        },
      ]
    } 
  },
  mounted() {
    document.body.className = "spot";
    this.$router.push('/spot/spotArea/467660').catch(()=>{})
  },
  beforeDestroy() {
    document.body.className = " ";
  },
};
</script>

<style lang="scss">
.spot {
  background-image: url(../../assets/img/spot/spotBanner_1-1.jpg);

  header{
    .recommend_nav{
      a{
        font-weight: 700;
      }
      a::after{
        display: block;
      }
    }
  }
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


.spot .spotListBlock {
    display: block;
    width: 100%;
    margin-top: 2%
}

.spot .spotListBlock .spotList {
    display: flex;
    flex-direction: row;
    margin: 0 auto
}

.spot .spotListBlock .spotList li {
    flex: 5;
    border-top: 0;
    text-align: center
}

.spot .spotListBlock .spotList li a {
    display: block;
    margin: 0 auto;
    font-size: 16px;
    color: #a5a5a5;
    padding: 40px 30px
}

.spot .spotListBlock .spotList li a:hover {
    color: #fefefe
}

@media all and (max-width: 1200px) {
    .spot .spotListBlock .spotList li a {
        padding-top:10px
    }
}

.spot .spotListBlock .spotList li:first-child {
    border-left: 0
}



.spot .spotList li a {
    border-top: 5px solid #fefefe;
    margin-top: -5px
}

.spot .spotList li a.router-link-exact-active {
    color: #fefefe;
    background-color: transparent;
    border: none;
    margin-top: 5px
}
</style>