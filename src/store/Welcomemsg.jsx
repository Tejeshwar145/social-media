const Welcomemsg = ({ onGetPostsClick }) => {
  return (
    <center className="welcomemsg">
      <h1>there are no posts</h1>
      <button type="button" className="btn btn-primary">
        get post from server
      </button>
    </center>
  );
};
export default Welcomemsg;
