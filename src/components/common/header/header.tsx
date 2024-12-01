import { Search, ShoppingCart, House, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { regions } from "./items";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { KeyboardEvent, MouseEvent, useRef } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { auth } = useSelector((state: RootState) => state.auth);
  const searchRef = useRef<HTMLInputElement>(null);

  const enterSearch = (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>
  ) => {
    if (!searchRef?.current?.value) return;
    if (("key" in event && event.key === "Enter") || event.type === "click") {
      navigate("/search/region", {
        state: { query: searchRef?.current?.value },
      });
    }
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center gap-8 mb-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#0066ff] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">
                <House />
              </span>
            </div>
            <span className="text-[#0066ff] font-bold text-xl">
              Ijaraga xonadon
            </span>
          </Link>
          <div className="flex-1 relative">
            <Input
              ref={searchRef}
              onKeyDown={enterSearch}
              type="search"
              placeholder="Qayirdan xonadon qidirayapsiz"
              className="w-full bg-gray-50 pl-4 pr-10"
            />
            <button
              onClick={enterSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 p-0"
            >
              <Search />
            </button>
          </div>
          <nav className="flex items-center gap-6">
            {auth?.phone && (
              <>
                <Button
                  onClick={() => navigate("/profile")}
                  variant="ghost"
                  className="flex items-center gap-2"
                >
                  <User />
                  <span className="text-sm">Shavqiddin</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 relative"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span className="text-xs">Saqlangan</span>
                  <span className="absolute -top-1 -right-1 bg-[#0066ff] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    3
                  </span>
                </Button>
              </>
            )}

            {!auth?.phone && (
              <Button
                onClick={() => navigate("/auth")}
                variant="ghost"
                className="flex items-center gap-2 font-bold border"
              >
                <User />
                <span className="text-sm">Tizimga kirish</span>
              </Button>
            )}
          </nav>
        </div>
        <ul className="flex items-center justify-between mb-2 select-none">
          {regions.map((region) => {
            return (
              <li
                key={region}
                className="hover:border-black border-b border-white capitalize transition-all ease-linear"
              >
                <Link to={`/search/${region}`}>{region}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
