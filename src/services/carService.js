/**
 * Created by mapbar_front on 2018/1/3.
 */

// 购物车相关接口
import CommonService from './commonService'

import Config from '../config'

function makeUrl (url) {
  return Config.serviceBaseUrl + url
}

export function add (user_id, shopping_id, count, shopping_name, shopping_price) {
  return CommonService.post(
    makeUrl('/car/add'),
    {
      user_id,
      shopping_id,
      count,
      shopping_name,
      shopping_price
    }
  )
}

export function fetch (userid) {
  return CommonService.post(
    makeUrl('/car/fetch'),
    {
      userid
    }
  )
}

