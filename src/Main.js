import React from "react";
import { Cards, CountryPicker, Chart, Landing } from "./components";
import { fetchData } from "./api";
import Paper from "./components/Paper";
import styles from "./App.module.css";
import { Grid } from "@material-ui/core";

class Main extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <>
        {/* <NavBar /> */}
        <Landing />
        {/* <Grid
          container
          spacing={1}
          item
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
          className={styles.two}
        > */}
        <Grid
          container
          spacing={1}
          item
          sm={12}
          md={5}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {" "}
          <Paper />
        </Grid>
        <Grid
          container
          spacing={1}
          item
          sm={12}
          md={6}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Cards data={data} />
        </Grid>
        <Grid
          container
          spacing={1}
          item
          sm={12}
          md={4}
          className={styles.cp}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </Grid>
        <Grid
          xs={12}
          md={8}
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={styles.Chart}
        >
          <Chart data={data} country={country} />
        </Grid>
        {/* </Grid> */}
        )}
      </>
    );
  }
}

export default Main;
