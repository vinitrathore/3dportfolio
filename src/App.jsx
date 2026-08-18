import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './AdminComps/Dashboard/DashBoard';
import Main from './components/Main';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
