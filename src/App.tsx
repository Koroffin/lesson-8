import { useCallback, useMemo, useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { ControlledNumericInput, NumericInput } from './components/NumericInput';
import { makeArray } from './utils/makeArray';
  

function App({ buttonsCount }: { buttonsCount: number; }) {
  const [ arr, setArr ] = 
    useState<number[]>(makeArray(buttonsCount));
  
  const onSubmit = useCallback((n: number) => {
    setArr(makeArray(n))
  }, []);

  return (
    <div className="App">
      {arr.map((rnd) => <Button key={rnd} />)}
    
      <ControlledNumericInput
        defaultValue={`${buttonsCount}`}
        onSubmit={onSubmit} 
      />
    </div>
  );
}

export default App;
