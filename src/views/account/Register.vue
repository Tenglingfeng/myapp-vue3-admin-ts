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
                maxLength="6"
                v-model:value="account_form.code"
              />
            </a-col>
            <a-col :span="10">
              <a-button
                type="primary"
                block
                @click="getCode"
                :loading="btn_loading"
                :disabled="btn_disabled"
              >
                {{ button_text }}
              </a-button>
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
import { checkPhone } from "@/utils/validation";
import { message } from "ant-design-vue";
import { RuleObject } from "ant-design-vue/lib/form/interface";
import { defineComponent, reactive, toRefs } from "vue";

interface CodeBtn {
  button_text: string;
  btn_loading: boolean;
  btn_disabled: boolean;
  sec: number;
  timer: number;
}

interface Test {
  readonly name: string;
  age: number;
  id: number;
  [other: string]: unknown;
}

interface TestArr {
  0: string;
  1: number;
  2: boolean;
}
//局部组件
export default defineComponent({
  name: "register",
  components: {},
  setup() {
    async function validateUserName(
      _rule: RuleObject,
      value: string
    ): Promise<void> {
      if (!checkPhone(value)) {
        return Promise.reject("请输入正确的手机号");
      }
      return Promise.resolve();
    }

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
            trigger: "change",
            required: true,
          },
        ],
      },
    });

    const hanlerTest = (params: Test) => {
      console.log(
        params.name + "|" + params.age + "|" + params.id + params.other1
      );
    };

    const test = hanlerTest({
      name: "d",
      age: 12,
      id: 111,
      other1: "999",
    });

    const hanlerTestArr = (params: TestArr) => {
      console.log(params[0] + "|" + params[1] + "|" + params[2]);
    };
    const testArrr = hanlerTestArr({
      0: "1",
      1: 2,
      2: false,
    });

    const dataItem = reactive<CodeBtn>({
      button_text: "获取验证码",
      btn_loading: false,
      btn_disabled: false,
      sec: 10,
      //定时器
      timer: 0,
    });
    const form = toRefs(formConfig);
    const data = toRefs(dataItem);
    //表单提交
    const handleFinish = (value: unknown) => {
      console.log(value);
    };
    //获取验证码
    function getCode(): void {
      //用户名不存在的情况
      if (!formConfig.account_form.username) {
        message.warning({
          content: "用户名不能为空",
        });
      }

      //先判断定时器是否存在, 存在则先清除
      dataItem.timer && clearInterval(dataItem.timer);
      dataItem.timer = setInterval(() => {
        let s = dataItem.sec--;
        console.log(s);
        dataItem.button_text = `${s}秒`;
        if (s <= 0) {
          clearInterval(dataItem.timer);
          dataItem.button_text = "重新获取";
        }
      }, 1000);
    }

    return {
      ...form,
      ...data,
      handleFinish,
      getCode,
      test,
      testArrr,
    };
  },
});
</script>

<style lang="scss">
@import "./style.scss";
</style>
