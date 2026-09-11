const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 bg-amber-600 min-h-[200px] w-[400px] rounded-2xl p-4">
      <div className="p-2 flex items-center justify-between">
        <h3 className="bg-amber-800 p-2 px-5 rounded-lg font-bold ">
          {data.category}
        </h3>
        <h4 className="mr-3 font-medium text-sm">{data.date}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-5">{data.title}</h2>
      <p className="mt-3 text-sm">{data.description}</p>
      <button className="bg-blue-400 text-white p-2 px-4">Failed</button>
    </div>
  );
}

export default FailedTask
