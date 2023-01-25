import React from "react";
import { checkError, Data, required } from "../Model";

const Validation = (
  data: Data,
  setErrorTest: React.Dispatch<React.SetStateAction<checkError>>,
  seterrorMsg: React.Dispatch<React.SetStateAction<required>>,
  Emailreg: RegExp
) => {
  if (data.name.length === 0) {
    setErrorTest((prev) => ({ ...prev, new_name: !prev }));
    seterrorMsg((prev) => ({
      ...prev,
      msgName: "This field is required",
    }));
  } else {
    setErrorTest((prev) => ({ ...prev, new_name: true }));
  }
  if (data.email.length === 0) {
    setErrorTest((prev) => ({ ...prev, new_email: !prev }));
    seterrorMsg((prev) => ({
      ...prev,
      msgEmail: "This field is required",
    }));
  } else if (!Emailreg.test(data.email)) {
    setErrorTest((prev) => ({ ...prev, new_email: false }));
    seterrorMsg((prev) => ({
      ...prev,
      msgEmail: "This field requires email",
    }));
  } else {
    setErrorTest((prev) => ({ ...prev, new_email: true }));
  }
  if (data.phone.length === 0) {
    setErrorTest((prev) => ({ ...prev, new_phone: false }));
    seterrorMsg((prev) => ({
      ...prev,
      msgPhone: "This field is required",
    }));
  } else {
    setErrorTest((prev) => ({ ...prev, new_phone: true }));
  }
};

export default Validation;
