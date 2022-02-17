import { createSlice } from '@reduxjs/toolkit';

const personalHomepageSlice = createSlice({
  name: 'personalHomepage',
  initialState: {
    repositories: null,
    status: 'initial',
  },
  reducers: {
    fetchLoadingReposSuccess: (_, { payload: repositories }) => ({
      status: 'success',
      repositories,
    }),
    fetchLoadingReposLoading: () => ({
      status: 'loading',
      repositories: null,
    }),
    fetchLoadingReposError: () => ({
      status: 'error',
      repositories: null,
    }),
  },
});

export const {
  fetchLoadingReposSuccess,
  fetchLoadingReposLoading,
  fetchLoadingReposError,
} = personalHomepageSlice.actions;

const selectPersonalHomepageState = (state) => state.personalHomepage;

export const selectRepositories = (state) =>
  selectPersonalHomepageState(state).repositories;
export const selectStatus = (state) =>
  selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;
