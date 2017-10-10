import { newTab, selectTab, deleteTab, NEW_TAB, SELECT_TAB, DELETE_TAB } from '../actions';

const initialState = {
  tabs: [
    { text: '0' },
    { text: '1' },
    { text: '2' },
    { text: '3' },
    { text: '4' },
  ],
  selectedTab: 0,
};

const removeTab = (tabs, index) =>
  tabs.filter((tab, i) => i !== index);

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
