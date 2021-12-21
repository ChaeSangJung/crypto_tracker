import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Tilte = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;
const Container = styled.div`
  padding: 0px 20px;
`;
const Header = styled.header`
  display: flex;  
  justify-content: center;
  align-items: center;
  height: 15vh;
`;
const ListCoin = styled.ul``;
const ItemCoin = styled.li`
  margin-bottom: 10px;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  background-color: white;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props)=>props.theme.accentColor};
    }
  }
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    (async ()=>{
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0,100));
      setLoading(false);
    })();
  }, []);
  return (
    <>
      <Container>
        <Header>
          <Tilte>Coins</Tilte>
        </Header>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <ListCoin>
            {coins.map((coin) => (
              <ItemCoin key={coin.id}>
                <Link 
                  // to={`/${coin.id}`}                
                  to = {{
                    pathname:`/${coin.id}`,
                    state: {name:coin.name}
                  }}
                >
                  <Img
                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    alt={`${coin.name}'s icon`}
                  />
                  {coin.name}&nbsp;&rarr;
                </Link>
              </ItemCoin>
            ))}
          </ListCoin>
        )}        
      </Container>
    </>
  );
}

export default Coins;