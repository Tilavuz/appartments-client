import MainComponent from "./_components/main-component";
import MainPropertyCarts from "./_components/main-property-carts";

export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <div className="mb-12">
        <MainComponent />
      </div>
      <div className="mb-24">
        <MainPropertyCarts />
      </div>
    </div>
  );
}
