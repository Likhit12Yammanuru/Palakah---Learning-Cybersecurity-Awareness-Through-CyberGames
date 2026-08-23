import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Vote, Globe, Lock, Users, FileCheck, ArrowLeft, RotateCcw } from 'lucide-react';

const SecretVoteImportancePage = () => {
  const navigate = useNavigate();

  const realWorldUses = [
    {
      icon: <Vote className="w-6 h-6 text-purple-400" />,
      title: "Estonian I-Voting",
      desc: "Since 2005, Estonia has allowed citizens to vote online using ElGamal-based encryption. Voters can verify their ballot was recorded correctly while maintaining complete anonymity."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "Helios Voting",
      desc: "An open-source verifiable voting system used by universities and organizations worldwide. It uses homomorphic encryption (based on ElGamal) to tally votes without decrypting individual ballots."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: "Boardroom Elections",
      desc: "Corporate governance systems use encrypted voting for shareholder meetings and board decisions, ensuring competitive information isn't leaked through voting patterns."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-amber-400" />,
      title: "Anonymous Surveys",
      desc: "Whistleblower hotlines, employee satisfaction surveys, and sensitive medical research all rely on ElGamal-like encryption to collect honest responses without fear of identification."
    }
  ];

  const properties = [
    {
      title: "Semantic Security",
      desc: "The same message encrypts to different ciphertexts each time due to the random ephemeral key k. An attacker cannot tell if two votes are the same.",
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30"
    },
    {
      title: "Homomorphic Tallying",
      desc: "ElGamal supports multiplying ciphertexts, allowing encrypted votes to be combined before decryption. The tallying authority never sees individual votes.",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30"
    },
    {
      title: "Zero-Knowledge Proofs",
      desc: "Voters can prove they encrypted a valid vote (e.g., 0 or 1) without revealing which one they chose. This prevents overvoting without breaking anonymity.",
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <ShieldCheck className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Secure Voting Matters
            </h2>
          </div>

          <div className="space-y-8">
            {/* Core Properties */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {properties.map((prop, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${prop.color} border ${prop.border} rounded-xl p-6 hover:border-opacity-50 transition-colors`}>
                  <h3 className="text-white font-bold text-lg mb-3">{prop.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{prop.desc}</p>
                </div>
              ))}
            </div>

            {/* Real World Applications */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-400" />
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
              <h3 className="text-lg font-bold text-white mb-4">The Mathematics of Privacy</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                ElGamal's security rests on the <span className="text-purple-400 font-semibold">Discrete Logarithm Problem</span>: 
                given g, p, and y = g<sup>x</sup> mod p, it is computationally infeasible to find x when p is a large prime (2048+ bits). 
                This one-way function ensures that even if an attacker intercepts both C1 and C2, they cannot recover the original vote M 
                without the private key x.
              </p>
              <div className="bg-slate-900/80 rounded-lg p-4 border border-white/10">
                <p className="text-xs text-slate-500 font-mono text-center">
                  Security parameter: The prime p must be at least 2048 bits (600+ digits) for real-world elections.
                  <br />
                  Our demo uses p = 13 for educational clarity, but the mathematics scale identically.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-purple-900/20 border-l-4 border-purple-500 rounded-r-xl p-6">
              <p className="text-purple-200 italic text-lg leading-relaxed">
                "Democracy is not just about counting votes—it's about ensuring every voter can express their will freely, 
                without coercion or fear. Cryptography makes this possible in the digital age."
              </p>
              <p className="text-purple-400 text-sm mt-2 font-semibold">— Applied to electronic voting systems</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <button 
              onClick={() => navigate('/secret-vote/result')}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Results
            </button>
            <button 
              onClick={() => navigate('/secret-vote')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Vote Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretVoteImportancePage;