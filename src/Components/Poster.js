import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div>
        <h2 className="load">loading ...</h2>
      </div>
    );
  }
  return (
    <ul>
      <div>
        {posts.map((post) => (
          <li key={post.id} className="list">
            {" "}
            <hr className="hrr" />
            {post.title}
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Posts;
