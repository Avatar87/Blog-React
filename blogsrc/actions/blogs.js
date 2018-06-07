import { createAction } from 'redux-actions';

export const loadStart  = createAction('[Blogs] Load start');
export const loadComplete = createAction('[Blogs] Load complete');
export const loadFail = createAction('[Blogs] Load fail');

export const loadBlogs = (dispatch) => {
  dispatch(loadStart());
  fetch('http://localhost:3000/blogs/')
    .then((response) => response.json())
    .then((blogs) => {
      dispatch(loadComplete(blogs));
    })
    .catch(() => {
      dispatch(loadFail());
    })
}