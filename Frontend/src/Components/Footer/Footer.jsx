import React from "react";
import "./footer.css";

const Footer = (props) => {
  const { isOpenPost, setOpen } = props;
  return (
    <footer>
      <div className="footer-title" onClick={() => setOpen(!isOpenPost)}>
        {isOpenPost ? "X" : "+"}
      </div>
    </footer>
  );
};

export default Footer;
