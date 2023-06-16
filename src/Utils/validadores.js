const validarEmail = (email) => {
  return email?.toString().includes('@') && email?.toString().includes('.')
}

const validarPassword = (password) => {
  return password?.toString().length > 2
}

const validarName = (name) => {
  return name?.toString().length > 2
}

export {
  validarEmail,
  validarPassword,
  validarName,
}