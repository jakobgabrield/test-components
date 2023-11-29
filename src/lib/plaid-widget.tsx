import ReactDOM from "react-dom";
import Plaid from "../components/Plaid";
import "../assets/css/tailwind.scss";

class Plaid_widget extends HTMLElement {
  static get observedAttributes() {
    return ["cid"];
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
    ReactDOM.render(<Plaid {...props} />, this.shadowRoot);
  }

  attrbuteChangedCallback() {
    this.render();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}

export default Plaid_widget;
