import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-[#1a365d] py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">Get In Touch</h1>
            <p className="text-[#fbbf24] text-xl font-bold uppercase tracking-widest mb-12">We're here to answer your questions.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-3xl font-black text-[#1a365d] mb-8">Send us a message</h2>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#1a365d] uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="bg-white border border-slate-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#1a365d] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#1a365d] uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="bg-white border border-slate-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#1a365d] transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#1a365d] uppercase tracking-wider">Subject</label>
                  <select className="bg-white border border-slate-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#1a365d] transition-all appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Financial Aid</option>
                    <option>Career Opportunities</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#1a365d] uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="How can we help you?"
                    className="bg-white border border-slate-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#1a365d] transition-all resize-none"
                  ></textarea>
                </div>
                <button className="bg-[#1a365d] text-white font-black py-4 rounded-xl hover:bg-[#d4af37] hover:text-[#1a365d] transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-black text-[#1a365d] mb-8">Contact Information</h2>
              <p className="text-slate-600 text-lg mb-12">
                Have a specific question? Reach out to our departments directly or visit us at our campus.
              </p>
              
              <div className="flex flex-col gap-10">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-blue-50 text-[#1a365d] rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-[#1a365d] mb-1">Our Location</h4>
                    <p className="text-slate-600">123 University Avenue, St. Thomas, ST 12345</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-amber-50 text-[#d4af37] rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-[#1a365d] mb-1">Call Us</h4>
                    <p className="text-slate-600">+1 (555) 123-4567 (Main Line)</p>
                    <p className="text-slate-600">+1 (555) 987-6543 (Admissions)</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-[#1a365d] mb-1">Email Us</h4>
                    <p className="text-slate-600">info@montfortboystown.edu</p>
                    <p className="text-slate-600">admissions@montfortboystown.edu</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-16 w-full h-64 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 font-bold border-2 border-dashed border-slate-200">
                Interactive Campus Map Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
