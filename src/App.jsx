import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from "./components/Createpost";
import Postlist from "./components/Postlist";
import { useState } from "react";
import Postlistprovider from "./store/Post-list-store";
function App() {
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <Postlistprovider>
      <div className="app-container">
        <Sidebar
          Selectedtab={selectedtab}
          setselectedtab={setselectedtab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedtab === "Home" ? (
            <Postlist></Postlist>
          ) : (
            <Createpost></Createpost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </Postlistprovider>
  );
}

export default App;
