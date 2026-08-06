import { Grid, HelpCircle, FileQuestion, MessageCircle, Newspaper, Video, BookOpen, Headphones } from "lucide-react";
import AppLayout from "../../components/AppLayout";
import { ROUTES } from "../../utils/routes";

const modules = [
  { icon: BookOpen, label: "مركز التدريب", desc: "دورات ودروس تفاعلية", color: "#2b8cff" },
  { icon: MessageCircle, label: "المراسلات", desc: "الرسائل والمحادثات الداخلية", color: "#f5b800" },
  { icon: Newspaper, label: "النشرة الإخبارية", desc: "آخر الأخبار والتحديثات", color: "#17d9c4" },
  { icon: Video, label: "مقاطع الفيديو", desc: "شروحات مصورة للمستخدمين", color: "#8b5cf6" },
  { icon: FileQuestion, label: "الأسئلة الشائعة", desc: "إجابات عن أكثر الأسئلة", color: "#ff3d6b" },
  { icon: HelpCircle, label: "الدعم الفني", desc: "تقديم طلب مساعدة", color: "#f5b800" },
];

export default function MorePage({ onLogout }) {
  return (
    <AppLayout onLogout={onLogout} activePath={ROUTES.MORE}>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h1 className="text-xl font-black brand-text">المزيد</h1>
        <button className="panel rounded-xl px-3 py-2 text-xs font-bold flex items-center gap-1"><Headphones size={13} /> تواصل مع الدعم</button>
      </div>

      {/* modules grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {modules.map((m, i) => (
          <div key={i} className="panel rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:border-blue-500/50">
            <div className="rounded-xl p-2.5" style={{ background: `${m.color}22` }}>
              <m.icon size={20} color={m.color} />
            </div>
            <div>
              <div className="font-bold text-white text-sm">{m.label}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">{m.desc}</div>
            </div>
            <div className="flex-1" />
            <Grid size={14} color="#4b5563" />
          </div>
        ))}
      </div>

      {/* support banner */}
      <div className="mt-4 panel rounded-2xl p-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-bold text-white text-sm">هل تحتاج إلى مساعدة؟</div>
          <div className="text-xs text-gray-400 mt-1">فريق الدعم متاح على مدار الساعة لمساعدتك</div>
        </div>
        <button className="primary-btn rounded-xl px-4 py-2 text-xs font-bold">إنشاء تذكرة دعم</button>
      </div>
    </AppLayout>
  );
}
