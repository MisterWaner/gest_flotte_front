import {z} from "zod";

const contactFormSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}).trim(),
    firstName: z.string().min(1, {message: "First name is required"}).trim(),
    email: z.string().email({message: "Invalid email"}).trim().toLowerCase(),
    message: z.string().min(1, {message: "Message is required"}),
});

export default contactFormSchema;
