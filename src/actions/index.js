import synonyms from '../services/synonyms.service';

export const actionTypes = {
  ACTION_BUTTON: 'ACTION_BUTTON',
  WORD_SELECT: 'WORD_SELECT',
  SET_TEXT: 'SET_TEXT',
  REPLACE_WORD: 'REPLACE_WORD',
  RECEIVE_SYNONYMS: 'RECEIVE_SYNONYMS',
  REQUEST_SYNONYMS: 'REQUEST_SYNONYMS',
};

export const actionButtonPress = (action, index) => ({
  type: actionTypes.ACTION_BUTTON,
  action,
  index,
});

export const selectWord = (index, word) => ({
  type: actionTypes.WORD_SELECT,
  index,
  word,
});

export const setText = text => ({
  type: actionTypes.SET_TEXT,
  text,
});

export const replaceWord = (index, word) => ({
  type: actionTypes.REPLACE_WORD,
  index,
  word,
});

export const requestSynonims = word => ({
  type: actionTypes.REQUEST_SYNONYMS,
  word,
});

export const receiveSynonims = (word, items) => ({
  type: actionTypes.RECEIVE_SYNONYMS,
  word,
  items,
});

export const fetchSynonyms = word => (dispatch) => {
  dispatch(requestSynonims(word));
  return synonyms(word)
    .then(res => res.json())
    .then(json => dispatch(receiveSynonims(word, json)));
};

export default {};
