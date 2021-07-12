import React, { Component } from "react";

class InputComponent extends Component {
  render() {
    return (
      <div>
        <div className="input">
          <div className="inputs">
            <label>اسم العميل</label>
            <input
              type="text"
              value={this.props.inputValue["input1"]}
              onChange={this.props.onInput}
              name="input1"
            />
          </div>
          <div className="inputs">
            <label> رقم العميل </label>
            <input
              type="text"
              name="input2"
              onChange={this.props.onInput}
              value={this.props.inputValue["input2"]}
            />
          </div>
          <div className="inputs">
            <label>المبلغ </label>
            <input
              type="text"
              name="input3"
              onChange={this.props.onInput}
              value={this.props.inputValue["input3"]}
            />
          </div>
          <div className="inputs">
            <label>التاريخ </label>
            <input
              type="text"
              name="input4"
              onChange={this.props.onInput}
              value={this.props.inputValue["input4"]}
            />
          </div>
          <div className="inputs">
            <label>الموظف </label>
            <input
              type="text"
              name="input5"
              onChange={this.props.onInput}
              value={this.props.inputValue["input5"]}
            />
          </div>
          <div className="inputs">
            <label>المبلغ Bss</label>
            <input
              type="text"
              name="input6"
              onChange={this.props.onInput}
              value={this.props.inputValue["input6"]}
            />
          </div>
          <div className="sbmitdiv">
            <button
              className="submitButton"
              onClick={this.props.onSubmit}
              type="submit"
            >
              ⏎
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default InputComponent;
