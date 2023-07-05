import React, { useState } from "react";
import Input from "../InputField/Input";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUser } from "../../redux/apiRequest";

const Edit = (props) => {
  const { setEdit } = props;

  const avarUrl = [
    "https://cdn-icons-png.flaticon.com/128/924/924915.png",
    "https://cdn-icons-png.flaticon.com/128/236/236832.png",
    "https://cdn-icons-png.flaticon.com/128/706/706830.png",
    "https://cdn-icons-png.flaticon.com/128/921/921124.png",
    "https://cdn-icons-png.flaticon.com/128/4140/4140061.png",
  ];

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(user.avarUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updateUser = {
      name: name,
      age: age,
      about: about,
      avarUrl: url,
      themeColor: theme,
    };
    UpdateUser(updateUser, dispatch);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">Save</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label="Display Name" data={user.name} setData={setName} />
            <Input label="Age" data={user.age} setData={setAge} />
            <Input
              inputType="textarea"
              classStyle="input-about"
              label="About"
              data={user.about}
              setData={setAbout}
            />
            <label>profile Picture</label>
            <div className="input-image-container">
              {avarUrl.map((url, index) => {
                return (
                  <>
                    <img
                      onClick={(e) => setUrl(e.target.src)}
                      src={url}
                      alt=""
                      className="input-image"
                    />
                  </>
                );
              })}
            </div>
            <div className="theme-container">
              <label>Theme</label>
              <input
                type="color"
                className="theme-color"
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Edit;
