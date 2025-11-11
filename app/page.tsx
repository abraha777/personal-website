export default function AnimatedGradient() {
  return (
    <div className="min-h-screen bg-slate-900 font-mono">
      {/* Animated Gradient Header */}
      <header className="relative text-center py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-gradient bg-[length:200%_200%]"></div>
        
        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Hello, I'm Blerp
          </h1>
          <p className="text-2xl animate-fade-in-delay flex items-center justify-center gap-3">
            An aspiring gnome 
            <span className="inline-block text-4xl animate-dance">🧙‍♂️</span>
          </p>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full animate-float-delay"></div>
        <div className="absolute bottom-10 left-1/4 w-4 h-4 bg-white rounded-full animate-float"></div>
      </header>

      {/* Demo of more interactive elements */}
      <section className="px-4 py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-400">Interactive Elements Demo</h2>
          
          {/* Hover Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-emerald-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-slate-600">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-2 text-emerald-300">Hover Me!</h3>
              <p className="text-slate-300">I lift up when you hover</p>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 cursor-pointer border border-slate-600">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2 text-teal-300">Scale Effect</h3>
              <p className="text-slate-300">I grow when you hover</p>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-cyan-500/50 hover:rotate-3 transition-all duration-300 cursor-pointer border border-slate-600">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-300">Rotate Effect</h3>
              <p className="text-slate-300">I tilt when you hover</p>
            </div>
          </div>

          {/* Animated Button */}
          <div className="text-center">
            <button className="relative px-8 py-4 bg-emerald-600 text-white rounded-lg font-bold text-lg overflow-hidden group border-2 border-emerald-400">
              <span className="relative z-10">Click Me!</span>
              <div className="absolute inset-0 bg-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="px-4 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-emerald-400">Support My Lawn Care Journey 🌱</h2>
          <p className="text-center text-slate-400 mb-12">
            Help me buy better lawn equipment and keep the grass green!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Venmo */}
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 border border-slate-700">
              <div className="text-5xl text-center mb-4">💳</div>
              <h3 className="text-xl font-bold text-center mb-2 text-emerald-300">Venmo</h3>
              <p className="text-slate-400 text-center mb-4">Quick & Easy</p>
              <a href="https://venmo.com/yourusername" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                Pay with Venmo
              </a>
            </div>

            {/* PayPal */}
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 border border-slate-700">
              <div className="text-5xl text-center mb-4">💰</div>
              <h3 className="text-xl font-bold text-center mb-2 text-teal-300">PayPal</h3>
              <p className="text-slate-400 text-center mb-4">Worldwide Payments</p>
              <a href="https://paypal.me/yourusername" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block w-full bg-teal-600 hover:bg-teal-500 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                Pay with PayPal
              </a>
            </div>

            {/* Cash App */}
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 border border-slate-700">
              <div className="text-5xl text-center mb-4">💵</div>
              <h3 className="text-xl font-bold text-center mb-2 text-cyan-300">Cash App</h3>
              <p className="text-slate-400 text-center mb-4">Send Money Fast</p>
              <a href="https://cash.app/$yourusername" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block w-full bg-cyan-600 hover:bg-cyan-500 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                Pay with Cash App
              </a>
            </div>
          </div>

          {/* Custom Amount Section */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-lg max-w-md mx-auto border border-slate-700">
            <h3 className="text-xl font-bold text-center mb-4 text-emerald-400">Choose Your Amount</h3>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <button className="bg-slate-700 hover:bg-emerald-600 text-slate-300 hover:text-white py-3 rounded-lg font-semibold transition-all border border-slate-600">
                $5
              </button>
              <button className="bg-slate-700 hover:bg-emerald-600 text-slate-300 hover:text-white py-3 rounded-lg font-semibold transition-all border border-slate-600">
                $10
              </button>
              <button className="bg-slate-700 hover:bg-emerald-600 text-slate-300 hover:text-white py-3 rounded-lg font-semibold transition-all border border-slate-600">
                $25
              </button>
            </div>
            <input 
              type="number" 
              placeholder="Or enter custom amount" 
              className="w-full px-4 py-3 bg-slate-700 border-2 border-slate-600 rounded-lg mb-4 focus:border-emerald-500 focus:outline-none text-white placeholder-slate-400"
            />
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/50">
              Donate Now 🌿
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes dance {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          25% { transform: rotate(-10deg) translateY(-5px); }
          50% { transform: rotate(10deg) translateY(-10px); }
          75% { transform: rotate(-10deg) translateY(-5px); }
        }
        
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 3s ease-in-out infinite 1.5s;
        }
        
        .animate-dance {
          animation: dance 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
