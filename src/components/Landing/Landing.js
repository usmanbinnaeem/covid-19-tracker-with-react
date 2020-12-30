import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CountUp from "react-countup";
import cx from "classnames";
import corona from "../../images/corona.png";

import styles from "./Landing.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function GlobelStates() {
  const classes = useStyles();
  const [globalState, setGlobalState] = useState();

  useEffect(() => {
    async function fetchFromApi() {
      const fetchApiData = await fetch(
        "https://api.thevirustracker.com/free-api?global=stats"
      );

      const DataFromApi = await fetchApiData.json();

      setGlobalState(DataFromApi);
    }
    fetchFromApi();
  }, []);

  return (
    <div className={cx(styles.image)}>
      <div>
        <Grid
          container
          item
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid container className={styles.maingrid} item xs={12} sm={4}>
            <img
              className={styles.imagee}
              src={corona}
              alt="Covid-19 Virus"
            ></img>
          </Grid>
          {globalState &&
          globalState.results &&
          globalState.results[0].total_active_cases ? (
            <Grid
              className={styles.grid2}
              item
              sm={8}
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Grid item xs={12} sm={4}>
                <Paper spacing={3} className={cx(styles.active, classes.paper)}>
                  <Typography
                    varient="h4"
                    gutterbottom
                    style={{ color: "#004a94", fontWeight: "bolder" }}
                  >
                    <CountUp
                      start={0}
                      end={globalState.results[0].total_active_cases}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                  <Typography varient="subtitle2" gutterbottom>
                    Total Active Cases
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  spacing={3}
                  className={cx(styles.newcases, classes.paper)}
                >
                  <Typography
                    varient="h4"
                    gutterbottom
                    style={{ color: "#593E32", fontWeight: "bolder" }}
                  >
                    <CountUp
                      start={0}
                      end={globalState.results[0].total_new_cases_today}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                  <Typography varient="subtitle2" gutterbottom>
                    Total New Cases Today
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={cx(styles.newdeaths, classes.paper)}>
                  <Typography
                    varient="h4"
                    gutterbottom
                    style={{ color: "red", fontWeight: "bolder" }}
                  >
                    <CountUp
                      start={0}
                      end={globalState.results[0].total_new_deaths_today}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                  <Typography varient="subtitle2" gutterbottom>
                    Total New Deaths Today
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={cx(styles.serious, classes.paper)}>
                  {" "}
                  <Typography
                    varient="h4"
                    style={{ color: "orange", fontWeight: "bolder" }}
                    gutterbottom
                  >
                    <CountUp
                      start={0}
                      end={globalState.results[0].total_serious_cases}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                  <Typography varient="subtitle2" gutterbottom>
                    Total serious cases
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={cx(styles.unresolved, classes.paper)}>
                  {" "}
                  <Typography
                    varient="h4"
                    style={{ color: "#F878F8", fontWeight: "bolder" }}
                    gutterbottom
                  >
                    <CountUp
                      start={0}
                      end={globalState.results[0].total_unresolved}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                  <Typography varient="subtitle2" gutterbottom>
                    Total unresolved cases
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={cx(styles.affectedcountries, classes.paper)}>
                  {" "}
                  <Typography
                    varient="h4"
                    style={{ color: "#EF2303", fontWeight: "bolder" }}
                    gutterbottom
                  >
                    <CountUp
                      start={0}
                      end={globalState.results[0].total_affected_countries}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                  <Typography varient="subtitle2" gutterbottom>
                    Total Affected Countries
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          ) : (
            <Grid
              className={styles.grid2}
              item
              sm={8}
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Grid item xs={12} sm={4}>
                <Paper spacing={3} className={cx(styles.active, classes.paper)}>
                  <Typography
                    varient="h4"
                    gutterbottom
                    style={{ color: "#004a94", fontWeight: "bolder" }}
                  >
                    Loading
                  </Typography>
                  <Typography varient="subtitle2" gutterbottom>
                    Total Active Cases
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  spacing={3}
                  className={cx(styles.newcases, classes.paper)}
                >
                  <Typography
                    varient="h4"
                    gutterbottom
                    style={{ color: "#593E32", fontWeight: "bolder" }}
                  >
                    Loading
                  </Typography>
                  <Typography varient="subtitle2" gutterbottom>
                    Total New Cases Today
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={cx(styles.newdeaths, classes.paper)}>
                  <Typography
                    varient="h4"
                    
                    style={{ color: "red", fontWeight: "bolder" }}
                  >
                   Loading
                  </Typography>
                  <Typography varient="subtitle2" >
                    Total New Deaths 
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={cx(styles.serious, classes.paper)}>
                  {" "}
                  <Typography
                    varient="h4"
                    style={{ color: "orange", fontWeight: "bolder" }}
                    
                  >
                    Loading
                  </Typography>
                  <Typography varient="subtitle2" >
                    Total serious cases
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={cx(styles.unresolved, classes.paper)}>
                  {" "}
                  <Typography
                    varient="h4"
                    style={{ color: "#F878F8", fontWeight: "bolder" }}
                    
                  >
                    Loading
                  </Typography>
                  <Typography varient="subtitle2">
                    Total unresolved cases
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={cx(styles.affectedcountries, classes.paper)}>
                  {" "}
                  <Typography
                    varient="h4"
                    style={{ color: "#EF2303", fontWeight: "bolder" }}
                  
                  >
                   Loading
                  </Typography>
                  <Typography varient="subtitle2">
                    Affected Countries
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}
