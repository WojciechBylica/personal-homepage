import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { getRepositories, IRepository } from './personalHomepageAPI';
import {
  fetchLoadingReposSuccess,
  fetchLoadingReposLoading,
  fetchLoadingReposError,
} from './personalHomepageSlice';

function* fetchHomepageRepositoriesHandler() {
  try {
    yield delay(2_000);
    const repositories: IRepository[] = yield call(getRepositories);
    yield put(fetchLoadingReposSuccess(repositories));
  } catch (error) {
    yield put(fetchLoadingReposError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(
    fetchLoadingReposLoading.type,
    fetchHomepageRepositoriesHandler
  );
}
