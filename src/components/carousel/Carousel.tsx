import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Bus from "@/assets/images/bus.png";
import Car from "@/assets/images/car.png";
import Truck from "@/assets/images/truck.png";

export default function SolutionCarousel() {
    
    return (
        <Carousel orientation="horizontal" opts={{ slidesToScroll: 1, loop: true }} plugins={[
            Autoplay({ delay: 4000, playOnInit: true }),
        ]} >
            <CarouselContent>
                <CarouselItem>
                    <div className="w-full h-96 flex justify-center items-center bg-gradient-to-r from-chilean-fire-100 to-chilean-fire-400 rounded-md">
                        <img
                            src={Bus}
                            alt="Bus"
                            className="h-auto object-contain"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="w-full h-96 flex justify-center items-center bg-gradient-to-r from-chilean-fire-400 to-chilean-fire-100 rounded-md">
                        <img
                            src={Truck}
                            alt="Bus"
                            className="h-auto object-contain"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="w-full h-96 flex justify-center items-center bg-gradient-to-r from-chilean-fire-100 to-chilean-fire-400 rounded-md">
                        <img
                            src={Car}
                            alt="Bus"
                            className="h-auto object-contain"
                        />
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
