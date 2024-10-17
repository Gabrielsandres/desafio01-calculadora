import { ButtonContainer } from "./styles";    

const Button = ({ label, onClick, isOperator = false, isWide = false, isZero }) => {
  return (
    <ButtonContainer onClick={onClick} isOperator={isOperator} isWide={isWide} isZero={isZero}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
