import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Globe, FileCheck, Code, Banknote, Mail, ArrowLeft, RotateCcw } from 'lucide-react';

const ImportancePage = () => {
  const navigate = useNavigate();

  const realWorldUses = [
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "HTTPS / TLS Certificates",
      desc: "Every time you see the padlock in your browser, digital signatures are verifying that the website is who it claims to be, not an impostor."
    },
    {
      icon: <Banknote className="w-6 h-6 text-emerald-400" />,
      title: "Financial Transactions",
      desc: "Banking systems use signatures to authorize wire transfers, stock trades, and cryptocurrency transactions on blockchains like Bitcoin and Ethereum."
    },
    {
      icon: <Code className="w-6 h-6 text-purple-400" />,
      title: "Software Updates",
      desc: "Your operating system verifies the digital signature of updates before installing them, preventing malware from posing as legitimate patches."
    },
    {
      icon: <Mail className="w-6 h-6 text-amber-400" />,
      title: "Email Security (DKIM)",
      desc: "DomainKeys Identified Mail uses signatures to prove emails weren't altered in transit and truly came from the claimed domain."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-indigo-500/20 rounded-xl">
              <ShieldCheck className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Digital Signatures Matter
            </h2>
          </div>

          <div className="space-y-8">
            {/* Core Principles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Integrity</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Any change to the message—even a single bit—will cause the verification to fail. The hash acts as a fingerprint that cannot be forged.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/10 border border-indigo-500/30 rounded-xl p-6 hover:border-indigo-500/50 transition-colors">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Authentication</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Only the holder of the private key can produce a valid signature. This cryptographically proves the sender's identity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-rose-900/30 to-rose-800/10 border border-rose-500/30 rounded-xl p-6 hover:border-rose-500/50 transition-colors">
                <div className="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Non-Repudiation</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The sender cannot later deny signing the message. The signature is mathematically bound to their private key.
                </p>
              </div>
            </div>

            {/* Real World Applications */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-400" />
                Real-World Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {realWorldUses.map((use, idx) => (
                  <div key={idx} className="bg-slate-800/40 border border-white/10 rounded-xl p-5 hover:bg-slate-800/60 transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                        {use.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{use.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{use.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Math Behind Trust */}
            <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">The Mathematics of Trust</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                The security of RSA signatures relies on a mathematical one-way function: it's easy to compute 
                <span className="font-mono text-indigo-400"> signature = hash<sup>d</sup> mod n</span> if you know 
                <span className="font-mono text-rose-400"> d</span>, but computationally infeasible to derive 
                <span className="font-mono text-rose-400"> d</span> from the public key 
                <span className="font-mono text-emerald-400">(e, n)</span>—even with supercomputers. 
                This asymmetry is what makes the internet secure.
              </p>
              <div className="bg-slate-900/80 rounded-lg p-4 border border-white/10">
                <p className="text-xs text-slate-500 font-mono text-center">
                  Security relies on the difficulty of factoring n = p × q, where p and q are large prime numbers.
                  <br />
                  For n = 3233, p = 61 and q = 53. In practice, n is 2048+ bits (600+ digit numbers).
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-indigo-900/20 border-l-4 border-indigo-500 rounded-r-xl p-6">
              <p className="text-indigo-200 italic text-lg leading-relaxed">
                "Cryptography is the ultimate form of non-violent direct action. It allows people to protect secrets 
                and verify truth without relying on trusted third parties."
              </p>
              <p className="text-indigo-400 text-sm mt-2 font-semibold">— Applied to digital signatures</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <button 
              onClick={() => navigate('/digital-signature/result')}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Results
            </button>
            <button 
              onClick={() => navigate('/digital-signature')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
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

export default ImportancePage;