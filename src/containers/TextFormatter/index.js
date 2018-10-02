import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.css';
import ControlPanel from '../../components/ControlPanel';
import FormattedText from '../../components/FormattedText';
import Synonyms from '../../components/Synonyms';
import { actionButtonPress, selectWord, setText, replaceWord, fetchSynonyms } from '../../actions';
import getMockText from '../../services/text.service';

class TextFormatter extends Component {
  static propTypes = {
    selectedWord: PropTypes.string,
    selectedWordIdx: PropTypes.number,
    formatting: PropTypes.object,
    text: PropTypes.string,
  };

  componentWillMount() {
    getMockText().then(text => this.props.dispatch(setText(text)));
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedWord, dispatch } = this.props;
    if (prevProps.selectedWord !== selectedWord) {
      dispatch(fetchSynonyms(selectedWord));
    }
  }

  render() {
    const { dispatch, selectedWord, selectedWordIdx, synonyms, formatting } = this.props;
    return (
      <div className="textFormatter">
        <ControlPanel
          activeButtons={formatting[selectedWordIdx]}
          onAction={action => {
            if (!selectedWordIdx) return;
            dispatch(actionButtonPress(action, selectedWordIdx));
          }}
        />
        <FormattedText
          onWordSelect={(selectedWordIdx, selectedWord) => {
            dispatch(selectWord(selectedWordIdx, selectedWord));
          }}
        />
        <Synonyms
          word={selectedWord}
          synonyms={synonyms}
          onSelect={newWord => {
            dispatch(replaceWord(selectedWordIdx, newWord));
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.textFormatter,
});

export default connect(mapStateToProps)(TextFormatter);
