import axios from 'axios';
import Smurf from "../components/Smurf";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("res log:", res.data.data)
      dispatch(fetchSuccess(res.data.data));
    })
    .catch(err => {
      dispatch(fetchFail(err));
    })
  }
}

export const FETCH_START = "FETCH_START";
export const fetchStart = () => {
  return({type: FETCH_START});;
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (Smurf) => {
  return({type: FETCH_SUCCESS, payload: Smurf});
}

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error) => {
  return({type: FETCH_FAIL, payload: error});
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.