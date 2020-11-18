import React, {useContext, useEffect} from 'react'
import {Grid, CircularProgress} from '@material-ui/core'

import Post from './Post/Post'
// import useStyles from './styles'

import axios from 'axios'
import {PostContext, ACTIONS} from '../../PostContext'

function Posts() {
  // const classes = useStyles()
  const {state, dispatch} = useContext(PostContext)

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts')
        dispatch({type: ACTIONS.FETCH_POST, payload: response.data})
      } catch (err) {
        console.log(err.message)
      }
    }

    getPost()
  }, [dispatch])

  console.log(state.posts)

  return !state.posts.length ? <CircularProgress /> : <Grid></Grid>
}

export default Posts
