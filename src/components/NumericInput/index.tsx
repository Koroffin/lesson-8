import { memo, useEffect, useRef, useState } from "react";
import "./index.css";

// Uncontrolled
export const NumericInput = memo(({
    onSubmit,
    defaultValue
}: { 
    onSubmit?: (n: number) => void;
    defaultValue?: string;
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return <div className="App-input-wrapper">
        <input 
            defaultValue={defaultValue}
            className="App-input" 
            ref={inputRef} 
        />
        <button onClick={
            (evt) => {
                evt.preventDefault();
                if (inputRef.current === null) {
                    return;
                }
                onSubmit?.(+inputRef.current.value);
            }
        }>
            Submit
        </button>
    </div>;
});

// Controlled
export const ControlledNumericInput = memo(({
    onSubmit,
    defaultValue
}: { 
    onSubmit?: (n: number) => void;
    defaultValue?: string;
}) => {
    const [ value, setValue ] = useState<string>(defaultValue ?? "")

    return <div className="App-input-wrapper">
        <input 
            className="App-input" 
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
        />
        <button onClick={
            (evt) => {
                evt.preventDefault();
                onSubmit?.(+value);
            }
        }>
            Submit
        </button>
    </div>;
});