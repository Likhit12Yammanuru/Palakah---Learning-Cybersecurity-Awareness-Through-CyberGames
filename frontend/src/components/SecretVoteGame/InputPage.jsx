import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Vote, Calculator, Lock, AlertCircle, ChevronRight, EyeOff } from 'lucide-react';

const InputPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [guessC1, setGuessC1] = useState('');
  const [guessC2, setGuessC2] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [step, setStep] = useState('vote'); // 'vote' | 'encrypt'
  const navigate = useNavigate();

  // ElGamal parameters
  const p = 13;
  const g = 2;
  const y = 12; // public key = g^x mod p = 2^6 mod 13 = 12
  const k = 3;  // ephemeral key (given to user)

  // Pre-computed correct values
  // C1 = g^k mod p = 2^3 mod 13 = 8
  // For Candidate A (M=5): C2 = M * y^k mod p = 5 * 12^3 mod 13 = 5 * 1728 mod 13 = 5 * 12 mod 13 = 60 mod 13 = 8
  // For Candidate B (M=7): C2 = 7 * 12^3 mod 13 = 7 * 12 mod 13 = 84 mod 13 = 6

  const candidates = [
    { id: 'A', name: 'Dr. Alice Chen', party: 'Progressive Alliance', message: 5, color: 'from-blue-500 to-cyan-500' },
    { id: 'B', name: 'Bob Martinez', party: 'Conservative Union', message: 7, color: 'from-amber-500 to-orange-500' }
  ];

  const selectedMessage = selectedCandidate ? candidates.find(c => c.id === selectedCandidate)?.message : null;

  // Calculate correct values based on selection
  const correctC1 = 8; // 2^3 mod 13 = 8 (same for both since k is fixed)
  const correctC2 = selectedMessage === 5 ? 8 : (selectedMessage === 7 ? 6 : null);

  const handleVote = (candidateId) => {
    setSelectedCandidate(candidateId);
    setStep('encrypt');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/secret-vote/result', {
      state: {
        selectedCandidate: candidates.find(c => c.id === selectedCandidate),
        k,
        p, g, y,
        C1: Number(guessC1),
        C2: Number(guessC2),
        correctC1,
        correctC2,
        message: selectedMessage
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Progress */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">1</div>
            <div className="w-16 h-1 bg-purple-500/50 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">2</div>
            <div className="w-16 h-1 bg-purple-500/50 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold border border-white/30">3</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <Vote className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Secure Voting Booth</h2>
              <p className="text-slate-400">Step {step === 'vote' ? '1' : '2'} of 2</p>
            </div>
          </div>

          {step === 'vote' ? (
            <div className="space-y-6">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 mb-6">
                <p className="text-purple-300 text-sm flex items-center gap-2">
                  <EyeOff className="w-4 h-4" />
                  Your selection is private. Choose your candidate below:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {candidates.map((candidate) => (
                  <button
                    key={candidate.id}
                    onClick={() => handleVote(candidate.id)}
                    className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                      selectedCandidate === candidate.id
                        ? 'bg-white/15 border-purple-400 shadow-lg shadow-purple-500/20'
                        : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${candidate.color} text-white text-2xl font-bold shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                      {candidate.id}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{candidate.name}</h3>
                    <p className="text-slate-400 text-sm">{candidate.party}</p>
                    <div className="mt-4 inline-flex items-center text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Select this candidate
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Selected candidate info */}
              <div className="bg-slate-800/60 border border-white/10 rounded-xl p-4 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${candidates.find(c => c.id === selectedCandidate)?.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {selectedCandidate}
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">Your Vote For</p>
                  <p className="text-white font-bold">{candidates.find(c => c.id === selectedCandidate)?.name}</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-mono border border-purple-500/30">
                    M = {selectedMessage}
                  </span>
                </div>
              </div>

              {/* Public parameters */}
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="w-5 h-5 text-emerald-400" />
                  <p className="text-emerald-300 font-semibold text-sm">Election Commission Public Parameters</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-slate-900/50 rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-500">p (prime)</p>
                    <p className="text-lg font-mono font-bold text-emerald-400">{p}</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-500">g (generator)</p>
                    <p className="text-lg font-mono font-bold text-emerald-400">{g}</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-500">y (public key)</p>
                    <p className="text-lg font-mono font-bold text-emerald-400">{y}</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-500">k (ephemeral)</p>
                    <p className="text-lg font-mono font-bold text-pink-400">{k}</p>
                  </div>
                </div>
              </div>

              {/* Encryption task */}
              <div className="bg-slate-800/40 rounded-xl p-6 border border-white/10">
                <label className="block text-white font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-purple-400" />
                  Encrypt Your Vote
                </label>

                <div className="bg-slate-900/60 rounded-lg p-4 mb-6 border border-white/5">
                  <p className="text-slate-400 text-sm mb-3">Compute the ciphertext pair (C1, C2):</p>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-indigo-400">C1 = g<sup>k</sup> mod p = {g}<sup>{k}</sup> mod {p} = ?</p>
                    <p className="text-pink-400">C2 = M × y<sup>k</sup> mod p = {selectedMessage} × {y}<sup>{k}</sup> mod {p} = ?</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guessC1" className="block text-sm text-slate-400 mb-2">C1 Value</label>
                      <input
                        type="number"
                        id="guessC1"
                        value={guessC1}
                        onChange={(e) => setGuessC1(e.target.value)}
                        placeholder={`Calculate ${g}^${k} mod ${p}`}
                        className="w-full bg-slate-900/80 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="guessC2" className="block text-sm text-slate-400 mb-2">C2 Value</label>
                      <input
                        type="number"
                        id="guessC2"
                        value={guessC2}
                        onChange={(e) => setGuessC2(e.target.value)}
                        placeholder={`Calculate ${selectedMessage} × ${y}^${k} mod ${p}`}
                        className="w-full bg-slate-900/80 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all font-mono"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setShowHint(!showHint)}
                      className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2 transition-colors"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {showHint ? 'Hide Hint' : 'Need a hint?'}
                    </button>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep('vote')}
                        className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
                      >
                        Change Vote
                      </button>
                      <button
                        type="submit"
                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all hover:shadow-lg hover:shadow-purple-500/25"
                      >
                        Cast Encrypted Vote
                      </button>
                    </div>
                  </div>
                </form>

                {showHint && (
                  <div className="mt-4 bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 animate-fadeIn">
                    <p className="text-purple-300 text-sm">
                      <span className="font-semibold">Step-by-step hint:</span>
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-400 font-mono">
                      <li>• C1 = {g}³ = {g*g*g}, then {g*g*g} mod {p} = {(g**3) % p}</li>
                      <li>• y<sup>k</sup> = {y}³ = {y*y*y}, then {y*y*y} mod {p} = {(y**3) % p}</li>
                      <li>• C2 = {selectedMessage} × {(y**3) % p} = {selectedMessage * ((y**3) % p)}, then mod {p} = {(selectedMessage * ((y**3) % p)) % p}</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputPage;