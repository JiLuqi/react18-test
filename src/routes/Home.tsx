import {Link} from "react-router-dom";

export default function Home(){
  return (
    <div>
      <ul>
        <li><Link to="/BatchState">BatchState</Link></li>
        <li><Link to="/Suspense">Suspense</Link></li>
        <li><Link to="/SuspenseList">SuspenseList</Link></li>
        <li><Link to="/StartTransition">StartTransition</Link></li>
        <li><Link to="/UseDeferredValue">UseDeferredValue</Link></li>
        <li><Link to="/UseTransition">UseTransition</Link></li>
      </ul>
    </div>
  )
}
