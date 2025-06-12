import React, { useState } from 'react';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import CategoryPrompt from './components/CategoryPrompt';
import PromptsHistory from './components/PromptsHistory';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // ניווט לאדמין
  if (isAdmin) {
    return (
      <div className="app-container">
        <AdminDashboard onLogout={() => setIsAdmin(false)} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>AI Learning Platform</h1>
      {!user && !showRegister && (
        <>
          <Login onLogin={setUser} />
          <button onClick={() => setShowRegister(true)} style={{ marginTop: 12 }}>רישום משתמש חדש</button>
          <AdminLogin onAdminLogin={() => setIsAdmin(true)} />
        </>
      )}
      {showRegister && !user && (
        <RegisterUser onRegister={setUser} onBack={() => setShowRegister(false)} />
      )}
      {user && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>שלום {user.name}</h2>
            <button onClick={() => { setUser(null); setShowHistory(false); }}>התנתק</button>
          </div>
          {!showHistory && (
            <>
              <CategoryPrompt user={user} />
              <button style={{ marginTop: 16 }} onClick={() => setShowHistory(true)}>
                הצג היסטוריית prompts
              </button>
            </>
          )}
          {showHistory && (
            <>
              <PromptsHistory userId={user.id} />
              <button style={{ marginTop: 16 }} onClick={() => setShowHistory(false)}>
                חזור לעמוד הראשי
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;