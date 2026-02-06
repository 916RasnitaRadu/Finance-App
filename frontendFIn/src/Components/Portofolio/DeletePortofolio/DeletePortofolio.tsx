import type { SyntheticEvent } from "react";

interface Props {
    onPortofolioDelete: (e: SyntheticEvent) => void;
    portofolioValue: string;
} 

const DeletePortofolio = ({
    onPortofolioDelete,
    portofolioValue
}: Props) => {
  return (
    <div>
        <form onSubmit={onPortofolioDelete}>
            <input hidden={true} value={portofolioValue} />
            <button className="block w-full py-3 text-pink duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
            type="submit">X</button>
        </form>
    </div>
  )
}

export default DeletePortofolio