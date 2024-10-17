import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    const newValue = currentNumber === '0' ? num : `${currentNumber}${num}`;
    setCurrentNumber(newValue.replace(".",","));
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    }
  };

  const handleMultNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("*");
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("/");
    }
  };

  const handleSimbol = () => {
    const actualNumber = (parseNumber(currentNumber) * -1).toString(); 
    setCurrentNumber(actualNumber);
  };
  

  const parseNumber = (num) => {
    return parseFloat(num.replace(",", "."));
  };
  
  
  const formatNumber = (num) => {
    
    if (num % 1 === 0) {
      return num.toLocaleString('pt-BR')
    }else{
      return num.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 5 });
    }
      
    } 


    
  
  
  const handleEquals = () => {

    let result;
    
    switch (operation) {

      case "+":
        
        result = parseNumber(firstNumber) + parseNumber(currentNumber);
        break;

      case "-":

        result = parseNumber(firstNumber) - parseNumber(currentNumber);
        break;

      case "*":

        result = parseNumber(firstNumber) * parseNumber(currentNumber);
        break;

      case "/":

        result = parseNumber(firstNumber) / parseNumber(currentNumber);
        break;

      default:

        setCurrentNumber('Err');
        return;
    }

    setCurrentNumber(formatNumber(result)); 
    setFirstNumber("0");
    setOperation("");
  };
  

  return (

    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="C" onClick={handleOnClear} isWide/>
          <Button label="+/-" onClick={handleSimbol}/>
          <Button label="/" onClick={handleDivNumbers} isOperator/>
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="x" onClick={handleMultNumbers} isOperator />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={handleSubNumbers} isOperator/>
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={handleSumNumbers} isOperator/>
        </Row>

        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} isZero />
          <Button label="," onClick={() => handleAddNumber(".")} />
          <Button label="=" onClick={handleEquals} isOperator/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
