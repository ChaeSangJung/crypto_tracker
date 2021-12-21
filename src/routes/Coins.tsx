import styled from "styled-components";

const Tilte = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Coins = () => {
  return (
    <>
      <Tilte>Coins</Tilte>
    </>
  );
}

export default Coins;
