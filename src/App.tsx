import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewStartTransition from './new/NewStartTransition.tsx';
import NewSuspense from "./new/NewSuspense.tsx";
// @ts-ignore
import NewChangeSuspense from './new/NewChangeSuspense.jsx';
import OldStartTransition from "./old/OldStartTransition.tsx"
import OldSuspense from "./old/OldSuspense.tsx";

function App() {

  return (
    <div>
      <BrowserRouter basename={"/new"}>
        <Routes>
          <Route path="/startTransition" element={<NewStartTransition/>}/>
          <Route path="/suspense" element={<NewSuspense/>}/>
          <Route path="/suspense2" element={<NewChangeSuspense/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter basename={'/old'}>
        <Routes>
          <Route path="/startTransition" element={<OldStartTransition/>}/>
          <Route path="/suspense" element={<OldSuspense/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
