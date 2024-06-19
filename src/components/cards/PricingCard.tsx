import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, BadgeX } from "lucide-react";

export default function PricingCard({
    title,
    description,
    price,
    features,
    undisponibleFeatures,
}: {
    title: string;
    description: string;
    price: string;
    features: string[];
    undisponibleFeatures?: string[];
}) {
    return (
        <Card className="my-4 w-72 flex flex-col justify-between">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex items-baseline">
                    <span className="text-5xl font-bold">{price} €</span>
                    <span className="text-lg font-bold">/month</span>
                </div>
                <Separator />
                <ul className="space-y-1">
                    {features.map((feature, index) => (
                        <li
                            className="text-sm flex w-full justify-between items-center"
                            key={index}
                        >
                            {feature}
                            <BadgeCheck size={16} color="white" fill="green" />
                        </li>
                    ))}
                </ul>
                {undisponibleFeatures && undisponibleFeatures.length > 0 && (
                    <Separator />
                )}
                <ul className="space-y-1">
                    {undisponibleFeatures?.map((feature, index) => (
                        <li
                            className="text-sm flex w-full justify-between items-center"
                            key={index}
                        >
                            {feature}
                            <BadgeX size={16} fill="red" color="white" />
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="place-content-end">
                <Button className="w-full">Commencer</Button>
            </CardFooter>
        </Card>
    );
}
