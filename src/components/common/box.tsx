import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useNavigate, useParams } from "react-router-dom";

const Box = () => {
  const navigate = useNavigate();
  const { category: currentCategory } = useParams<{ category: string }>();

  const categories = [
    { id: "watches", label: "Watches", count: 9 },
    { id: "bags", label: "Bags", count: 12 },
    { id: "bracelets", label: "Bracelets", count: 6 },
    { id: "rings", label: "Rings", count: 9 },
  ];

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
                checked={currentCategory === category.id}
                onCheckedChange={(val) => {
                  if (val) {
                    navigate(`/shop/${category.id}`);
                  }
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
