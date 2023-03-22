import React from "react";
import { createContext } from "react";
import { useState } from "react";


const UserContext = React.createContext({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
});

function UserContextProvider({ children }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const value = {
    firstName,
    lastName,
    phone,
    email,
    setFirstName,
    setLastName,
    setPhone,
    setEmail,
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
