import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function Slide({ className, ...props }: SliderProps) {
  return (
    <div className="w-full border border-gray-200 rounded-lg p-6 bg-white dark:bg-gray-800 dark:text-white/56 ">
      <h1 className="font-[Playfair Display] font-semibold  text-lg mb-6">
        Price Range
      </h1>
      <div className="flex flex-col items-center">
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn("w-full", className)}
          {...props}
        />
        <div className="w-full flex justify-between mt-4">
          <h3 className="font-normal text-sm dark:text-white/56 text-[#4B5563]">
            $0
          </h3>
          <h3 className="font-normal text-sm dark:text-white/56 text-[#4B5563]">
            $2000
          </h3>
        </div>
        <div className="mt-2 font-normal text-sm">$0 - $1000</div>
      </div>
    </div>
  );
}
export default Slide;
