import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainLayout from './components/MainLayout';
import PrivateRoute from './components/PrivateRoute';
import Forbidden from './pages/Forbidden';
import AdminDashboard from './pages/AdminDashboard';
import AdminOrderManagement from './pages/AdminOrderManagement';
import AgentManagement from './pages/AgentManagement';
import SmartLogistics from './pages/SmartLogistics';

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <MainLayout>
        <Routes>
          <Route path="/forbidden" element={<Forbidden />} />
          
          {/* Admin Routes */}
          <Route element={<PrivateRoute roles={['admin']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/orders" element={<AdminOrderManagement />} />
            <Route path="/admin/agents" element={<AgentManagement />} />
            <Route path="/logistics" element={<SmartLogistics />} />
          </Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
