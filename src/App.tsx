import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./routes/Home.tsx";
import BatchState from './routes/BatchState';
import Suspense from './routes/Suspense';
import SuspenseList from './routes/SuspenseList';
import StartTransition from './routes/StartTransition';
import UseDeferredValue from './routes/UseDeferredValue';
import UseTransition from './routes/UseTransition';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/BatchState" element={<BatchState/>}/>
        <Route path="/Suspense" element={<Suspense/>}/>
        <Route path="/SuspenseList" element={<SuspenseList/>}/>
        <Route path="/StartTransition" element={<StartTransition/>}/>
        <Route path="/UseDeferredValue" element={<UseDeferredValue/>}/>
        <Route path="/UseTransition" element={<UseTransition/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
