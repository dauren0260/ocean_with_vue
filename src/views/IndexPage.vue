<template>
<div class="indexPage">
  <div class="front divelogobg">
    <img src="../assets/img/front/diveinlogo.png" />
  </div>

  <div class="front container">
    <div class="front bub">
      <div class="front frontBubble">
        <router-link to="/frontIndex">
          <img class="front FBubble" src="../assets/img/front/frontbubble.png" />
        </router-link>
      </div>

      <div class="front backBubble">
        <a href="./admin.html">
          <img class="front FBubble" src="../assets/img/front/backbubble.png" />
        </a>
      </div>
    </div>
  </div>

  <div id="parallax">
    <!-- school of fish -->
    <div class="front layer1 speed1"></div>
    <!-- fish + jellyfish -->
    <div class="front layer2 speed3"></div>
    <!-- coral layer 1 -->
    <div class="front layer3"></div>
    <!-- diver man right -->
    <div class="front layer4 speed2"></div>
    <!-- little fish by diver -->
    <div class="front layer5 speed4"></div>
    <!-- coral layer 2 -->
    <div class="front layer6"></div>
    <!-- seahorse -->
    <div class="front layer7 speed5"></div>
    <!-- coral layer 3 -->
    <div class="front layer8"></div>
    <!-- 3 fish -->
    <div class="front layer9 speed2"></div>
  </div>
</div> 
</template>

<script>
export default {
  name:'IndexPage'
};
</script>

<style scoped>

