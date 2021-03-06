import HTTP_METHOD from './http-method'
import { message } from 'antd'

async function errHandler (res) {
  const body = await res.json()
  message.error(body.message)
  return {status: res.status}
}

export const get = async (url) => {
  try {
    const res = await fetch(url, {
      method: HTTP_METHOD.GET,
      credentials: 'include',
      headers: new Headers({
        'Accept': 'application/json;charset=utf-8',
        'id': 26,
        'userName': 'aaa',
        'roles': [1, 2, 9]
      })
    })

    if (!res.ok) {
      return errHandler(res)
    }

    const body = await res.json()
    const status = res.status

    return Object.assign({}, {body}, {status})
  } catch (ex) {
    // alert(ex)
    return {status: ex.status}
  }
}

export const del = async (url) => {
  try {
    const res = await fetch(url, {
      method: HTTP_METHOD.DELETE,
      credentials: 'include',
      headers: new Headers({
        'Accept': 'application/json;charset=utf-8',
        'id': 26,
        'userName': 'aaa',
        'roles': [1, 2, 9]
      })
    })
    return {status: res.status}
  } catch (ex) {
    // alert(ex)
    return {status: ex.status}
  }
}

export const post = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: HTTP_METHOD.POST,
      credentials: 'include',
      headers: new Headers({
        '8AHqSUNpupgpQkdJDAUmtQ': 'PghIPoRC0po75_2qJE2eZw',
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(data)
    })
    if (!res.ok) {
      return errHandler(res)
    }
    return {status: res.status}
  } catch (ex) {
    alert(ex)
    return {status: ex.status}
  }
}

export const update = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: HTTP_METHOD.PUT,
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json',
        'id': 26,
        'userName': 'aaa',
        'roles': [1, 2, 9]
      }),
      body: JSON.stringify(data)
    })

    if (!res.ok) {
      return errHandler(res)
    }
    return {status: res.status}
  } catch (ex) {
    alert(ex)
    return {status: ex.status}
  }
}
