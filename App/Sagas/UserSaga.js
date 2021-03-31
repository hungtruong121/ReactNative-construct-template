import { put, call, select } from 'redux-saga/effects';
import { userService } from '../Services/UserService';
import UserActions from '../Stores/User/Actions';

const getLanguage = state => state.user.language;

export function* fetchProfile(action) {
  try {
    const { userId } = action;
    const language = yield select(getLanguage);
    yield put(UserActions.fetchProfileLoading());
    const response = yield call(userService.fetchProfile, userId, language);
    if (response.success) {
      const data  = response.data && data !== null ? response.data : {};
      yield put(UserActions.fetchProfileSuccess(data));
    } else {
      const { message, errorCode } = response;
      yield put(UserActions.setErrorCode(errorCode));
      yield put(UserActions.fetchProfileFailure(message));
    }
  } catch(error) {
    yield put(UserActions.fetchProfileFailure('Error'));
  }
}
