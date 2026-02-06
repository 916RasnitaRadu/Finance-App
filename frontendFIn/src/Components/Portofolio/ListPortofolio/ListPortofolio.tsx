import type { SyntheticEvent } from "react";
import CardPortofolio from "../CardPortofolio/CardPortofolio";

interface Props {
    portofolioValues: string[];
    onPortofolioDelete: (e: SyntheticEvent) => void;
}

const ListPortofolio = ({
    portofolioValues, 
    onPortofolioDelete
}: Props) => {
  return (
    <section id="portofolio">
        <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
            My Portofolio
        </h2>
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
            <>
                {portofolioValues.length > 0 ? (
                    portofolioValues.map(value => {
                        return (
                            <CardPortofolio
                                portofolioValue={value}
                                onPortofolioDelete={onPortofolioDelete}
                            />
                        );
                    })
                ) : (
                    <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                        Your portofolio is empty..
                    </h3>
                )}
            </>
        </div>
    </section>
  )
}

export default ListPortofolio