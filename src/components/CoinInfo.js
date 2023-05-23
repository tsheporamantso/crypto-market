import PropTypes from 'prop-types';
import React from 'react';

const CoinInfo = ({
  image,
  price,
  name,
  symbol,
  marketCap,
  marketCapRank,
  totalVolume,
  high24h,
  low24h,
  priceChange24h,
  marketCapChange24h,
  totalSupply,
}) => (
  <>
    <div className="coinDetails">
      <div>
        <img className="coinImage" src={image} alt={image} />
      </div>
      <div className="infoText">
        <h2>Crypto Coin Info:</h2>
      </div>
      <ul className="detailUl">
        <li className="detail">
          Name:
          {' '}
          {name}
          {' '}
        </li>
        <li className="detail1">
          Symbol:
          {' '}
          {symbol}
          {' '}
        </li>
        <li className="detail">
          Price:
          {' '}
          {price}
          {' '}
          $
        </li>
        <li className="detail1">
          Market Cap:
          {' '}
          {marketCap}
          {' '}
          $
        </li>
        <li className="detail">
          Market Cap Rank:
          {' '}
          {marketCapRank}
          {' '}
          st.
        </li>
        <li className="detail1">
          Total Volume:
          {' '}
          {totalVolume}
          {' '}
          $
        </li>
        <li className="detail">
          Highest 24h:
          {' '}
          {high24h}
          {' '}
          $
        </li>
        <li className="detail1">
          Lowest 24h:
          {' '}
          {low24h}
          {' '}
          $
        </li>
        <li className="detail">
          Price Change 24h:
          {' '}
          {priceChange24h}
          {' '}
          $
        </li>
        <li className="detail1">
          Market Cap Change:
          {' '}
          {marketCapChange24h}
          {' '}
          $
        </li>
        <li className="detail">
          Total Supply:
          {' '}
          {totalSupply}
          {' '}
          piece
        </li>
      </ul>
    </div>
  </>
);

export default CoinInfo;

CoinInfo.defaultProps = {
  marketCap: '', marketCapRank: '', totalVolume: '', high24h: '', low24h: '', priceChange24h: '', marketCapChange24h: '', totalSupply: '', name: '', price: '', symbol: '', image: '',
};

CoinInfo.propTypes = {
  marketCap: PropTypes.string,
  marketCapRank: PropTypes.string,
  totalVolume: PropTypes.string,
  high24h: PropTypes.string,
  low24h: PropTypes.string,
  priceChange24h: PropTypes.string,
  marketCapChange24h: PropTypes.string,
  totalSupply: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  symbol: PropTypes.string,
  image: PropTypes.string,
};
