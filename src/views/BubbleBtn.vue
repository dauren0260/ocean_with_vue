<template>
  <div :class="btnClassName" @mouseenter.self="bubbleBtn" :id="idText">
    <input type="hidden" value="水中看得到|mask3@2x.png|2350" />
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
        @click="savePath(pathText)"
      >
        {{ hrefText }}
      </router-link>
      <span :class="otherClass" class="button--bubble__effect-container">
        <span :class="otherClass" class="circle top-left left0"></span>
        <span :class="otherClass" class="circle top-left left1"></span>
        <span :class="otherClass" class="circle top-left left2"></span>

        <span :class="otherClass" class="button effect-button"></span>

        <span :class="otherClass" class="circle bottom-right right0"></span>
        <span :class="otherClass" class="circle bottom-right right1"></span>
        <span :class="otherClass" class="circle bottom-right right2"></span>
      </span>
    </span>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";
gsap.registerPlugin(SlowMo);

export default {
  name: "BubbleBtn",
  props: {
    hrefText: {
      type: String,
      required: true,
    },
    otherClass: {
      type: String,
      required: true,
    },
    pathText: {
      type: String,
      default: " ",
    },
    idText: {
      type: String,
      default: ""
    },
  },
  computed: {
    btnClassName: {
      get() {
        return "bubbleBtn "+this.otherClass
      },
    },

  },
  mounted(){
    // console.log(this._vnode.children[0].data.attrs.value)
  },

  methods: {
    bubbleBtn() {
      var tl = gsap.timeline();
      var tl2 = gsap.timeline();
      let btTl = gsap.timeline();
      btTl.paused(true);

      let otherClass = this.otherClass? "." + this.otherClass : "";
      // let otherClass = "." + this.otherClass;

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


      var thisBtn = document.querySelector(`${otherClass} .button--bubble`)
      thisBtn.removeEventListener("mouseenter",restart)
      thisBtn.addEventListener("mouseenter", restart)
    },
    savePath(pathText){
      let path = String(pathText)
      sessionStorage.setItem('path',path)
    }
  },
};
</script>

<style lang="scss" src="../assets/scss/bubbleBtn.scss"></style>