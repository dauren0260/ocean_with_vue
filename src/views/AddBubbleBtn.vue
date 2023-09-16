<template>
  <div :class="btnClassName" @mouseenter.self="bubbleBtn" :id="idText">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <span class="button--bubble__container">
      <router-link
        :to="pathText"
        class="button button--bubble"
        ref="buttonBubble"
      >
        {{ hrefText }}
      </router-link>
      <span :class="perOtherClass" class="button--bubble__effect-container">
        <span :class="perOtherClass" class="circle top-left left0"></span>
        <span :class="perOtherClass" class="circle top-left left1"></span>
        <span :class="perOtherClass" class="circle top-left left2"></span>

        <span :class="perOtherClass" class="button effect-button"></span>

        <span :class="perOtherClass" class="circle bottom-right right0"></span>
        <span :class="perOtherClass" class="circle bottom-right right1"></span>
        <span :class="perOtherClass" class="circle bottom-right right2"></span>
      </span>
    </span>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";
gsap.registerPlugin(SlowMo);

export default {
  name: "AddBubbleBtn",
  props: {
    hrefText: {
      type: String,
      required: true,
    },
    otherClass: {
      type: String,
      default: " ",
    },
    pathText: {
      type: String,
      default: " ",
    },
    idText: {
      type: String,
    },
  },
  computed: {
    btnClassName: {
      get() {
        return this.otherClass ? "bubbleBtn " + this.otherClass : "bubbleBtn";
      },
    },
    perOtherClass: {
      get() {
        return `${this.otherClass} ${this.idText}`;
      },
    },
  },

  methods: {
    bubbleBtn() {
      var tl = gsap.timeline();
      var tl2 = gsap.timeline();
      let btTl = gsap.timeline();
      btTl.paused(true);

      // let otherClass = this.otherClass? "."+this.otherClass : " "
      var otherClass = `.${this.otherClass}.${this.idText}`;

      tl.to(`.top-left${otherClass}`, {
        duration: 1.2,
        x: -25,
        y: -25,
        scaleY: 2,
        ease: SlowMo.ease.config(0.1, 0.7, false),
      });
      tl.to(`.left0${otherClass}`, {
        duration: 0.1,
        scale: 0.2,
        x: "+=6",
        y: "-=2",
      });
      tl.to(
        `.left1${otherClass}`,
        {
          duration: 0.1,
          scaleX: 1,
          scaleY: 0.8,
          x: "-=10",
          y: "-=7",
        },
        "-=0.1"
      );
      tl.to(
        `.left2${otherClass}`,
        {
          duration: 0.1,
          scale: 0.2,
          x: "-=15",
          y: "+=6",
        },
        "-=0.1"
      );
      tl.to(`.left0${otherClass}`, {
        duration: 1,
        scale: 0,
        x: "-=5",
        y: "-=15",
        opacity: 0,
      });
      tl.to(
        `.left1${otherClass}`,
        {
          duration: 1,
          scaleX: 0.4,
          scaleY: 0.4,
          x: "-=10",
          y: "-=10",
          opacity: 0,
        },
        "-=1"
      );
      tl.to(
        `.left2${otherClass}`,
        {
          duration: 1,
          scale: 0,
          x: "-=15",
          y: "+=5",
          opacity: 0,
        },
        "-=1"
      );

      var tlBt1 = gsap.timeline();
      var tlBt2 = gsap.timeline();

      tlBt1.set(`.top-left${otherClass}`, {
        x: 0,
        y: 0,
        rotation: -45,
      });
      tlBt1.add(tl);

      tl2.set(`.bottom-right${otherClass}`, {
        x: 0,
        y: 0,
      });
      tl2.to(`.bottom-right${otherClass}`, {
        duration: 1.1,
        x: 30,
        y: 30,
        ease: SlowMo.ease.config(0.1, 0.7, false),
      });
      tl2.to(`.right0${otherClass}`, {
        duration: 0.1,
        scale: 0.2,
        x: "-=6",
        y: "+=3",
      });
      tl2.to(
        `.right1${otherClass}`,
        {
          duration: 0.1,
          scale: 0.8,
          x: "+=7",
          y: "+=3",
        },
        "-=0.1"
      );
      tl2.to(
        `.right2${otherClass}`,
        {
          duration: 0.1,
          scale: 0.2,
          x: "+=15",
          y: "-=6",
        },
        "-=0.2"
      );
      tl2.to(`.right0${otherClass}`, {
        duration: 1,
        scale: 0,
        x: "+=5",
        y: "+=15",
        opacity: 0,
      });
      tl2.to(
        `.right1${otherClass}`,
        {
          duration: 1,
          scale: 0.4,
          x: "+=7",
          y: "+=7",
          opacity: 0,
        },
        "-=1"
      );
      tl2.to(
        `.right2${otherClass}`,
        {
          duration: 1,
          scale: 0,
          x: "+=15",
          y: "-=5",
          opacity: 0,
        },
        "-=1"
      );

      tlBt2.set(`.bottom-right${otherClass}`, {
        x: 0,
        y: 0,
        rotation: 45,
      });
      tlBt2.add(tl2);

      btTl.add(tlBt1);
      btTl.to(
        `.button.effect-button${otherClass}`,
        {
          duration: 0.8,
          scaleY: 1.1,
        },
        0.1
      );
      btTl.add(tlBt2, 0.2);
      btTl.to(
        `.button.effect-button${otherClass}`,
        {
          duration: 1.8,
          scale: 1,
          ease: "elastic.out(1.2, 0.4)",
        },
        1.2
      );

      btTl.timeScale(2.6);

      var restart = function () {
        btTl.restart();
      };

      var thisBtn = document
        .getElementById(`${this.idText}`)
        .querySelector(".button--bubble");
      thisBtn.removeEventListener("mouseenter", restart);
      thisBtn.addEventListener("mouseenter", restart);
    },
  },
};
</script>

<style lang="scss" src="../assets/scss/bubbleBtn.scss"></style>
<style lang="scss">
.shopPage {
  .shopBtn {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 5px auto;
    text-align: center;

    .bubbleBtn {
      width: 100px;
      box-sizing: border-box;
      margin: 0 5px;
    }

    .button {
      padding: 12px 10px;
      font-size: 12px;
    }

    .button--bubble__container {
      width: 100%;
    }

    .detail {
      .button--bubble__container .effect-button,
      .button--bubble__effect-container .circle {
        background: #176587;
      }

      .button--bubble:hover {
        color: #176587;
        background-color: #fefefe;
      }

      .button--bubble:hover + .button--bubble__effect-container .circle {
        background: #fefefe;
      }

      //觸摸時背景顏色
      .button--bubble:hover + .button--bubble__effect-container .button {
        background: #fefefe;
      }
    }
  }
}
</style>