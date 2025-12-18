export const Profilebar = () => {
  return (
    <>
      <div className="border p-2 bg-[#021431]">
        <div className="flex justify-end max-w-11/12">
          <a className="text-slate-300 text-sm mr-5" href="#">
            Sign in / Guest
          </a>
          <a className="text-slate-300 text-sm" href="#">
            Create Account
          </a>
        </div>
      </div>
    </>
  );
};
