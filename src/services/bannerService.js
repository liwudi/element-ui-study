/**
 * Created by mapbar_front on 2018/1/4.
 */
// banner管理相关接口
import CommonService from './commonService'

import Config from '../config'

function makeUrl (url) {
  return Config.serviceBaseUrl + url
}

// 添加banner图片
export function add (title, imgpath, isshow, description) {
  return CommonService.get(
    makeUrl('/banner/add'),
    {
      title,
      imgpath,
      isshow,
      description
    }
  )
}

// 修改banner图片接口
export function update (title, imgpath, isshow, description) {
  return CommonService.post(
    makeUrl('/banner/update'),
    {
      id,
      title,
      imgpath,
      isshow,
      description
    }
  )
}

// 删除banner图片
export function deleteImage (id) {
  return CommonService.post(
    makeUrl('/banner/delete'),
    {
      id
    }
  )
}

// 获取所有banner图片
export function list () {
  return CommonService.post(
    makeUrl('/banner/list'),
    {

    }
  )
}


// 根据id获取banner图片
export function getModelById (id) {
  return CommonService.get(
    makeUrl('/banner/getModelById'),
    {
      id
    }
  )
}
