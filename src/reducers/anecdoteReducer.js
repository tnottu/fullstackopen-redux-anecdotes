const reducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE_INCREMENT':
      return [...state].map((item) => {
        if (item.id === action.data.id) {
          item.votes = item.votes + 1
        }
        return item
      })
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const addVote = (id) => {
  return {
    type: 'VOTE_INCREMENT',
    data: {
      id,
    }
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data,
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

export default reducer
