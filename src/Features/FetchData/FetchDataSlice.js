import { createSlice } from '@reduxjs/toolkit';
// import { fetchImageList } from './FetchUser';
// import axios from 'axios';

export const fetchDataSlice = createSlice({
  name: 'fetch',

  initialState: {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: '',
  },
  reducers: {
    fetchUsersRequest: (state) => {
      state.isLoading = true;
    },
    fetchUsersSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    fetchUsersFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
  // reducers: {
  //   fetchUsersRequest: (state) => {
  //     return {
  //       ...state,
  //       loading: true,
  //     };
  //   },
  //   fetchUsersSuccess: (state) => {
  //     return {
  //       loading: false,
  //       users: state,
  //       error: '',
  //     };
  //   },
  //   fetchUsersFailure: (state) => {
  //     return {
  //       loading: false,
  //       users: [],
  //       error: state,
  //     };
  //   },
  //   fetchUserList: (state) => {
  //     return (dispatch) => {
  //       dispatch(fetchUsersRequest);
  //       axios
  //         .get('https://jsonplaceholder.typicode.com/users')
  //         .then((res) => {
  //           state.users = res.data.map((user) => user.id);
  //           dispatch(fetchUsersSuccess(state.users));
  //         })
  //         .catch((err) => {
  //           dispatch(fetchUsersFailure(err.message));
  //         });
  //     };
  //   },
  // },
});
//   const fetchUserList = () => {
//     return () => {
//       dispatch(fetchUsersRequest);
//       axios
//         .get('https://jsonplaceholder.typicode.com/users')
//         .then((res) => {
//           const list = res.data.map((user) => user.id);
//           dispatch(fetchUsersSuccess(list));
//         })
//         .catch((err) => {
//           dispatch(fetchUsersFailure(err.message));
//         });
//     };
//   };
// };

// Action creators are generated for each case reducer function
export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} = fetchDataSlice.actions;

export default fetchDataSlice.reducer;
