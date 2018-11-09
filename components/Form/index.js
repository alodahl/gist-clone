import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
    fontFamily: "Segoe UI,Helvetica,Arial,sans-serif",
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
  submitButtonStyle = {
    float: "right",
    border: "1px solid #ccc",
    borderRadius: "4px",
    height: "34px",
    fontSize: "14px",
    fontWeight: "600",
    backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
    color: "#586069",
  };

    render() {
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
                  maxlength="20"
                  required
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
                  maxlength="20"
                  required
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
                  required
                />
              </fieldset>
              <button
                type="button"
                onClick={this.props.handleSubmit}
                style={this.submitButtonStyle}
              >
              Create public gist
              </button>
          </form>
        );
      }

}
