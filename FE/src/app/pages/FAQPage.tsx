"use client";

import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Search, BookOpen, GraduationCap, Info, MessageCircle, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { useState, useMemo } from "react";
import { useFAQs } from "@/lib/hooks";

const categoryMapping: Record<string, { label: string; icon: any; color: string }> = {
  General: { label: "Informasi Umum", icon: Info, color: "from-blue-500 to-blue-700" },
  Admission: { label: "Admisi & Pendaftaran", icon: Info, color: "from-blue-600 to-blue-800" },
  Scholarship: { label: "Beasiswa", icon: Info, color: "from-blue-400 to-blue-600" },
  Financial: { label: "Biaya & Keuangan", icon: Info, color: "from-blue-700 to-blue-900" },
  SupportStudy: { label: "Fasilitas & Pendukung", icon: Info, color: "from-blue-500 to-blue-700" },
  StudyProgramConsultation: { label: "Panduan Memilih Program Studi", icon: BookOpen, color: "from-green-500 to-green-700" },
  BachelorConsultation: { label: "Konsultasi Program Sarjana (S1)", icon: GraduationCap, color: "from-red-500 to-red-700" },
  MasterConsultation: { label: "Konsultasi Program Magister (S2)", icon: MessageCircle, color: "from-amber-500 to-amber-700" },
};

export function FAQPage() {
  const { data: faqs, loading, error } = useFAQs();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Grouping and Filtering Logic
  const processedCategories = useMemo(() => {
    if (!faqs) return [];

    // Filter by search query first
    const filteredFaqs = faqs.filter(
      (f) =>
        f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Group by category
    const groups: Record<string, any[]> = {};
    filteredFaqs.forEach((faq) => {
      const cat = faq.category || "General";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(faq);
    });

    // Map to UI Structure ensuring sortOrder is respected
    return Object.keys(groups).map((catKey) => {
      const config = categoryMapping[catKey] || categoryMapping.General;
      return {
        category: config.label,
        icon: config.icon,
        color: config.color,
        questions: groups[catKey].sort((a, b) => a.sortOrder - b.sortOrder),
      };
    });
  }, [faqs, searchQuery]);

  return (
    <div className="pt-20">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-gradient-to-br from-[#1e3a8a] to-[#172e6e] overflow-hidden">
        {/* Background Shapes: Tema Dialog & Konsultasi */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
          <div className="absolute top-10 left-10 text-[250px] font-serif text-white opacity-[0.03] select-none leading-none -rotate-12">?</div>
          <div className="absolute -bottom-10 right-20 text-[300px] font-serif text-white opacity-[0.03] select-none leading-none rotate-12">"</div>

          <svg className="absolute w-full h-full opacity-[0.04]" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,250.7C1120,245,1280,203,1360,192L1440,181"></path>
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160"></path>
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-[#dc2626] text-white px-5 py-2 rounded-full text-xs tracking-widest mb-6 font-black uppercase shadow-lg shadow-red-500/30">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-md">
              Pertanyaan & Konsultasi
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-10 font-light">
              Temukan jawaban untuk pertanyaan umum seputar biaya, asrama, hingga panduan memilih program studi yang tepat untuk Anda.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <input
                type="text"
                placeholder="Cari pertanyaan atau kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-16 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white/95 backdrop-blur-sm shadow-xl transition-all"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1e3a8a] transition-colors" size={24} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ CATEGORIES SECTION --- */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 text-[#1e3a8a] opacity-[0.08]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dotGridFAQ" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dotGridFAQ)" />
            </svg>
          </div>
          <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] border-[6px] border-[#1e3a8a] opacity-[0.06] rounded-full" />
          <div className="absolute bottom-1/4 right-[-10%] w-[800px] h-[800px] border-[6px] border-[#dc2626] opacity-[0.04] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-5xl">
          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-[#1e3a8a] mb-4" size={48} />
              <p className="text-gray-500 font-bold tracking-widest uppercase text-sm">Memuat Pertanyaan...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex flex-col items-center justify-center py-16 bg-red-50 border border-red-100 rounded-3xl max-w-2xl mx-auto shadow-sm">
              <AlertCircle className="text-[#dc2626] mb-4" size={48} />
              <p className="text-[#dc2626] font-black text-xl mb-1">Gagal Memuat FAQ</p>
              <p className="text-sm font-medium text-red-700">{error}</p>
            </div>
          )}

          {!loading && !error && processedCategories.map((category: any, catIndex: number) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#1e3a8a]">
                  {category.category}
                </h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq: any, qIndex: number) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <motion.div
                      key={qIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: qIndex * 0.05 }}
                      className={`bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-sm relative z-10 ${isOpen ? "border-[#1e3a8a] shadow-md" : "border-gray-200 hover:border-blue-300"}`}
                    >
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className={`w-full px-6 py-5 flex items-center justify-between text-left group ${isOpen ? "bg-blue-50/80" : ""}`}
                      >
                        <div className="flex items-start gap-4 flex-1 pr-4">
                          <div className={`mt-0.5 p-1.5 rounded-lg transition-colors ${isOpen ? "bg-[#1e3a8a] text-white" : "bg-gray-100 text-gray-400 group-hover:bg-red-50 group-hover:text-[#dc2626]"}`}>
                            <HelpCircle size={20} />
                          </div>
                          <span className={`font-bold text-lg leading-snug transition-colors ${isOpen ? "text-[#1e3a8a]" : "text-gray-800 group-hover:text-[#dc2626]"}`}>
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#1e3a8a]" : "text-gray-400"}`}
                          size={24}
                        />
                      </button>

                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 pt-2 bg-blue-50/80"
                        >
                          <div className="pl-14 pr-4">
                            <p className="text-gray-700 leading-relaxed font-medium whitespace-pre-line">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* Empty State */}
          {!loading && !error && processedCategories.length === 0 && (
            <div className="text-center py-20 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-sm relative z-10">
              <Search className="mx-auto text-gray-300 mb-4" size={64} />
              <p className="text-gray-500 text-xl font-medium">
                Tidak ada hasil yang ditemukan untuk <span className="text-[#dc2626]">"{searchQuery}"</span>
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 text-[#1e3a8a] font-bold hover:underline"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.04] text-[#1e3a8a]">
          <svg width="800" height="800" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 11h-1.56a2.5 2.5 0 0 1-4.88 0H11v1.56a2.5 2.5 0 0 1 0 4.88V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4h1.56a2.5 2.5 0 0 1 0-4.88H3V5a2 2 0 0 1 2-2h4v1.56a2.5 2.5 0 0 1 4.88 0V3h4a2 2 0 0 1 2 2v4h-1.56a2.5 2.5 0 0 1 0 4.88V11z" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#1e3a8a] to-[#0f235e] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-white opacity-5 rounded-full blur-[30px]" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#dc2626] opacity-20 rounded-full blur-[50px]" />

            <div className="relative z-10">
              <div className="bg-red-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-red-400/30">
                <MessageCircle className="text-white" size={40} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 drop-shadow-md">
                Masih Membutuhkan Bantuan?
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                Jangan ragu. Tim Admisi STTB selalu siap membantu menjawab setiap keraguan dan pertanyaan Anda secara personal.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#dc2626] text-white px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-red-900/50"
                >
                  Hubungi Tim Admisi
                </a>
                <a
                  href="/admissions/pendaftaran-online"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a8a] px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  Daftar Sekarang
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}