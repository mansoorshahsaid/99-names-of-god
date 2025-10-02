"use client";

import { useState } from 'react';
import { Search, Book, Award, ChevronRight } from 'lucide-react';

export default function NamesOfAllah() {
  const names = [
    { arabic: "ٱلْرَّحْمَـانُ", transliteration: "Ar-Rahman", meaning: "The Most Merciful", number: 1 },
    { arabic: "ٱلْرَّحِيْمُ", transliteration: "Ar-Raheem", meaning: "The Bestower of Mercy", number: 2 },
    { arabic: "ٱلْمَلِكُ", transliteration: "Al-Malik", meaning: "The King", number: 3 },
    { arabic: "ٱلْقُدُّوسُ", transliteration: "Al-Quddus", meaning: "The Most Sacred", number: 4 },
    { arabic: "ٱلْسَّلَامُ", transliteration: "As-Salam", meaning: "The Perfection and Giver of Peace", number: 5 },
    { arabic: "ٱلْمُؤْمِنُ", transliteration: "Al-Mu'min", meaning: "The Granter of Security", number: 6 },
    { arabic: "ٱلْمُهَيْمِنُ", transliteration: "Al-Muhaymin", meaning: "The Guardian", number: 7 },
    { arabic: "ٱلْعَزِيزُ", transliteration: "Al-Aziz", meaning: "The Almighty", number: 8 },
    { arabic: "ٱلْجَبَّارُ", transliteration: "Al-Jabbar", meaning: "The Compeller", number: 9 },
    { arabic: "ٱلْمُتَكَبِّرُ", transliteration: "Al-Mutakabbir", meaning: "The Supreme", number: 10 },
    { arabic: "ٱلْخَالِقُ", transliteration: "Al-Khaliq", meaning: "The Creator", number: 11 },
    { arabic: "ٱلْبَارِئُ", transliteration: "Al-Bari", meaning: "The Originator", number: 12 },
    { arabic: "ٱلْمُصَوِّرُ", transliteration: "Al-Musawwir", meaning: "The Fashioner", number: 13 },
    { arabic: "ٱلْغَفَّارُ", transliteration: "Al-Ghaffar", meaning: "The All-Forgiving", number: 14 },
    { arabic: "ٱلْقَهَّارُ", transliteration: "Al-Qahhar", meaning: "The Dominant", number: 15 },
    { arabic: "ٱلْوَهَّابُ", transliteration: "Al-Wahhab", meaning: "The Supreme Bestower", number: 16 },
    { arabic: "ٱلْرَّزَّاقُ", transliteration: "Ar-Razzaq", meaning: "The Provider", number: 17 },
    { arabic: "ٱلْفَتَّاحُ", transliteration: "Al-Fattah", meaning: "The Opener", number: 18 },
    { arabic: "ٱلْعَلِيمُ", transliteration: "Al-Aleem", meaning: "The All-Knowing", number: 19 },
    { arabic: "ٱلْقَابِضُ", transliteration: "Al-Qabid", meaning: "The Withholder", number: 20 },
    { arabic: "ٱلْبَاسِطُ", transliteration: "Al-Basit", meaning: "The Extender", number: 21 },
    { arabic: "ٱلْخَافِضُ", transliteration: "Al-Khafid", meaning: "The Reducer", number: 22 },
    { arabic: "ٱلْرَّافِعُ", transliteration: "Ar-Rafi", meaning: "The Exalter", number: 23 },
    { arabic: "ٱلْمُعِزُّ", transliteration: "Al-Mu'izz", meaning: "The Honourer", number: 24 },
    { arabic: "ٱلْمُذِلُّ", transliteration: "Al-Mudhill", meaning: "The Dishonourer", number: 25 },
    { arabic: "ٱلْسَّمِيعُ", transliteration: "As-Sami", meaning: "The All-Hearing", number: 26 },
    { arabic: "ٱلْبَصِيرُ", transliteration: "Al-Basir", meaning: "The All-Seeing", number: 27 },
    { arabic: "ٱلْحَكَمُ", transliteration: "Al-Hakam", meaning: "The Impartial Judge", number: 28 },
    { arabic: "ٱلْعَدْلُ", transliteration: "Al-Adl", meaning: "The Utterly Just", number: 29 },
    { arabic: "ٱلْلَّطِيفُ", transliteration: "Al-Latif", meaning: "The Subtle One", number: 30 },
    { arabic: "ٱلْخَبِيرُ", transliteration: "Al-Khabir", meaning: "The All-Aware", number: 31 },
    { arabic: "ٱلْحَلِيمُ", transliteration: "Al-Halim", meaning: "The Forbearing", number: 32 },
    { arabic: "ٱلْعَظِيمُ", transliteration: "Al-Azim", meaning: "The Magnificent", number: 33 },
    { arabic: "ٱلْغَفُورُ", transliteration: "Al-Ghafur", meaning: "The Great Forgiver", number: 34 },
    { arabic: "ٱلْشَّكُورُ", transliteration: "Ash-Shakur", meaning: "The Most Appreciative", number: 35 },
    { arabic: "ٱلْعَلِيُّ", transliteration: "Al-Ali", meaning: "The Most High", number: 36 },
    { arabic: "ٱلْكَبِيرُ", transliteration: "Al-Kabir", meaning: "The Most Great", number: 37 },
    { arabic: "ٱلْحَفِيظُ", transliteration: "Al-Hafiz", meaning: "The Preserver", number: 38 },
    { arabic: "ٱلْمُقِيتُ", transliteration: "Al-Muqit", meaning: "The Sustainer", number: 39 },
    { arabic: "ٱلْحَسِيبُ", transliteration: "Al-Hasib", meaning: "The Reckoner", number: 40 },
    { arabic: "ٱلْجَلِيلُ", transliteration: "Al-Jalil", meaning: "The Majestic", number: 41 },
    { arabic: "ٱلْكَرِيمُ", transliteration: "Al-Karim", meaning: "The Most Generous", number: 42 },
    { arabic: "ٱلْرَّقِيبُ", transliteration: "Ar-Raqib", meaning: "The Watchful", number: 43 },
    { arabic: "ٱلْمُجِيبُ", transliteration: "Al-Mujib", meaning: "The Responsive One", number: 44 },
    { arabic: "ٱلْوَاسِعُ", transliteration: "Al-Wasi", meaning: "The All-Encompassing", number: 45 },
    { arabic: "ٱلْحَكِيمُ", transliteration: "Al-Hakim", meaning: "The All-Wise", number: 46 },
    { arabic: "ٱلْوَدُودُ", transliteration: "Al-Wadud", meaning: "The Most Loving", number: 47 },
    { arabic: "ٱلْمَجِيدُ", transliteration: "Al-Majid", meaning: "The Glorious", number: 48 },
    { arabic: "ٱلْبَاعِثُ", transliteration: "Al-Ba'ith", meaning: "The Resurrector", number: 49 },
    { arabic: "ٱلْشَّهِيدُ", transliteration: "Ash-Shahid", meaning: "The All-Witnessing", number: 50 },
    { arabic: "ٱلْحَقُّ", transliteration: "Al-Haqq", meaning: "The Absolute Truth", number: 51 },
    { arabic: "ٱلْوَكِيلُ", transliteration: "Al-Wakil", meaning: "The Trustee", number: 52 },
    { arabic: "ٱلْقَوِيُّ", transliteration: "Al-Qawi", meaning: "The All-Strong", number: 53 },
    { arabic: "ٱلْمَتِينُ", transliteration: "Al-Matin", meaning: "The Firm One", number: 54 },
    { arabic: "ٱلْوَلِيُّ", transliteration: "Al-Wali", meaning: "The Protecting Associate", number: 55 },
    { arabic: "ٱلْحَمِيدُ", transliteration: "Al-Hamid", meaning: "The Praiseworthy", number: 56 },
    { arabic: "ٱلْمُحْصِيُ", transliteration: "Al-Muhsi", meaning: "The All-Enumerating", number: 57 },
    { arabic: "ٱلْمُبْدِئُ", transliteration: "Al-Mubdi", meaning: "The Originator", number: 58 },
    { arabic: "ٱلْمُعِيدُ", transliteration: "Al-Mu'id", meaning: "The Restorer", number: 59 },
    { arabic: "ٱلْمُحْيِى", transliteration: "Al-Muhyi", meaning: "The Giver of Life", number: 60 },
    { arabic: "ٱلْمُمِيتُ", transliteration: "Al-Mumit", meaning: "The Bringer of Death", number: 61 },
    { arabic: "ٱلْحَىُّ", transliteration: "Al-Hayy", meaning: "The Ever-Living", number: 62 },
    { arabic: "ٱلْقَيُّومُ", transliteration: "Al-Qayyum", meaning: "The Sustainer", number: 63 },
    { arabic: "ٱلْوَاجِدُ", transliteration: "Al-Wajid", meaning: "The Perceiver", number: 64 },
    { arabic: "ٱلْمَاجِدُ", transliteration: "Al-Majid", meaning: "The Illustrious", number: 65 },
    { arabic: "ٱلْوَاحِدُ", transliteration: "Al-Wahid", meaning: "The One", number: 66 },
    { arabic: "ٱلْأَحَد", transliteration: "Al-Ahad", meaning: "The Unique", number: 67 },
    { arabic: "ٱلْصَّمَدُ", transliteration: "As-Samad", meaning: "The Eternal Refuge", number: 68 },
    { arabic: "ٱلْقَادِرُ", transliteration: "Al-Qadir", meaning: "The Capable", number: 69 },
    { arabic: "ٱلْمُقْتَدِرُ", transliteration: "Al-Muqtadir", meaning: "The Omnipotent", number: 70 },
    { arabic: "ٱلْمُقَدِّمُ", transliteration: "Al-Muqaddim", meaning: "The Expediter", number: 71 },
    { arabic: "ٱلْمُؤَخِّرُ", transliteration: "Al-Mu'akhkhir", meaning: "The Delayer", number: 72 },
    { arabic: "ٱلأَوَّلُ", transliteration: "Al-Awwal", meaning: "The First", number: 73 },
    { arabic: "ٱلْآخِرُ", transliteration: "Al-Akhir", meaning: "The Last", number: 74 },
    { arabic: "ٱلْظَّاهِرُ", transliteration: "Az-Zahir", meaning: "The Manifest", number: 75 },
    { arabic: "ٱلْبَاطِنُ", transliteration: "Al-Batin", meaning: "The Hidden", number: 76 },
    { arabic: "ٱلْوَالِي", transliteration: "Al-Wali", meaning: "The Governor", number: 77 },
    { arabic: "ٱلْمُتَعَالِي", transliteration: "Al-Muta'ali", meaning: "The Self Exalted", number: 78 },
    { arabic: "ٱلْبَرُّ", transliteration: "Al-Barr", meaning: "The Source of Goodness", number: 79 },
    { arabic: "ٱلْتَّوَّابُ", transliteration: "At-Tawwab", meaning: "The Acceptor of Repentance", number: 80 },
    { arabic: "ٱلْمُنْتَقِمُ", transliteration: "Al-Muntaqim", meaning: "The Avenger", number: 81 },
    { arabic: "ٱلْعَفُوُّ", transliteration: "Al-Afuww", meaning: "The Pardoner", number: 82 },
    { arabic: "ٱلْرَّؤُفُ", transliteration: "Ar-Ra'uf", meaning: "The Most Kind", number: 83 },
    { arabic: "ٱلْمَالِكُ ٱلْمُلْكُ", transliteration: "Malik-ul-Mulk", meaning: "Master of the Kingdom", number: 84 },
    { arabic: "ٱلْذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ", transliteration: "Dhul-Jalali wal-Ikram", meaning: "Possessor of Glory and Honour", number: 85 },
    { arabic: "ٱلْمُقْسِطُ", transliteration: "Al-Muqsit", meaning: "The Equitable", number: 86 },
    { arabic: "ٱلْجَامِعُ", transliteration: "Al-Jami", meaning: "The Gatherer", number: 87 },
    { arabic: "ٱلْغَنيُّ", transliteration: "Al-Ghani", meaning: "The Self-Sufficient", number: 88 },
    { arabic: "ٱلْمُغْنِيُ", transliteration: "Al-Mughni", meaning: "The Enricher", number: 89 },
    { arabic: "ٱلْمَانِعُ", transliteration: "Al-Mani", meaning: "The Preventer", number: 90 },
    { arabic: "ٱلْضَّارُ", transliteration: "Ad-Darr", meaning: "The Distresser", number: 91 },
    { arabic: "ٱلْنَّافِعُ", transliteration: "An-Nafi", meaning: "The Benefactor", number: 92 },
    { arabic: "ٱلْنُّورُ", transliteration: "An-Nur", meaning: "The Light", number: 93 },
    { arabic: "ٱلْهَادِي", transliteration: "Al-Hadi", meaning: "The Guide", number: 94 },
    { arabic: "ٱلْبَدِيعُ", transliteration: "Al-Badi", meaning: "The Incomparable Originator", number: 95 },
    { arabic: "ٱلْبَاقِي", transliteration: "Al-Baqi", meaning: "The Everlasting", number: 96 },
    { arabic: "ٱلْوَارِثُ", transliteration: "Al-Warith", meaning: "The Ultimate Inheritor", number: 97 },
    { arabic: "ٱلْرَّشِيدُ", transliteration: "Ar-Rashid", meaning: "The Guide to the Right Path", number: 98 },
    { arabic: "ٱلْصَّبُورُ", transliteration: "As-Sabur", meaning: "The Most Patient", number: 99 }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedName, setSelectedName] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);

  const filteredNames = names.filter(name =>
    name.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
    name.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
    name.arabic.includes(searchTerm)
  );

  const startQuiz = () => {
    setQuizMode(true);
    setCurrentQuiz(0);
    setScore(0);
    setQuizAnswered(false);
  };

  const generateQuizOptions = (correctAnswer) => {
    const options = [correctAnswer];
    while (options.length < 4) {
      const randomName = names[Math.floor(Math.random() * names.length)];
      if (!options.includes(randomName.meaning)) {
        options.push(randomName.meaning);
      }
    }
    return options.sort(() => Math.random() - 0.5);
  };

  const handleQuizAnswer = (selected) => {
    if (quizAnswered) return;
    setQuizAnswered(true);
    if (selected === names[currentQuiz].meaning) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuiz < 9) {
      setCurrentQuiz(currentQuiz + 1);
      setQuizAnswered(false);
    } else {
      setQuizMode(false);
    }
  };

  if (quizMode) {
    const options = generateQuizOptions(names[currentQuiz].meaning);
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-emerald-800">Quiz Mode</h2>
              <div className="text-lg font-semibold text-teal-600">
                Question {currentQuiz + 1}/10 | Score: {score}
              </div>
            </div>

            <div className="mb-8 text-center">
              <div className="text-6xl font-arabic mb-4 text-emerald-900">
                {names[currentQuiz].arabic}
              </div>
              <div className="text-2xl text-gray-600 mb-2">
                {names[currentQuiz].transliteration}
              </div>
              <p className="text-gray-500">What does this name mean?</p>
            </div>

            <div className="space-y-3">
              {options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuizAnswer(option)}
                  disabled={quizAnswered}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    quizAnswered
                      ? option === names[currentQuiz].meaning
                        ? 'bg-green-100 border-2 border-green-500 text-green-800'
                        : 'bg-red-50 border-2 border-red-400 text-red-800'
                      : 'bg-white text-emerald-900 hover:bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {quizAnswered && (
              <button
                onClick={nextQuestion}
                className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition-colors font-semibold"
              >
                {currentQuiz < 9 ? 'Next Question' : 'See Results'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (selectedName) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setSelectedName(null)}
            className="mb-4 text-emerald-700 hover:text-emerald-900 flex items-center gap-2"
          >
            ← Back to all names
          </button>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              #{selectedName.number}
            </div>
            <div className="text-7xl font-arabic mb-6 text-emerald-900">
              {selectedName.arabic}
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {selectedName.transliteration}
            </div>
            <div className="text-xl text-gray-600 mb-8">
              {selectedName.meaning}
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                Reflect on this beautiful name of Allah and how it manifests in your life and the world around you.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-4">
            99 Names of Allah
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Learn and reflect upon the Beautiful Names of Allah (Asma ul Husna)
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or meaning..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:outline-none bg-white text-emerald-900 placeholder:text-gray-500"
              />
            </div>
            
            <button
              onClick={startQuiz}
              className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors font-semibold"
            >
              <Award size={20} />
              Start Quiz
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNames.map((name) => (
            <div
              key={name.number}
              onClick={() => setSelectedName(name)}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer group hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                  #{name.number}
                </div>
                <ChevronRight className="text-emerald-400 group-hover:text-emerald-600 transition-colors" size={24} />
              </div>
              
              <div className="text-5xl font-arabic mb-4 text-emerald-900 text-center">
                {name.arabic}
              </div>
              
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800 mb-2">
                  {name.transliteration}
                </div>
                <div className="text-gray-600">
                  {name.meaning}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNames.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500">No names found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}