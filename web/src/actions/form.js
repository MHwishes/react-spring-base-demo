import * as request from '../constant/fetch-request'
import HTTP_CODE from '../constant/http-code'

export const refreshExcellentAssignmentVideo = excellentHomeworkVideo => ({
  // type: 'REFRESH_EXCELLENT_ASSIGNMENT_VIDEO',
  // excellentHomeworkVideo
})

export const addNameInform = () => {
  return dispatch => {
    (async () => {
      const res = await request.post(`https://jinshuju.net/api/v1/forms/vhCyGN`,{
        "field_1": "马红"
      })
      if (res.status === HTTP_CODE.CREATED) {
        window.location = 'https://jinshuju.net/f/vhCyGN'
        // dispatch(refreshExcellentAssignmentVideo(res.body))
      }
    })()
  }
}
