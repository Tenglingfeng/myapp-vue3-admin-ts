<template>
  <div class="account">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="formRef" v-bind="formConfig.layout">
        <a-form-item has-feedback label="用户名" name="pass">
          <a-input type="text" autocomplete="off"/>
        </a-form-item>


        <a-form-item has-feedback label="密码" name="pass">
          <a-input type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" html-type="submit" block>登录</a-button>
        </a-form-item>
      </a-form>
      <div class="text-center fs-12">
        <a class="color-white" >忘记密码</a> |
        <a class="color-white" href="">注册</a>
      {{count}}

      <a-button @click="set()">按钮</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup(props) {

    let count = ref<string>("10");

    console.log(count.value);

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

    const set = () => {
      count.value= count.value+"20"+1;
    }
    console.log(data);
    return {  
      formConfig,count,set
    };
  },
});
</script>

<style lang="scss">
@import "./style.scss";
</style>
