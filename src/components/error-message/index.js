import React from "react";
import { ErrorLabel } from "./style";

function ErrorMessage(props) {
  const { label } = props;

  return <ErrorLabel>{label}</ErrorLabel>;
}

export default ErrorMessage;
