import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: props.filename,
      textarea: props.textarea,
    };
  }

  isEnabled = this.props.filename.length > 0 && this.props.textarea.length > 0;
  formStyle = {
    borderColor: 'none',
  }
  fieldsetStyle = {
    border: 'none',
    padding: '10px 0'
  }
  inputStyle = {
    boxSizing: "border-box",
    height: '34px',
    width: "100%",
    borderRadius: '4px 4px 0 0',
    border: '1px solid #ccc',
    padding: "0 8px",
    fontSize: "14px",
    wordBreak: "break-all",
  }
  descriptionStyle = {
    ...this.inputStyle,
    backgroundColor: '#eff3f6',
    borderRadius: '4px',
  }
  textareaStyle = {
    boxSizing: "border-box",
    borderColor: '#ccc',
    width: "100%",
    height: '352px',
    borderTop: 'none',
    borderRadius: '0 0 4px 4px',
    padding: '10px 20px',
  };
  enabledSubmitButton = {
    float: "right",
    border: "1px solid #586069",
    borderRadius: "4px",
    height: "34px",
    fontSize: "14px",
    fontWeight: "600",
    backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
    color: "#586069",
  };
  updateButton = {
    ...this.enabledSubmitButton,
    backgroundImage: "linear-gradient(-180deg,#34d058,#28a745 90%)",
  };
  disabledSubmitButton = {
    ...this.enabledSubmitButton,
    border: "1px solid #bbb",
    color: "#bbb",
  };

    render() {

      let submitEnabled = this.props.filename.length > 0 && this.props.textarea.length > 0;

        return (
          <form className="form" style={this.formStyle}>
              <fieldset className="form__description" style={this.fieldsetStyle}>
                <label htmlFor="description" className="form__description--label"/>
                <input
                  style={this.descriptionStyle}
                  placeholder="Gist description..."
                  type="text"
                  className="form__description--input"
                  id="description"
                  onChange={this.props.handleDescription}
                  value={this.props.description}
                />
              </fieldset>
              <fieldset className="form__filename" style={this.fieldsetStyle}>
                <label htmlFor="filename" className="form__filename--label"/>
                <input
                  style={this.inputStyle}
                  placeholder="Filename including extension..."
                  type="text"
                  className="form__filename--input"
                  id="filename"
                  onChange={this.props.handleFilename}
                  value={this.props.filename}
                  autoFocus
                />
                <label htmlFor="textarea" className="form__textarea--label"/>
                <textarea
                  placeholder=""
                  type="text"
                  id="textarea"
                  className="textarea"
                  style={this.textareaStyle}
                  onChange={this.props.handleTextarea}
                  value={this.props.textarea}
                />
              </fieldset>
              <button
                type="submit"
                onClick={this.props.handleSubmit}
                style={submitEnabled && this.props.new ? this.enabledSubmitButton : submitEnabled ? this.updateButton : this.disabledSubmitButton}
                disabled={!submitEnabled}
              >
              {this.props.new?"Create public gist":"Update public gist"}
              </button>
          </form>
        );
      }

}
