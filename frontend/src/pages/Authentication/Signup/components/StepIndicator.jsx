const StepIndicator = ({ currentStep }) => {
  const isDone   = (n) => n <  currentStep;
  const isActive = (n) => n === currentStep;

  const stepNumCls = (n) => {
    if (isDone(n))   return "bg-retro-green text-white";
    if (isActive(n)) return "bg-black text-retro-yellow";
    return "bg-retro-yellow text-black";
  };

  return (
    <div className="flex items-center mb-7">
      {/* Step 1 */}
      <div className="flex items-center gap-2">
        <div
          className={`w-7 h-7 border-2 border-black flex items-center justify-center
                      text-[12px] font-bold flex-shrink-0 transition-colors duration-200
                      ${stepNumCls(1)}`}
        >
          {isDone(1) ? "✓" : "1"}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-black whitespace-nowrap">
          Account Info
        </span>
      </div>

      {/* Connector */}
      <div className="flex-1 h-0.5 bg-black mx-2 min-w-[20px]" />

      {/* Step 2 */}
      <div className="flex items-center gap-2">
        <div
          className={`w-7 h-7 border-2 border-black flex items-center justify-center
                      text-[12px] font-bold flex-shrink-0 transition-colors duration-200
                      ${stepNumCls(2)}`}
        >
          {isDone(2) ? "✓" : "2"}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-black whitespace-nowrap">
          Campus Details
        </span>
      </div>
    </div>
  );
};

export default StepIndicator;
