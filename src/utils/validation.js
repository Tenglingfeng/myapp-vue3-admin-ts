/**
 *
 * @param {手机号}} value
 * @returns
 */
export function checkPhone(value) {
  let regPhone = /^1[3456789]\d{9}$/;
  return regPhone.test(value);
}

/**
 *
 * @param {密码} value
 * @returns
 */
export function checkPassword() {
  return true;
}

