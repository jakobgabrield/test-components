import ReactDOM from 'react-dom';
import FeedbackWidget from '../components/FeedbackWidget';
import '../assets/css/tailwind.scss';

class Feedback_widget extends HTMLElement {
	static get observedAttributes() {
		return ['cid'];
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	render() {
		const props = {};
		for (let i = 0; i < this.attributes.length; i++) {
			// @ts-ignore
			props[this.attributes[i].name] = this.attributes[i].value;
		}
		// @ts-ignore
		ReactDOM.render(<FeedbackWidget {...props} />, this.shadowRoot);
	}

	attrbuteChangedCallback() {
		this.render();
	}

	disconnectedCallback() {
		ReactDOM.unmountComponentAtNode(this);
	}
}

export default Feedback_widget;
