// GameSelector.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Vote, PenTool, Shield, ArrowRight } from 'lucide-react';

const GameSelector = () => {
  const navigate = useNavigate();

  const games = [
    {
      title: "Secure Message Game",
      subtitle: "AES Encryption",
      description: "Learn how symmetric encryption protects confidential messages from eavesdroppers.",
      route: "/secure-message",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-500/25",
      border: "border-blue-500/30",
      hoverBorder: "hover:border-blue-400/50"
    },
    {
      title: "Secret Vote Game",
      subtitle: "ElGamal Encryption",
      description: "Discover how homomorphic encryption enables anonymous, verifiable voting systems.",
      route: "/secret-vote",
      icon: <Vote className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/25",
      border: "border-purple-500/30",
      hoverBorder: "hover:border-purple-400/50"
    },
    {
      title: "Digital Signature Game",
      subtitle: "RSA Verification",
      description: "Investigate document authenticity using public-key cryptography and signature verification.",
      route: "/digital-signature",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      shadow: "shadow-emerald-500/25",
      border: "border-emerald-500/30",
      hoverBorder: "hover:border-emerald-400/50"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl shadow-indigo-500/30 mb-8 rotate-3 hover:rotate-0 transition-transform duration-500">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Palakah
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 mt-2">
              Cybersecurity Games
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Master cryptography through interactive challenges. Learn by doing—no prior math background required.
          </p>
        </div>

        {/* Game Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              onClick={() => navigate(game.route)}
              className={`group relative cursor-pointer rounded-2xl border ${game.border} ${game.hoverBorder} bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-white/10 hover:shadow-xl ${game.shadow} hover:-translate-y-2`}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${game.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${game.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {game.icon}
              </div>

              <p className={`text-xs font-bold uppercase tracking-wider mb-2 bg-gradient-to-r ${game.color} bg-clip-text text-transparent`}>
                {game.subtitle}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                {game.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6">
                {game.description}
              </p>

              <div className="flex items-center text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                Start Challenge
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            Each game uses simplified but mathematically accurate cryptography to demonstrate real-world security principles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameSelector;