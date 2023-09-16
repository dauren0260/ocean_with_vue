<template>
  <div>
    <HeaderComponent />
    <main class="gameMain">
      <div class="choseRoleRwd">
        <h2>選擇角色/組合裝備</h2>
        <p class="chose Rwd">用50元搭配出最棒的能力吧！(每種裝備限購一款)</p>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent";

export default {
  name: "gameIntro",
  components: { HeaderComponent },
};
</script>

<style>
</style>