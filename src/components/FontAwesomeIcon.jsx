import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const element = <FontAwesomeIcon icon={faShoppingCart} />;

ReactDOM.render(element, document.body);
