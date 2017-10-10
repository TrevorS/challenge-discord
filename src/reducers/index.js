import {
  OPEN_MODAL,
  CLOSE_MODAL,
  NEW_TAB,
  SELECT_TAB,
  EDIT_TAB,
  DELETE_TAB
} from '../actions';

const initialState = {
  tabs: [
    { text: '0' },
    { text: '1' },
    { text: '2' },
    { text: '3' },
    { text: '4' },
  ],
  selectedTab: 0,
  modalOpen: false,
};

const removeTab = (tabs, index) =>
  tabs.filter((tab, i) => i !== index);

const editTab = (tabs, index, text) => {
  const newTabs = tabs.slice();

  newTabs[index].text = text;

  return newTabs;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
      };

    case NEW_TAB:
      return {
        ...state,
        tabs: [
          ...state.tabs,
          { text: action.text },
        ]
      }

    case SELECT_TAB:
      return {
        ...state,
        selectedTab: action.index,
      }

    case EDIT_TAB:
      return {
        ...state,
        tabs: editTab(state.tabs, state.selectedTab, action.text)
      };

    case DELETE_TAB:
      return {
        ...state,
        tabs: removeTab(state.tabs, action.index),
      }

    default:
      return state;
  }
}

export default reducer;
