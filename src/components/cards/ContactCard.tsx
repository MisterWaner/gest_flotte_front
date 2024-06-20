import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";

export default function ContactCard() {
    return (
        <Card className="my-4 w-72 lg:w-1/4">
            <CardHeader>
                <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <p className="text-sm flex items-center gap-2">
                    <MapPin className="" />{" "}
                    <address className="grid grid-rows-2">
                        <span>123 rue de la Paix</span>
                        <span>75001 Paris</span>
                    </address>
                </p>
                <p className="text-sm flex items-center gap-2">
                    <Phone className="" />{" "}
                    <a href="tel:+331234568789">+33 (0)1 23 45 67 89</a>
                </p>
            </CardContent>
        </Card>
    );
}
