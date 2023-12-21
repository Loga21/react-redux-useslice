// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Counter } from './Features/Counter/Counter';
import FetchData from './Features/FetchData/FetchData';
import D3Charts from './d3Charts/d3Charts';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Counter />} />
      <Route path='/fetch' element={<FetchData />} />
      <Route path='/charts' element={<D3Charts />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
