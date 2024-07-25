import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 border-r-2 border-gray bg-slate text-white flex flex-col  ">
      {/* <div className=""></div> */}
      <nav className=" p-4 space-y-4 ">
        <Link href="#" className="block py-2 px-4 rounded hover:bg-orange-300">
          Orders
        </Link>
        <Link href="#" className="block py-2 px-4 rounded hover:bg-orange-300">
          Edit Credits
        </Link>
        <Link href="#" className="block py-2 px-4 rounded hover:bg-orange-300">
          Channel Management
        </Link>
        <Link href="#" className="block py-2 px-4 rounded hover:bg-orange-300">
          Team Chat
        </Link>
        <Link href="#" className="block py-2 px-4 rounded hover:bg-orange-300">
          Collaborators
        </Link>
        <Link href="#" className="block py-2 px-4 rounded hover:bg-orange-300">
          Support
        </Link>
      </nav>

      <div className="p-4 mt-40">
        <div className="flex items-center mb-4 ">
          <span className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            D
          </span>
          <div className="ml-2">
            <p className="text-sm">Default</p>
            <p className="text-xs text-gray-400">0 credits</p>
          </div>
        </div>
        <button className="bg-transparent border border-red-500 text-red-500 py-2 px-4 rounded w-full">
          Start New Order
        </button>
        <div className="flex items-center mb-4 py-4 mt-4 pt-4 border-t ">
          <span className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            A
          </span>
          <div className="ml-2">
            <p className="text-sm">UserNAME</p>
            <p className="text-xs text-gray-400">Client</p>
          </div>
        </div>
      </div>
    </div>
  );
}
