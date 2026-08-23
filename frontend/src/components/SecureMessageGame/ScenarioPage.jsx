import { useNavigate } from 'react-router-dom';
import { AlertTriangle, MessageSquare, EyeOff, Radio, Shield } from 'lucide-react';

const ScenarioPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Progress */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">1</div>
            <div className="w-16 h-1 bg-blue-500/50 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold border border-white/30">2</div>
            <div className="w-16 h-1 bg-white/10 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold border border-white/30">3</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-amber-500/20 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-amber-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Operation Silent Signal
            </h2>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div className="bg-slate-800/50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-lg">
                You are <span className="text-blue-400 font-semibold">Agent Cipher</span>, an intelligence operative embedded in hostile territory. 
                Your handler at headquarters needs coordinates for an enemy supply depot, but all radio channels are monitored by 
                adversary signal intelligence. You must encrypt your message using a 
                <span className="text-cyan-400 font-semibold"> symmetric-key cipher</span> before transmission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-500/50 transition-colors">
                <EyeOff className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Intercepted Channels</h3>
                <p className="text-sm text-slate-400">Enemy SIGINT monitors all frequencies. Plaintext transmission means capture.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-cyan-500/50 transition-colors">
                <Radio className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Shared Secret Key</h3>
                <p className="text-sm text-slate-400">You and HQ possess the same secret key, exchanged during your briefing.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-indigo-500/50 transition-colors">
                <Shield className="w-8 h-8 text-indigo-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">AES Principles</h3>
                <p className="text-sm text-slate-400">Learn how modern symmetric encryption protects billions of messages daily.</p>
              </div>
            </div>

            <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-blue-300 font-bold text-lg mb-3 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                The Mission
              </h3>
              <p className="text-slate-300">
                You will encrypt the message <span className="font-mono text-cyan-400">"ATTACK"</span> using a simplified 
                substitution cipher that demonstrates the core principle of symmetric encryption: 
                <span className="text-blue-400 font-semibold"> applying a secret key to transform plaintext into unreadable ciphertext</span>. 
                Only someone with the identical key can reverse the transformation.
              </p>
            </div>

            <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-6">
              <h3 className="text-rose-300 font-bold text-lg mb-3">⚠️ The Stakes</h3>
              <p className="text-slate-300 text-sm">
                If the enemy intercepts your unencrypted coordinates, they will relocate the depot and your six months of 
                reconnaissance will be wasted. Worse, they may trace the signal back to your position. 
                <span className="text-rose-400 font-semibold"> Encryption is not optional—it is survival.</span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button 
              onClick={() => navigate('/secure-message/instructions')}
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Learn Encryption Basics
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenarioPage;
