import PropertyCart from "@/components/common/property-cart";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MainPropertyCarts() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-x-2 gap-y-12 flex-wrap justify-between">
        <PropertyCart />
        <PropertyCart />
        <PropertyCart />
        <PropertyCart />
        <PropertyCart />
        <PropertyCart />
        <PropertyCart />
        <PropertyCart />
        <PropertyCart />
        <PropertyCart />
      </div>
      {open && (
        <div className="flex items-center gap-x-2 gap-y-12 flex-wrap justify-between">
          <PropertyCart />
          <PropertyCart />
          <PropertyCart />
          <PropertyCart />
          <PropertyCart />
          <PropertyCart />
          <PropertyCart />
          <PropertyCart />
          <PropertyCart />
          <PropertyCart />
        </div>
      )}
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Yana 10 ta ko'proq</Button>
      </div>
    </div>
  );
}
