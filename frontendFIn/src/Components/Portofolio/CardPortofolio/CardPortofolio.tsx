import type { SyntheticEvent } from "react";
import DeletePortofolio from "../DeletePortofolio/DeletePortofolio";

interface Props {
    portofolioValue: string;
    onPortofolioDelete: (e: SyntheticEvent) => void;
}

const CardPortofolio = ({
    portofolioValue,
    onPortofolioDelete
}: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
        <p className="pt-6 text-xl font-bold">{portofolioValue}</p>
        <DeletePortofolio 
            onPortofolioDelete={onPortofolioDelete} 
            portofolioValue={portofolioValue} 
        />
    </div>
  )
}

export default CardPortofolio