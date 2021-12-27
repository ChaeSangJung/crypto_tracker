import styled from "styled-components";

interface ContProp {
    title: string;
    type: string;
    cont:number | undefined;
}

const TextCont = styled.p<{isPositive?:boolean}>`
    color: ${(props) => (props.isPositive ? "red" : "blue")};
`;

const checkValue = (num : number | undefined) => {
    if(num){
        if(num > 0) {
            return true;
        } else {
            return false;
        }
    }
}

const WrapContent = ({title, cont, type} : ContProp) => {
    return (
        <div>
            <strong>{title}</strong>
            <TextCont isPositive={checkValue(cont)}>
                <span>{type === "$"? "$" : null}</span>
                <span>{cont?.toFixed(2)}</span>
                <span>{type === "%"? "%" : null}</span>
            </TextCont>
        </div>
    )
}

export default WrapContent;