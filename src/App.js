import React from "react";
import { connect } from "react-redux"
import { fetchSmurfs } from "./actions/index.js";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import axios from "axios";

class App extends React.Component {

  componentDidMount() {
    this.props.fetchSmurfs()
    // axios
    // .get("http://localhost:3333/smurfs")
    // .then(res => {
    //   console.log("res log:", res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default  connect(mapStateToProps, { fetchSmurfs })(App);
// export default  connect(mapStateToProps, { fetchSmurfs, fetchStart, fetchSuccess, fetchFail })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.