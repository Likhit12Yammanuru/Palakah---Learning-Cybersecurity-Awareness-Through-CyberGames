import { useNavigate } from 'react-router-dom';
import { BookOpen, Key, Calculator, Shuffle, ArrowRight, Lock } from 'lucide-react';

const InstructionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Progress */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">1</div>
            <div className="w-16 h-1 bg-purple-500/50 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">2</div>
            <div className="w-16 h-1 bg-white/10 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold border border-white/30">3</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <BookOpen className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">How ElGamal Encryption Works</h2>
          </div>

          <div className="space-y-8">
            {/* Step 1: Keys */}
            <div className="relative pl-8 border-l-2 border-purple-500/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900" />
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Key className="w-5 h-5 text-purple-400" />
                The Keys
              </h3>
              <div className="bg-slate-800/60 rounded-xl p-5 border border-white/10">
                <p className="text-slate-300 mb-3">
                  ElGamal uses the difficulty of the <span className="text-purple-400 font-semibold">Discrete Logarithm Problem</span> for security:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-4">
                    <p className="text-rose-400 font-bold mb-1">🔒 Private Key (x)</p>
                    <p className="text-sm text-slate-400">Randomly chosen. Kept secret by the tallying authority.</p>
                    <p className="text-xs text-slate-500 mt-2 font-mono">x = 6 (only the election commission knows this)</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                    <p className="text-emerald-400 font-bold mb-1">🔓 Public Key (y)</p>
                    <p className="text-sm text-slate-400">Shared with all voters. Used to encrypt votes.</p>
                    <p className="text-xs text-slate-500 mt-2 font-mono">y = g^x mod p = 2^6 mod 13 = 12</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Parameters */}
            <div className="relative pl-8 border-l-2 border-pink-500/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 border-4 border-slate-900" />
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-pink-400" />
                Public Parameters
              </h3>
              <div className="bg-slate-800/60 rounded-xl p-5 border border-white/10">
                <p className="text-slate-300 mb-4">
                  These values are published by the election commission and known to everyone:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-slate-900/80 rounded-lg p-3 text-center border border-white/10">
                    <p className="text-xs text-slate-500 uppercase">Prime p</p>
                    <p className="text-xl font-mono font-bold text-pink-400">13</p>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-3 text-center border border-white/10">
                    <p className="text-xs text-slate-500 uppercase">Generator g</p>
                    <p className="text-xl font-mono font-bold text-purple-400">2</p>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-3 text-center border border-white/10">
                    <p className="text-xs text-slate-500 uppercase">Public Key y</p>
                    <p className="text-xl font-mono font-bold text-emerald-400">12</p>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-3 text-center border border-white/10">
                    <p className="text-xs text-slate-500 uppercase">Vote M</p>
                    <p className="text-xl font-mono font-bold text-amber-400">5</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Encryption */}
            <div className="relative pl-8 border-l-2 border-indigo-500/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Shuffle className="w-5 h-5 text-indigo-400" />
                The Encryption (Your Task!)
              </h3>
              <div className="bg-slate-800/60 rounded-xl p-5 border border-white/10">
                <p className="text-slate-300 mb-4">
                  To encrypt your vote, you choose a random ephemeral key <span className="font-mono text-pink-400">k</span> and compute:
                </p>
                <div className="bg-slate-900/80 rounded-lg p-4 border border-white/10 space-y-3">
                  <div className="text-center">
                    <p className="text-2xl font-mono text-indigo-400 font-bold">
                      C1 = g<sup className="text-lg">k</sup> mod p
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-mono text-pink-400 font-bold">
                      C2 = M × y<sup className="text-lg">k</sup> mod p
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-4">
                  <p className="text-indigo-300 font-semibold mb-2">🎯 Your Mission:</p>
                  <p className="text-slate-300 text-sm">
                    For this election, use <span className="font-mono text-pink-400 font-bold">k = 3</span>. Compute:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-300 font-mono">
                    <li>C1 = 2³ mod 13 = ?</li>
                    <li>C2 = 5 × 12³ mod 13 = ?</li>
                  </ul>
                </div>

                <div className="mt-4 bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <p className="text-purple-300 font-semibold mb-2">🔐 Why This Is Secure:</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    The random <span className="font-mono text-pink-400">k</span> makes each encryption unique—even the same vote encrypts differently every time. 
                    An attacker intercepting <span className="font-mono text-indigo-400">C1</span> and <span className="font-mono text-pink-400">C2</span> 
                    cannot determine M without solving the discrete logarithm problem, which is computationally infeasible for large primes.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Decryption */}
            <div className="relative pl-8 border-l-2 border-emerald-500/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900" />
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                Decryption (Tallying Authority Only)
              </h3>
              <div className="bg-slate-800/60 rounded-xl p-5 border border-white/10">
                <p className="text-slate-300 mb-3">
                  Only the election commission with private key <span className="font-mono text-rose-400">x</span> can decrypt:
                </p>
                <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-center border border-white/10">
                  <p className="text-xl text-emerald-400 font-bold">
                    M = C2 × (C1<sup className="text-base">x</sup>)<sup className="text-base">-1</sup> mod p
                  </p>
                </div>
                <p className="text-sm text-slate-400 mt-3">
                  This requires computing the modular inverse of C1<sup>x</sup>, which only someone with x can do.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-between items-center">
            <button 
              onClick={() => navigate('/secret-vote/scenario')}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Scenario
            </button>
            <button 
              onClick={() => navigate('/secret-vote/input')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
            >
              Enter the Voting Booth
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;