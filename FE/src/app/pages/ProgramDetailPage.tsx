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
    ChevronLeft,
    ChevronRight,
    Brain,
    Heart,
    Flame,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Program } from "../data/programs";

interface ProgramDetailPageProps {
    program: Program;
}

export function ProgramDetailPage({ program }: ProgramDetailPageProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const isS1 = program.level === "S1";
    const accentColor = isS1 ? "#1e3a8a" : "#dc2626";
    const accentBg = isS1 ? "bg-[#1e3a8a]" : "bg-[#dc2626]";
    const accentText = isS1 ? "text-[#1e3a8a]" : "text-[#dc2626]";
    const accentLight = isS1 ? "bg-[#dbeafe]" : "bg-[#fee2e2]";
    const accentLightText = isS1 ? "text-[#1e3a8a]" : "text-[#991b1b]";
    const accentBorder = isS1 ? "border-[#1e3a8a]" : "border-[#dc2626]";

    const total = program.curriculum.length;
    const activeData = program.curriculum[activeIndex] ?? program.curriculum[0];

    const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
    const goNext = () => setActiveIndex((i) => Math.min(total - 1, i + 1));

    return (
        <div className="pt-20 bg-gray-50">
            {/* Hero Section */}
            <section
                className={`relative py-24 overflow-hidden ${isS1
                    ? "bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]"
                    : "bg-gradient-to-br from-[#7f1d1d] to-[#dc2626]"
                    }`}
            >
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-white opacity-5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
                                <Link href="/programs" className="hover:text-white transition-colors">
                                    Program Studi
                                </Link>
                                <span>/</span>
                                <span className="text-white/80">{program.level}</span>
                                <span>/</span>
                                <span className="text-white">{program.fullName}</span>
                            </div>

                            <div
                                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6 ${isS1 ? "bg-[#dc2626] text-white" : "bg-white text-[#dc2626]"
                                    }`}
                            >
                                <GraduationCap size={18} />
                                PROGRAM {program.level} — {program.degree}
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                {program.fullName}
                            </h1>

                            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
                                {program.tagline}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/admissions"
                                    className="bg-white text-gray-900 px-8 py-3.5 rounded-lg font-bold text-base hover:bg-gray-100 transition-colors shadow-lg"
                                >
                                    Daftar Sekarang
                                </Link>
                                <a
                                    href="#curriculum"
                                    className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold text-base hover:bg-white/10 transition-colors"
                                >
                                    Lihat Kurikulum
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Facts Cards */}
            <section className="-mt-12 relative z-20 container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <BookOpen className={accentText} size={28} />,
                            title: "Jumlah SKS",
                            value: `${program.totalSKS} SKS`,
                            desc: "Total SKS kelulusan",
                        },
                        {
                            icon: <Clock className={accentText} size={28} />,
                            title: "Masa Studi",
                            value: program.level === "S1" ? "4 Tahun" : "2 Tahun",
                            desc: program.masaStudi,
                        },
                        {
                            icon: <CalendarDays className={accentText} size={28} />,
                            title: "Sistem Perkuliahan",
                            value: "Blok Teaching",
                            desc: program.level === "S1" ? "Tatap Muka Intensif" : "Intensif Akhir Pekan",
                        },
                        {
                            icon: <FileBadge className={accentText} size={28} />,
                            title: "Gelar",
                            value: program.degree,
                            desc: program.fullName,
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`bg-white rounded-2xl shadow-xl p-6 border-t-4 ${accentBorder}`}
                        >
                            <div className={`${accentLight} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                                {item.icon}
                            </div>
                            <h3 className="text-gray-500 font-medium text-xs tracking-widest mb-1 uppercase">
                                {item.title}
                            </h3>
                            <p className={`text-2xl font-black ${accentText} mb-1`}>{item.value}</p>
                            <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Profil Lulusan + Keterangan / Persyaratan */}
            <section className="py-24 container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-14">
                    {/* Left: Description */}
                    <div className="w-full lg:w-3/5 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className={`inline-block ${accentLight} ${accentLightText} px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-4`}>
                                KETERANGAN PROGRAM
                            </span>
                            <h2 className="text-3xl font-black text-[#1e3a8a] mb-6">{program.fullName}</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
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
                            <h3 className={`text-xl font-black ${accentText} mb-4 flex items-center gap-2`}>
                                <Layers size={22} />
                                Sistem Perkuliahan
                            </h3>
                            <ul className="space-y-3">
                                {program.sistem.map((s, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle2
                                            size={18}
                                            style={{ color: accentColor }}
                                            className="flex-shrink-0 mt-0.5"
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
                            <h3 className={`text-xl font-black ${accentText} mb-1`}>Profil Lulusan</h3>
                            <p className="text-gray-400 text-sm italic mb-5">{program.profilTitle}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    {
                                        title: "Informed",
                                        desc: "Berpengetahuan luas dan aplikatif terhadap tantangan pelayanan masa kini.",
                                        icon: <Brain size={28} className="text-[#1e3a8a]" />,
                                        iconBg: "bg-[#dbeafe]",
                                        border: "border-t-[#1e3a8a]",
                                    },
                                    {
                                        title: "Transformed",
                                        desc: "Memiliki fondasi spiritualitas yang kokoh dan karakter yang dewasa dalam Kristus.",
                                        icon: <Heart size={28} className="text-white" />,
                                        iconBg: "bg-[#dc2626]",
                                        border: "border-t-[#dc2626]",
                                    },
                                    {
                                        title: "Transformative",
                                        desc: "Berdampak nyata bagi jemaat dan lingkungan pelayanan sekitarnya.",
                                        icon: <Flame size={28} className="text-white" />,
                                        iconBg: "bg-[#1e3a8a]",
                                        border: "border-t-[#1e3a8a]",
                                    },
                                ].map((p, i) => (
                                    <div
                                        key={i}
                                        className={`bg-white rounded-2xl border-t-4 ${p.border} p-6 shadow-md flex flex-col gap-4`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center flex-shrink-0`}>
                                            {p.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-800 mb-1">{p.title}</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
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
                            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-28"
                        >
                            <h3 className={`text-xl font-black ${accentText} mb-6 flex items-center gap-3`}>
                                <CheckCircle2 style={{ color: accentColor }} size={24} />
                                Persyaratan Pendaftaran
                            </h3>
                            <ul className="space-y-4 mb-8">
                                {program.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div
                                            className={`min-w-6 mt-0.5 w-6 h-6 rounded-full ${accentLight} ${accentLightText} flex items-center justify-center text-xs font-bold flex-shrink-0`}
                                        >
                                            {i + 1}
                                        </div>
                                        <span className="text-gray-700 text-sm leading-relaxed">{req}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/admissions"
                                className={`group flex items-center justify-between w-full ${accentBg} text-white px-6 py-4 rounded-xl transition-all hover:opacity-90`}
                            >
                                <span className="font-bold">Mulai Pendaftaran</span>
                                <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Kurikulum */}
            <section id="curriculum" className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className={`inline-block ${accentLight} ${accentLightText} px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-4`}>
                            KURIKULUM & MATA KULIAH
                        </span>
                        <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">Daftar Mata Kuliah</h2>
                        <p className="text-gray-600">
                            Struktur kurikulum yang komprehensif dengan total <strong>{program.totalSKS} SKS</strong>.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        {/* Category tabs — evenly distributed, no empty space */}
                        <div className="flex flex-wrap gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200 mb-8">
                            {program.curriculum.map((cat, idx) => (
                                <button
                                    key={cat.category}
                                    onClick={() => setActiveIndex(idx)}
                                    style={{ flexBasis: `${100 / program.curriculum.length}%` }}
                                    className={`flex-1 min-w-[120px] flex flex-col items-center justify-center py-5 px-3 gap-1.5 transition-all ${activeIndex === idx
                                            ? `${accentBg} text-white`
                                            : "bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                        }`}
                                >
                                    <span className={`text-3xl font-extrabold leading-none tracking-tight ${activeIndex === idx ? "text-white" : accentText
                                        }`}>
                                        {cat.sks}
                                    </span>
                                    <span className={`text-[9px] font-bold uppercase tracking-[0.15em] ${activeIndex === idx ? "text-white/60" : "text-gray-400"
                                        }`}>
                                        SKS
                                    </span>
                                    <span className={`text-xs font-bold text-center leading-snug mt-0.5 ${activeIndex === idx ? "text-white/90" : "text-gray-700"
                                        }`} style={{ letterSpacing: "0.01em" }}>
                                        {cat.category}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Active Category Table */}
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <div className={`${accentBg} text-white px-6 py-4 flex items-center justify-between`}>
                                <h3 className="font-extrabold text-lg tracking-tight">{activeData?.category}</h3>
                                <span className="font-black text-2xl tracking-tight">{activeData?.sks} <span className="text-sm font-bold opacity-80">SKS</span></span>
                            </div>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50 border-b-2 border-gray-100">
                                        <th className="py-3.5 px-6 font-extrabold text-[#1e3a8a] text-sm tracking-wide">
                                            Nama Mata Kuliah
                                        </th>
                                        <th className="py-3.5 px-6 font-extrabold text-[#1e3a8a] text-sm tracking-wide text-center w-24">
                                            SKS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {activeData?.courses.map((course, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                                            <td className="py-4 px-6">
                                                <span className="font-semibold text-gray-900 text-sm leading-snug">{course.name}</span>
                                            </td>
                                            <td className={`py-4 px-6 text-center font-extrabold text-xl ${accentText}`}>{course.sks}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-100">
                                <span className="text-gray-500 text-sm">
                                    {activeData?.courses.length} mata kuliah dalam kategori ini
                                </span>
                                <span className={`font-black text-lg ${accentText}`}>
                                    Total: {activeData?.courses.reduce((a, c) => a + c.sks, 0)} SKS
                                </span>
                            </div>
                        </motion.div>

                        {/* Curriculum Note */}
                        <div className="mt-8">
                            <div className="bg-[#eff6ff] rounded-xl p-6 flex gap-4">
                                <Info className="flex-shrink-0 mt-0.5 text-[#3b82f6]" size={22} />
                                <div>
                                    <h4 className="font-bold text-[#1e3a8a] mb-2">Keterangan Kurikulum</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{program.curriculumNote}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
