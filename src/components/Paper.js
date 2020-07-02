import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./Paper.module.css";

import cx from "classnames";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={cx(styles.paper, classes.root)}>
      <CardContent>
        <Typography
          color="#000"
          variant="h2"
          gutterBottom
          className={styles.covid}
        >
          Covid-19 Insights
        </Typography>
        <Typography variant="h5" className={styles.typography}>
          Explore J.P. Morgan’s latest perspectives on how the pandemic is
          impacting global economies, markets and industries.
          {/* <div>
            
          </div> */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://www.jpmorgan.com/global/insights" size="small">
          See insights
        </Button>
      </CardActions>
    </Card>
  );
}
