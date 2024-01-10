import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className="px-4 space-y-5 py-16">
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <div className="rounded-md relative flex  items-center shadow-sm">
          <input
            id="name"
            type="email"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="price"
          className="mb-1 text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm pointer-events-none">$</span>
          </div>
          <input
            id="price"
            type="text"
            className="appearance-none pl-7 w-full px-3 py-2.5 border border-gray-300 rounded-md shaodw-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-3 flex items-center">
            <span className="text-gray-500 pointer-events-none">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label
          className="mb-1 text-sm font-medium text-gray-700"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 resize-none"
          id="description"
          rows={4}
        />
      </div>
      <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border-transparent rounded-md shadow-sm font-medium text-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Go live
      </button>
    </div>
  );
};

export default Create;