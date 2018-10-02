import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';

class FormattedText extends Component {
  static propTypes = {
    selectedWord: PropTypes.string,
    selectedWordIdx: PropTypes.number,
    formatting: PropTypes.object,
    text: PropTypes.string,
  };

  onWordClick = (part, idx) => {
    this.props.onWordSelect(idx, part);
  };

  getWordStyle(idx) {
    const { selectedWordIdx } = this.props;
    const format = this.props.formatting[idx];
    const style = {};

    if (selectedWordIdx === idx) style.backgroundColor = '#bbb';

    if (!format) return style;
    if (format.has('b')) style.fontWeight = 'bold';
    if (format.has('u')) style.textDecoration = 'underline';
    if (format.has('i')) style.fontStyle = 'italic';
    return style;
  }

  renderWord = (part, idx) => {
    return (
      <span
        className="word"
        key={idx}
        style={this.getWordStyle(idx)}
        onClick={() => {
          this.onWordClick(part, idx);
        }}
      >
        {part}
      </span>
    );
  };

  renderFormattedText() {
    const { parts, partIsWord } = this.props;

    return parts.map((part, idx) => {
      const isWord = partIsWord[idx];
      return isWord ? this.renderWord(part, idx) : part;
    });
  }

  render() {
    return (
      <div id="text-zone">
        <div className="noselect text">{this.renderFormattedText()}</div>
      </div>
    );
  }
}

// export default FormattedText;
const mapStateToProps = state => ({
  ...state.textFormatter,
});

export default connect(mapStateToProps)(FormattedText);
