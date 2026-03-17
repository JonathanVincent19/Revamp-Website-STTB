"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/lib/hooks";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Loader2, AlertCircle, Lock, Mail, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function AdminLoginPage() {
  const router = useRouter();
  const { mutate: login, loading, error } = useLogin();
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalError("");
    const fd = new FormData(e.currentTarget);
    const email = fd.get("email") as string;
    const password = fd.get("password") as string;

    if (!email || !password) {
      setLocalError("Email dan password harus diisi.");
      return;
    }

    try {
      const res = await login({ email, password }) as any;
      if (res.token || res.data?.token) {
        // Simpan token ke localStorage
        const tokenStr = res.token || res.data?.token;
        localStorage.setItem("sttb_token", tokenStr);
        // Redirect ke halaman admin dashboard
        router.push("/admin");
      } else {
         setLocalError("Email atau Password salah");
      }
    } catch (err: any) {
      // Error dimunculkan melalui hook error tapi di sini hanya fallback UI saja
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 bg-[url('https://images.unsplash.com/photo-1758270704524-596810e891b5')] bg-cover bg-center">
      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-[#1e3a8a]/80 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          <div className="p-8 pb-6 text-center">
            {/* Logo */}
            <div className="mx-auto bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-md -mt-14 border-4 border-[#1e3a8a]">
              <ImageWithFallback
                src="/images/logo-sttb.png"
                alt="STTB Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            
            <h2 className="text-2xl font-black text-[#1e3a8a] tracking-tight">
              STTB Admin CMS
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Masuk ke akun administrator Anda
            </p>
          </div>

          <div className="p-8 pt-0">
            {/* Error Message */}
            {(error || localError) && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4"
              >
                <AlertCircle className="text-[#dc2626] flex-shrink-0 mt-0.5" size={18} />
                <p className="text-sm font-medium text-red-700 leading-tight">
                  {error || localError}
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Alamat Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    suppressHydrationWarning
                    placeholder="admin@sttb.ac.id"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Kata Sandi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    name="password"
                    type="password"
                    required
                    suppressHydrationWarning
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                suppressHydrationWarning
                disabled={loading}
                className="w-full bg-[#1e3a8a] group relative text-white px-6 py-3.5 rounded-lg font-bold hover:bg-[#dc2626] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden"
              >
                {/* Background sliding effect */}
                <div className="absolute inset-0 w-full h-full bg-[#dc2626] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Mengautentikasi...
                    </>
                  ) : (
                    <>
                      Masuk ke Dashboard
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
          
          <div className="bg-gray-50 py-4 px-8 text-center border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Sekolah Tinggi Teologi Bandung &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
