import { useParams } from "react-router-dom";
import MainPropertyCarts from "../home/_components/main-property-carts";

export default function Search() {
  const { region } = useParams();
  console.log(region);

  return (
    <div className="container mx-auto pb-12">
      <div className="flex my-4 gap-2">
        <div className="flex-1 h-[600px] bg-yellow-500 rounded-xl"></div>
        <div className="flex-1 h-[600px] flex flex-col gap-2">
          <div className="flex-1 bg-green-500 rounded-xl"></div>
          <div className="flex-1 bg-red-500 rounded-xl"></div>
        </div>
      </div>
      <MainPropertyCarts />
    </div>
  );
}
