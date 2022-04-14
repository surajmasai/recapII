import React from "react";

const initState = {
  name: "",
  age: "",
  dob: "",
  stateofres: "",
  address: "",
  pincode: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_AGE":
      return { ...state, age: action.payload };
    case "CHANGE_DOB":
      return { ...state, dob: action.payload };
    case "CHANGE_STATEOFRES":
      return { ...state, stateofres: action.payload };
    case "CHANGE_ADDRESS":
      return { ...state, address: action.payload };
    case "CHANGE_PINCODE":
      return { ...state, pincode: action.payload };
    default:
      throw new Error();
  }
};


export const RegistrationContext = React.createContext();

export function RegistrationContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const { name, age, dob, stateofres, address, pincode } = state;

  return (
    <RegistrationContext.Provider
      value={{ name, age, dob, stateofres, address, pincode, dispatch }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
