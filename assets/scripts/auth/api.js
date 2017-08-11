'use strict'

const signUp = (data) => {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-up',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}
const signIn = (data) => {
  console.log(data)
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-in',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = (data) => {
  console.log(data)
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/change-password',
    method: 'PATCH',
    data: {
      'passwords': {
        'password': data.credentials.password,
        'new_password': data.credentials.new_password,
        'new_password_confirmation': data.credentials.new_password
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword
}
