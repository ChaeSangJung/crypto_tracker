import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Tilte = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;
const Container = styled.div`
  padding: 0px 20px;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ListCoin = styled.ul``;
const ItemCoin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props)=>props.theme.accentColor};
    }
  }
`;

const Coins = () => {
  return (
    <>
      <Container>
        <Header>
          <Tilte>Coins</Tilte>
        </Header>
        <ListCoin>
          {coins.map((coin) => (
            <ItemCoin key={coin.id}><Link to={`/${coin.id}`}>{coin.name}&nbsp;&rarr;</Link></ItemCoin>
          ))}
        </ListCoin>
      </Container>
    </>
  );
}

export default Coins;
