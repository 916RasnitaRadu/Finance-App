import type { SyntheticEvent } from "react";
import DeletePortofolio from "../DeletePortofolio/DeletePortofolio";
import { Link } from "react-router-dom";

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
        <Link to={`/company/${portofolioValue}`} className="pt-6 text-xl font-bold">{portofolioValue}</Link>
        <DeletePortofolio 
            onPortofolioDelete={onPortofolioDelete} 
            portofolioValue={portofolioValue} 
        />
    </div>
  )
}

export default CardPortofolio