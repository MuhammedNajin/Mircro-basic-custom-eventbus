import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";
const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id} style={{ width: "30%", marginBottom: "20px" }}>
        <h3>{post.title}</h3>
        <CommentList comment={posts.comments} />
        <CommentCreate postId={post.id} />
      </div>
    );
  });
  
  console.log(posts);
  return <div>{renderPosts}</div>;
};

export default PostList;
