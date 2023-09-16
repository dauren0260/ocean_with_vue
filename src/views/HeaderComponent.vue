<template>
  <header>
    <h1 class="logo">
      海中日子 Divein
      <router-link to="/frontIndex"
        ><img src="../assets/img/header/logo.png" alt="logo"
      /></router-link>
    </h1>
    <div class="nav">
      <ul>
        <li class="recommend_nav">
          <router-link to="/spotRefer">潛點推薦</router-link>
        </li>
        <li class="course_nav">
          <router-link to="/course">潛水課程</router-link>
        </li>
        <li class="shop_nav">
          <router-link to="/shop">潛水商城</router-link>
        </li>
        <li class="blog_nav">
          <router-link to="/diaryInside">潛水日誌</router-link>
        </li>
        <li class="game_nav">
          <router-link to="/gameIntro">下潛遊戲</router-link>
        </li>
      </ul>
    </div>
    <div class="memCart">
      <ul>
        <li class="userName">
          <span id="memName"></span><span id="spanLogin"></span>
        </li>
        <li class="memberIcon">
          <a id="loginA" href=""
            ><img src="../assets/img/header/member.png"
          /></a>
        </li>
        <li class="lili">
          <a class="cartlink" href="./cart.html">
            <img src="../assets/img/header/cart.png" />
          </a>
          <span id="itemCounting"></span>
        </li>
      </ul>
    </div>
    <button class="hamburger hamburger--3dxy" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
/*!
 * Hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  outline: none;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.is-active:hover {
  opacity: 0.7;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #fefefe;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #fefefe;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}

/* 3DXY */
.hamburger--3dxy .hamburger-box {
  perspective: 80px;
}

.hamburger--3dxy .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy .hamburger-inner::before,
.hamburger--3dxy .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger--3dxy.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg) rotateY(180deg);
}
.hamburger--3dxy.is-active .hamburger-inner::before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dxy.is-active .hamburger-inner::after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}

/* 3DXY Reverse */
.hamburger--3dxy-r .hamburger-box {
  perspective: 80px;
}

.hamburger--3dxy-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy-r .hamburger-inner::before,
.hamburger--3dxy-r .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger--3dxy-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);
}
.hamburger--3dxy-r.is-active .hamburger-inner::before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dxy-r.is-active .hamburger-inner::after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}

header {
  background-color: rgba(254, 254, 254, 0.15);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

h1 {
  font-size: 0;
}

.logo {
  img {
    height: 80px;
    padding: 5px 0;
    width: auto;
  }
}

.nav {
  ul {
    font-size: 0;
  }

  li {
    font-size: $baseFz;
    display: inline-block;
    margin: 0 20px;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: $keyWhite;
    line-height: 25px;
    vertical-align: middle;
    position: relative;
  }

  a::after{
    content: "";
    position: absolute;
    bottom: 0;
    display: none;
    background: $keyWhite;
    width: 100%;
    height: 7%;
  }

  a:hover::after{
    display: block;
  }
}

.memCart {
  li {
    display: inline-block;
    margin: 0 10px;
  }

  img {
    width: 30px;
  }
}

%iconBefore {
  content: "";
  display: inline-block;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  margin-right: 7px;
}

.recommend_nav::before {
  @extend %iconBefore;
  background-image: url("../assets/img/header/recmed.png");
}

.course_nav::before {
  @extend %iconBefore;
  background-image: url("../assets/img/header/lesson.png");
}

.shop_nav::before {
  @extend %iconBefore;
  background-image: url("../assets/img/header/shop.png");
}

.blog_nav::before {
  @extend %iconBefore;
  background-image: url("../assets/img/header/blog.png");
}

.game_nav::before {
  @extend %iconBefore;
  background-image: url("../assets/img/header/game.png");
}

header {
  background-color: rgba(22, 24, 29, 0.55);
}
.index .container .scene {
  background-image: url("../assets/img/index/spotGiLittle-02.png");
}
.animal:hover {
  cursor: pointer;
}
.index .containerCourse .post-module .description span {
  display: block;
}
.index .containerCourse .post-module {
  max-width: 300px;
}
.index .containerCourse .post-module .thumbnail,
.index .containerCourse .post-module {
  height: 280px;
}

.index .containerCourse .post-module .description span:first-child {
  font-weight: 700;
}
.index .art .descript {
  margin-bottom: 20px;
}

.index .sublife img {
  width: 50px;
}

.index .smallDiary .diarySolid .diaryTextP P {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;
}
.index .diaryCenter::after {
  bottom: auto;
}
#spanLogin:hover {
  cursor: pointer;
}
.memCart li {
  color: #fefefe;
}

.hamburger {
  display: none;
}

li::before,
li > a {
  vertical-align: middle;
}

@media screen and (max-width: 991px) {
  header {
    justify-content: space-between;
    padding: 0 3%;
  }

  .hamburger {
    display: inline-block;
  }
  .nav {
    display: none;
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translate(-50%);

    a {
      color: $keyBlue;
    }
  }

  .nav li {
    margin: 50px auto;
    display: block;
  }

  a::before {
    vertical-align: middle;
  }

  .memCart {
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translate(-40%);

    li {
      display: none;
    }
  }

  .nav a:hover {
    transform: translateX(-5px);
  }
}

@media screen and (min-width: 576px) {
  #swal2-title {
    margin-left: 0;
  }
}

@media screen and (max-width: 576px) {
  header {
    background-color: rgba(54,72,103);
  }
}
</style>