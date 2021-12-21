import { Link } from "react-router-dom";
import styled from "styled-components";

const Tilte = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

const Coins = () => {
  return (
    <>
      <div>
        <header>
          <Tilte>Coins</Tilte>
        </header>
        <ul>
          {coins.map((coin) => (
            <li><Link to={`/${coin.id}`}>{coin.name}</Link></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Coins;
