import { useState } from 'react';
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "/components/ui/card";

const Calculator = () => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const calculation = eval(num);
        setResult(calculation.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setNum('');
      setResult('');
    } else {
      setNum(num + value);
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="w-full mb-4"
        />
        <div className="grid grid-cols-4 gap-2">
          <Button onClick={() => handleButtonClick('7')}>7</Button>
          <Button onClick={() => handleButtonClick('8')}>8</Button>
          <Button onClick={() => handleButtonClick('9')}>9</Button>
          <Button onClick={() => handleButtonClick('/')}>/</Button>
          <Button onClick={() => handleButtonClick('4')}>4</Button>
          <Button onClick={() => handleButtonClick('5')}>5</Button>
          <Button onClick={() => handleButtonClick('6')}>6</Button>
          <Button onClick={() => handleButtonClick('*')}>*</Button>
          <Button onClick={() => handleButtonClick('1')}>1</Button>
          <Button onClick={() => handleButtonClick('2')}>2</Button>
          <Button onClick={() => handleButtonClick('3')}>3</Button>
          <Button onClick={() => handleButtonClick('-')}>-</Button>
          <Button onClick={() => handleButtonClick('0')}>0</Button>
          <Button onClick={() => handleButtonClick('.')}>.</Button>
          <Button onClick={() => handleButtonClick('=')}>=</Button>
          <Button onClick={() => handleButtonClick('+')}>+</Button>
          <Button variant="destructive" onClick={() => handleButtonClick('C')}>C</Button>
        </div>
        <p className="mt-4">Result: {result}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>ArayanX</p>
        <p>Made By Umer Farooque</p>
      </CardFooter>
    </Card>
  );
};

export default Calculator;