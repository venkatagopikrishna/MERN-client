import './style.css'
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom';
export default function Header(){
    return(
        <div>
            <div class="header">
                <h3>
                    FLIPKART
                </h3>
            <ul>
                <li>
                   <Link to="/">HOME</Link>
                </li>
                <li>
                <Link to="/">RESISTER</Link>
                </li>
                <li>
                <Link to="/">LOGIN</Link>
                </li>
            </ul>
            </div>
        </div>
    )
}