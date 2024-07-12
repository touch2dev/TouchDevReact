import useThemeStore from "@/lib/store/themeStore";

const PrintUpwardArea = () => {
  const { theme } = useThemeStore((state: any) => ({ theme: state.theme }));
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-400">
      <div>
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="text-lg font-bold">Print</div>
            <div className="ml-2">
              <button className="bg-[#3b6c79] text-white rounded-lg p-1">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintUpwardArea;

{/* {content.map(
          (item: any, index: any) =>
            index !== 0 && (
              <div
                key={index}
                className="flex justify-between items-center p-2 border-b border-gray-400"
              >
                <div>{item}</div>
                <button className="bg-[#3b6c79] text-white rounded-lg p-1">
                  Select
                </button>
              </div>
            )
        )} */}
