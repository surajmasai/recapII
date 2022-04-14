import React from "react";

import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../Context/RegistrationContext";

export const EmailInput = () => {
  const { name, age, dob, dispatch } = React.useContext(RegistrationContext);
  const navigate = useNavigate();
  // console.log(email, dispatch);
  // const [isDisabled, setDisabled] = useState(false);
  // disabled={isDisabled}
  const nextpage = () => {
    navigate("/secondpage");
  };

  return (
    <div>
      <h1>This is my first page</h1>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) =>
          dispatch({ type: "CHANGE_NAME", payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) =>
          dispatch({ type: "CHANGE_AGE", payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="dob"
        value={dob}
        onChange={(e) =>
          dispatch({ type: "CHANGE_DOB", payload: e.target.value })
        }
      />
      <button onClick={nextpage}>next</button>
    </div>
  );
};
