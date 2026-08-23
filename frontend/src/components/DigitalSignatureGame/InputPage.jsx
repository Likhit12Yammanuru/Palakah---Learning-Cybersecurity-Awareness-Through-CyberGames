import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Lock, CheckCircle, XCircle, Calculator, ChevronRight, AlertCircle } from 'lucide-react';

const DigitalSignatureInput = () => {
  const [currentDoc, setCurrentDoc] = useState(0);
  const [userCalculations, setUserCalculations] = useState(['', '', '']);
  const [showHint, setShowHint] = useState(false);
  const [verifiedDocs, setVerifiedDocs] = useState([]);
  const navigate = useNavigate();

  // Real RSA parameters
  const e = 17;
  const n = 3233;

  // Three documents with pre-computed values
  // Doc 1: Authentic (hash=100, signature=100^2753 mod 3233 = 100)
  // Doc 2: Tampered (hash=200, but signature forged from hash=150)
  // Doc 3: Authentic (hash=50, signature=50^2753 mod 3233 = 50)
  const documents = [
    {
      id: 1,
      title: "Wire Transfer #2847",
      from: "CEO Office",
      amount: "$2,500,000",
      hash: 100,
      signature: 100,
      isAuthentic: true,
      description: "Emergency liquidity transfer to Swiss subsidiary"
    },
    {
      id: 2,
      title: "Wire Transfer #2848",
      from: "CFO Office",
      amount: "$4,200,000",
      hash: 200,
      signature: 1979, // This is 150^17 mod 3233 (wrong hash!)
      isAuthentic: false,
      description: "Acquisition payment for TechStart Inc."
    },
    {
      id: 3,
      title: "Wire Transfer #2849",
      from: "Treasury Dept",
      amount: "$890,000",
      hash: 50,
      signature: 50,
      isAuthentic: true,
      description: "Quarterly tax obligation settlement"
    }
  ];

  const handleCalculationChange = (value) => {
    const newCalcs = [...userCalculations];
    newCalcs[currentDoc] = value;
    setUserCalculations(newCalcs);
  };

  const verifyCurrent = () => {
    const doc = documents[currentDoc];
    const userResult = parseInt(userCalculations[currentDoc]);

    if (isNaN(userResult)) return;

    const isCorrect = userResult === doc.hash;
    const isVerified = isCorrect === doc.isAuthentic;

    const newVerified = [...verifiedDocs];
    newVerified[currentDoc] = {
      ...doc,
      userResult,
      isCorrect,
      isVerified
    };
    setVerifiedDocs(newVerified);
  };

  const handleNext = () => {
    if (currentDoc < documents.length - 1) {
      setCurrentDoc(currentDoc + 1);
      setShowHint(false);
    } else {
      // All done, navigate to results
      const allVerified = verifiedDocs.length === 3 && verifiedDocs.every(v => v !== undefined);
      if (allVerified) {
        navigate('/digital-signature/result', { state: { verifiedDocs } });
      }
    }
  };

  const currentDocument = documents[currentDoc];
  const isCurrentVerified = verifiedDocs[currentDoc] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Progress */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">1</div>
            <div className="w-16 h-1 bg-emerald-500/50 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">2</div>
            <div className="w-16 h-1 bg-emerald-500/50 rounded-full" />
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold border border-white/30">3</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-500/20 rounded-xl">
                <FileText className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Document Verification</h2>
                <p className="text-slate-400">Document {currentDoc + 1} of {documents.length}</p>
              </div>
            </div>
            <div className="flex gap-2">
              {documents.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentDoc ? 'bg-indigo-400 w-8' : 
                    verifiedDocs[idx] ? 'bg-emerald-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Document Card */}
          <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-6 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{currentDocument.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{currentDocument.description}</p>
              </div>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold border border-amber-500/30">
                {currentDocument.amount}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">From</p>
                <p className="text-white font-medium">{currentDocument.from}</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Document Hash</p>
                <p className="text-emerald-400 font-mono font-bold text-lg">{currentDocument.hash}</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Signature</p>
                <p className="text-indigo-400 font-mono font-bold text-lg">{currentDocument.signature}</p>
              </div>
            </div>
          </div>

          {/* Public Key Info */}
          <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-4 mb-8 flex items-center gap-4">
            <Lock className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="text-emerald-300 font-semibold text-sm">Public Key Available</p>
              <p className="text-slate-400 text-sm font-mono">e = {e}, n = {n}</p>
            </div>
          </div>

          {/* Verification Input */}
          {!isCurrentVerified ? (
            <div className="space-y-6">
              <div className="bg-slate-800/40 rounded-xl p-6 border border-white/10">
                <label className="block text-white font-semibold mb-3 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-indigo-400" />
                  Your Verification Calculation
                </label>
                <p className="text-slate-400 text-sm mb-4">
                  Compute: <span className="font-mono text-indigo-400">signature<sup>{e}</sup> mod {n}</span>
                </p>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={userCalculations[currentDoc]}
                    onChange={(e) => handleCalculationChange(e.target.value)}
                    placeholder={`Calculate ${currentDocument.signature}^${e} mod ${n}`}
                    className="flex-1 bg-slate-900/80 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all font-mono"
                  />
                  <button
                    onClick={verifyCurrent}
                    disabled={!userCalculations[currentDoc]}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-indigo-500/25"
                  >
                    Verify
                  </button>
                </div>
              </div>

              <button
                onClick={() => setShowHint(!showHint)}
                className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center gap-2 transition-colors"
              >
                <AlertCircle className="w-4 h-4" />
                {showHint ? 'Hide Hint' : 'Need a hint?'}
              </button>

              {showHint && (
                <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-4 animate-fadeIn">
                  <p className="text-indigo-300 text-sm">
                    <span className="font-semibold">Hint:</span> For this simplified demo, 
                    {currentDocument.signature === currentDocument.hash 
                      ? ` the signature value ${currentDocument.signature} is designed so that ${currentDocument.signature}^${e} mod ${n} = ${currentDocument.signature}. Try entering ${currentDocument.signature}.`
                      : ` try calculating ${currentDocument.signature}^${e} mod ${n}. The result will NOT equal the document hash ${currentDocument.hash}, indicating tampering.`}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className={`rounded-xl p-6 border ${
              verifiedDocs[currentDoc].isVerified 
                ? 'bg-emerald-900/20 border-emerald-500/30' 
                : 'bg-rose-900/20 border-rose-500/30'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                {verifiedDocs[currentDoc].isVerified ? (
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                ) : (
                  <XCircle className="w-8 h-8 text-rose-400" />
                )}
                <div>
                  <h3 className={`text-xl font-bold ${
                    verifiedDocs[currentDoc].isVerified ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {verifiedDocs[currentDoc].isVerified ? 'Verification Successful' : 'Verification Failed'}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Your calculation: {verifiedDocs[currentDoc].userResult} | Expected hash: {currentDocument.hash}
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {verifiedDocs[currentDoc].isVerified 
                    ? `✅ The signature is mathematically valid. signature^e mod n = ${verifiedDocs[currentDoc].userResult}, which matches the document hash ${currentDocument.hash}. This document is authentic and has not been tampered with since signing.`
                    : `❌ The signature does NOT match. signature^e mod n = ${verifiedDocs[currentDoc].userResult}, but the document hash is ${currentDocument.hash}. This document was altered after signing or the signature is forged. REJECT this transaction!`}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="group inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20 hover:border-white/40"
              >
                {currentDoc < documents.length - 1 ? 'Next Document' : 'View Final Report'}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DigitalSignatureInput;