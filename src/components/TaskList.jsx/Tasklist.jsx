const Tasklist = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto"
    >
      <div className="flex-shrink-0 bg-amber-600 w-[400px] rounded-2xl p-4">
        <div className="p-2 flex items-center justify-between">
          <h3 className="bg-amber-800 p-2 px-5 rounded-lg font-bold ">High</h3>
          <h4 className="mr-3 font-medium text-sm">9 sep 2026</h4>
        </div>
        <h2 className="text-2xl font-semibold mt-5">Update the key Points</h2>
        <p className="mt-3 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum porro
          itaque, quisquam aspernatur aliquam possimus quae deserunt dolorum sed
          illum amet eveniet. Laboriosam quis tenetur amet voluptatem mollitia
          eaque praesentium?
        </p>
      </div>
    </div>
  );
}

export default Tasklist
