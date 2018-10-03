import { actionTypes } from '../actions';

// state initializer
export const getState = (text = '') => ({
  selectedWordIdx: null,
  selectedWord: null,
  formatting: {
    // adding some initial formatting
    20: new Set(['b', 'i']),
    202: new Set(['b']),
    82: new Set(['u']),
  },
  text,
  parts: text.match(/\w+|\s+|[^\s\w]+/g) || [],
  partIsWord: [],
  synonyms: [],
});

const textFormatter = (state = getState(''), action) => {
  switch (action.type) {
    case actionTypes.ACTION_BUTTON: {
      const format = state.formatting[action.index] || new Set();
      if (format.has(action.action)) {
        format.delete(action.action);
      } else {
        format.add(action.action);
      }
      return {
        ...state,
        formatting: { ...state.formatting, [action.index]: format },
      };
    }

    case actionTypes.SET_TEXT: {
      const parts = action.text.match(/\w+|\s+|[^\s\w]+/g) || [];
      return {
        ...state,
        text: action.text,
        parts,
        partIsWord: parts.map(part => part.match(/^\w+$/)),
      };
    }

    case actionTypes.WORD_SELECT:
      return {
        ...state,
        selectedWordIdx: action.index,
        selectedWord: action.word,
      };

    case actionTypes.REPLACE_WORD: {
      const newParts = state.parts.slice();
      newParts[action.index] = action.word;
      return {
        ...state,
        parts: newParts,
      };
    }

    case actionTypes.REQUEST_SYNONYMS: {
      return {
        ...state,
        synonyms: [],
      };
    }

    case actionTypes.RECEIVE_SYNONYMS: {
      return {
        ...state,
        synonyms: action.items,
      };
    }

    default:
      return state;
  }
};

export default textFormatter;
