import { all } from "@redux-saga/core/effects";
import { personalHomepageSaga } from "../features/homepage/personalHomepageSaga";

export default function* rootSaga() {
    yield all([
        personalHomepageSaga(),
    ]);
};