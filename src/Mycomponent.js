import { useContext } from "react";
import { MyContext } from "./Mycontext"; // Corrected import

export default function MyComponent() {
    const { text, setText } = useContext(MyContext);
    
    return (
        <div>
            <h1>{text}</h1>
            <button onClick={() => setText("Hello World")}>CLICK</button>
        </div>
    );
}