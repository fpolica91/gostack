import React, { useState, useEffect } from "react";
import posts from "../data";
import PostItem from "./postItem";

const Postlist = () => {
  const [postlist, setPostlist] = useState([]);

  useEffect(() => {
    setPosts();
  }, []);

  const setPosts = () => {
    setPostlist(posts);
  };

  return (
    <div className="postlist">
      {postlist.map(item => (
        <PostItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Postlist;
