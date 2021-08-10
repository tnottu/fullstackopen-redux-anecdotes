import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const { anecdotes, filter } = useSelector(({ anecdotes, filter }) => ({ anecdotes, filter }))
  const anecdotesFiltered = anecdotes.filter(item => {
    if (filter) {
      return item.content.toLowerCase().includes(filter.toLowerCase())
    } else {
      return item
    }
  })
  const anecdotesSorted = [...anecdotesFiltered].sort((a, b) => (a.votes > b.votes) ? -1 : 1)
  const dispatch = useDispatch()

  const handleVote = (anecdote) => {
    dispatch(addVote(anecdote.id))
    dispatch(setNotification(`You voted '${anecdote.content}'`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <>
      {anecdotesSorted.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList
