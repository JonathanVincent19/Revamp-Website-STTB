"use client";

import { Plus, Pencil, Trash2, GripVertical, Save, Loader2, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useState, useEffect } from "react";
import { useFAQs, useCreateFAQ, useUpdateFAQ, useDeleteFAQ } from "@/lib/hooks";

const CATEGORY_OPTIONS = [
  { value: "General", label: "Informasi Umum" },
  { value: "Admission", label: "Admisi & Pendaftaran" },
  { value: "Scholarship", label: "Beasiswa" },
  { value: "Financial", label: "Biaya & Keuangan" },
  { value: "SupportStudy", label: "Fasilitas & Pendukung" },
  { value: "StudyProgramConsultation", label: "Panduan Memilih Program Studi" },
  { value: "BachelorConsultation", label: "Konsultasi Program Sarjana (S1)" },
  { value: "MasterConsultation", label: "Konsultasi Program Magister (S2)" },
];

const SEED_DATA = [
  { category: "General", question: "Apakah STTB menyediakan beasiswa?", answer: "STTB menyediakan beasiswa terbatas baik untuk program Sarjana maupun program Magister. Informasi dapat Anda pelajari pada website ini atau dengan bertanya langsung kepada Staf Beasiswa kami di nomor HP: +62 815-7127-228 atau melalui email: beasiswa@sttb.ac.id" },
  { category: "General", question: "Apakah perkuliahan di STTB dilaksanakan dalam secara online sampai lulus?", answer: "Program Sarjana: STTB belum memiliki perkuliahan program Sarjana dalam bentuk full online tetapi dalam masa pandemi perkuliahan dilakukan secara hybrid dengan pembagian sebagai berikut: Bagi mahasiswa program Sarjana, perkuliahan dilaksanakan secara hybrid learning, dimana mahasiswa yang tinggal di asrama mengikuti perkuliahan secara onsite/tatap muka, sedangkan mahasiswa yang sudah berkeluarga dan tidak tinggal di asrama, mengikuti perkuliahan secara online.\n\nProgram Magister: STTB belum memiliki perkuliahan program Magister dalam bentuk full online namun dalam masa pandemi, perkuliahan dilaksanakan dalam bentuk online. Perubahan menuju hybrid learning sedang dilakukan dan penetapan kebijakan perkuliahan masih menunggu perkembangan situasi dan kondisi Pandemi Covid-19." },
  { category: "General", question: "Berapa biaya studi di STTB?", answer: "Biaya studi bagi program Sarjana dan Magister dibagi menjadi biaya rutin dan insidentil. Adapun biaya rutin adalah biaya administrasi setiap semester dan biaya pendidikan/kuliah yang dibayar sesuai mata kuliah yang diambil, sedangkan biaya tidak rutin/insidentil adalah biaya Pendaftaran dan Tes, Biaya Bimbingan dan Ujian Proposal Skripsi/Tesis serta biaya cuti bila mengambil cuti." },
  { category: "General", question: "Apakah saya dapat bekerja sambil kuliah?", answer: "Bila Anda mengambil studi di program Sarjana atau M.Th. Matrikulasi, bekerja tidaklah memungkinkan karena jadwal kuliah yang padat dan adanya batasan waktu untuk meninggalkan lingkungan asrama.\n\nBila Anda mengambil studi di program Magister Teologi (M.Th.) atau Magister Pendidikan Kristen (M.Pd.) atau Magister Ministri Pelayanan Marketplace(M.Min.) yang memiliki sistem kuliah block teaching maka Anda dapat bekerja/melayani sambil studi." },
  { category: "General", question: "Apakah saya harus tinggal di asrama?", answer: "Mahasiswa S1 dan M.Th. Matrikulasi yang belum menikah wajib tinggal di asrama STTB sekalipun mereka berdomisili di Kota Bandung.\n\nMahasiswa S1 dan M.Th. Matrikulasi yang telah berkeluarga (menikah/memiliki anak) harus mencari tempat tinggal sendiri dan tidak diperkenankan tinggal di asrama STTB bersama keluarganya.\n\nMahasiswa S2 yang kuliah secara intensif dapat menginap di asrama STTB hanya selama kelas berlangsung dengan membayar biaya yang telah ditetapkan." },
  { category: "StudyProgramConsultation", question: "Hal-hal apa saja yang harus dipertimbangkan dalam memilih STT atau program studi?", answer: "• Karunia kemampuan/talenta Anda dan rencana pelayanan Anda di masa depan secara spesifik (misalnya apakah Anda ingin melayani sebagai guru di perkotaan, apakah Anda ingin berkhotbah dan membina jemaat, apakah Anda ingin melayani kaum muda di sekolah, dsb)\n• Peluang tempat dan jenis pelayanan di masa depan berkaitan dengan program studi yang Anda pilih. Kebijakan sinode/gereja berbeda-beda.\n• Isi kurikulum program studi, program pembinaan mahasiswa.\n• Kualitas dosen dan pandangan iman STT.\n• Kemampuan finansial pribadi dalam membiayai studi sampai lulus. Apakah Anda dapat memperoleh sponsor/dukungan dari lembaga atau perorangan? Apakah Anda dapat memperoleh beasiswa?\n• Manajemen waktu Anda – khususnya bagi Anda yang akan mengambil studi S2, pertimbangkanlah apakah Anda dapat menyelesaikan kuliah sambil bekerja dan membagi waktu dengan keluarga.\n• Komunitas belajar Anda kelak – siapakah yang akan menjadi teman-teman belajar Anda di seminari, apakah ada dukungan sosial dari dosen, pelayanan konseling, dan sebagainya.\n• Fasilitas STT khususnya yang mendukung pembelajaran Anda seperti fasilitas perpustakaan, jurnal online, dsb." },
  { category: "StudyProgramConsultation", question: "Bila saya kebingungan dalam memilih program studi, kepada siapa saya dapat berkonsultasi?", answer: "Anda dapat berkonsultasi dengan pihak-pihak berikut:\n• Hamba Tuhan di gereja Anda\n• Pembina rohani/mentor rohani Anda\n• Pihak admisi STT yang Anda ingin tuju tersebut\n• Sebelum memutuskan untuk mengambil studi di STT, kami menyarankan Anda tetap berkonsultasi dengan keluarga (orang tua dan/atau pasangan hidup Anda) dan atasan Anda (bila sudah bekerja). Anda perlu mengkonfirmasi dukungan mereka terhadap rencana studi Anda." },
  { category: "StudyProgramConsultation", question: "Bagaimana cara melakukan riset pribadi untuk menentukan pilihan STT?", answer: "Lakukan riset pribadi Anda dengan cara:\n• Bertanya atau mendengarkan testimoni alumni dari STT atau program studi yang dipilih.\n• Mengikuti open house yang diselenggarakan STT tersebut.\n• Mencari informasi dari website, video Youtube, posting media sosial dan sumber-sumber lainnya mengenai seluk-beluk organisasi, kegiatan dan pengajaran dosen dari STT tersebut." },
  { category: "BachelorConsultation", question: "Saya ingin menjadi Hamba Tuhan secara full time", answer: "Bagi Anda yang lulus SMA/diploma kami menyarankan Anda memilih program Sarjana Teologi. Jika sinode gereja tempat Anda melayani nantinya tidak mengharuskan lulusan S.Th. yang melayani sebagai pendeta maka Anda juga dapat memilih program Sarjana Pendidikan Kristen." },
  { category: "BachelorConsultation", question: "Saya ingin menjadi guru agama atau guru di sekolah Kristen", answer: "Kami menyarankan Anda untuk mengambil program studi Sarjana Pendidikan Kristen (S.Pd.K.). Memang lulusan program Sarjana Teologi dari STTB bisa saja menjadi guru Agama Kristen karena mereka juga dibekali ilmu pendidikan, namun bila tujuan Anda sejak awal adalah menjadi guru maka program Sarjana Pendidikan Kristen jauh lebih tepat karena muatan ilmu-ilmu pendidikan jauh lebih banyak dalam prodi ini." },
  { category: "BachelorConsultation", question: "Saya ingin bekerja di bidang misi dan menjadi misionaris", answer: "Kami menyarankan Anda untuk berkonsultasi dengan gereja atau tempat dimana Anda akan melayani dalam misi Anda. Beberapa denominasi membutuhkan Sarjana Teologi (S.Th.) sementara ada juga yang membutuhkan lulusan Sarjana Pendidikan (S.Pd.) karena pelayanan misi lembaganya dikhususkan dalam pendidikan." },
  { category: "BachelorConsultation", question: "Apakah dengan studi S1 di seminari dapat bekerja nongereja?", answer: "Ya, baik lulusan Sarjana Teologi (S.Th.) dan Sarjana Pendidikan Kristen (S.Pd.) dapat bekerja di lingkungan nongereja atau non sekolah kristen. Kami menyarankan Anda sudah mempertimbangkan panggilan dan rencana pelayanan ke depannya sebelum memilih untuk masuk S1 di seminari." },
  { category: "MasterConsultation", question: "Saya ingin berkarir dalam hal akademik atau pendidikan", answer: "Kami menyarankan Anda untuk memilih program studi Magister Pendidikan (M.Pd.) dan membuat tesis/riset tentang metode pembelajaran di sekolah tertentu dan Anda bisa merencanakan untuk mengambil studi lanjut (Doktoral) yang berhubungan dengan pengembangan basis Anda.\n\nBila Anda ingin berkarir dalam dunia pendidikan teologi maka Anda juga dapat mengambil program studi Magister Teologi. Program magister teologi dapat menunjang karir Anda untuk mengambil doktoral dalam bidang teologi atau menjadi dosen teologi. Gelar ini juga diakui oleh pemerintah sebagai gelar akademis." },
  { category: "MasterConsultation", question: "Saya sudah memiliki gelar Master of Divinity (M.Div.), tapi saya ingin memperdalam beberapa mata kuliah teologi yang belum saya dapatkan", answer: "Magister Teologi (M.Th.) memiliki kekuatan akademik yang dibutuhkan untuk gelar vokasional seperti M.Div." },
  { category: "MasterConsultation", question: "Saya ingin menjadi Hamba Tuhan secara full time", answer: "Bagi Anda yang lulus S1 maka kami menyarankan Anda untuk memilih program studi Magister Teologi (M.Th.) Anda akan menempuh jalur matrikulasi Magister Teologi.\n\nKhusus lulusan program Sarjana Pendidikan Kristen dari STTB dapat mengambil program M.Th. tanpa mengikuti jalur matrikulasi." },
  { category: "MasterConsultation", question: "Saya ingin bekerja di lingkup gereja atau organisasi parachurch", answer: "Umumnya gereja menerima mereka yang lulus dari program studi teologi namun kami juga menyarankan Anda untuk berkonsultasi dengan gereja atau tempat dimana Anda akan melayani dalam misi Anda. Beberapa denominasi membutuhkan Sarjana/Magister Teologi (M.Th.) sementara ada juga yang menerima Magister Ministri atau Sarjana/Magister Pendidikan (M.Pd.)." },
  { category: "MasterConsultation", question: "Saya ingin mengintegrasikan iman Kristen saya dalam karir yang sedang saya jalani", answer: "Kami menyarankan Anda untuk mengambil program studi Magister Ministri Pelayanan Marketplace (M.Min. Marketplace)." },
  { category: "MasterConsultation", question: "Saya adalah aktivis gereja dan ingin diperlengkapi dalam bidang teologi untuk mengajar pemuridan jemaat/berkhotbah di mimbar", answer: "Kami menyarankan Anda mengambil program Magister Ministri Pelayanan Marketplace karena program ini tetap menekankan banyak pengajaran teologi namun memberikan banyak ilmu-ilmu praktis juga untuk melayani pemuridan di marketplace. Setelah menjadi mahasiswa Anda juga dapat memperkaya diri dengan mengambil sit in ke mata kuliah teologi di prodi magister lainnya tanpa dipungut biaya." },
  { category: "MasterConsultation", question: "Saya ingin bekerja di bidang misi dan menjadi misionaris", answer: "Kami menyarankan Anda untuk berkonsultasi dengan gereja atau tempat dimana Anda akan melayani dalam misi Anda. Beberapa denominasi membutuhkan Magister Teologi (M.Th.) sementara ada juga yang menerima Magister Ministri atau Magister Pendidikan (M.Pd.).\n\nApabila Anda ingin bermisi sebagai orang Kristen dalam kehidupan sehari-hari Anda di perkotaan maka kami menyarankan Anda mengambil program studi Magister Ministri Pelayanan Marketplace (M.Min. Marketplace)." },
  { category: "MasterConsultation", question: "Saya sudah memiliki gelar Master Teologi tetapi saya belum menyelesaikan tesis saya", answer: "Program Magister Teologi akan memperdalam pemahaman teologi Anda dan meningkatkan keterampilan penelitian Anda, yang kemungkinan akan memfasilitasi masuk ke program doktoral." },
];

export default function FAQPage() {
  const { data: faqs, loading: faqsLoading, error: faqsError, refetch } = useFAQs();
  const createMutation = useCreateFAQ();
  const updateMutation = useUpdateFAQ();
  const deleteMutation = useDeleteFAQ();

  const [localFaqs, setLocalFaqs] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (faqs) {
      // Sort by sortOrder locally to allow drag/drop or manual reorder later
      const sorted = [...faqs].sort((a, b) => a.sortOrder - b.sortOrder);
      setLocalFaqs(sorted.map(faq => ({ ...faq, _isNew: false, _isModified: false })));
    }
  }, [faqs]);

  if (faqsLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
      </div>
    );
  }

  if (faqsError) {
    return (
      <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex flex-col items-center">
        <AlertCircle className="text-red-500 mb-2" size={32} />
        <p className="text-red-700 font-medium">Gagal memuat FAQ: {faqsError}</p>
        <Button onClick={refetch} className="mt-4 bg-red-600 text-white hover:bg-red-700">Coba Lagi</Button>
      </div>
    );
  }

  const handleAddFaq = () => {
    const newFaq = {
      id: Date.now(), // temporary ID
      question: "",
      answer: "",
      sortOrder: localFaqs.length + 1,
      category: "General",
      _isNew: true,
      _isModified: true
    };
    setLocalFaqs([...localFaqs, newFaq]);
  };

  const handleChange = (id: number, field: string, value: any) => {
    setLocalFaqs(prev => prev.map(faq => {
      if (faq.id === id) {
        return { ...faq, [field]: value, _isModified: true };
      }
      return faq;
    }));
  };

  const handleDelete = async (id: number, isNew: boolean) => {
    if (isNew) {
      setLocalFaqs(prev => prev.filter(faq => faq.id !== id));
      return;
    }

    if (confirm("Apakah Anda yakin ingin menghapus FAQ ini?")) {
      await deleteMutation.mutate(id);
      refetch();
    }
  };

  const handleSeedData = async () => {
    if (!confirm("Ini akan menambahkan 20 FAQ default. Lanjutkan?")) return;
    setIsSaving(true);
    try {
      for (const item of SEED_DATA) {
        await createMutation.mutate({
          question: item.question,
          answer: item.answer,
          sortOrder: 0,
          category: item.category
        });
      }
      alert("Berhasil menambahkan data default!");
      refetch();
    } catch (e) {
      console.error(e);
      alert("Gagal menambahkan data default");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      // Find modified or new items
      const modifiedItems = localFaqs.filter(f => f._isModified);
      
      for (const item of modifiedItems) {
        if (item._isNew) {
          await createMutation.mutate({
            question: item.question,
            answer: item.answer,
            sortOrder: item.sortOrder,
            category: item.category
          });
        } else {
          await updateMutation.mutate({
            id: item.id,
            question: item.question,
            answer: item.answer,
            sortOrder: item.sortOrder,
            category: item.category
          });
        }
      }
      
      // Refresh list to get final DB state (real IDs and generated fields)
      refetch();
    } catch (err) {
      console.error("Failed to save FAQs", err);
      alert("Terjadi kesalahan saat menyimpan FAQ");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{localFaqs.length} pertanyaan</p>
        <div className="flex gap-3">
          <Button onClick={handleSeedData} variant="outline" className="h-9">
            Seed Default FAQs
          </Button>
          <Button onClick={handleAddFaq} className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9">
            <Plus size={16} className="mr-2" /> Tambah FAQ
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {localFaqs.map((faq, i) => (
          <Card key={faq.id} className={`border ${faq._isModified ? 'border-yellow-400' : 'border-gray-100'} shadow-sm`}>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="flex flex-col items-center gap-1 pt-1">
                  <GripVertical size={16} className="text-gray-300 cursor-grab" />
                  <span className="text-xs font-bold text-gray-400">#{faq.sortOrder}</span>
                </div>
                <div className="flex-1 min-w-0 space-y-3">
                  <div className="flex gap-3">
                    <Input 
                      placeholder="Pertanyaan"
                      value={faq.question} 
                      onChange={(e) => handleChange(faq.id, "question", e.target.value)}
                      className="font-semibold text-sm bg-transparent border-gray-200 focus:border-[#1e3a8a] flex-1" 
                    />
                    <select
                      value={faq.category || "General"}
                      onChange={(e) => handleChange(faq.id, "category", e.target.value)}
                      className="text-sm border flex-shrink-0 border-gray-200 rounded-md p-2 bg-white focus:outline-none focus:border-[#1e3a8a]"
                    >
                      {CATEGORY_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <Input 
                      type="number"
                      placeholder="Sort Order"
                      value={faq.sortOrder} 
                      onChange={(e) => handleChange(faq.id, "sortOrder", parseInt(e.target.value) || 0)}
                      className="w-24 text-sm bg-transparent border-gray-200 focus:border-[#1e3a8a]" 
                    />
                  </div>
                  <textarea
                    placeholder="Jawaban"
                    className="w-full min-h-[60px] p-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none resize-y"
                    value={faq.answer}
                    onChange={(e) => handleChange(faq.id, "answer", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Button onClick={() => handleDelete(faq.id, faq._isNew)} variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-[#dc2626]">
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {localFaqs.length === 0 && (
          <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            Belum ada FAQ. Klik "Tambah FAQ" untuk membuat pertanyaan baru.
          </div>
        )}
      </div>

      <div className="flex justify-end gap-3">
        <Button onClick={handleSaveAll} disabled={isSaving || !localFaqs.some(f => f._isModified)} className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 min-w-32">
          {isSaving ? <Loader2 className="animate-spin" size={16} /> : <><Save size={16} className="mr-2" /> Simpan Semua</>}
        </Button>
      </div>
    </div>
  );
}
