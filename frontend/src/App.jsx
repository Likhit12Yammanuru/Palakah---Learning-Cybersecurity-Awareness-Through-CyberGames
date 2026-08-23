// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameSelector from './GameSelector';

// Secure Message Game pages
import SecureMessageScenario from './components/SecureMessageGame/ScenarioPage';
import SecureMessageInstructions from './components/SecureMessageGame/InstructionsPage';
import SecureMessageInput from './components/SecureMessageGame/InputPage';
import SecureMessageResult from './components/SecureMessageGame/ResultPage';
import SecureMessageImportance from './components/SecureMessageGame/ImportancePage';
import SecureMessageStartPage from './components/SecureMessageGame/StartPage';

// Secret Vote Game pages
import SecretVoteScenario from './components/SecretVoteGame/ScenarioPage';
import SecretVoteInstructions from './components/SecretVoteGame/InstructionsPage';
import SecretVoteInput from './components/SecretVoteGame/InputPage';
import SecretVoteResult from './components/SecretVoteGame/ResultPage';
import SecretVoteImportance from './components/SecretVoteGame/ImportancePage'; 
import SecretVoteStartPage from './components/SecretVoteGame/StartPage';

// Digital Signature Game pages - ENHANCED VERSION
import DigitalSignatureScenario from './components/DigitalSignatureGame/ScenarioPage';
import DigitalSignatureInstructions from './components/DigitalSignatureGame/InstructionsPage';
import DigitalSignatureInput from './components/DigitalSignatureGame/InputPage';
import DigitalSignatureResult from './components/DigitalSignatureGame/ResultPage';
import DigitalSignatureImportance from './components/DigitalSignatureGame/ImportancePage';
import DigitalSignatureStartPage from './components/DigitalSignatureGame/StartPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <Header />
        <main className="pb-12">
          <Routes>
            {/* Home / Game Selector */}
            <Route path="/" element={<GameSelector />} />

            {/* Secure Message Game */}
            <Route path="/secure-message" element={<SecureMessageStartPage />} />
            <Route path="/secure-message/scenario" element={<SecureMessageScenario />} />
            <Route path="/secure-message/instructions" element={<SecureMessageInstructions />} />
            <Route path="/secure-message/input" element={<SecureMessageInput />} />
            <Route path="/secure-message/result" element={<SecureMessageResult />} />
            <Route path="/secure-message/importance" element={<SecureMessageImportance />} />

            {/* Secret Vote Game */}
            <Route path="/secret-vote" element={<SecretVoteStartPage />} />
            <Route path="/secret-vote/scenario" element={<SecretVoteScenario />} />
            <Route path="/secret-vote/instructions" element={<SecretVoteInstructions />} />
            <Route path="/secret-vote/input" element={<SecretVoteInput />} />
            <Route path="/secret-vote/result" element={<SecretVoteResult />} />
            <Route path="/secret-vote/importance" element={<SecretVoteImportance />} />

            {/* Digital Signature Game */}
            <Route path="/digital-signature" element={<DigitalSignatureStartPage />} />
            <Route path="/digital-signature/scenario" element={<DigitalSignatureScenario />} />
            <Route path="/digital-signature/instructions" element={<DigitalSignatureInstructions />} />
            <Route path="/digital-signature/input" element={<DigitalSignatureInput />} />
            <Route path="/digital-signature/result" element={<DigitalSignatureResult />} />
            <Route path="/digital-signature/importance" element={<DigitalSignatureImportance />} />

            {/* Fallback */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-6xl font-bold mb-4 text-indigo-400">404</h1>
                  <p className="text-slate-400 text-xl">Page not found in this secure facility.</p>
                </div>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;