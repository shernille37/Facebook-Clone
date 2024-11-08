"use client";

import Post from "./Post";
import PostForm from "./PostForm";

import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { useState, useEffect } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = query(
          collection(db, "posts"),
          orderBy("timestamp", "desc")
        );

        onSnapshot(posts, (snapshot) =>
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-1 flex-col p-2 lg:py-8 lg:px-[150px]">
      <PostForm />
      {posts.map((post) => (
        <Post key={post.id} doc={post} />
      ))}
    </div>
  );
};

export default Feed;
