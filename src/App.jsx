import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginComponent from './Components/Login/LoginComponents';
import HomePage from './Pages/Home Page/HomePage';
import Dashboard from './Pages/Dashboard/Dasboard';
import Courses from './Pages/ViewSite/Courses';
import Module from './Pages/Module/Module';
import Performance from './Pages/Performance/Performance';
import MembersPage from './Pages/Members/MembersPage';
import DesignPage from './Pages/DesignPage/DesignPage';
import Profile from './Pages/Profile/Profile';
import SettingsPage from './Pages/SettingsPage/SettinsPage';
import Layout from './Components/Layout/Layout';
import PrivacySettings from './Components/PrivacySettings/PrivacySettings';
import SubscriptionPlans from './Components/SubscriptionPlans/SubscriptionPlans';
import Community from './Components/Community/Community';
import Notification from './Components/Notification/Notification';
import Resources from './Components/Resources/Resources'
import Support from './Pages/Support/Support';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/logincomponent" element={<LoginComponent onLogin={handleLogin} />} />
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Layout onLogout={handleLogout}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/module" element={<Module />} />
                  <Route path="/performance" element={<Performance />} />
                  <Route path="/members" element={<MembersPage />} />
                  <Route path="/design" element={<DesignPage />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settingspage" element={<SettingsPage />} />
                  <Route path="/privacysettings" element={<PrivacySettings />} />
                  <Route path="/subscriptionplans" element={<SubscriptionPlans />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/notifications" element={<Notification />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to="/logincomponent" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
