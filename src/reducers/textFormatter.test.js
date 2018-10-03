import textFormatter, { getState } from './textFormatter';
import { actionTypes } from '../actions';

describe('getState', () => {
  it('sets text and splits properly', () => {
    expect(getState('some text.')).toMatchObject({
      text: 'some text.',
      parts: ['some', ' ', 'text', '.'],
    });
  });

  it('handles empty string', () => {
    expect(getState('')).toMatchObject({
      text: '',
      parts: [],
    });
  });

  it('handles zero params', () => {
    expect(getState()).toMatchObject({
      text: '',
      parts: [],
    });
  });
});

describe('textFormatter', () => {
  let prevState;
  beforeEach(() => {
    prevState = getState('test string');
  });

  it('returns initial state', () => {
    expect(textFormatter(undefined, {})).toMatchObject({
      selectedWordIdx: null,
      selectedWord: null,
      text: '',
      parts: [],
      partIsWord: [],
      synonyms: [],
    });
  });

  it('handles actions toggling', () => {
    const state = textFormatter(prevState, {
      type: actionTypes.ACTION_BUTTON,
      index: 10,
      action: 'b',
    });
    expect(state).toMatchObject({ formatting: { 10: new Set(['b']) } });
    const state2 = textFormatter(state, {
      type: actionTypes.ACTION_BUTTON,
      index: 10,
      action: 'b',
    });
    expect(state2).toMatchObject({ formatting: { 10: new Set() } });
  });

  it('handles set text', () => {
    expect(
      textFormatter(prevState, { type: actionTypes.SET_TEXT, text: 'new string' }),
    ).toMatchObject({ text: 'new string', parts: ['new', ' ', 'string'] });
  });

  it('handles select word', () => {
    expect(
      textFormatter(prevState, { type: actionTypes.WORD_SELECT, index: 2, word: 'string' }),
    ).toMatchObject({ selectedWordIdx: 2, selectedWord: 'string' });
  });
});
