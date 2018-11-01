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
  }

  inputStyle = {
    height: '34px',
    width: '980px',
  }

  textareaStyle = {
      borderColor: '#ccc',
      width: '980px',
      height: '352px',
  };

    render() {
        return (
          <div className="form" style={this.formStyle}>
              <fieldset className="form__description" style={this.fieldsetStyle}>
                <label htmlFor="description" className="form__description--label"/>
                <input
                  style={this.inputStyle}
                  placeholder="Gist description..."
                  className="form__description--input"
                  id="description"
                />
              </fieldset>
              <fieldset className="form__filename" style={this.fieldsetStyle}>
                <label htmlFor="filename" className="form__filename--label"/>
                <input
                  style={this.inputStyle}
                  placeholder="Filename including extension..."
                  className="form__filename--input"
                  id="filename"
                />
              </fieldset>
              <fieldset className="form__textarea" style={this.fieldsetStyle}>
                <label htmlFor="textarea" className="form__textarea--label"/>
                <textarea
                  placeholder=""
                  value=""
                  type="text"
                  id="textarea"
                  className="textarea"
                  style={this.textareaStyle}
                  autofocus
                />
              </fieldset>
          </div>
        );
      }

}
