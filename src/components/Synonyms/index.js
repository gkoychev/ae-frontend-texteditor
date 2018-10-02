import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import synonyms from '../../services/synonyms.service';

class Synonyms extends Component {
  static propTypes = {
    word: PropTypes.string,
    synonyms: PropTypes.array,
  };

  onWordClick(word) {
    if (this.props.onSelect) {
      this.props.onSelect(word);
    }
  }

  renderWord = item => [
    <span key={item.word} className="word" onDoubleClick={() => this.onWordClick(item.word)}>
      {item.word}
    </span>,
    ' ',
  ];

  render() {
    return (
      <div id="synonyms-zone">
        <div id="synonyms" className="noselect">
          {this.props.word && [
            <div key="head" className="header">
              Synonyms for: {this.props.word} <small>(double click to replace)</small>
            </div>,
            this.props.synonyms.map(word => this.renderWord(word)),
          ]}
        </div>
      </div>
    );
  }
}

export default Synonyms;
