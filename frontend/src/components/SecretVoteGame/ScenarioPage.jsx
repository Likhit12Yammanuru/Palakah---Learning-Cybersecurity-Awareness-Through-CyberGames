import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Vote, EyeOff, Fingerprint, Lock } from 'lucide-react';

const ScenarioPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Progress */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">1</div>
            <div className="w-16 h-1 bg-purple-500/50 rounded-full" />
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
              The Secure Election
            </h2>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div className="bg-slate-800/50 border-l-4 border-purple-500 p-6 rounded-r-xl">
              <p className="text-lg">
                You are a <span className="text-purple-400 font-semibold">Citizen Cryptographer</span> in the nation of 
                Cryptopia, preparing to vote in the most secure digital election ever held. The election commission uses 
                <span className="text-pink-400 font-semibold"> ElGamal encryption</span> to ensure that:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500/50 transition-colors">
                <EyeOff className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Ballot Secrecy</h3>
                <p className="text-sm text-slate-400">No one—not even the election officials—can see how you voted.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-pink-500/50 transition-colors">
                <Lock className="w-8 h-8 text-pink-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">End-to-End Encryption</h3>
                <p className="text-sm text-slate-400">Your vote is encrypted on your device before it ever touches the network.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-indigo-500/50 transition-colors">
                <Fingerprint className="w-8 h-8 text-indigo-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Verifiable</h3>
                <p className="text-sm text-slate-400">You receive a cryptographic receipt proving your vote was counted.</p>
              </div>
            </div>

            <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-purple-300 font-bold text-lg mb-3 flex items-center gap-2">
                <Vote className="w-5 h-5" />
                The Challenge
              </h3>
              <p className="text-slate-300">
                You must encrypt your vote (a choice between candidates) using the ElGamal public key provided by the 
                election commission. The encrypted ballot will consist of two values: <span className="font-mono text-purple-400">(C1, C2)</span>. 
                Only the tallying authority, with the private key, can decrypt the final results—while individual votes remain forever secret.
              </p>
            </div>

            <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-6">
              <h3 className="text-rose-300 font-bold text-lg mb-3">⚠️ The Threat</h3>
              <p className="text-slate-300 text-sm">
                A rogue nation-state actor has compromised the network. They are intercepting all traffic. 
                If you send your vote in plaintext, your political preference will be exposed and you could face retaliation. 
                <span className="text-rose-400 font-semibold"> Encryption is your only protection.</span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button 
              onClick={() => navigate('/secret-vote/instructions')}
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
            >
              Learn ElGamal Cryptography
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