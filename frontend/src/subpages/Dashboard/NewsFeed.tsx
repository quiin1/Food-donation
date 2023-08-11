import React, { useEffect, useState, useRef, useCallback } from 'react'
import Dashboard from '../../pages/Dashboard'
import { getPosts } from '../../api'
import { Box, Fab, List, Zoom, useScrollTrigger } from '@mui/material'
import Post from '../../components/Dashboard/NewsFeed/Post'
import { KeyboardArrowUp } from '@mui/icons-material'

const NewsFeed: React.FC = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 20
  })
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasNextPage, setHasNextPage] = useState(false)

  const intObserver = useRef<any>()
  const lastPostRef = useCallback((post: any) => {
    if (isLoading) return 
    if (intObserver.current) intObserver.current.disconnect()
    intObserver.current = new IntersectionObserver(posts => {
      if (posts[0].isIntersecting && hasNextPage) {
        console.log('We are near the last post!')
        setPaginationModel(prev => ({
          ...prev,
          page: prev.page + 1
        }))
      }
    })
    if (post) intObserver.current.observe(post)
  }, [isLoading, hasNextPage])

  useEffect(() => {
    getPosts(paginationModel, setPosts, null, setIsLoading, setHasNextPage, true)
  }, [paginationModel])
  
  const content = posts.map((post: any, i) => {
    if (posts.length === i + 1) {
      return <Post ref={lastPostRef as any} key={post.id} post={post} />
    }
    return <Post key={post.id} post={post} />
  })

  // Use `window` instead of `body` as `document` will be `undefined` when the
  // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
  const trigger = useScrollTrigger({
    // Number of pixels needed to scroll to toggle `trigger` to `true`.
    threshold: 100,
  })

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  
  return (
    <Dashboard>
      {isLoading && <p className='center'>Loading More Posts</p>}
      <List style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 35 }}>
        {content}
      </List>
      <Zoom in={trigger}>
        <Box
          role="presentation"
          // Place the button in the bottom right corner.
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 1,
          }}
        >
          <Fab
            onClick={scrollToTop}
            color="default"
            size="small"
            aria-label="Scroll back to top"
          >
            <KeyboardArrowUp fontSize="medium" />
          </Fab>
        </Box>
      </Zoom>
    </Dashboard>
  )
}

export default NewsFeed