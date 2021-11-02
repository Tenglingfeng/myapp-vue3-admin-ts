/**
 * 
 * @param {手机号} value 
 * @returns 
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function checkPhone(value: string): boolean {
  const regPhone = /^1[3456789]\d{9}$/;
  return regPhone.test(value);
}

export function checkPassword(): boolean {
  return true;
} 