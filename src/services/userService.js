/**
 * Created by mapbar_front on 2018/1/3.
 */
import CommonService from './commonService'

import Config from '../config'

function makeUrl (url) {
  return Config.serviceBaseUrl + url
}

export function sendCode (phone) {
  return CommonService.post(
    makeUrl('login/sendCode'),
    {
      phone: phone
    }
  )
}

export function findPasswordByPhone (phone) {
  return CommonService.post(
    makeUrl('login/findPasswordByPhone'),
    {
      phone: phone
    }
  )
}

export function newPasswordByPhone (phone,password) {
  return CommonService.post(
    makeUrl('login/newPasswordByPhone'),
    {
      phone: phone,
      password
    }
  )
}

// 邮箱号码注册
export function regWithEmail (email,password) {
  return CommonService.post(
    makeUrl('login/regWithEmail'),
    {
      email: email,
      password
    }
  )
}

// 手机号码注册
export function regWithPhone (phone,password) {
  return CommonService.post(
    makeUrl('login/regWithPhone'),
    {
      phone,
      password
    }
  )
}

// 用户名注册
export function regUser (email,password) {
  return CommonService.post(
    makeUrl('login/regUser'),
    {
      username,
      password
    }
  )
}

// 用户名登录
export function LoginByName (username,password) {
  return CommonService.post(
    makeUrl('login/LoginByName'),
    {
      username,
      password
    }
  )
}

// 手机号码登录
export function LoginByPhone (email,password) {
  return CommonService.post(
    makeUrl('login/LoginByPhone'),
    {
      username,
      password
    }
  )
}

// 邮箱登录
export function LoginByEmail (email,password) {
  return CommonService.post(
    makeUrl('login/LoginByEmail'),
    {
      email,
      password
    }
  )
}


