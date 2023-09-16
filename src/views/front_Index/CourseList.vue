<template>
  <div class="post-module">
    <a href="javascript:;">
      <div class="thumbnail">
        <div class="date">
          <div class="day">09</div>
          <div class="month">Sep</div>
        </div>
        <img src="../../assets/img/class/classpic01.jpg" />
      </div>

      <div class="post-content">
        <div class="category">綠島</div>
        <span class="title">OW考照班</span>
        <p class="subTitle">進入水下世界第一張證照</p>
        <p class="description">
          <span>課程價格：1650</span>
          <span>報名起始日：2023-07-05</span>
          <span>報名截止日：2023-08-26</span>
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CourseList",
};
</script>

<style lang="scss">
.containerCourse {
  .courseList {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 70%;
  }

  .post-module {
    position: relative;
    min-width: 270px;
    height: 280px;
    transition: all 0.3s linear 0s;
    margin: 20px;
    max-width: 300px;

    &:hover .description {
      display: block;
      height: 75.5625px;
      opacity: 1;
    }

    &:hover .thumbnail img{
        transform: scale(1.1);
        opacity: .6;
    }

    a {
      display: inline-block;
    }

    .thumbnail {
      background: #000;
      height: 280px;
      overflow: hidden;

      .date {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 1;
        background: #e6ae2c;
        width: 55px;
        height: 55px;
        padding: 10px 0;
        border-radius: 100%;
        color: #fff;
        text-align: center;
        box-sizing: border-box;

        .day {
          font-size: 18px;
        }

        .month {
          font-size: 12px;
          text-transform: uppercase;
        }
      }

      img {
        display: block;
        width: 120%;
        transition: all 0.3s linear 0s;
      }
    }

    .post-content {
      position: absolute;
      bottom: 0;
      background: #fff;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      transition: all 0.3s linear 0s;
    }

    .category {
      position: absolute;
      top: -34px;
      left: 0;
      background: #e6ae2c;
      padding: 10px 15px;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
    }

    .title {
      padding: 0 0 10px;
      color: #333;
      font-size: 20px;
    }

    .subTitle {
      margin-top: 10px;
      padding: 0 0 10px;
      color: #e6ae2c;
      font-size: 18px;
    }

    p {
      letter-spacing: 0;
    }

    .description {
      display: none;
      color: #666;
      font-size: 14px;
      line-height: 1.8em;

      span {
        display: block;

        :first-child {
          font-weight: 700;
        }
      }
    }
  }
}
</style>