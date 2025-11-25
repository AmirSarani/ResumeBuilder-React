const CreatedResume = ({ filename, updatedLabel, updatedDate }) => {
  return (
    <div className="grid grid-cols-2 sm:flex flex-wrap gap-4 ">
      <button className="added-resume relative w-[500px] sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-pen-line size-7 group-hover:scale-105 transition-all text-[#9333ea]"
          aria-hidden="true"
        >
          <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path>
          <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
          <path d="M8 18h1"></path>
        </svg>

        {/* filename */}
        <p className="text-sm group-hover:scale-105 transition-all px-2 text-center text-[#9333ea]">
          {filename}
        </p>

        {/* updated info */}
        <p className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center">
          <span>{updatedLabel} </span>
          <span>{updatedDate}</span>
        </p>
      </button>
    </div>
  );
};

export default CreatedResume;
