import ReactDOM from "react-dom";
import TestWidget from "../components/Test";
import "../assets/css/tailwind.scss";

class Test_widget extends HTMLElement {
  static get observedAttributes() {
    return ["name"];
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const props = {};
    for (let i = 0; i < this.attributes.length; i++) {
      // @ts-ignore
      props[this.attributes[i].name] = this.attributes[i].value;
    }
    // @ts-ignore
    ReactDOM.render(<TestWidget {...props} />, this.shadowRoot);
  }

  attrbuteChangedCallback() {
    this.render();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}

export default Test_widget;
