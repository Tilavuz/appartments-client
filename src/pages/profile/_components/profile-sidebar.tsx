import { Menu } from "lucide-react";

export default function ProfileSidebar() {
  return (
    <aside className="max-w-[320px] w-full h-full border-r flex flex-col pb-[108px]">
      <div className="w-full p-1 flex items-center justify-end">
        <button className="">
          <Menu size={28} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto bg-red-500 h-full">
        {Array.from({ length: 20 }).map((_, index) => (
          <p key={index} className="p-2 border-b">
            {index + 1}
          </p>
        ))}
      </div>
      <div className="w-full p-2 border-t">
        <div className="flex gap-4 items-center rounded-xl hover:bg-black/10 p-1 cursor-pointer transition-all">
          <div className="border w-12 h-12 rounded-xl">
            <img src="" alt="" />
          </div>
          <div>
            <p>Shavqiddin</p>
            <span>+998908827251</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
