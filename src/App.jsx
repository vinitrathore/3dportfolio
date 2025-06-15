// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './AdminComps/Dashboard/DashBoard';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <Main />
          }
        />

        {/* Admin route */}
        <Route path="/admin" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
