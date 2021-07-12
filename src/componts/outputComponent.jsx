import ReactToPrint from "react-to-print";
import React, { Component } from "react";

class ComponentToPrint extends Component {
  render() {
    return (
      <div className="output1" id="my-section">
        <ul>
          <li>الاسم: {this.props.outputValue.input1}</li>
          <li> الرقم: {this.props.outputValue.input2}</li>
          <li> المبلغ: {this.props.outputValue.input3}</li>
          <li> التاريخ: {this.props.outputValue.input4}</li>
          <li>الموظف: {this.props.outputValue.input5}</li>
        </ul>
      </div>
    );
  }
}

class OutputComponant extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint
          ref={(el) => (this.componentRef = el)}
          outputValue={this.props.outputValue}
        />
      </div>
    );
  }
}

export default OutputComponant;