.indexPage{
    position: relative;
    overflow: hidden;
    background: url(../assets/img/front/undership.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    min-height: 100vh;
}

a {
  text-decoration: none;
  color: white;
  font-size: 60px;
}

.divelogobg {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  width: 323px;
}

.divelogobg > img {
  width: 100%;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  z-index: 10;
}

.bub{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.front .frontBubble::before {
    content: '前台';
    display: inline-block;
    position: absolute;
    width: 250px;
    height: 250px;
    line-height: 250px;
    text-align: center;
    font-size: 40px;
    color: #fefefe;
}

.front .backBubble::before {
    content: '後台';
    display: inline-block;
    position: absolute;
    width: 250px;
    height: 250px;
    line-height: 250px;
    text-align: center;
    font-size: 40px;
    color: #fefefe;
}

.frontBubble:hover .FBubble,
.backBubble:hover .FBubble{
  /* border-radius: 50%;
  border: 4px solid rgb(247, 233, 165);
  filter: blur(5px); */
  animation-name: BIG;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes BIG{
  0%{
    transform: scale(1.2);
  }
  50%{
    transform: scale(1.3);
  }
  100%{
    transform: scale(1.2);
  }
}

/*.backBubble > a > img:hover, 
  .frontBubble > a > img:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
} */


.frontBubble > a > img,
.backBubble > a > img {
  width: 250px;
  /* -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s; */

  animation-name: bigsmall;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes bigsmall{
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
}

.frontBase {
  font-size: 60px;
  top: 0;
  position: absolute;
  left: 5%;
  color: #FEFEFE;
}

.backBase {
  font-size: 60px;
  top: 0;
  position: absolute;
  left: 8%;
  color: #FEFEFE;
}

#parallax {
  
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.layer1 {
  position: absolute;
  bottom: 0;
  background: url(../assets/img/front/la01.png) no-repeat;
  width: 100%;
  height: 23.125rem;
}

.layer2 {
  position: absolute;
  bottom: 0;
  right: 0;
  background: url(../assets/img/front/la02.png) no-repeat;
  width: 100%;
  height: 23.75rem;
}

.layer3 {
  position: absolute;
  bottom: 0;
  background: url(../assets/img/front/la03.png) no-repeat;
  width: 100%;
  height: 26.875rem;
}

.layer4 {
  position: absolute;
  bottom: 0;
  left: 0;
  background: url(../assets/img/front/la04.png) no-repeat;
  width: 100%;
  height: 34.875rem;
}

.layer5 {
  position: absolute;
  bottom: 0;
  background: url(../assets/img/front/la05.png) no-repeat;
  width: 100%;
  height: 16.75rem;
}

.layer6 {
  position: absolute;
  bottom: 0;
  background: url(../assets/img/front/la06.png) no-repeat;
  width: 100%;
  height: 28.125rem;
}

.layer7 {
  position: absolute;
  bottom: 0;
  right: 0;
  background: url(../assets/img/front/la07.png) no-repeat;
  width: 100%;
  height: 13.875rem;
}

.layer8 {
  position: absolute;
  bottom: 0;
  background: url(../assets/img/front/la08.png) no-repeat;
  width: 100%;
  height: 21.875rem;
}

.layer9 {
  position: absolute;
  bottom: 0;
  background: url(../assets/img/front/la09.png) no-repeat;
  width: 100%;
  height: 15.625rem;
}

.speed1 {
  animation: sea 15s linear infinite;
  -webkit-animation: sea 15s linear infinite;
  -moz-animation: sea 15s linear infinite;
  -o-animation: sea 15s linear infinite;
}

.speed2 {
  animation: sea 40s linear infinite;
  -webkit-animation: sea 40s linear infinite;
  -moz-animation: sea 40s linear infinite;
  -o-animation: sea 40s linear infinite;
}

.speed3 {
  animation: opposite 23s cubic-bezier(0.41, 0.49, 0.6, 0.61) infinite;
  -webkit-animation: opposite 23s cubic-bezier(0.41, 0.49, 0.6, 0.61) infinite;
  -moz-animation: opposite 23s cubic-bezier(0.41, 0.49, 0.6, 0.61) infinite;
  -o-animation: opposite 23s cubic-bezier(0.41, 0.49, 0.6, 0.61) infinite;
}

.speed4 {
  animation: sea 39s cubic-bezier(0.27, 0.34, 0.92, 0.54) infinite;
  -webkit-animation: sea 39s cubic-bezier(0.27, 0.34, 0.92, 0.54) infinite;
  -moz-animation: sea 39s cubic-bezier(0.27, 0.34, 0.92, 0.54) infinite;
  -o-animation: sea 39s cubic-bezier(0.27, 0.34, 0.92, 0.54) infinite;
}

.speed5 {
  animation: opposite 50s linear infinite;
  -webkit-animation: opposite 50s linear infinite;
  -moz-animation: opposite 50s linear infinite;
  -o-animation: opposite 50s linear infinite;
}

@keyframes sea {
  0% {
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
  }
  100% {
    transform: translate(100%, 0);
    -webkit-transform: translate(100%, 0);
    -moz-transform: translate(100%, 0);
    -o-transform: translate(100%, 0);
    -ms-transform: translate(100%, 0);
  }
}

@-webkit-keyframes sea {
  0% {
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
  }
  100% {
    transform: translate(100%, 0);
    -webkit-transform: translate(100%, 0);
    -moz-transform: translate(100%, 0);
    -o-transform: translate(100%, 0);
    -ms-transform: translate(100%, 0);
  }
}

@keyframes opposite {
  0% {
    transform: translate(100%, 0);
    -webkit-transform: translate(100%, 0);
    -moz-transform: translate(100%, 0);
    -o-transform: translate(100%, 0);
    -ms-transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
  }
}

@-webkit-keyframes opposite {
  0% {
    transform: translate(100%, 0);
    -webkit-transform: translate(100%, 0);
    -moz-transform: translate(100%, 0);
    -o-transform: translate(100%, 0);
    -ms-transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
  }
}

@media all and (max-width: 1200px) {
  .frontBubble p {
    left: 17%;
    top: 37%;
  }
  .backBubble p {
    position: absolute;
    right: 20%;
    top: 37%;
  }
}

@media all and (max-width: 768px) {
  .frontBubble p {
    left: 17%;
    top: 37%;
  }
  .backBubble p {
    position: absolute;
    right: 17%;
    top: 37%;
  }
}

@media all and (max-width: 576px) {
  .divelogobg {
    width: 130px;
  }
  .container {
    /* -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center; */
    top: 30%;
    height: auto;
  }
  a {
    font-size: 40px;
  }
  .bub{
    flex-direction: column;
    justify-content: space-evenly;
    height: 65%;
  }
  .frontBubble {
    margin-bottom: 30px;
  }

  .frontBubble > a > img {
    width: 150px;
    -webkit-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
  }
  .frontBubble > a > img:hover {
    -webkit-transform: scale(1.05);
            transform: scale(1.05);
  }

  .backBubble > a > img {
    width: 150px;
    -webkit-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
  }
  .backBubble > a > img:hover {
    -webkit-transform: scale(1.05);
            transform: scale(1.05);
  }

  
  .front .frontBubble::before, .front .backBubble::before{
    width: 140px;
    line-height: 140px;
  }
}

@media all and (max-width: 375px) {

}
</style>