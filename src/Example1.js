
import MyComponent from "./Mycomponent";
import { useState } from "react";
import { MyContext } from "./Mycontext"; // Corrected import

// Provider provides data
export default function Example1() {
    // Provide
    const [text, setText] = useState("");

    return (
        <div>
            <MyContext.Provider value={{ text, setText }}>
                <MyComponent />
            </MyContext.Provider>
        </div>
    );
}
