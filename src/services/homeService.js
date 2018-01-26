/**
 * Created by mapbar_front on 2018/1/4.
 */
// APP首页面展示接口
import CommonService from './commonService'

import Config from '../config'

function makeUrl (url) {
  return Config.serviceBaseUrl + url
}

// 地址列表
export function list (page, limit) {
  return CommonService.get(
    makeUrl('/goods/list'),
    {
      page,
      limit
    }
  )
}
