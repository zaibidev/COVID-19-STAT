import React, { Component } from "react";
import axios from "axios";
import TableHeader from "../common/TableHeader";
import TableBody from "../common/TableBody";
import "./table.css";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    };
  }
  componentWillMount = async () => {
    try {
      const response = await axios.get(`https://corona.lmao.ninja/countries`);
      this.setState({ apiData: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="overflow">
        <table align="center">
          <TableHeader />
          <TableBody apiData={this.state.apiData} />
        </table>
      </div>
    );
  }
}

export default Data;