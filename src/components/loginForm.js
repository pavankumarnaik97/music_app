import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "@material-ui/core/TextField";
import useTranslation from "../context/useTranslation";
import "../styles/formStyles.css";

function LoginForm(props) {
  const { translator } = useTranslation()
  const { onSubmit, onChange, errors, user, type, onPwChange, getTokenId } = props;

  return (
    <div className="loginBox">
      <h4>{translator("loginheader")}</h4>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      <form onSubmit={onSubmit}>
        <TextField
          name="email"
          className="loginInputBoxWidth"
          placeholder="email"
          value={user.email}
          onChange={onChange}
          error={errors.email}
          helperText={errors.email}
        />
        <br />
        <TextField
          type={type}
          className="loginInputBoxWidth"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={onPwChange}
          error={errors.password}
          helperText={errors.password}
        />
        <br />
        <br />
        <RaisedButton
          className="loginSubmit"
          primary={true}
          type="submit"
          label={translator("Submit")}
        />
      </form>
      <p>
        <a href="/">{translator("forgotPassword")}?</a>
      </p>
    </div>
  );
}
export default LoginForm;
