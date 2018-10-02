import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const TEXT_ACTION_BOLD = 'b';
export const TEXT_ACTION_ITALIC = 'i';
export const TEXT_ACTION_UNDERLINE = 'u';

class ControlPanel extends Component {
  static propTypes = {
    activeButtons: PropTypes.object,
    onAction: PropTypes.func,
  };

  static defaultProps = {
    activeButtons: new Set(),
  };

  onClick(action) {
    if (this.props.onAction) {
      this.props.onAction(action);
    }
  }

  render() {
    const { activeButtons } = this.props;
    return (
      <div id="control-panel">
        <div id="format-actions">
          <button
            className={`format-action ${activeButtons.has(TEXT_ACTION_BOLD) && 'active'}`}
            type="button"
            onClick={() => this.onClick(TEXT_ACTION_BOLD)}
          >
            <b>B</b>
          </button>
          <button
            className={`format-action ${activeButtons.has(TEXT_ACTION_ITALIC) && 'active'}`}
            type="button"
            onClick={() => this.onClick(TEXT_ACTION_ITALIC)}
          >
            <i>I</i>
          </button>
          <button
            className={`format-action ${activeButtons.has(TEXT_ACTION_UNDERLINE) && 'active'}`}
            type="button"
            onClick={() => this.onClick(TEXT_ACTION_UNDERLINE)}
          >
            <u>U</u>
          </button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
