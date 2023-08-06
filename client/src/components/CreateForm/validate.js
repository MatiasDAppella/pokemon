export const validateName = (name) => {
  const validation = /^[a-zA-Z]+( [a-zA-Z]+)*( )?$/
  return (validation.test(name) || name === "") && name.length <= 20
};

export const validateInteger = (integer) => {
  const validation = /^\d{0,4}$/
  return (validation.test(integer))
};

export const removeInitialCero = (integer) => {
  return Number(integer.toString().replace(/^0+/, ''))
}