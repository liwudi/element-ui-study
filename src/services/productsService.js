/**
 * Created by mapbar_front on 2018/1/3.
 */

// 商品信息相关接口
import CommonService from './commonService'

import Config from '../config'

function makeUrl (url) {
  return Config.serviceBaseUrl + url
}

// 商品详情
export function detail (id = 408) {
  return CommonService.get(
    makeUrl('/goods/detail'),
    {
      id: id
    }
  )
}

// 删除商品
export function deletePro (id) {
  return CommonService.post(
    makeUrl('/goods/delete'),
    {
      id: id
    }
  )
}

// 修改商品
export function update (id, goodsname, price, stock, sale_ty, status, description) {
  return CommonService.post(
    makeUrl('/goods/update'),
    {
      id,
      goodsname,
      price,
      stock,
      sale_ty,
      status,
      description
    }
  )
}

// 添加商品
export function add (goodsname, price, stock, sale_ty, status, description, pic0) {
  return CommonService.post(
    makeUrl('/goods/add'),
    {
      goodsname,
      price,
      stock,
      sale_ty,
      status,
      description,
      pic0
    }
  )
}

// 根据id获取商品
export function getModelById (id = 408) {
  return CommonService.get(
    makeUrl('/goods/getModelById'),
    {
      id: id
    }
  )
}

// 根据用户id获取店铺
export function listByUser (uid) {
  return CommonService.get(
    makeUrl('/shop/listByUser'),
    {
      uid: uid
    }
  )
}

// 多文件上传@todo:自己封装的这个有点问题
export function multipleUpload (id = 408) {
  return CommonService.post(
    makeUrl('/goods/multipleUpload'),
    {
      id: id
    }
  )
}
// 单文件上传@todo:自己封装的这个有点问题
export function singleUpload (id = 408) {
  return CommonService.post(
    makeUrl('/goods/singleUpload'),
    {
      id: id
    }
  )
}

// 获取商品列表分页
export function listByPage (page, limit, goodsname) {
  return CommonService.get(
    makeUrl('/shopping/listByPage'),
    {
      page,
      limit,
      goodsname
    }
  )
}

// 商铺列表分页获取
export function listByPage_shops (page, limit) {
  return CommonService.get(
    makeUrl('/shop/listByPage'),
    {
      page,
      limit
    }
  )
}
