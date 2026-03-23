"use client";

import { motion } from "motion/react";
import {
    Clock,
    BookOpen,
    GraduationCap,
    CheckCircle2,
    CalendarDays,
    Info,
    ArrowRight,
    FileBadge,
    Layers,
    Brain,
    Heart,
    Flame,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Program } from "../data/programs";
import { usePrograms, useCourseCategories, useCourses } from "@/lib/hooks";

interface ProgramDetailPageProps {
    program: Program;
}

export function ProgramDetailPage({ program }: ProgramDetailPageProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const { data: allPrograms } = usePrograms();
    const { data: allCategories, loading: catLoading } = useCourseCategories();
    const { data: allCourses } = useCourses();

    const dbProgram = useMemo(() => {
        if (!allPrograms) return null;
        // Match by label or name
        // Match by level AND (label or name)
        return allPrograms.find(p =>
            p.level === program.level && (
                p.name.toLowerCase().includes(program.label.toLowerCase()) ||
                program.fullName.toLowerCase().includes(p.name.toLowerCase())
            )
        );
    }, [allPrograms, program]);

    const dynamicCurriculum = useMemo(() => {
        if (!dbProgram || !allCategories || !allCourses) return null;

        // Filter categories for this program (or global ones)
        const relevantCats = allCategories.filter(c =>
            !c.studyProgramId || c.studyProgramId === dbProgram.id
        );

        if (relevantCats.length === 0) return null;

        return relevantCats.map(cat => {
            const courses = allCourses
                .filter(course => course.categoryId === cat.id)
                .map(course => ({ name: course.name, sks: course.credits }));

            // Calculate sum dynamically
            const calculatedSks = courses.reduce((sum, c) => sum + c.sks, 0);

            return {
                category: cat.name,
                sks: calculatedSks > 0 ? calculatedSks : cat.totalSKS, // Use actual sum if there are courses
                courses: courses
            };
        });
    }, [dbProgram, allCategories, allCourses]);

    // UI DataSource: Use dynamic if available, otherwise static
    const displayCurriculum = dynamicCurriculum && dynamicCurriculum.length > 0
        ? dynamicCurriculum
        : program.curriculum;

    const total = displayCurriculum.length;
    const activeData = displayCurriculum[activeIndex] ?? displayCurriculum[0];

    return (
        <div className="pt-20 bg-gray-50">

            {/* --- HERO SECTION --- */}
            {/* Perpaduan Latar Biru Gelap dengan Aksen Cahaya Merah */}
            <section className="relative py-28 overflow-hidden bg-gradient-to-r from-[#071333] via-[#143177] to-[#071333]">

                {/* Latar Belakang: Academic Layers (Tumpukan Pengetahuan) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="academicLayers" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
                                <rect x="10" y="10" width="40" height="40" fill="none" stroke="#ffffff" strokeWidth="2" rx="6" />
                                <rect x="20" y="20" width="40" height="40" fill="none" stroke="#ffffff" strokeWidth="1" rx="6" opacity="0.5" />
                                <rect x="30" y="30" width="40" height="40" fill="#ffffff" opacity="0.1" rx="6" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#academicLayers)" />
                    </svg>
                </div>

                {/* Glow Effects (Perpaduan Biru dan Merah) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 opacity-[0.15] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#dc2626] opacity-[0.15] rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-2 text-white/60 text-sm font-bold mb-6 tracking-wide">
                                <Link href="/programs" className="hover:text-white transition-colors">
                                    Program Studi
                                </Link>
                                <span>/</span>
                                <span className="text-white/80">{program.level}</span>
                                <span>/</span>
                                <span className="text-white">{program.fullName}</span>
                            </div>

                            {/* Badge Merah untuk Aksen Kontras */}
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] mb-6 shadow-lg bg-[#dc2626] text-white border border-red-500/50 uppercase">
                                <GraduationCap size={16} />
                                PROGRAM {program.level} — {program.degree}
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-md">
                                {program.fullName}
                            </h1>

                            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed mb-10 max-w-2xl">
                                {program.tagline}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/admissions"
                                    className="bg-white text-[#0a1930] px-8 py-4 rounded-xl font-black text-base hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-2"
                                >
                                    Daftar Sekarang <ArrowRight size={18} className="text-[#dc2626]" />
                                </Link>
                                <a
                                    href="#curriculum"
                                    className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-all hover:-translate-y-1"
                                >
                                    Lihat Kurikulum
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- QUICK FACTS SECTION --- */}
            <section className="-mt-16 relative z-20 container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <BookOpen className="text-[#1e3a8a]" size={32} strokeWidth={2.5} />,
                            title: "Jumlah SKS",
                            value: dbProgram?.totalCredits ? `${dbProgram.totalCredits} SKS` : `${program.totalSKS} SKS`,
                            desc: "Total SKS kelulusan",
                        },
                        {
                            icon: <Clock className="text-[#1e3a8a]" size={32} strokeWidth={2.5} />,
                            title: "Masa Studi",
                            value: dbProgram?.studyDuration || (program.level === "S1" ? "8 Semester (4 Tahun)" : "4 Semester (2 Tahun)"),
                            desc: "Estimasi lama masa studi",
                        },
                        {
                            icon: <CalendarDays className="text-[#1e3a8a]" size={32} strokeWidth={2.5} />,
                            title: "Sistem Perkuliahan",
                            value: dbProgram?.learningSystem || "Blok Teaching",
                            desc: "Metode & model belajar",
                        },
                        {
                            icon: <FileBadge className="text-[#1e3a8a]" size={32} strokeWidth={2.5} />,
                            title: "Gelar",
                            value: dbProgram?.degree || program.degree,
                            desc: dbProgram && dbProgram.name ? `${dbProgram.level === 'S1' ? 'Sarjana' : 'Magister'} ${dbProgram.name}` : program.fullName,
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 border-t-8 border-[#dc2626] hover:-translate-y-2 transition-transform duration-300 group"
                        >
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-white">
                                {item.icon}
                            </div>
                            <h3 className="text-gray-400 font-extrabold text-xs tracking-[0.2em] mb-2 uppercase">
                                {item.title}
                            </h3>
                            <p className="text-2xl font-black text-[#0a1930] mb-2 tracking-tight drop-shadow-sm">{item.value}</p>
                            <p className="text-gray-600 text-sm font-bold leading-snug">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- PROFIL LULUSAN & KETERANGAN --- */}
            <section className="relative py-24 mt-8 bg-gray-50 overflow-hidden">

                {/* Latar Belakang: Knowledge Network Biru Gelap */}
                <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
                    <GraduationCap size={800} strokeWidth={0.5} className="absolute -left-40 top-20 text-[#1e3a8a] opacity-[0.03] -rotate-12" />

                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-[0.05] text-[#1e3a8a]">
                        <defs>
                            <pattern id="knowledgeNetBold" width="80" height="80" patternUnits="userSpaceOnUse">
                                <circle cx="40" cy="40" r="4" fill="currentColor" />
                                <path d="M40 0 L40 80 M0 40 L80 40" stroke="currentColor" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4 4" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#knowledgeNetBold)" />
                    </svg>
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left: Description */}
                        <div className="w-full lg:w-3/5 space-y-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-block bg-red-50 text-[#dc2626] px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-5 shadow-sm border border-red-100">
                                    KETERANGAN PROGRAM
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-[#0a1930] mb-8 tracking-tight">{program.fullName}</h2>
                                <div className="space-y-5 text-gray-700 leading-relaxed font-bold text-lg">
                                    {program.description.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Sistem Perkuliahan */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <h3 className="text-3xl font-black text-[#1e3a8a] mb-6 flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-blue-50 shadow-inner">
                                        <Layers size={28} strokeWidth={2.5} className="text-[#1e3a8a]" />
                                    </div>
                                    Sistem Perkuliahan
                                </h3>
                                <ul className="space-y-4 bg-white p-8 rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                                    {program.sistem.map((s, i) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-800 font-extrabold text-lg">
                                            <CheckCircle2
                                                size={24}
                                                className="text-[#dc2626] flex-shrink-0 mt-0.5 drop-shadow-sm"
                                            />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Profil Lulusan */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-3xl font-black text-[#1e3a8a] mb-3 tracking-tight">Profil Lulusan</h3>
                                <p className="text-gray-600 font-bold text-base mb-8 bg-gray-200/60 inline-block px-5 py-2.5 rounded-xl border border-gray-300/50">{program.profilTitle}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {[
                                        {
                                            title: "Informed",
                                            desc: "Berpengetahuan luas dan aplikatif terhadap pelayanan.",
                                            icon: <Brain size={32} className="text-white" strokeWidth={2.5} />,
                                            iconBg: "bg-[#1e3a8a]",
                                            border: "border-[#1e3a8a]",
                                        },
                                        {
                                            title: "Transformed",
                                            desc: "Memiliki fondasi spiritualitas kokoh dan kedewasaan.",
                                            icon: <Heart size={32} className="text-white" strokeWidth={2.5} />,
                                            iconBg: "bg-[#dc2626]",
                                            border: "border-[#dc2626]",
                                        },
                                        {
                                            title: "Transformative",
                                            desc: "Berdampak nyata bagi jemaat dan lingkungan pelayanan.",
                                            icon: <Flame size={32} className="text-white" strokeWidth={2.5} />,
                                            iconBg: "bg-amber-500",
                                            border: "border-amber-500",
                                        },
                                    ].map((p, i) => (
                                        <div
                                            key={i}
                                            className={`bg-white rounded-3xl border-t-4 ${p.border} p-8 shadow-xl hover:shadow-2xl transition-shadow flex flex-col gap-5 relative overflow-hidden group`}
                                        >
                                            <div className={`absolute -right-4 -top-4 w-24 h-24 ${p.iconBg} rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500`} />
                                            <div className={`w-16 h-16 rounded-2xl ${p.iconBg} flex items-center justify-center flex-shrink-0 shadow-md relative z-10`}>
                                                {p.icon}
                                            </div>
                                            <div className="relative z-10">
                                                <h4 className="font-black text-2xl text-[#0a1930] mb-2 tracking-tight">{p.title}</h4>
                                                <p className="text-[14px] text-gray-500 font-bold leading-relaxed">{p.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Requirements Card */}
                        <div className="w-full lg:w-2/5">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-[2rem] shadow-2xl border-2 border-gray-100 p-10 sticky top-28"
                            >
                                <h3 className="text-3xl font-black text-[#0a1930] mb-8 flex items-center gap-3 tracking-tight">
                                    <CheckCircle2 className="text-[#dc2626]" size={32} strokeWidth={2.5} />
                                    Syarat Pendaftaran
                                </h3>
                                <ul className="space-y-6 mb-12">
                                    {program.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="min-w-8 mt-0.5 w-8 h-8 rounded-xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center text-sm font-black flex-shrink-0 shadow-sm border border-blue-100">
                                                {i + 1}
                                            </div>
                                            <span className="text-gray-700 font-bold text-[15px] leading-relaxed pt-1">{req}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/admissions"
                                    className="group flex items-center justify-between w-full bg-[#1e3a8a] text-white px-8 py-5 rounded-2xl transition-all hover:bg-[#0a1930] shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    <span className="font-black text-xl">Mulai Pendaftaran</span>
                                    <ArrowRight size={24} className="text-[#dc2626] group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- KURIKULUM SECTION --- */}
            <section id="curriculum" className="relative py-28 bg-white border-t border-gray-100 overflow-hidden">

                {/* Latar Belakang: Modular Matrix Kombinasi Merah Biru */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] text-[#1e3a8a]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="matrixBold" width="100" height="100" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="30" height="30" fill="currentColor" opacity="0.6" rx="8" />
                                <circle cx="80" cy="80" r="6" fill="#dc2626" />
                                <circle cx="80" cy="20" r="4" fill="currentColor" opacity="0.5" />
                                <circle cx="20" cy="80" r="4" fill="currentColor" opacity="0.5" />
                                <path d="M30 15 L80 15" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                                <path d="M15 30 L15 80" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#matrixBold)" />
                    </svg>
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <span className="inline-block bg-blue-50 text-[#1e3a8a] px-6 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-5 shadow-sm border border-blue-100">
                            STRUKTUR PEMBELAJARAN
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1930] mb-6 tracking-tight drop-shadow-sm">Daftar Mata Kuliah</h2>
                        <p className="text-xl text-gray-600 font-bold leading-relaxed bg-white/80 backdrop-blur-sm inline-block px-6 py-3 rounded-2xl border border-gray-200">
                            Kurikulum komprehensif dirancang sistematis dengan total <strong className="font-black text-3xl text-[#dc2626] mx-1">{program.totalSKS} SKS</strong> kelulusan.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">

                        {/* Category tabs */}
                        <div className="flex flex-wrap gap-2 bg-gray-100/80 p-2 rounded-[2rem] overflow-hidden border border-gray-200 mb-12 shadow-inner">
                            {displayCurriculum.map((cat, idx) => (
                                <button
                                    key={cat.category + idx}
                                    onClick={() => setActiveIndex(idx)}
                                    style={{ flexBasis: `calc(${100 / displayCurriculum.length}% - 0.5rem)` }}
                                    className={`flex-1 min-w-[140px] flex flex-col items-center justify-center py-6 px-4 gap-2 rounded-2xl transition-all duration-300 ${activeIndex === idx
                                        ? "bg-[#1e3a8a] text-white shadow-xl scale-100"
                                        : "bg-white text-gray-500 hover:bg-white hover:text-[#dc2626] hover:shadow-md scale-[0.98]"
                                        }`}
                                >
                                    <div className="flex items-baseline gap-1.5">
                                        <span className={`text-4xl md:text-5xl font-black leading-none tracking-tighter ${activeIndex === idx ? "text-white" : "text-[#1e3a8a]"}`}>
                                            {cat.sks}
                                        </span>
                                        <span className={`text-xs font-black uppercase tracking-widest ${activeIndex === idx ? "text-white/80" : "text-gray-400"}`}>
                                            SKS
                                        </span>
                                    </div>
                                    <span className={`text-sm font-black text-center leading-snug mt-1 ${activeIndex === idx ? "text-white" : "text-gray-800"}`}>
                                        {cat.category}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Active Category Table */}
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white border-2 border-gray-100 rounded-[2rem] overflow-hidden shadow-2xl"
                        >
                            <div className="bg-[#0a1930] text-white px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-[#dc2626]">
                                <h3 className="font-black text-2xl md:text-3xl tracking-tight text-center md:text-left">{activeData?.category}</h3>
                                <div className="bg-[#dc2626] px-6 py-3 rounded-xl shadow-md flex items-center gap-2">
                                    <span className="font-black text-3xl tracking-tight">{activeData?.sks}</span>
                                    <span className="text-sm font-black uppercase tracking-widest opacity-90 pt-1">SKS</span>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-gray-50/80 border-b-2 border-gray-100">
                                            <th className="py-6 px-10 font-black text-[#1e3a8a] text-base tracking-widest uppercase">
                                                Nama Mata Kuliah
                                            </th>
                                            <th className="py-6 px-10 font-black text-[#1e3a8a] text-base tracking-widest uppercase text-center w-40 border-l border-gray-200">
                                                Bobot SKS
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y-2 divide-gray-100">
                                        {activeData?.courses.map((course, idx) => (
                                            <tr key={idx} className="hover:bg-blue-50/40 transition-colors group">
                                                <td className="py-5 px-10">
                                                    <span className="font-extrabold text-gray-800 text-lg md:text-xl tracking-tight group-hover:text-[#dc2626] transition-colors">{course.name}</span>
                                                </td>
                                                <td className="py-5 px-10 text-center font-black text-2xl border-l border-gray-100 text-[#1e3a8a]">
                                                    {course.sks}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-gray-100/80 px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t-2 border-gray-200">
                                <span className="text-gray-600 font-extrabold text-base">
                                    <span className="text-2xl text-[#1e3a8a] mr-2">{activeData?.courses.length}</span> Mata Kuliah Ditampilkan
                                </span>
                                <span className="font-black text-xl bg-white px-6 py-3 rounded-xl border-2 border-gray-200 shadow-md text-[#dc2626]">
                                    Total Kategori: {activeData?.courses.reduce((a, c) => a + c.sks, 0)} SKS
                                </span>
                            </div>
                        </motion.div>

                        {/* Curriculum Note */}
                        <div className="mt-12">
                            <div className="bg-blue-50/50 border-2 border-blue-100 shadow-lg rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md text-[#1e3a8a] border border-gray-100">
                                    <Info size={40} strokeWidth={2.5} />
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="font-black text-[#1e3a8a] mb-3 text-2xl tracking-tight">Keterangan Kurikulum</h4>
                                    <p className="text-lg leading-relaxed font-bold text-gray-700">{program.curriculumNote}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}