<template>
  <div class="di"><a class="aaa">这是一个滑动验证</a></div>
</template>
import "./captcha";
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Captcha",
});
</script>

<!-- scoped 局部样式应用  不加则会全局应用-->
<style lang="scss" scoped>
.di {
  width: 100%;
  background-color: blue;
}
.aaa {
  font-size: 15px;
  width: 100%;
}
</style>
