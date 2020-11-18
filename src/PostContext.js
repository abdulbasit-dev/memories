import React, {createContext, useReducer} from 'react'

export const PostContext = createContext()

export const ACTIONS = {
  CREATE_POST: 'create_post',
  FETCH_POST: 'fetch_post',
}

const initialState = {
  counter: 0,
  posts: [],
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CREATE_POST:
      return {...state, posts: [...state.posts, action.payload]}

    case ACTIONS.FETCH_POST:
      return {...state, posts: [...state.posts, ...action.payload]}
    default:
      return state
  }
}

function PostProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <PostContext.Provider value={{state, dispatch}}>{props.children}</PostContext.Provider>
}

export default PostProvider
