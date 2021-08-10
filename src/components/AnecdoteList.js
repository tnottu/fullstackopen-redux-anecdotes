import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
  const anecdotesSorted = [...anecdotes].sort((a, b) => (a.votes > b.votes) ? -1 : 1)
  const dispatch = useDispatch()

  return (
    <>
      {anecdotesSorted.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(addVote((anecdote.id)))}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList
