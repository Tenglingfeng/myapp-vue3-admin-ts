<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="formRef"
        v-bind="layout"
        :model="account_form"
        :rules="rules_form"
        @finish="handleFinish"
      >
        <a-form-item has-feedback label="用户名" name="username">
          <a-input
            type="text"
            autocomplete="off"
            v-model:value="account_form.username"
          />
        </a-form-item>
        <a-form-item has-feedback label="密码" name="password">
          <a-input
            type="password"
            autocomplete="off"
            v-model:value="account_form.password"
          />
        </a-form-item>
        <a-form-item has-feedback label="确认密码" name="password2">
          <a-input
            type="password"
            autocomplete="off"
            v-model:value="account_form.password2"
          />
        </a-form-item>

        <a-form-item has-feedback label="验证码">
          <a-row :gutter="15">
            <a-col :span="14">
              <a-input
                type="text"
                autocomplete="off"
                v-model:value="account_form.code"
              />
            </a-col>
            <a-col :span="10">
              <a-button type="primary" block>获取验证码</a-button>
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" html-type="submit" block>注册</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
//import { checkPhone } from "@/utils/validation";
import { RuleObject } from "ant-design-vue/lib/form/interface";
import { defineComponent, reactive, toRefs } from "vue";
//局部组件
export default defineComponent({
  name: "register",
  components: {},
  setup(props) {
    let validateUserName = async (_rule: RuleObject, value: string) => {
      // if (!checkPhone(value)) {
      //   console.log(value);
      //   return Promise.reject("请输入正确的手机号");
      // }
      return Promise.resolve();
    };

    const formConfig = reactive({
      layout: {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 14,
        },
      },
      account_form: {
        username: "",
        password: "",
        password2: "",
        code: "",
      },
      rules_form: {
        username: [
          {
            validator: validateUserName,
            required: true,
            message: "Please input username",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input password",
          },
        ],
        password2: [
          {
            //validator: validatePass,
            trigger: "change",
            required: true,
          },
        ],
      },
    });
    const data = toRefs(formConfig);

    //表单验证
    const handleFinish = () => {
      alert(111);
    };

    return {
      ...data,
      handleFinish,
    };
  },
});
</script>

<style lang="scss">
@import "./style.scss";
</style>
