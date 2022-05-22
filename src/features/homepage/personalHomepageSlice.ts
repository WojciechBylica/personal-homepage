import { createSlice } from '@reduxjs/toolkit';
import { IRepositories } from './personalHomepageAPI';

type StatusType = 'initial' | 'success' | 'loading' | 'error';

interface IPersonalHomepageSlice {
  repositories: IRepositories[] | null;
  status: StatusType;
}

const initialState: IPersonalHomepageSlice = {
  repositories: null,
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
    fetchLoadingReposLoading: (): IPersonalHomepageSlice => ({
      status: 'loading',
      repositories: null,
    }),
    fetchLoadingReposError: (): IPersonalHomepageSlice => ({
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

export default personalHomepageSlice.reducer;
