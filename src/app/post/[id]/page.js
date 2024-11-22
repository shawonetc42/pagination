import React from "react";

export default async function page({ params }) {
  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json(); // Parse the response to a plain object
  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
