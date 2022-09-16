import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './layout/Main';
import CalendarView from './pages/calendarView';
import SpreadsheetView from './pages/spreadsheetView';

import './styles/index.scss';

function App() {
  return (
    <div className="App h-[100vh]">
      <Layout>
        <Routes>
          <Route path="calendar" element={<CalendarView />} />
          <Route path="spreadsheet" element={<SpreadsheetView />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </div>
  );
}

export default App;
