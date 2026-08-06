import { Database, LifeBuoy, Puzzle, Workflow } from "lucide-react";
import AppLayout from "../../components/AppLayout";
import { ROUTES } from "../../utils/routes";

const modules = [
  {
    icon: Workflow,
    title: "سير العمل",
    description: "إدارة الموافقات والعمليات الداخلية من مكان واحد.",
  },
  {
    icon: Puzzle,
    title: "التكاملات",
    description: "ربط النظام بالخدمات والأدوات التي يستخدمها فريقك.",
  },
  {
    icon: Database,
    title: "النسخ الاحتياطي",
    description: "مراجعة خيارات حفظ البيانات واستعادتها.",
  },
  {
    icon: LifeBuoy,
    title: "الدعم والمساعدة",
    description: "الوصول إلى المساعدة وموارد استخدام النظام.",
  },
];

export default function MorePage({ onLogout }) {
  return (
    <AppLayout onLogout={onLogout} activePath={ROUTES.MORE}>
      <div className="mb-6">
        <h1 className="text-xl font-black brand-text">المزيد</h1>
        <p className="mt-2 text-sm text-gray-400">أدوات وخدمات إضافية لنظام NOBO ERP.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {modules.map(({ icon: Icon, title, description }) => (
          <div key={title} className="panel rounded-2xl p-5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
              <Icon size={22} />
            </div>
            <h2 className="font-bold text-white">{title}</h2>
            <p className="mt-2 text-xs leading-6 text-gray-400">{description}</p>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
