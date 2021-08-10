const filterReducer = (state = '', { type, filter }) => {
  switch (type) {
    case 'SET_FILTER':
      return filter
    default:
      return state
  }
}

export const filterChange = filter => {
  return {
    type: 'SET_FILTER',
    filter,
  }
}

export default filterReducer
