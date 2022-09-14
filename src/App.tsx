import { Route, Routes } from 'react-router';

import Layout from './layout/Main';
import CalendarView from './pages/calendarView';

import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="calendar" element={<CalendarView />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
