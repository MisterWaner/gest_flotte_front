import { Button } from "@/components/ui/button";
import Header from "@/components/navigation/Header";
import Wrapper from "@/components/Wrapper";
import AnimatedList from "@/components/animated/animatedList";
import PricingCard from "@/components/cards/PricingCard";
import Smartphone from "@/assets/images/smartphone2.png";
import Dashboard from "@/assets/images/dashboard.svg";

export default function Home() {
    return (
        <div>
            <Header />
            <Wrapper>
                <section
                    id="home"
                    className="bg-chilean-fire-500 h-screen flex justify-center items-center"
                >
                    <div className="max-w-7xl h-full mx-auto py-10 px-4 flex max-lg:flex-col justify-center items-center lg:justify-around">
                        <div>
                            <img src={Smartphone} alt="" />
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Gest-Flotte</h1>
                            <p className="text-2xl mt-4 font-semibold">
                                <span className="font-bold text-white text-3xl">
                                    LA
                                </span>{" "}
                                solution pour une gestion optimisée de votre
                                flotte de matériel.
                            </p>
                            <div className="mt-4 flex space-x-2 justify-center">
                                <Button variant="secondary">
                                    <a href="#solution">Késako ?</a>
                                </Button>
                                <Button className="">Tenter l'aventure</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white" id="solution">
                    <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col justify-center items-center lg:justify-around">
                        <div className="flex flex-col items-start justify-center py-10 lg:items-center">
                            <p className="text-3xl font-bold">
                                Quel que soit votre besoin,{" "}
                                <span className="bg-chilean-fire-500 px-2 rounded-md">
                                    Gest-Flotte
                                </span>{" "}
                                vous offre la{" "}
                                <span className="underline underline-offset-4 decoration-chilean-fire-500">
                                    Solution
                                </span>{" "}
                                la plus performante.
                            </p>
                            <AnimatedList />
                        </div>{" "}
                        <div className="self-start text-xl flex max-lg:flex-col justify-center items-center lg:justify-between">
                            <div>
                                <p>
                                    Grâce à son dashboard, Gest-Flotte vous
                                    permet de :
                                </p>
                                <ul className="mt-4 list-disc list-inside font-semibold">
                                    <li>
                                        Consulter les informations de votre
                                        flotte.
                                    </li>
                                    <li>
                                        Gérer et modifier l'état de votre
                                        flotte.
                                    </li>
                                    <li>
                                        Renouveler facilement les différents
                                        contrats et abonnements liés à votre
                                        flotte.
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    Recevez des notifications à l'approche des
                                    échéances, recevez des rappels de
                                    maintenance et des alertes de facturation.
                                </p>
                            </div>
                            <div className="max-lg:mt-10">
                                <img src={Dashboard} alt="" />
                            </div>
                        </div>
                        <div className="mt-4 w-full">
                            <Button variant="default">Tenter l’aventure</Button>
                        </div>
                    </div>
                </section>
                <section className="bg-chilean-fire-500" id="pricing">
                    <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col justify-center items-center lg:justify-around">
                        <PricingCard />
                    </div>
                </section>
            </Wrapper>
        </div>
    );
}
