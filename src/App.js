import logo from './logo.svg';
import './App.css';
import ComA from './ComA';
import { createContext } from 'react';
const FirstName = createContext();
function App() {

  return (
    <>
    <FirstName.Provider value={"ankit"}>
    <ComA/>
    </FirstName.Provider>
    
    </>
  );
}

export default App;
export { FirstName };
