import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, FileCheck } from 'lucide-react';

const DigitalSignatureStartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Hero Card */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-6 rotate-3 hover:rotate-0 transition-transform duration-500">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Digital Signature
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                Verification Game
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto">
              Step into the role of a security auditor. Verify digital signatures using 
              <span className="text-indigo-400 font-semibold"> RSA public-key cryptography</span> 
              and identify which documents are authentic and which have been tampered with.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <Lock className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300 font-medium">RSA Mathematics</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <FileCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300 font-medium">Tamper Detection</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <ShieldCheck className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300 font-medium">Real-world Scenarios</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('/digital-signature/scenario')} 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Verification Challenge
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

export default DigitalSignatureStartPage;