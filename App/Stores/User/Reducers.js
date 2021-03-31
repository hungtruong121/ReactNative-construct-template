/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { UserTypes } from './Actions';

export const setErrorCode = (state, { errorCode }) => ({
  ...state,
  errorCode,
});

export const fetchProfileLoading = (state) => ({
  ...state,
  loading: true,
  errorMessage: null,
})

export const fetchProfileSuccess = (state, { profile }) => ({
  ...state,
  profile,
  loading: false,
  errorMessage: null,
})

export const fetchProfileFailure = (state, { errorMessage }) => ({
  ...state,
  profile: {},
  loading: false,
  errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.SET_ERROR_CODE]: setErrorCode,
  [UserTypes.FETCH_PROFILE_LOADING]: fetchProfileLoading,
  [UserTypes.FETCH_PROFILE_SUCCESS]: fetchProfileSuccess,
  [UserTypes.FETCH_PROFILE_FAILURE]: fetchProfileFailure,
})
