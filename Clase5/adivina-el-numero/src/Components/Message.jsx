// Message.jsx
import React from "react";

function Message({ mensaje }) {
  if (!mensaje) return null;
  return <p style={{ marginTop: "20px", fontSize: "18px" }}>{mensaje}</p>;
}

export default Message;
