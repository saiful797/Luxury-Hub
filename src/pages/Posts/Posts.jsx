import { useEffect, useState } from "react";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('posts.json')
          .then(res => res.json())
          .then(data => setPosts(data))
    })
    return (
        <div className="mt-5">
            <div>
                <h1 className="text-center text-6xl font-bold">Recent Posts</h1>
            </div>

            <div className="h-[1px] bg-black rounded-full">
            </div>

            <div className="grid gap-5 mt-5">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;