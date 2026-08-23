import { useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheck, ShieldAlert, Trophy, Lock, Unlock, ArrowRight, RotateCcw, Radio, MessageSquare } from 'lucide-react';

const SecureMessageResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userAnswer, correctAnswer, plaintext, key, explanation } = location.state || {};

  if (!location.state) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-6">
        <div className="text-center text-white">
          <ShieldAlert className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">No Transmission Data</h2>
          <p className="text-slate-400 mb-6">Please complete the encryption mission first.</p>
          <button 
            onClick={() => navigate('/secure-message/input')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors"
          >
            Go to Encryption Terminal
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = userAnswer === correctAnswer;

  // Decryption demonstration
  const decryptChar = (char, shift) => {
    if (!char.match(/[A-Z]/i)) return char;
    const code = char.toUpperCase().charCodeAt(0);
    return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
  };

  const decrypted = correctAnswer.split('').map(c => decryptChar(c, key)).join('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
              isCorrect 
                ? 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30' 
                : 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/30'
            }`}>
              {isCorrect ? (
                <Trophy className="w-12 h-12 text-white" />
              ) : (
                <ShieldAlert className="w-12 h-12 text-white" />
              )}
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">
              {isCorrect ? "Transmission Successful!" : "Encryption Error Detected"}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {isCorrect 
                ? "Your encrypted message was transmitted securely. Headquarters can now decrypt it using the shared key."
                : "The ciphertext was incorrect. Review the encryption process below to identify the error."}
            </p>
          </div>

          {/* Transmission Report */}
          <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Radio className="w-5 h-5 text-blue-400" />
              Transmission Report
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Original Message</p>
                <p className="text-2xl font-mono font-bold text-white">{plaintext}</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Your Ciphertext</p>
                <p className={`text-2xl font-mono font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {userAnswer || '—'}
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Correct Ciphertext</p>
                <p className="text-2xl font-mono font-bold text-emerald-400">{correctAnswer}</p>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-bold text-white">Encryption Breakdown</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-500 border-b border-white/10">
                    <th className="text-left py-3 font-medium">Step</th>
                    {plaintext.split('').map((_, i) => (
                      <th key={i} className="text-center py-3 font-mono font-medium">{i + 1}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-slate-400">Plaintext</td>
                    {plaintext.split('').map((char, i) => (
                      <td key={i} className="text-center py-3 font-mono text-white font-bold">{char}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-slate-400">Shift (+{key})</td>
                    {plaintext.split('').map((char, i) => {
                      const shifted = String.fromCharCode(((char.charCodeAt(0) - 65 + key) % 26) + 65);
                      return (
                        <td key={i} className="text-center py-3 font-mono text-cyan-400">
                          {char}→{shifted}
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    <td className="py-3 text-slate-400 font-semibold">Ciphertext</td>
                    {correctAnswer.split('').map((char, i) => (
                      <td key={i} className="text-center py-3 font-mono text-emerald-400 font-bold text-lg">{char}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Decryption Demo */}
          <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-blue-300 mb-4 flex items-center gap-2">
              <Unlock className="w-5 h-5" />
              How Headquarters Decrypts
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Your handler at HQ receives <span className="font-mono text-emerald-400">{correctAnswer}</span> and uses the same key 
              <span className="font-mono text-cyan-400"> {key}</span> to reverse the shift:
            </p>
            <div className="bg-slate-900/60 rounded-lg p-4 font-mono text-sm border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                {correctAnswer.split('').map((char, i) => {
                  const decrypted = decryptChar(char, key);
                  return (
                    <div key={i} className="text-center">
                      <p className="text-emerald-400 font-bold">{char}</p>
                      <p className="text-slate-500 text-xs">-{key}</p>
                      <p className="text-white font-bold">{decrypted}</p>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-slate-400 mt-3 pt-3 border-t border-white/10">
                Decrypted: <span className="text-white font-bold">{decrypted}</span> ✅
              </p>
            </div>
          </div>

          {/* Explanation — NOW ACTUALLY USED */}
          <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <Lock className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-amber-300 mb-2">Mission Debrief</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {explanation}
                </p>
              </div>
            </div>
          </div>

          {/* Security Note */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <MessageSquare className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">Why Symmetric Encryption Works</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The Caesar cipher demonstrates the fundamental principle of symmetric encryption: 
                  <span className="text-white font-semibold"> the same key transforms data in both directions</span>. 
                  Modern AES uses the same concept but with 10-14 rounds of substitution, permutation, and mixing operations 
                  using a 128-256 bit key. The security relies entirely on keeping the key secret—if an enemy obtains the key, 
                  all past and future communications are compromised. This is why key exchange protocols like Diffie-Hellman are critical.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/secure-message/importance')}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Learn More About Encryption
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/secure-message')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              New Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureMessageResult;