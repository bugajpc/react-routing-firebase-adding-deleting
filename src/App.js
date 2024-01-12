import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import AddPost from './AddPost';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={<Posts/>}/>
          <Route path='/add-post' element={<AddPost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
