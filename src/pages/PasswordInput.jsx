import React from "react";
import { RegistrationContext } from "../Context/RegistrationContext";

import { useNavigate } from "react-router-dom";

export const PasswordInput = () => {
  const navigate = useNavigate();

  const {
    name,
    age,
    dob,
    stateofres,
    address,
    pincode,
    dispatch
  } = React.useContext(RegistrationContext);

  const onSubmit = () => {
    const payload = {
      name: name,
      age: age,
      dob: dob,
      stateofres: stateofres,
      address: address,
      pincode: pincode
    };
    // localStorage.setItem('user', JSON.stringify(data));
    // let users = [];
    // let currentUserData = localStorage.getItem("user");
    // if (currentUserData) {
    //   let parsedData = JSON.parse(currentUserData);
    //   parsedData.push(data);
    //   localStorage.setItem("user", JSON.stringify(parsedData));
    // } else {
    //   users.push(data);
    //   localStorage.setItem("user", JSON.stringify(users));
    // }
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json"
      }
    }).then((res) => {

      console.log(res)

    }).catch((err) => {

      console.log(err)

    })
  };

  return (
    <>
      <h1>this is a password page</h1>
      <input
        type="text"
        placeholder="stateofres"
        value={stateofres}
        onChange={(e) =>
          dispatch({ type: "CHANGE_STATEOFRES", payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="address"
        value={address}
        onChange={(e) =>
          dispatch({ type: "CHANGE_ADDRESS", payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="pincode"
        value={pincode}
        onChange={(e) =>
          dispatch({ type: "CHANGE_PINCODE", payload: e.target.value })
        }
      />
      <button onClick={() => navigate("/firstpage")}>prev</button>
      <button onClick={onSubmit}> submit</button>
    </>
  );
};
