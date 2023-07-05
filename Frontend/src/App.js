import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Edit from "./Components/Edit/Edit";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import Makepost from "./Components/Posts/Makepost";
import Post from "./Components/Posts/Post";

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpen] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);

  return (
    <div className="App">
      {isEdit ? (
        <Edit setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <div className="post-container">
            <Post />
          </div>
          <Footer isOpenPost={isOpenPost} setOpen={setOpen} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <Makepost setOpen={setOpen} />
        </>
      )}

      {pending && <p className="loading">Loading...</p>}
      {!isEdit && error && (
        <p className="error">Error when is fetching data from server</p>
      )}
    </div>
  );
}

export default App;
