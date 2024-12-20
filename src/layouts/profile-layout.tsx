import Header from "@/components/common/header/header";
import ProfileSidebar from "@/pages/profile/_components/profile-sidebar";

export default function ProfileLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex-1 flex h-full">
        <ProfileSidebar />
        <main className="flex-1 h-full bg-blue-500 overflow-y-auto"></main>
      </div>
    </div>
  );
}
