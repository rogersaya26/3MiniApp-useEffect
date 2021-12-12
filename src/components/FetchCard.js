import React, { useState, useEffect, useCallback } from "react";
import getUser from "./helpers/getUser";
import getPost from "./helpers/getPost"

/* const initialUser = {
  name: "Luis",
  email: "correo@correo.com",
};
const initialPost = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
]; */

const FetchCard = () => {
  const [user, setUser] = useState({});
  const [post, setPost] = useState([]);

  const updateUser = () => {
    getUser()
      //y si tiene exito
      .then((newUser) => {
        setUser(newUser);
      });
  };

  const updatePost = useCallback (() => {
    getPost(user.id)
    .then((newPost) => {
      setPost(newPost)
    })
  },[user.id])


  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    if(user?.id) {
      updatePost()
    }
  }, [user, updatePost])

  return (
    <div>
      <h1>FetchCard</h1>
      <button onClick={updateUser}>Another User</button>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <br />
      <h2>Posts - User: {user.id}</h2>
      <ul>
        {post.map(post => (
          <li key={post.id} >{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchCard;
