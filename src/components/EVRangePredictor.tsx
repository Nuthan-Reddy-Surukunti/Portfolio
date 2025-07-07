import React, { useState, useEffect } from 'react';
import evOptions from '../../ev_options.json';
import { Car, Zap, Calendar, MapPin, Loader2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://ev-api-backend.onrender.com/predict';
const MODEL_OPTIONS = [
  { label: 'Random Forest', value: 'random_forest' },
  { label: 'LightGBM', value: 'lightgbm' },
  { label: 'XGBoost', value: 'xgboost' },
  { label: 'Decision Tree', value: 'decision_tree' },
  { label: 'Linear Regression', value: 'linear_regression' },
];

const EVRangePredictor: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    make: '',
    model: '',
    model_year: '',
    city: '',
    state: '',
    model_name: 'random_forest',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [filteredModels, setFilteredModels] = useState<string[]>([]);
  const [makeSearch, setMakeSearch] = useState('');
  const [modelSearch, setModelSearch] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update filtered models when make changes
  useEffect(() => {
    if (form.make && (evOptions.models as any)[form.make]) {
      setFilteredModels((evOptions.models as any)[form.make]);
    } else {
      setFilteredModels([]);
    }
    setForm(f => ({ ...f, model: '' }));
    setModelSearch('');
  }, [form.make]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          model_year: Number(form.model_year),
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || 'Prediction failed');
      }
      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Prediction failed');
    } finally {
      setLoading(false);
    }
  };

  // Searchable filter for makes/models
  const filteredMakes = (evOptions.makes as string[]).filter(make =>
    make.toLowerCase().includes(makeSearch.toLowerCase())
  );
  const filteredModelOptions = filteredModels.filter(model =>
    model.toLowerCase().includes(modelSearch.toLowerCase())
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10">
      {/* Back Button */}
      <button
        className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-900/80 rounded-full shadow hover:bg-blue-100 dark:hover:bg-gray-800 transition text-blue-700 dark:text-blue-200 font-semibold backdrop-blur-md"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={20} />
        Back
      </button>
      {/* Animated EV-inspired background */}
      <div className="absolute inset-0 -z-10">
        {/* Glowing gradient orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-blue-400 via-blue-200 to-green-200 opacity-30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-green-400 via-blue-300 to-blue-700 opacity-25 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-gradient-to-br from-blue-300 to-green-200 opacity-20 rounded-full blur-2xl animate-float" style={{transform: 'translate(-50%, -50%)'}} />
        {/* Subtle grid or lines for a dashboard feel */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 600">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="800" height="600" fill="url(#grid)" className="text-blue-400 dark:text-blue-900" />
        </svg>
      </div>
      
      {/* Main card - Centered */}
      <div className="max-w-xl mx-auto p-0 sm:p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl border-2 border-blue-200 dark:border-blue-900 animate-fade-in">
        <div className="flex flex-col items-center py-8 px-4">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="text-blue-600 dark:text-blue-300 animate-pulse" size={32} />
            <h2 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400 dark:from-blue-300 dark:to-blue-500 animate-gradient-text">EV Range Predictor</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-md">Predict the real-world range of your electric vehicle using advanced AI models. Select your car details and get an instant estimate!</p>
          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-1"><Car size={16}/>Make</label>
                <input
                  type="text"
                  placeholder="Search make..."
                  value={makeSearch}
                  onChange={e => setMakeSearch(e.target.value)}
                  className="w-full mb-1 p-2 border rounded dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
                />
                <select
                  name="make"
                  value={form.make}
                  onChange={handleChange}
                  className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Select Make</option>
                  {filteredMakes.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-1"><Car size={16}/>Model</label>
                <input
                  type="text"
                  placeholder="Search model..."
                  value={modelSearch}
                  onChange={e => setModelSearch(e.target.value)}
                  className="w-full mb-1 p-2 border rounded dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
                  disabled={!form.make}
                />
                <select
                  name="model"
                  value={form.model}
                  onChange={handleChange}
                  className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
                  required
                  disabled={!form.make}
                >
                  <option value="">{form.make ? 'Select Model' : 'Select Make First'}</option>
                  {filteredModelOptions.map(model => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-1"><Calendar size={16}/>Model Year</label>
                <select
                  name="model_year"
                  value={form.model_year}
                  onChange={handleChange}
                  className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Select Year</option>
                  {(evOptions.years as number[]).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-1"><MapPin size={16}/>City (optional)</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-1"><MapPin size={16}/>State (optional)</label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-1"><Zap size={16}/>Model Type</label>
                <select
                  name="model_name"
                  value={form.model_name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
                >
                  {MODEL_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" size={22}/> : <Zap size={22}/>} {loading ? 'Predicting...' : 'Predict Range'}
            </button>
          </form>
          {error && <div className="mt-4 text-red-600 dark:text-red-400 text-center font-semibold">{error}</div>}
          {result && (
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-lg text-center animate-fade-in">
              <div className="flex flex-col items-center gap-2">
                <Zap className="text-blue-700 dark:text-blue-300 animate-pulse" size={36}/>
                <div className="text-2xl font-extrabold text-blue-800 dark:text-blue-200">Predicted Range: <span className="text-3xl text-green-600 dark:text-green-400">{result.prediction} miles</span></div>
                <div className="mt-2 text-base text-gray-700 dark:text-gray-300">Model Used: <b>{result.model_used}</b></div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">Input: {Object.entries(result.input).map(([k, v]) => `${k}: ${v}`).join(', ')}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Project Details Section - Below main card, centered */}
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-200 dark:border-gray-600 shadow-xl">
        <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-6 text-center">How It Works</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
            <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2 text-lg flex items-center gap-2">
              🤖 ML Models
            </h4>
            <p className="text-gray-700 dark:text-gray-300">Uses <span className="bg-blue-100 dark:bg-blue-900/40 px-2 py-1 rounded font-semibold text-blue-800 dark:text-blue-200">5 trained algorithms</span> (<span className="text-blue-600 dark:text-blue-400 font-medium">Random Forest, XGBoost</span>, etc.) to predict EV range based on <span className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded font-semibold text-green-800 dark:text-green-200">vehicle specs and conditions</span>.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
            <h4 className="font-bold text-green-700 dark:text-green-300 mb-2 text-lg flex items-center gap-2">
              🌐 API Integration
            </h4>
            <p className="text-gray-700 dark:text-gray-300">Frontend sends data to <span className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded font-semibold text-green-800 dark:text-green-200">FastAPI backend</span>, which processes inputs and returns predictions in <span className="text-green-600 dark:text-green-400 font-medium">real-time via HTTPS</span>.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
            <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2 text-lg flex items-center gap-2">
              ☁️ Cloud Hosting
            </h4>
            <p className="text-gray-700 dark:text-gray-300"><span className="bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded font-semibold text-purple-800 dark:text-purple-200">Render</span> hosts the API with <span className="text-purple-600 dark:text-purple-400 font-medium">99.9% uptime, auto-scaling</span>, and <span className="text-purple-600 dark:text-purple-400 font-medium">global CDN</span> for fast worldwide access.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
            <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2 text-lg flex items-center gap-2">
              ⚡ Live Processing
            </h4>
            <p className="text-gray-700 dark:text-gray-300"><span className="bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded font-semibold text-orange-800 dark:text-orange-200">Form data</span> → <span className="bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded font-semibold text-orange-800 dark:text-orange-200">API call</span> → <span className="bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded font-semibold text-orange-800 dark:text-orange-200">ML model</span> → <span className="text-orange-600 dark:text-orange-400 font-medium">instant prediction</span>. All models are <span className="text-orange-600 dark:text-orange-400 font-medium">pre-trained and ready</span> in the cloud.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVRangePredictor; 