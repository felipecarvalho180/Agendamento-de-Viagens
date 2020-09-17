import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import React from "react";
import ErrorMessage from "../error-message";
import { InputWrapper } from "./style";

function IconInput(props) {
  const {
    Icon,
    title,
    onChange,
    value,
    name,
    id,
    placeholder,
    type,
    onBlur,
    formik,
  } = props;

  return (
    <InputWrapper>
      <InputLabel
        htmlFor="input-with-icon-adornment"
        style={{ marginBottom: 10 }}
      >
        {title}
      </InputLabel>
      <FormControl style={{ marginBottom: 16 }}>
        <OutlinedInput
          error={formik.errors[name] && formik.touched[name]}
          id={id}
          name={name}
          style={{
            background: "#F7FAFC",
          }}
          type={type ? type : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          startAdornment={
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          }
        />
      </FormControl>
      {formik.errors[name] && formik.touched[name] ? (
        <ErrorMessage label={formik.errors[name]} />
      ) : null}
    </InputWrapper>
  );
}

export default IconInput;
