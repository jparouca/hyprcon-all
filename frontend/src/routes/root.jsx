import { Sidebar } from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <main className="min-h-screen bg-white">
      <div className="lg:flex">
        <Sidebar className="relative hidden sm:flex" />
        <div className="flex flex-1">{children}</div>
      </div>
    </main>
  );
}
