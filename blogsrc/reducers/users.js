import { handleActions } from 'redux-actions';

import { loadStart, loadComplete, loadFail } from 'actions/users';

const initialState = {
  loading: false,
  users: []
}

export default handleActions({
  [loadStart]: (state, action) => {
    return {
      ...state,
      loading: true
    }
  },
  [loadComplete]: (state, action) => {
    return {
      ...state,
      users: action.payload,
      loading: false
    }
  },
  [loadFail]: (state, action) => {
    return {
      ...state,
      loading: false
    }
  }
}, initialState)