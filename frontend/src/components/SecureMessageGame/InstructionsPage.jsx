import { useNavigate } from 'react-router-dom';
import { BookOpen, Lock, Key, ArrowRight, Shield, FileKey } from 'lucide-react';

const InstructionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Progress */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">1</div>
            <div className="w-16 h-1 bg-blue-500/50 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">2</div>
            <div className="w-16 h-1 bg-white/10 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold border border-white/30">3</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">How Symmetric Encryption Works</h2>
          </div>

          <div className="space-y-8">
            {/* Step 1: The Key */}
            <div className="relative pl-8 border-l-2 border-blue-500/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Key className="w-5 h-5 text-blue-400" />
                The Shared Secret Key
              </h3>
              <div className="bg-slate-800/60 rounded-xl p-5 border border-white/10">
                <p className="text-slate-300 mb-3">
                  In symmetric encryption, the same key is used for both encryption and decryption. 
                  Both sender and receiver must possess this secret key beforehand:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                    <p className="text-emerald-400 font-bold mb-1">🔐 Sender (You)</p>
                    <p className="text-sm text-slate-400">Encrypts plaintext using the secret key.</p>
                    <p className="text-xs text-slate-500 mt-2 font-mono">Key = 3 (shared with HQ)</p>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-blue-400 font-bold mb-1">🔓 Receiver (HQ)</p>
                    <p className="text-sm text-slate-400">Decrypts ciphertext using the same key.</p>
                    <p className="text-xs text-slate-500 mt-2 font-mono">Key = 3 (shared with you)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Caesar Cipher (Simplified Demo) */}
            <div className="relative pl-8 border-l-2 border-cyan-500/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-cyan-400" />
                The Caesar Cipher (Your Training Exercise)
              </h3>
              <div className="bg-slate-800/60 rounded-xl p-5 border border-white/10">
                <p className="text-slate-300 mb-4">
                  For this mission, you'll use a <span className="text-cyan-400 font-semibold">Caesar cipher</span>—a classical 
                  substitution cipher that shifts each letter by a fixed number of positions. While modern systems use AES, 
                  the Caesar cipher beautifully illustrates the core concept:
                </p>
                <div className="bg-slate-900/80 rounded-lg p-4 border border-white/10 space-y-3">
                  <div className="text-center">
                    <p className="text-xl font-mono text-cyan-400 font-bold">
                      Ciphertext = Plaintext shifted by Key positions
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-300 font-semibold mb-2">🎯 Example:</p>
                  <div className="space-y-2 text-sm text-slate-300 font-mono">
                    <p>Plaintext:  <span className="text-white">HELLO</span></p>
                    <p>Key:        <span className="text-cyan-400">3</span></p>
                    <p>Encryption: H→K, E→H, L→O, L→O, O→R</p>
                    <p>Ciphertext: <span className="text-emerald-400 font-bold">KHOOR</span></p>
                  </div>
                </div>

                <div className="mt-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-cyan-300 font-semibold mb-2">🔐 Why This Works:</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Without knowing the key (3), an interceptor sees only meaningless letters. The security relies entirely 
                    on keeping the key secret. In modern AES encryption, the key is 128-256 bits instead of a single number, 
                    making brute-force attacks impossible.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Your Mission */}
            <div className="relative pl-8 border-l-2 border-indigo-500/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <FileKey className="w-5 h-5 text-indigo-400" />
                Your Encryption Task
              </h3>
              <div className="bg-slate-800/60 rounded-xl p-5 border border-white/10">
                <p className="text-slate-300 mb-3">
                  You must encrypt the following message using <span className="font-mono text-cyan-400 font-bold">Key = 3</span>:
                </p>
                <div className="bg-slate-900/80 rounded-lg p-4 text-center border border-white/10">
                  <p className="text-3xl font-mono text-white font-bold tracking-widest">ATTACK</p>
                  <p className="text-slate-500 text-sm mt-2">Plaintext message</p>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-300">
                  <p>1. Take each letter of "ATTACK"</p>
                  <p>2. Shift it forward by 3 positions in the alphabet</p>
                  <p>3. A→D, T→W, T→W, A→D, C→F, K→N</p>
                  <p>4. The ciphertext should be: <span className="font-mono text-emerald-400 font-bold">DWWDFN</span></p>
                </div>
              </div>
            </div>

            {/* Modern Context */}
            <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                From Caesar to AES: The Evolution
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The Caesar cipher was used by Julius Caesar in 100 BC. Today, 
                <span className="text-cyan-400 font-semibold"> AES (Advanced Encryption Standard)</span> protects 
                everything from WhatsApp messages to classified government data. AES uses substitution, permutation, 
                and multiple rounds of transformation with a 128-256 bit key. The principle remains the same: 
                <span className="text-white font-semibold"> a secret key transforms readable data into unreadable ciphertext.</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-between items-center">
            <button 
              onClick={() => navigate('/secure-message/scenario')}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Scenario
            </button>
            <button 
              onClick={() => navigate('/secure-message/input')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Encrypt the Message
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
