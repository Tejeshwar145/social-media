import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  fetching:false,
  addPost: () => {},
  deletePost: () => {},
});
const postlistreducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const Postlistprovider = ({ children }) => {
  const [postList, dispatchpostlist] = useReducer(postlistreducer, []);

  const [fetching, setfetching] = useState(false);
  

  const addPost = (post) => {
    dispatchpostlist({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addPosts = (posts) => {
    dispatchpostlist({
      type: "ADD_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchpostlist({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  useEffect(() => {
    setfetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setfetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postList,fetching, addPost,  deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default Postlistprovider;
