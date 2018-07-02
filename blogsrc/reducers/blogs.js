import { handleActions } from 'redux-actions';

import { loadStart, loadComplete, loadFail } from 'actions/blogs';

const initialState = {
  loading: false,
  blogs: []
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
      blogs: action.payload,
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