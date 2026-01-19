import { SquarePen, Trash } from "lucide-react";
const CardNote = () => {
  return (
    <div className="card bg-base-300 w-full">
      <div className="card-body">
        <h2 className="card-title text-accent font-bold lg:text-2xl">
          Card Title
        </h2>
        <p className="text-amber-50">
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="flex justify-between items-center mt-6">
          <time dateTime="">12 marzo de 2026</time>
          <div className="flex gap-4">
            <SquarePen className="text-blue-400 cursor-pointer"></SquarePen>
            <Trash className="text-red-400 cursor-pointer"></Trash>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNote;
