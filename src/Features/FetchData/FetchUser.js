// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure} from './FetchDataSlice';

export const fetchUserList = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const _list = res.data;
        dispatch(fetchUsersSuccess(_list));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err.message));
      });
  };
};
