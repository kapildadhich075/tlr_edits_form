export default function TopNav() {
  return (
    <div className="flex items-center justify-between bg-slate-500 text-black px-6 py-4 border-b">
      <div className="flex space-x-4">
        <span className="py-2 px-4 rounded bg-gray hover:bg-orange-300">
          All Current
        </span>
        <span className="py-2 px-4 rounded hover:bg-orange-300">
          Not Started
        </span>
        <span className="py-2 px-4 rounded hover:bg-orange-300">Editing</span>
        <span className="py-2 px-4 rounded hover:bg-orange-300">Revising</span>
        <span className="py-2 px-4 rounded hover:bg-orange-300">Draft</span>
        <span className="py-2 px-4 rounded hover:bg-orange-300">Final</span>
        <span className="py-2 px-4 rounded hover:bg-orange-300">Completed</span>
      </div>
    </div>
  );
}
