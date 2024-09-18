const SendMoney = () => {
  return (
    <div className="h-screen bg-gray-100 rounded-md flex justify-center items-center">
      <div className="border w-96 shadow-lg bg-white">
        <div className="pt-8 mb-8">
          <h1 className="font-bold text-3xl text-center">Send Money</h1>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center bg-green-500 rounded-full text-white">
              <span className="text-lg">A</span>
            </div>
            <div className="font-semibold text-xl">Friend's Name</div>
          </div>
          <label for="amount" className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Amount (in Rs)
          </label>
          <input
            className="w-full border border-slate-200 p-2 rounded-md"
            type="text"
            placeholder="Enter amount"
            id="amount"
          />
          <button className="mt-2 py-3 w-full rounded-md font-medium bg-green-500 text-sm text-white">
            Initial Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
