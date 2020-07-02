import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import usman from "../../images/usman.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={usman} className={classes.large} />
    </div>
  );
}
