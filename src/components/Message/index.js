import React, { useEffect, useContext, useCallback, useState } from "react";
import { MainContext } from "../../contexts/MainContext";
import "./styles.css";

export default function Message() {
  const [msgup, setMsgup] = useState();
  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const { message } = useContext(MainContext);
  useEffect(() => {
    forceUpdate();
  }, [forceUpdate, message]);

  return (
    <div className="Toastify" style={{ display: message ? "block" : "none" }}>
      <div className="Toastify__toast-container Toastify__toast-container--top-right">
        <div className="Toastify__toast Toastify__toast--success">
          <div role="alert" class="Toastify__toast-body">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
