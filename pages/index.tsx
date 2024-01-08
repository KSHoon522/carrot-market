export default function Home() {
  return (
    <div className="bg-slate-400 p-20 grid gap-10 lg:place-content-center lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className=" bg-white flex flex-col justify-between dark:bg-black sm:bg-red-400 md:bg-teal-400 lg:bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl dark:text-white">
          Select Item
        </span>
        <ul>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between py-1 ">
              <span className="text-gray-500 dark:text-gray-100">
                blue Chair
              </span>
              <span className="font-semibold dark:text-white">$19</span>
            </div>
          ))}
        </ul>
        {/* <ul>
          {["a", "b", "c", "", "e"].map((c, i) => (
            <li className="bg-red-500 py-2 empty:hidden" key={i}>
              {c}
            </li>
          ))}
        </ul> */}
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$38</span>
        </div>
        <button className="mt-5 dark:border dark:border-white dark:bg-red-300 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500">
          Checkout
        </button>
      </div>
      <div className=" bg-white rounded-3xl shadow-xl overflow-hidden ">
        <div className="portrait:bg-indigo-400 landscape:bg-teal-500 p-6 pb-14 xl:pb-48">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5 ">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center peer">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium ">340</span>
            </div>
            <div className="h-24 w-24 min-w-24 bg-red-400 rounded-full hover:bg-teal-500 peer-hover:bg-black transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className=" bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>←</span>
          <div className="space-x-3">
            <span>⭐ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg bg-blue-200 flex justify-center  w-8 text-xl text-gray-500 aspect-square">
                –
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center w-8 text-xl text-gray-500 aspect-square">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
        <input
          type="text"
          required
          placeholder="Username"
          className="  peer border p-1 border-gray-400 rounded-md"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-white">
          Awesome username!
        </span>
        <input type="password" required placeholder="Password" />
        <input type="submit" value="Login" className="bg-white" />
      </form> */}
      {/* <details className="select-none open:text-white open:bg-indigo-300">
        <summary className=" cursor-pointer">What is my fav. food</summary>
        <span className="selection:bg-indigo-400 selection:text-white">
          짜파게티
        </span>
      </details> */}
      {/* <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul> */}
      {/* <input
        type="file"
        className="file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400 file:transition-colors file:cursor-pointer file:hover:bg-purple-600 file:hover:border-purple-4000 file:hover:border"
      /> */}
      {/* <p className="first-letter:text-7xl first-line:hover:text-purple-400">
        lorem ipsum lalalalalala <br></br> asdfasdf
      </p> */}
    </div>
  );
}
