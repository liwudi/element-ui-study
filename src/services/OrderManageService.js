/**
 * Created by mapbar_front on 2018/1/4.
 */
// 订单管理相关接口
import CommonService from './commonService'

import Config from '../config'

function makeUrl (url) {
  return Config.serviceBaseUrl + url
}

// 获取订单列表(分页、查找)
export function list (page, limit, order_no, user_id) {
  return CommonService.get(
    makeUrl('/order/list'),
    {
      page,
      limit,
      order_no,
      user_id
    }
  )
}

// 订单信息更新
export function update (page, limit, order_no, user_id) {
  return CommonService.post(
    makeUrl('/order/update'),
    {
      id,
      status,
      wl_no
    }
  )
}

// 创建订单
export function add (user_id, username, price_cu, addr_id, orderInfo) {
  return CommonService.post(
    makeUrl('/order/add'),
    {
      user_id,
      username,
      price_cu,
      addr_id,
      orderInfo
    }
  )
}

