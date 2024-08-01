import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert("");
    }, 1500);
  }

  return (
    <>
      <NoteState showAlert={showAlert}>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />}></Route>
              <Route path="/login" element={<Login showAlert={showAlert} />}></Route>
              <Route path="/signup" element={<Register showAlert={showAlert} />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
