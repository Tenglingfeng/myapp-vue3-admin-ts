<template>
  <div class="account">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="formRef" v-bind="layout">
        <a-form-item has-feedback label="用户名" name="pass">
          <a-input type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="密码" name="pass">
          <a-input type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="验证码" name="pass">
          <Captcha></Captcha>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" html-type="submit" block>登录</a-button>
        </a-form-item>
      </a-form>
      <div class="text-center fs-12">
        <a class="color-white aaa">忘记密码</a> |
        <router-link to="/Register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
//局部组件
import Captcha from "@/components/Captcha/index.vue";
export default defineComponent({
  name: "Home",
  components: { Captcha },
  setup() {
    const formConfig = reactive({
      layout: {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 14,
        },
      },
    });
    const data = toRefs(formConfig);
    return {
      ...data,
    };
  },
});
</script>

<style lang="scss">
@import "./style.scss";
</style>
