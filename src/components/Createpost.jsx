import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const Createpost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then(post => addPost(post));
  
  };
  return (
    <form className="create-post" onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId here
        </label>
        <textarea
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="your user Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          aria-describedby="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          number of reactions
        </label>
        <textarea
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactins"
          placeholder="how many people rected to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          enter your hashtags here
        </label>
        <textarea
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        post
      </button>
    </form>
  );
};
export default Createpost;
