import { useNavigate } from 'react-router-dom';
import { BookOpen, Calculator, Key, ArrowRight } from 'lucide-react';

const DigitalSignatureInstructions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Progress */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">1</div>
            <div className="w-16 h-1 bg-emerald-500/50 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">2</div>
            <div className="w-16 h-1 bg-white/10 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold border border-white/30">3</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-indigo-500/20 rounded-xl">
              <BookOpen className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">How RSA Signature Verification Works</h2>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="relative pl-8 border-l-2 border-indigo-500/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Key className="w-5 h-5 text-indigo-400" />
                The Keys
              </h3>
              <div className="bg-slate-800/60 rounded-xl p-5 border border-white/10">
                <p className="text-slate-300 mb-3">
                  In RSA cryptography, each entity has a key pair:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-4">
                    <p className="text-rose-400 font-bold mb-1">🔒 Private Key (d)</p>
                    <p className="text-sm text-slate-400">Kept secret. Used to <span className="text-white font-semibold">sign</span> messages.</p>
                    <p className="text-xs text-slate-500 mt-2 font-mono">d = 2753 (known only to the bank president)</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                    <p className="text-emerald-400 font-bold mb-1">🔓 Public Key (e, n)</p>
                    <p className="text-sm text-slate-400">Shared openly. Used to <span className="text-white font-semibold">verify</span> signatures.</p>
                    <p className="text-xs text-slate-500 mt-2 font-mono">e = 17, n = 3233 (available to all analysts)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-8 border-l-2 border-purple-500/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900" />
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-purple-400" />
                The Math: Signing
              </h3>
              <div className="bg-slate-800/60 rounded-xl p-5 border border-white/10">
                <p className="text-slate-300 mb-4">
                  To sign a message, the sender computes:
                </p>
                <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-center border border-white/10">
                  <p className="text-2xl text-purple-400 font-bold">
                    signature = hash<sup className="text-lg">d</sup> mod n
                  </p>
                </div>
                <p className="text-sm text-slate-400 mt-3">
                  Example: If hash = 100 and d = 2753, n = 3233, the signature is 100<sup>2753</sup> mod 3233.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-8 border-l-2 border-emerald-500/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900" />
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-400" />
                The Math: Verification (Your Job!)
              </h3>
              <div className="bg-slate-800/60 rounded-xl p-5 border border-white/10">
                <p className="text-slate-300 mb-4">
                  Anyone with the public key can verify by computing:
                </p>
                <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-center border border-white/10">
                  <p className="text-2xl text-emerald-400 font-bold">
                    verified_hash = signature<sup className="text-lg">e</sup> mod n
                  </p>
                </div>
                <div className="mt-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-emerald-300 font-semibold mb-2">✅ Verification Rule:</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      If <span className="font-mono text-emerald-400">verified_hash == document_hash</span> → Signature is VALID. Document is authentic.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 mt-0.5">✗</span>
                      If <span className="font-mono text-rose-400">verified_hash != document_hash</span> → Signature is INVALID. Document was tampered with!
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why it works */}
            <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-indigo-300 mb-3">🔐 Why Is This Secure?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Only the holder of the private key <span className="font-mono text-rose-400">d</span> can create a signature that, 
                when raised to the public exponent <span className="font-mono text-emerald-400">e</span> and modulo <span className="font-mono text-emerald-400">n</span>, 
                returns the original hash. If even one bit of the message changes after signing, the hash won't match, and the 
                verification will fail. This is the mathematical foundation of trust on the internet.
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-between items-center">
            <button 
              onClick={() => navigate('/digital-signature/scenario')}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Scenario
            </button>
            <button 
              onClick={() => navigate('/digital-signature/input')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              Begin Investigation
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSignatureInstructions;




