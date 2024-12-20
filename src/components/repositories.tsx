function UnderConstruction() {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-[2rem] md:text-[4rem] font-extrabold tracking-wide">
            Page Under Construction
          </h1>
          <p className="text-lg md:text-xl text-gray-500">
            I am working on something amazing. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}

export default UnderConstruction;
