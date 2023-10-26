<template>
  <div class="main-wrapper">
    <div class="signboard-wrapper">
      <div class="signboard">施工中</div>
      <div class="string"></div>
      <div class="pin pin1"></div>
      <div class="pin pin2"></div>
      <div class="pin pin3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Maintain",
}
</script>

<style>
.main-wrapper {
  font-size: 20px;
}

.signboard-wrapper {
  width: 150px;
  height: 90px;
  margin: 20px;
  position: relative;
  top: 50%;
  flex-shrink: 0;
  transform-origin: center 2.5vmin;
  animation: 1000ms init forwards, 1000ms init-sign-move ease-out 1000ms, 3000ms sign-move 2000ms infinite;
}

.signboard-wrapper .signboard {
  color: #ffffff;
  font-weight: bold;
  background-color: #ff5625;
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  position: absolute;
  bottom: 0;
  border-radius: 13px;
  text-shadow: 0 -0.015em #be2b00;
  box-shadow: 0 2vmin 4vmin 1vmin rgba(107, 107, 107, 0.8);
}

.signboard-wrapper .string {
  width: 50px;
  height: 50px;
  border: solid 2px #893d00;
  border-bottom: none;
  border-right: none;
  position: absolute;
  left: 50%;
  transform-origin: top left;
  transform: rotate(45deg);
}

.signboard-wrapper .pin {
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 50%;
}

.signboard-wrapper .pin.pin1 {
  background-color: #9f9f9f;
  top: 0;
  left: calc(50% - 5px);
}

.signboard-wrapper .pin.pin2,
.signboard-wrapper .pin.pin3 {
  background-color: #d83000;
  top: 35px;
}

.signboard-wrapper .pin.pin2 {
  left: 30px;
}

.signboard-wrapper .pin.pin3 {
  right: 30px;
}

@keyframes init {
  0% {
    transform: scale(0);
  }

  40% {
    transform: scale(1.1);
  }

  60% {
    transform: scale(0.9);
  }

  80% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes init-sign-move {
  100% {
    transform: rotate(3deg);
  }
}

@keyframes sign-move {
  0% {
    transform: rotate(3deg);
  }

  50% {
    transform: rotate(-3deg);
  }

  100% {
    transform: rotate(3deg);
  }
}
</style>