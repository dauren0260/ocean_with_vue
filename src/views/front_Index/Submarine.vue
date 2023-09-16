<template>
  <div class="submarine">
    <span class="light"></span>
    <div class="courseBox">
      <div class="animal">
        <img class="windows" src="../../assets/img/index/window_new-01.png" />
        <img class="subLife" src="../../assets/img/index/fish_1018A.png" />
      </div>
      <div class="courseTxt">體驗潛水</div>
    </div>
    <div class="courseBox">
      <div class="animal">
        <img class="windows" src="../../assets/img/index/window_new-01.png" />
        <img class="subLife" src="../../assets/img/index/fish_1018B.png" />
      </div>
      <div class="courseTxt">OW證照</div>
    </div>
    <div class="courseBox">
      <div class="animal">
        <img class="windows" src="../../assets/img/index/window_new-01.png" />
        <img class="subLife" src="../../assets/img/index/fish_1018C.png" />
      </div>
      <div class="courseTxt">AOW證照</div>
    </div>
    <div class="courseBox">
      <div class="animal">
        <img class="windows" src="../../assets/img/index/window_new-01.png" />
        <img class="subLife" src="../../assets/img/index/fish_1018D.png" />
      </div>
      <div class="courseTxt">OW+AOW</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Submarine",
};
</script>

<style lang="scss">
.containerCourse {
    
  .submarine {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 320px;
    position: relative;
    background-image: url(../../assets/img/index/submarineGray.png);
    background-size: 60%;
    background-position: top center;
    background-repeat: no-repeat;
    animation: submarineMove 5s linear infinite;
  }

  .light {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 45.5%;
    z-index: 2;
    clip-path: polygon(50% 0, 28% 100%, 76% 100%);
    width: 10%;
    height: 60%;
    background-color: rgba(255, 245, 220, 0.2);
    transform-origin: top;
    animation: detectLight 3.5s linear infinite alternate;
  }

  .courseBox {
    margin: 160px 20px 0;
    height: 100px;
  }

  .animal {
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    
    :nth-child(2) {
      margin-left: -50px;
    }
    
    .windows {
      border-radius: 50%;
    }

    img {
      width: 80px;
    }

    .subLife {
      position: absolute;
      left: 66%;
      top: 20%;
      transform-style: preserve-3d;
      transform: perspective(500px);
    }
  }

  .courseTxt {
    text-align: center;
    margin-top: 10px;
  }
}

@media (max-width: 992px){
  .containerCourse{

    .submarine {
      background-image: none;
      margin-top: 40px;
      padding-top: 0;
      height: auto;
      animation: none;
    }

    .courseBox{
      margin: 40px 20px 0;
    }

    .light{
      display: none;
    }

  } 


}

@keyframes submarineMove {
  0% {
    transform: translate(-20px);
  }

  25% {
    transform: translate(0);
  }
  50% {
    transform: translate(20px);
  }
  75% {
    transform: translate(0);
  }
  100% {
    transform: translate(-20px);
  }
}

@keyframes detectLight {
  0% {
    height: 85%;
    transform: rotate(50deg);
  }
  33% {
    height: 65%;
    transform: rotate(30deg);
  }
  66% {
    height: 65%;
    transform: rotate(-5deg);
  }
  100% {
    height: 72%;
    transform: rotate(-35deg);
  }
}
</style>