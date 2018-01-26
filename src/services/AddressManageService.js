/**
 * Created by mapbar_front on 2018/1/4.
 */

// 地址管理
import CommonService from './commonService'

import Config from '../config'

function makeUrl (url) {
  return Config.serviceBaseUrl + url
}

// 地址列表
export function list (userid) {
  return CommonService.get(
    makeUrl('/address/list'),
    {
      userid
    }
  )
}

// 增加地址
export function add (user_id, addr, real_name, mobile, is_default, alias) {
  return CommonService.post(
    makeUrl('/address/add'),
    {
      user_id,
      addr,
      real_name,
      mobile,
      is_default,
      alias
    }
  )
}

// 修改地址
export function update (id, addr, real_name, is_default, alias, mobile) {
  return CommonService.post(
    makeUrl('/address/update'),
    {
      id,
      addr,
      real_name,
      is_default,
      alias,
      mobile
    }
  )
}
