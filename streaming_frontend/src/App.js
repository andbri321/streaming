import './App.css';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import NotFound from './components/NotFound';
import { BrowserRouter , Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            path="/"
            element={
              <Feed/>
            }
          />
          <Route
            path="movies/*"
            element={
              <Feed/>
            }
          />
          <Route 
            path="/login/*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
