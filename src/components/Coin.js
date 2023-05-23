import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Coin = ({
  name, price, symbol, image, id,
}) => (
  <Link to={`/coin/${id}`} className="link">
    <li className="coin">
      <img className="coinImage" src={image} alt={image} />
      <h2 className="coinName">
        {name}
        <br />
        {symbol}
      </h2>
      <p className="coinPrice">
        price:
        {price}
        $
      </p>
    </li>
  </Link>
);

export default Coin;

Coin.defaultProps = {
  name: '', price: '', symbol: '', image: '', id: '',
};
Coin.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  symbol: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
};
