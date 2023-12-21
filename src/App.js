import './App.css';
import ApiLists from './Components/ApiLists/ApiLists';
import Counter from './Components/Counter/Counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Counter /> } />
      <Route path='/counter' element={<Counter />} />
      <Route path='/api-list' element={<ApiLists />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
