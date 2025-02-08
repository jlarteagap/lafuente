'use client'
// import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { PostTypes } from "@/types/Post.types";
import { List } from "./components/List";
import {Container, Typography, CircularProgress} from "@mui/material"

// export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
//   const uri = "https://jsonplaceholder.typicode.com/posts";
//   const res = await fetch(uri);
//   const posts: PostTypes[] = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// };

const Home: React.FC<PostTypes> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostTypes[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data: PostTypes[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  return (
    <Container>
      <Typography variant='h1'>Home</Typography>
      {loading && <CircularProgress />}
      <List posts={posts} />
    </Container>
  );
}

export default Home;