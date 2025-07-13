const Loadspinner = () => {
  return (
    <div className="text-center spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "8rem", height: "8rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Loadspinner;
