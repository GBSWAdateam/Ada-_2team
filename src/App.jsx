import Description from './pages/Description';
import SavePath from './pages/SavePath';
import Main from './pages/Main';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="zigtongDesc" element={<Description/>} />
      <Route path='savePath' element={<SavePath />} />
    </Routes>
  );
}

export default App;
