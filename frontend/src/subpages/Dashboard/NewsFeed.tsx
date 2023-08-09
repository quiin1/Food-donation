import React, { useEffect, useState } from 'react'
import Dashboard from '../../pages/Dashboard'
import { getPosts } from '../../api'
import { Card, List } from '@mui/material'
import Post from '../../components/Dashboard/NewsFeed/Post'

const NewsFeed: React.FC = () => {
  const [paginationModel, setPaginationModel] = useState({
  page: 1,
  pageSize: 8
  })
  const [posts, setPosts] = useState([])
  const [totalPosts, setTotalPosts] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getPosts(paginationModel, setPosts, setTotalPosts, setIsLoading)
  }, [])
  
  const content = posts.map((post: any, i) => {
    if (totalPosts === i + 1) {
      console.log("last element")
    }
    return <Post key={post.id} post={post} />
  })

  return (
    <Dashboard>
      {isLoading && <p className='center'>Loading More Posts</p>}
      <List style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 35 }}>
        {content}
      </List>
    </Dashboard>
  )
}

export default NewsFeed