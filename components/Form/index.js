import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      filename: "",
      textarea: ""
    };
  }

  formStyle = {
    borderColor: 'none',
  }

  fieldsetStyle = {
    border: 'none',
    padding: '10px 0'
  }

  inputStyle = {
    height: '34px',
    width: '980px',
    borderRadius: '4px 4px 0 0',
    border: '1px solid #ccc',
  }

  descriptionStyle = {
    ...this.inputStyle,
    backgroundColor: '#eee',
    borderRadius: '4px',
  }

  textareaStyle = {
      borderColor: '#ccc',
      width: '978px',
      height: '352px',
      borderTop: 'none',
      borderRadius: '0 0 4px 4px',
      padding: '10px 20px',
  };

  handleDescription(e) {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  handleFilename(e) {
    e.preventDefault();
    this.setState({ filename: e.target.value });
  }

  handleTextarea(e) {
    e.preventDefault();
    this.setState({ textarea: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

    render() {
        return (
          <form className="form" style={this.formStyle}>
              <fieldset className="form__description" style={this.fieldsetStyle}>
                <label htmlFor="description" className="form__description--label"/>
                <input
                  style={this.descriptionStyle}
                  placeholder="Gist description..."
                  className="form__description--input"
                  id="description"
                  onChange={e => this.handleDescription(e)}
                  value={this.state.description}
                />
              </fieldset>
              <fieldset className="form__filename" style={this.fieldsetStyle}>
                <label htmlFor="filename" className="form__filename--label"/>
                <input
                  style={this.inputStyle}
                  placeholder="Filename including extension..."
                  className="form__filename--input"
                  id="filename"
                  onChange={e => this.handleFilename(e)}
                  value={this.state.filename}
                />
                <label htmlFor="textarea" className="form__textarea--label"/>
                <textarea
                  placeholder=""
                  type="text"
                  id="textarea"
                  className="textarea"
                  style={this.textareaStyle}
                  onChange={e => this.handleTextarea(e, "textarea")}
                  value={this.state.textarea}
                  autoFocus
                />
              </fieldset>
              <button
                type="submit"
                onClick={e => this.handleSubmit(e, "textarea")}
              >
              Create public gist
              </button>
          </form>
        );
      }

}
