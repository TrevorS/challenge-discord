const NEW_TAB = 'NEW_TAB';
const SELECT_TAB = 'SELECT_TAB';
const EDIT_TAB = 'EDIT_TAB';
const DELETE_TAB = 'DELETE_TAB';

const newTab = (text) => ({
  type: NEW_TAB,
  text,
});

const selectTab = (index) => ({
  type: SELECT_TAB,
  index,
});

const editTab = (text) => ({
  type: EDIT_TAB,
  text,
});

const deleteTab = (index) => ({
  type: DELETE_TAB,
  index,
});

export {
  NEW_TAB,
  SELECT_TAB,
  EDIT_TAB,
  DELETE_TAB,
  newTab,
  selectTab,
  editTab,
  deleteTab,
};
