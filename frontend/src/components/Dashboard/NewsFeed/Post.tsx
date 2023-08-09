import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Tooltip, Typography } from '@mui/material'
import React from 'react'
import IconEye from '../../../assets/dashboard/table/fi-sr-eye.svg';
import KeyIcon from '@mui/icons-material/Key';

interface PostProps {
    key: number,
    post: {
        id: number,
        img: string,
        title: string,
        releaseDate: any,
        view: number,
        status: string
    }
}

const Post = React.forwardRef<HTMLInputElement, PostProps>(({ post }, ref) => {
    const postBody = (
        <Card sx={{ width: {xs: 345, sm: 450, md: 500}, height: "auto", backgroundColor: "#ffffff" }}>
            {/* F7FFF6 */}
            <CardActionArea sx={{display: "flex", justifyContent: "start", padding: 2}}>
                <div style={{position: "relative"}}>
                    <CardMedia
                        component="img"
                        image={post.img}
                        alt={post.title}
                        sx={{
                            width: {xs: 150, sm: 190},
                            height: {xs: 150, sm: 190},
                            marginRight: 4,
                            borderRadius: 4,
                        }}
                    />
                    <Tooltip title="Status" placement="bottom">
                        <Box sx={{
                            position: "absolute",
                            width: "fit-content",
                            padding: "6px 10px",
                            borderRadius: "16px 0px",
                            
                            bottom: 0,
                            right: 32,
                            
                            color: "white",
                            fontWeight: 600,
                            fontSize: "12px",
                            lineHeight: "20px",

                            backgroundColor: "#69A042",
                        }}>
                            {post.status}
                        </Box>
                    </Tooltip>
                </div>
                <CardContent sx={{display: "flex", flexDirection: "column", gap: "4px"}}>
                    <Tooltip title="Post title" placement="left">
                        <Typography variant="h5" component="div">
                            {post.title}
                        </Typography>
                    </Tooltip>
                    <Tooltip title="Release Date" placement="left">
                        <Typography gutterBottom variant="body2" color="text.secondary">
                            {new Date(post.releaseDate).toUTCString()}
                        </Typography>
                    </Tooltip>
                    <Divider sx={{marginBottom: 2}}/>
                    <Tooltip title="Post ID" placement="left">
                        <div style={{display: "flex", gap: 10}}>
                            <KeyIcon sx={{width: "20px", color: "green"}}/>
                            <Typography variant="body2" color="text.secondary">
                                {post.id}
                            </Typography>
                        </div>
                    </Tooltip>
                    <Tooltip title="View" placement="left">
                        <div style={{display: "flex", gap: 10}}>
                            <img src={IconEye} alt={"eye-icon"} 
                                style={{
                                    width: "20px",
                                }} 
                            />
                            <Typography variant="body2" color="text.secondary">
                                {post.view}
                            </Typography>
                        </div>
                    </Tooltip>
                </CardContent>
            </CardActionArea>
        </Card>
    )

    const content = ref 
        ? <article ref={ref}>{postBody}</article>
        : <article>{postBody}</article>

    return content
})

export default Post