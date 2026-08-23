import { useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheck, ShieldAlert, Trophy, Vote, Lock, Unlock, ArrowRight, RotateCcw, EyeOff } from 'lucide-react';

const ElGamalResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedCandidate, k, p, g, y, C1, C2, correctC1, correctC2, message } = location.state || {};

  if (!location.state) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center p-6">
        <div className="text-center text-white">
          <ShieldAlert className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">No Vote Data Found</h2>
          <p className="text-slate-400 mb-6">Please complete the voting process first.</p>
          <button 
            onClick={() => navigate('/secret-vote/input')}
            className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors"
          >
            Go to Voting Booth
          </button>
        </div>
      </div>
    );
  }

  const isC1Correct = C1 === correctC1;
  const isC2Correct = C2 === correctC2;
  const isFullyCorrect = isC1Correct && isC2Correct;

  // Decryption demonstration (what the tallying authority would do)
  // x = 6 (private key)
  // M = C2 * (C1^x)^-1 mod p
  const x = 6;
  const c1x = Math.pow(correctC1, x) % p; // 8^6 mod 13
  // Modular inverse of c1x mod p
  // For small numbers, we can compute directly
  let inv = 1;
  for (let i = 1; i < p; i++) {
    if ((c1x * i) % p === 1) {
      inv = i;
      break;
    }
  }
  const decryptedM = (correctC2 * inv) % p;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
              isFullyCorrect 
                ? 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30' 
                : 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/30'
            }`}>
              {isFullyCorrect ? (
                <Trophy className="w-12 h-12 text-white" />
              ) : (
                <ShieldAlert className="w-12 h-12 text-white" />
              )}
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">
              {isFullyCorrect ? "Vote Successfully Encrypted!" : "Encryption Needs Review"}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {isFullyCorrect 
                ? "Your ballot has been securely encrypted and is ready for transmission. No one can read your vote without the private key."
                : "Some values were incorrect. Review the calculations below to understand where the error occurred."}
            </p>
          </div>

          {/* Vote Summary */}
          <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Vote className="w-5 h-5 text-purple-400" />
              Ballot Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Candidate</p>
                <p className="text-white font-bold">{selectedCandidate?.name}</p>
                <p className="text-slate-400 text-sm">{selectedCandidate?.party}</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Message Value (M)</p>
                <p className="text-2xl font-mono font-bold text-amber-400">{message}</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Ephemeral Key (k)</p>
                <p className="text-2xl font-mono font-bold text-pink-400">{k}</p>
              </div>
            </div>
          </div>

          {/* Ciphertext Comparison */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-bold text-white">Ciphertext Verification</h3>

            {/* C1 */}
            <div className={`rounded-xl border p-5 ${
              isC1Correct 
                ? 'bg-emerald-900/10 border-emerald-500/30' 
                : 'bg-rose-900/10 border-rose-500/30'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isC1Correct ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`}>
                    <Lock className={`w-5 h-5 ${isC1Correct ? 'text-emerald-400' : 'text-rose-400'}`} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">C1 = g<sup>k</sup> mod p</p>
                    <p className="text-slate-400 text-sm">First component of ciphertext</p>
                  </div>
                </div>
                <span className={`text-2xl font-bold ${isC1Correct ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isC1Correct ? '✓' : '✗'}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-slate-900/40 rounded-lg p-3">
                  <p className="text-slate-500 text-xs">Your Answer</p>
                  <p className="font-mono text-lg text-white">{C1}</p>
                </div>
                <div className="bg-slate-900/40 rounded-lg p-3">
                  <p className="text-slate-500 text-xs">Correct Value</p>
                  <p className="font-mono text-lg text-emerald-400">{correctC1}</p>
                </div>
                <div className="bg-slate-900/40 rounded-lg p-3">
                  <p className="text-slate-500 text-xs">Calculation</p>
                  <p className="font-mono text-sm text-slate-300">{g}^{k} mod {p} = {correctC1}</p>
                </div>
              </div>
            </div>

            {/* C2 */}
            <div className={`rounded-xl border p-5 ${
              isC2Correct 
                ? 'bg-emerald-900/10 border-emerald-500/30' 
                : 'bg-rose-900/10 border-rose-500/30'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isC2Correct ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`}>
                    <Lock className={`w-5 h-5 ${isC2Correct ? 'text-emerald-400' : 'text-rose-400'}`} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">C2 = M × y<sup>k</sup> mod p</p>
                    <p className="text-slate-400 text-sm">Second component containing the encrypted vote</p>
                  </div>
                </div>
                <span className={`text-2xl font-bold ${isC2Correct ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isC2Correct ? '✓' : '✗'}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-slate-900/40 rounded-lg p-3">
                  <p className="text-slate-500 text-xs">Your Answer</p>
                  <p className="font-mono text-lg text-white">{C2}</p>
                </div>
                <div className="bg-slate-900/40 rounded-lg p-3">
                  <p className="text-slate-500 text-xs">Correct Value</p>
                  <p className="font-mono text-lg text-emerald-400">{correctC2}</p>
                </div>
                <div className="bg-slate-900/40 rounded-lg p-3">
                  <p className="text-slate-500 text-xs">Calculation</p>
                  <p className="font-mono text-sm text-slate-300">{message} × {y}^{k} mod {p} = {correctC2}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decryption Demo */}
          <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-indigo-300 mb-4 flex items-center gap-2">
              <Unlock className="w-5 h-5" />
              How the Tallying Authority Decrypts
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Only the election commission with private key <span className="font-mono text-rose-400">x = {x}</span> can recover your vote:
            </p>
            <div className="bg-slate-900/60 rounded-lg p-4 font-mono text-sm space-y-2 border border-white/10">
              <p className="text-slate-400">1. Compute shared secret: s = C1<sup>x</sup> mod p = {correctC1}^{x} mod {p} = {c1x}</p>
              <p className="text-slate-400">2. Find modular inverse: s<sup>-1</sup> mod {p} = {inv}</p>
              <p className="text-slate-400">3. Recover message: M = C2 × s<sup>-1</sup> mod p = {correctC2} × {inv} mod {p} = <span className="text-emerald-400 font-bold">{decryptedM}</span></p>
            </div>
            <p className="text-indigo-300 text-sm mt-3">
              ✅ Decrypted vote matches original message M = {message}! The election commission can tally your vote without ever knowing your identity.
            </p>
          </div>

          {/* Privacy Note */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <EyeOff className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-purple-300 mb-2">Why Your Vote Remains Secret</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Even though the ciphertext <span className="font-mono text-indigo-400">(C1, C2)</span> is public, an attacker cannot determine M without 
                  the private key <span className="font-mono text-rose-400">x</span>. The random ephemeral key <span className="font-mono text-pink-400">k</span> 
                  ensures that encrypting the same vote twice produces completely different ciphertexts—preventing pattern analysis. 
                  This is called <span className="text-purple-400 font-semibold">semantic security</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/secret-vote/importance')}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
            >
              Learn More About E-Voting
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/secret-vote')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Vote Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElGamalResultPage;