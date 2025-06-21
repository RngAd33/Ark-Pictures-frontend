// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** 图片删除 POST /pic/delete */
export async function deletePictureUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/pic/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 图片编辑 POST /pic/edit */
export async function editPictureUsingPost(
  body: API.PictureEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/pic/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** editPictureByBatch POST /pic/edit/batch */
export async function editPictureByBatchUsingPost(
  body: API.PictureEditByBatchRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/pic/edit/batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 根据id获取图片（管理员） GET /pic/getPI */
export async function getPictureByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPictureByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePicture_>('/pic/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 根据id获取图片（用户） GET /pic/getPI/vo */
export async function getPictureVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPictureVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePictureVO_>('/pic/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 分页获取图片列表（管理员，一般无需缓存） POST /pic/list/page */
export async function listPictureByPageUsingPost(
  body: API.PictureQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePagePicture_>('/pic/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 分页获取图片列表（用户，无缓存） POST /pic/list/page/vo */
export async function listPictureVoByPageUsingPost(
  body: API.PictureQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePagePictureVO_>('/pic/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 分页获取图片列表（用户，有缓存） POST /pic/list/page/vo/cache */
export async function listPictureVoByPageWithCacheUsingPost(
  body: API.PictureQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePagePictureVO_>('/pic/list/page/vo/cache', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** createPictureOutPaintingTask POST /pic/out_painting/create_task */
export async function createPictureOutPaintingTaskUsingPost(
  body: API.CreatePictureOutPaintingTaskRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCreateOutPaintingTaskResponse_>(
    '/pic/out_painting/create_task',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  )
}

/** getPictureOutPaintingTask GET /pic/out_painting/get_task */
export async function getPictureOutPaintingTaskUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPictureOutPaintingTaskUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseGetOutPaintingTaskResponse_>(
    '/pic/out_painting/get_task',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  )
}

/** doPictureReview POST /pic/review */
export async function doPictureReviewUsingPost(
  body: API.PictureReviewRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/pic/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** searchPictureByColor POST /pic/search/color */
export async function searchPictureByColorUsingPost(
  body: API.SearchPictureByColorRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListPictureVO_>('/pic/search/color', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** searchPictureByPicture POST /pic/search/pic */
export async function searchPictureByPictureUsingPost(
  body: API.SearchPictureByPictureRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListImageSearchResult_>('/pic/search/pic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取预置标签分类 GET /pic/tag_category */
export async function listPictureTagCategoryUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponsePictureTagCategory_>('/pic/tag_category', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 图片更新（仅管理员） POST /pic/update */
export async function updatePictureUsingPost(
  body: API.PictureUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/pic/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 图片上传（基于文件） POST /pic/upload */
export async function uploadPictureUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadPictureUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any }
) {
  const formData = new FormData()

  if (file) {
    formData.append('file', file)
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele]

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''))
        } else {
          formData.append(ele, JSON.stringify(item))
        }
      } else {
        formData.append(ele, item)
      }
    }
  })

  return request<API.BaseResponsePictureVO_>('/pic/upload', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  })
}

/** 图片上传（基于url） POST /pic/upload/url */
export async function uploadPictureByUrlUsingPost(
  body: API.PictureUploadRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePictureVO_>('/pic/upload/url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 抓取图片批量上传（仅管理员） POST /pic/upload/batch */
export async function uploadPictureByBatchUsingPost(
  body: API.PictureUploadByBatchRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>('/pic/upload/batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
