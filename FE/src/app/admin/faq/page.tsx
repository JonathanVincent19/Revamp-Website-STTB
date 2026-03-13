"use client";

import { Plus, Pencil, Trash2, GripVertical, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

const faqData = [
  { id: 1, question: "Bagaimana cara mendaftar di STTB?", answer: "Pendaftaran dapat dilakukan secara online melalui website..." },
  { id: 2, question: "Apa saja program studi yang tersedia?", answer: "STTB menyediakan 2 program S1 dan 6 program S2..." },
  { id: 3, question: "Apakah STTB menyediakan asrama?", answer: "Ya, STTB menyediakan fasilitas asrama bagi mahasiswa..." },
  { id: 4, question: "Berapa biaya kuliah di STTB?", answer: "Biaya kuliah bervariasi tergantung program studi..." },
  { id: 5, question: "Apakah ada program beasiswa?", answer: "STTB menyediakan beberapa program beasiswa..." },
  { id: 6, question: "Bagaimana sistem perkuliahan di STTB?", answer: "Perkuliahan dilaksanakan secara tatap muka..." },
];

export default function FAQPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{faqData.length} pertanyaan</p>
        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9"><Plus size={16} /> Tambah FAQ</Button>
      </div>

      <div className="space-y-3">
        {faqData.map((faq, i) => (
          <Card key={faq.id} className="border border-gray-100 shadow-sm">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="flex flex-col items-center gap-1 pt-1">
                  <GripVertical size={16} className="text-gray-300 cursor-grab" />
                  <span className="text-xs font-bold text-gray-300">#{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <Input defaultValue={faq.question} className="font-semibold text-sm bg-transparent border-gray-200 focus:border-[#1e3a8a]" />
                  <textarea
                    className="w-full min-h-[60px] p-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none resize-y"
                    defaultValue={faq.answer}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-[#dc2626]"><Trash2 size={14} /></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end">
        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90"><Save size={16} /> Simpan Semua</Button>
      </div>
    </div>
  );
}
