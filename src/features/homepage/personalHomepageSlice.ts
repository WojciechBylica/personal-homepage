import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../core/store';

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

const selectPersonalHomepageState = (state: RootState) =>
  state.personalHomepage;

export const selectRepositories = (state: RootState) =>
  selectPersonalHomepageState(state).repositories;
export const selectStatus = (state: RootState) =>
  selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;
