import { useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheck, ShieldAlert, Trophy, AlertTriangle, FileCheck, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

const DigitalSignatureResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { verifiedDocs } = location.state || {};

  if (!verifiedDocs || verifiedDocs.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-6">
        <div className="text-center text-white">
          <AlertTriangle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">No Verification Data</h2>
          <p className="text-slate-400 mb-6">Please complete the document verification first.</p>
          <button 
            onClick={() => navigate('/digital-signature/input')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-colors"
          >
            Start Investigation
          </button>
        </div>
      </div>
    );
  }

  const correctCount = verifiedDocs.filter(d => d.isVerified).length;
  const totalDocs = verifiedDocs.length;
  const allCorrect = correctCount === totalDocs;
  const tamperedFound = verifiedDocs.filter(d => !d.isAuthentic && d.isVerified).length;

  const getScoreMessage = () => {
    if (allCorrect) return { title: "Outstanding Work!", desc: "You correctly identified all document authenticity statuses. The bank is safe thanks to your analysis." };
    if (correctCount >= 2) return { title: "Good Job", desc: "You caught most issues, but missed some critical details. Review the mathematics carefully." };
    return { title: "Needs Improvement", desc: "Several documents were misclassified. The bank's security depends on accurate verification." };
  };

  const scoreMsg = getScoreMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          {/* Score Header */}
          <div className="text-center mb-10">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
              allCorrect 
                ? 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30' 
                : 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/30'
            }`}>
              {allCorrect ? (
                <Trophy className="w-12 h-12 text-white" />
              ) : (
                <ShieldAlert className="w-12 h-12 text-white" />
              )}
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">{scoreMsg.title}</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">{scoreMsg.desc}</p>

            <div className="mt-6 inline-flex items-center gap-4 bg-slate-800/50 rounded-2xl px-8 py-4 border border-white/10">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-400">{correctCount}/{totalDocs}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Correct</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-bold text-rose-400">{tamperedFound}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Tampered Found</p>
              </div>
            </div>
          </div>

          {/* Document Results */}
          <div className="space-y-4 mb-10">
            <h3 className="text-xl font-bold text-white mb-4">Investigation Report</h3>
            {verifiedDocs.map((doc, idx) => (
              <div 
                key={idx}
                className={`rounded-xl border p-6 transition-all ${
                  doc.isVerified 
                    ? 'bg-emerald-900/10 border-emerald-500/30' 
                    : 'bg-rose-900/10 border-rose-500/30'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${
                      doc.isVerified ? 'bg-emerald-500/20' : 'bg-rose-500/20'
                    }`}>
                      {doc.isVerified ? (
                        <FileCheck className="w-6 h-6 text-emerald-400" />
                      ) : (
                        <XCircle className="w-6 h-6 text-rose-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{doc.title}</h4>
                      <p className="text-slate-400 text-sm">{doc.description}</p>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 font-mono">
                          Hash: {doc.hash}
                        </span>
                        <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 font-mono">
                          Your Result: {doc.userResult}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          doc.isAuthentic 
                            ? 'bg-emerald-500/20 text-emerald-400' 
                            : 'bg-rose-500/20 text-rose-400'
                        }`}>
                          {doc.isAuthentic ? 'AUTHENTIC' : 'TAMPERED'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-2xl font-bold ${
                      doc.isVerified ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                      {doc.isVerified ? '✓' : '✗'}
                    </span>
                  </div>
                </div>

                <div className="mt-4 bg-slate-900/40 rounded-lg p-3">
                  <p className="text-sm text-slate-300">
                    {doc.isVerified 
                      ? `✅ Correctly identified as ${doc.isAuthentic ? 'authentic' : 'tampered'}. signature^17 mod 3233 = ${doc.userResult} ${doc.isAuthentic ? 'matches' : 'does not match'} the hash ${doc.hash}.`
                      : `❌ Incorrect assessment. The document is actually ${doc.isAuthentic ? 'authentic' : 'tampered'}. You calculated ${doc.userResult} but needed to compare it with ${doc.hash}.`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Takeaway */}
          <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-indigo-300 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              Key Forensic Insight
            </h3>
            <p className="text-slate-300 leading-relaxed">
              In real-world attacks, adversaries often try to forge signatures or modify documents after signing. 
              The RSA verification process <span className="text-indigo-400 font-semibold">signature<sup>e</sup> mod n</span> acts as a mathematical 
              seal—any alteration to the message breaks the seal. As an analyst, your role is to catch these discrepancies 
              before fraudulent transactions are approved. This is the same principle behind secure software updates, 
              blockchain transactions, and HTTPS certificates.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/digital-signature/importance')}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              Learn More About Digital Signatures
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/digital-signature')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSignatureResult;