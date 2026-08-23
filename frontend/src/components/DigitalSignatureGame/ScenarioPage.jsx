import { useNavigate } from 'react-router-dom';
import { AlertTriangle, FileText, UserCheck, Fingerprint } from 'lucide-react';

const ScenarioPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Progress indicator */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">1</div>
            <div className="w-16 h-1 bg-emerald-500/50 rounded-full" />
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
              The Breach Investigation
            </h2>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div className="bg-slate-800/50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
              <p className="text-lg">
                You are a <span className="text-indigo-400 font-semibold">Cybersecurity Forensics Analyst</span> at SecureBank Inc. 
                This morning, the bank's transaction system detected suspicious activity. Three high-value wire transfer 
                requests were submitted, but the system flags indicate potential signature forgery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-indigo-500/50 transition-colors">
                <FileText className="w-8 h-8 text-indigo-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">The Evidence</h3>
                <p className="text-sm text-slate-400">Three signed transaction documents with their RSA signatures attached.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
                <UserCheck className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Your Tools</h3>
                <p className="text-sm text-slate-400">The bank's public key (e=17, n=3233) to verify each signature mathematically.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-rose-500/50 transition-colors">
                <Fingerprint className="w-8 h-8 text-rose-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">The Threat</h3>
                <p className="text-sm text-slate-400">At least one document has been tampered with after signing. Find it before approval.</p>
              </div>
            </div>

            <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-xl p-6">
              <h3 className="text-indigo-300 font-bold text-lg mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mission Objective
              </h3>
              <p className="text-slate-300">
                Use the RSA verification formula <code className="bg-slate-800 px-2 py-1 rounded text-emerald-400 font-mono">verified_hash = signature^e mod n</code> to check each document. 
                If the calculated hash matches the document's stated hash, the signature is valid. If not, the document was tampered with 
                after signing.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button 
              onClick={() => navigate('/digital-signature/instructions')}
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              Review Cryptography Basics
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