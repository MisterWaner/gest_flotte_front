import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import ContactForm from "@/components/forms/ContactForm";

export default function ContactFormCard() {
    return (
        <Card className="my-4 w-72 lg:grow">
            <CardHeader>
                <CardTitle>Nous écrire</CardTitle>
            </CardHeader>
            <CardContent>
                <ContactForm />
            </CardContent>
        </Card>
    );
}
