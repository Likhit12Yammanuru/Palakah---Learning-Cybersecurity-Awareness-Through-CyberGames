import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Globe, MessageSquare, Smartphone, CreditCard, ArrowLeft, RotateCcw } from 'lucide-react';

const ImportancePage = () => {
  const navigate = useNavigate();

  const realWorldUses = [
    {
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      title: "End-to-End Encrypted Messaging",
      desc: "WhatsApp, Signal, and iMessage use AES-256 to encrypt messages so that only the sender and recipient can read them—not even the service provider."
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: "HTTPS / TLS Encryption",
      desc: "Every secure website uses symmetric encryption (AES) within the TLS protocol to protect passwords, credit cards, and personal data in transit."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-emerald-400" />,
      title: "Financial Transactions",
      desc: "Banks and payment processors use AES to encrypt transaction data. Your PIN and card details are unreadable to anyone intercepting the network traffic."
    },
    {
      icon: <Lock className="w-6 h-6 text-amber-400" />,
      title: "Disk & File Encryption",
      desc: "BitLocker (Windows), FileVault (macOS), and VeraCrypt use AES to protect data at rest. If your device is stolen, the data remains unreadable without the key."
    }
  ];

  const evolution = [
    {
      era: "100 BC",
      name: "Caesar Cipher",
      desc: "Shift each letter by a fixed number. Simple but easily broken with frequency analysis.",
      strength: "Broken in seconds"
    },
    {
      era: "1977",
      name: "DES",
      desc: "Data Encryption Standard. 56-bit key. Revolutionary for its time but now considered weak.",
      strength: "Broken in hours"
    },
    {
      era: "2001",
      name: "AES",
      desc: "Advanced Encryption Standard. 128-256 bit keys. Used by governments, banks, and tech giants worldwide.",
      strength: "Unbreakable*"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Encryption Matters
            </h2>
          </div>

          <div className="space-y-8">
            {/* Evolution Timeline */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">The Evolution of Secret Communication</h3>
              <div className="space-y-4">
                {evolution.map((item, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-blue-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                    <div className="bg-slate-800/40 rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">{item.era}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          idx === 2 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        }`}>
                          {item.strength}
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-lg">{item.name}</h4>
                      <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">* Unbreakable with current technology. Quantum computers may change this.</p>
            </div>

            {/* Real World Applications */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" />
                Where Encryption Protects You Daily
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

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-300 mb-3">The Kerckhoffs's Principle</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                A cryptosystem should be secure even if everything about the system, except the key, is public knowledge. 
                This is why modern encryption algorithms like AES are publicly documented and peer-reviewed. 
                <span className="text-white font-semibold"> Security through obscurity is not security.</span> 
                The Caesar cipher fails this test because knowing the algorithm (shift cipher) means only the key (shift amount) 
                protects the message—and with only 25 possible keys, brute force is trivial.
              </p>
            </div>

            {/* Quote */}
            <div className="bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl p-6">
              <p className="text-blue-200 italic text-lg leading-relaxed">
                "Privacy is not something that I'm merely entitled to, it's an absolute prerequisite. 
                Encryption is the mechanism by which we reclaim that prerequisite in the digital age."
              </p>
              <p className="text-blue-400 text-sm mt-2 font-semibold">— On the necessity of strong encryption</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <button 
              onClick={() => navigate('/secure-message/result')}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Results
            </button>
            <button 
              onClick={() => navigate('/secure-message')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              New Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportancePage;
