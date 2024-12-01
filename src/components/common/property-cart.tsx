import photo from "@/assets/image.webp";
import { BookmarkPlus } from "lucide-react";

export default function PropertyCart() {
  return (
    <div className="w-[250px] cursor-pointer hover:drop-shadow-xl transition-all ease-linear hover:border-black/30 p-2 border border-white">
      <div className="w-full h-[320px] rounded-xl overflow-hidden hover:rounded-b-none transition-all ease-linear mb-3">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-all ease-linear"
          src={photo}
          alt="photo"
        />
      </div>
      <div className="p-2">
        <p className="line-clamp-2 leading-4 mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          minima placeat. Architecto tempore minima ducimus in quas aliquid
          totam asperiores.
        </p>
        <div className="flex items-center justify-between mb-4 bg-yellow-300 px-1 rounded">
          <p>6 xonali</p>
          <p>Oila uchun</p>
        </div>
        <div className="flex items-end justify-between">
          <p>6 000 000 so'm</p>
          <button className="rounded-full border p-2">
            <BookmarkPlus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
