import { useNavigate } from 'react-router-dom';
import { Vote, Shield, Lock, Users } from 'lucide-react';

const SecretVoteStartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg mb-6 rotate-3 hover:rotate-0 transition-transform duration-500">
              <Vote className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Secret Vote
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Election Game
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto">
              Participate in a secure digital election using 
              <span className="text-purple-400 font-semibold"> ElGamal encryption</span>. 
              Cast your vote without revealing your choice—learn how modern e-voting protects voter privacy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <Lock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300 font-medium">Privacy Guaranteed</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <Shield className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300 font-medium">Tamper-Proof</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <Users className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300 font-medium">Verifiable Results</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('/secret-vote/scenario')} 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Enter the Voting Booth
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretVoteStartPage;