import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import { Teams } from './components/teams/Teams'; // Make sure you import the Teams component

function App() {
  const [currentView, setCurrentView] = React.useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onViewChange={setCurrentView} currentView={currentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {/* Render the current view */}
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'analytics' && <Analytics />}
        {currentView === 'teams' && <Teams />} {/* Add Teams view */}
      </div>
    </div>
  );
}

export default App;
