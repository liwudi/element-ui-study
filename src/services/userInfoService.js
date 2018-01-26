/**
 * Created by mapbar_front on 2018/1/4.
 */
// 用户信息相关接口
import CommonService from './commonService'

import Config from '../config'

function makeUrl (url) {
  return Config.serviceBaseUrl + url
}

// 添加用户接口
export function add (username, password, sex, email, phone, remark) {
  return CommonService.post(
    makeUrl('/user/add'),
    {
      username,
      password,
      sex,
      email,
      phone,
      remark
    }
  )
}

// 修改用户接口
export function update (id, username, sex, email, phone, remark, portrait) {
  return CommonService.post(
    makeUrl('/user/add'),
    {
      id,
      username,
      password,
      sex,
      email,
      phone,
      remark,
      portrait
    }
  )
}

// 获取所有用户信息的接口
export function list () {
  return CommonService.get(
    makeUrl('/user/list'),
    {

    }
  )
}

// 获取所有用户信息的接口
export function listByPage (page, limit, username) {
  return CommonService.get(
    makeUrl('/user/listByPage'),
    {
      page,
      limit,
      username
    }
  )
}

// 获取所有用户信息的接口
export function deleteUser (userId) {
  return CommonService.post(
    makeUrl('/user/delete'),
    {
      userId
    }
  )
}

// 获取所有用户信息的接口
export function getUserById (userId) {
  return CommonService.get(
    makeUrl('/user/getUserById'),
    {
      userId
    }
  )
}


