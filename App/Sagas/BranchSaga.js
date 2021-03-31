import { put, call, select } from 'redux-saga/effects';
import { branchService } from '../Services/BranchService';
import BranchActions from '../Stores/Branch/Actions';
import UserActions from '../Stores/User/Actions';

const getLanguage = state => state.user.language;

export function* fetchBrand(action) {
  try {
    const { categoryIds } = action;
    const language = yield select(getLanguage);
    yield put(BranchActions.fetchBrandLoading());
    const response = yield call(branchService.fetchBrand, categoryIds, language);
    if (response.success) {
      const data  = response.data && data !== null ? response.data : [];
      yield put(BranchActions.fetchBrandSuccess(data));
    } else {
      const { message, errorCode } = response;
      yield put(UserActions.setErrorCode(errorCode));
      yield put(BranchActions.fetchBrandFailure(message));
    }
  } catch(error) {
    yield put(BranchActions.fetchBrandFailure('Error'));
  }
}
