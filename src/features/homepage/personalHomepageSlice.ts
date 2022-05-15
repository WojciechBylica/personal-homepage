import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../core/store';
import { IGetRepositories } from './personalHomepageAPI';

interface IPersonalHomepageSlice {
  repositories: IGetRepositories[];
  status: string;
}

const initialState: IPersonalHomepageSlice = {
  repositories: [],
  status: 'initial',
};

const personalHomepageSlice = createSlice({
  name: 'personalHomepage',
  initialState,
  reducers: {
    fetchLoadingReposSuccess: (_, { payload: repositories }) => ({
      status: 'success',
      repositories,
    }),
    fetchLoadingReposLoading: () => ({
      status: 'loading',
      repositories: [],
    }),
    fetchLoadingReposError: () => ({
      status: 'error',
      repositories: [],
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
