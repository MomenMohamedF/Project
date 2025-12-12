import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

const Box = () => {
  const categories = [
    { id: "watches", label: "Watches", count: 24 },
    { id: "bags", label: "Bags", count: 18 },
    { id: "bracelets", label: "Bracelets", count: 12 },
    { id: "rings", label: "Rings", count: 18 },
  ];

  const [selected, setSelected] = React.useState<string | null>("watches");

  return (
    <div className="w-full border border-gray-200 rounded-lg p-6 bg-white dark:bg-gray-800 dark:text-white/56">
      <h3 className="text-lg font-bold text-black mb-6  dark:text-white/56">
        Category
      </h3>
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center justify-between ">
            <div className="flex items-center gap-3 ">
              <Checkbox
                id={category.id}
                checked={selected === category.id}
                onCheckedChange={(val) => {
                  const isChecked = Boolean(val);
                  setSelected(isChecked ? category.id : null);
                }}
                className="w-5 h-5"
              />
              <Label
                htmlFor={category.id}
                className="text-base text-gray-700 font-medium cursor-pointer dark:text-white/56"
              >
                {category.label}
              </Label>
            </div>
            <span className="text-sm text-gray-400 font-normal">
              ({category.count})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
