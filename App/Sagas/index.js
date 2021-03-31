import { takeLatest, all } from 'redux-saga/effects'
import { UserTypes  } from '../Stores/User/Actions';
import { fetchProfile } from './UserSaga';

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(UserTypes.FETCH_PROFILE, fetchProfile),
  ])
}
