let timeoutID;

const reducer = (state = null, { type, content }) => {
  switch(type) {
    case 'SET_NOTIFICATION':
      return content
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

export const setNotification = (content, timeout) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      content,
    })
    dispatch(clearNotification(timeout))
  }
}

export const clearNotification = (timeout = 0) => {
  return async (dispatch) => {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION',
      })
    }, timeout * 1000)
  }
}

export default reducer
