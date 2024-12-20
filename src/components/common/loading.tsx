import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black/70 flex items-center justify-center">
      <div className="animate-spin">
        <LoaderCircle size={48} color="white" />
      </div>
    </div>
  );
}
