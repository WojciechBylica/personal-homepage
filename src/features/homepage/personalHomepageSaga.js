import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./personalHomepageAPI";
import {
    fetchLoadingReposSuccess,
    fetchLoadingReposLoading,
    fetchLoadingReposError
} from "./personalHomepageSlice";

function* fetchHomepageRepositoriesHandler({payload: username}) {
    try {
        yield delay(2_000);
        const repositories = yield call({getRepositories, username});
        console.log(repositories);
        yield put(fetchLoadingReposSuccess(repositories));
    } catch (error) {
        yield put(fetchLoadingReposError());
    };
};

export function* personalHomepageSaga() {
    console.log("saga działa");
    
    yield takeLatest(fetchLoadingReposLoading.type, fetchHomepageRepositoriesHandler);

}