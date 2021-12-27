// import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

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
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props)=>(props.theme.textColor)};
  border-radius: 15px;
  border: 1px solid white;
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

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
interface ICoinProp {
  toggleDark: () => void;
}

const Coins = ({toggleDark}:ICoinProp) => {
  // const [coins, setCoins] = useState<ICoin[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(()=>{
  //   (async ()=>{
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0,100));
  //     setLoading(false);
  //   })();
  // }, []);
  let { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  
  return (
    <>
      <Container>
        <Helmet>
          <title>Coins</title>
        </Helmet>
        <Header>
          <Tilte>Coins</Tilte>
          <button onClick={toggleDark}>Toggle Dark Mode</button>
        </Header>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <ListCoin>
            {data?.slice(0, 100).map((coin) => (
            <ItemCoin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
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