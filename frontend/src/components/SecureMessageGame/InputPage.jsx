import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Lock, AlertCircle, ChevronRight, Eye, EyeOff, Radio } from 'lucide-react';

const SecureMessageInput = () => {
  const [userCiphertext, setUserCiphertext] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showPlaintext, setShowPlaintext] = useState(false);
  const navigate = useNavigate();

  // Mission parameters
  const plaintext = 'ATTACK';
  const key = 3;
  const correctCiphertext = 'DWWDFN';

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalized = userCiphertext.toUpperCase().replace(/[^A-Z]/g, '');

    navigate('/secure-message/result', {
      state: {
        userAnswer: normalized,
        correctAnswer: correctCiphertext,
        plaintext,
        key,
        explanation: 'Each letter was shifted forward by 3 positions in the alphabet using the Caesar cipher.'
      }
    });
  };

  // Live preview of encryption
  const encryptChar = (char, shift) => {
    if (!char.match(/[A-Z]/i)) return char;
    const code = char.toUpperCase().charCodeAt(0);
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Progress */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">1</div>
            <div className="w-16 h-1 bg-blue-500/50 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">2</div>
            <div className="w-16 h-1 bg-blue-500/50 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold border border-white/30">3</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Encryption Terminal</h2>
              <p className="text-slate-400">Transmit secure intelligence to headquarters</p>
            </div>
          </div>

          {/* Mission Intel Card */}
          <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Radio className="w-5 h-5 text-amber-400" />
                <h3 className="text-white font-bold">Classified Transmission</h3>
              </div>
              <button
                onClick={() => setShowPlaintext(!showPlaintext)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                {showPlaintext ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                {showPlaintext ? 'Hide' : 'Show'} Plaintext
              </button>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-6 border border-white/10 text-center">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Plaintext Message</p>
              <p className={`text-4xl font-mono font-bold tracking-[0.5em] transition-all ${
                showPlaintext ? 'text-white' : 'text-slate-700 blur-sm select-none'
              }`}>
                {plaintext}
              </p>
              {!showPlaintext && (
                <p className="text-xs text-slate-600 mt-2">Click "Show Plaintext" to reveal</p>
              )}
            </div>

            <div className="mt-4 flex items-center justify-center gap-6">
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase">Encryption Key</p>
                <p className="text-2xl font-mono font-bold text-cyan-400">{key}</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase">Cipher Type</p>
                <p className="text-sm font-semibold text-blue-400">Caesar Shift</p>
              </div>
            </div>
          </div>

          {/* Live Encryption Preview */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-blue-300 font-semibold mb-4 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Live Encryption Preview
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-500">
                    <th className="text-left pb-2 font-medium">Position</th>
                    {plaintext.split('').map((_, i) => (
                      <th key={i} className="text-center pb-2 font-mono font-medium">{i + 1}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="py-3 text-slate-400">Plaintext</td>
                    {plaintext.split('').map((char, i) => (
                      <td key={i} className="text-center py-3 font-mono text-white font-bold">{char}</td>
                    ))}
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-3 text-slate-400">Shift (+{key})</td>
                    {plaintext.split('').map((char, i) => (
                      <td key={i} className="text-center py-3 font-mono text-cyan-400">
                        {char}→{encryptChar(char, key)}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-3 text-slate-400 font-semibold">Ciphertext</td>
                    {plaintext.split('').map((char, i) => (
                      <td key={i} className="text-center py-3 font-mono text-emerald-400 font-bold text-lg">
                        {encryptChar(char, key)}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-slate-800/40 rounded-xl p-6 border border-white/10">
              <label className="block text-white font-semibold mb-3">
                Enter the Ciphertext
              </label>
              <p className="text-slate-400 text-sm mb-4">
                Based on the encryption preview above, what is the complete ciphertext for "{plaintext}" with key {key}?
              </p>
              <input
                type="text"
                value={userCiphertext}
                onChange={(e) => setUserCiphertext(e.target.value.toUpperCase())}
                placeholder="Enter ciphertext (e.g., DWWDFN)"
                className="w-full bg-slate-900/80 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono text-lg tracking-widest text-center uppercase"
                maxLength={10}
                required
              />
              <p className="text-xs text-slate-500 mt-2 text-center">
                Letters only. Automatically converted to uppercase.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2 transition-colors"
              >
                <AlertCircle className="w-4 h-4" />
                {showHint ? 'Hide Hint' : 'Need a hint?'}
              </button>

              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                Transmit Encrypted Message
              </button>
            </div>
          </form>

          {showHint && (
            <div className="mt-4 bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 animate-fadeIn">
              <p className="text-blue-300 text-sm">
                <span className="font-semibold">Encryption walkthrough:</span>
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-400 font-mono">
                <li>• A (position 1) + 3 = D</li>
                <li>• T (position 20) + 3 = W</li>
                <li>• T (position 20) + 3 = W</li>
                <li>• A (position 1) + 3 = D</li>
                <li>• C (position 3) + 3 = F</li>
                <li>• K (position 11) + 3 = N</li>
              </ul>
              <p className="text-emerald-400 text-sm mt-2 font-semibold">Result: DWWDFN</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecureMessageInput;
