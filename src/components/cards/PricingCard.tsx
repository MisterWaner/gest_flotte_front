import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingCard() {
    return (
        <Card className="w-96">
            <CardHeader>
                <CardTitle>Basique</CardTitle>
                <CardDescription>Pour les TPE</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex items-center space-x-1">
                    
                </div>
            </CardContent>
            <CardFooter>
                <Button>Get started</Button>
            </CardFooter>
        </Card>
    );
}
