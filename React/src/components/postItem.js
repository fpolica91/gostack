import React from "react";

const PostHeader = ({ author, date }) => {
  return (
    <div className="postheader">
      <img src={author.avatar} alt="avatar" className="avatar" />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

const Postcomments = ({ comments }) => {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
};

const PostItem = ({ author, date, content, comments }) => {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content"> {content} </p>
      <Postcomments comments={comments} />
    </div>
  );
};

export default PostItem;
