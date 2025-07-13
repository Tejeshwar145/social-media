import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as postlistdata } from "../store/Post-list-store";
import Welcomemsg from "../store/Welcomemsg";
import Loadspinner from "./Loadspinner";
const Postlist = () => {
  const { postList, fetching } = useContext(postlistdata);


  return (
    <>
      {fetching && <Loadspinner />}
      {!fetching && postList.length === 0 && <Welcomemsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default Postlist;
