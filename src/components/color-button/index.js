import React from "react";
import { Button, withStyles } from "@material-ui/core";

function ColorButton(props) {
  const { title, color, Icon } = props;

  const StyledColorButton = withStyles((theme) => ({
    root: {
      color: "#fff",
      backgroundColor: color,
      "&:hover": {
        backgroundColor: color,
      },
    },
  }))(Button);

  return (
    <StyledColorButton
      type="submit"
      startIcon={<Icon />}
      variant="contained"
      color="primary"
    >
      {title}
    </StyledColorButton>
  );
}

export default ColorButton;
