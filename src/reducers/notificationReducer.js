const reducer = (state = null, { type, content }) => {
  switch(type) {
    case 'SET_NOTIFICATION':
      return content
    case 'REMOVE_NOTIFICATION':
      return null
    default:
      return state
  }
}

export const setNotification = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    content,
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
  }
}

export default reducer
