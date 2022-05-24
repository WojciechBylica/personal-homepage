import { createSlice } from '@reduxjs/toolkit';
import { IRepository } from './personalHomepageAPI';

type Status = 'initial' | 'success' | 'loading' | 'error';

interface IPersonalHomepageSlice {
  repositories: IRepository[] | null;
  status: Status;
}

const initialState: IPersonalHomepageSlice = {
  status: 'initial',
  repositories: null,
};

const personalHomepageSlice = createSlice({
  name: 'personalHomepage',
  initialState,
  reducers: {
    fetchLoadingReposSuccess: (
      _,
      { payload: repositories }
    ): IPersonalHomepageSlice => ({
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
