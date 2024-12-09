import { Badge } from "@/components/ui/badge";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-4">
            <div className="size-28 animate-wiggle ">
                <span className="text-6xl">👋🏻</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <span className="font-bold">Hey, I am</span>
                <h1 className="text-4xl font-bold">Enrique Vierne</h1>
                <p>Full Stack Web Developer @biometil</p>
            </div>
            <ul className="max-w-96 w-11/12 flex gap-1 flex-wrap justify-center">
                <Badge className="p-2">
                    Next.JS | VueJS | Prisma | TailwindCSS | supabase |
                    Vitepress
                </Badge>
            </ul>
            <ul className="flex gap-4 justify-center">
                <Instagram />
                <Linkedin />
                <Github />
            </ul>
        </div>
    );
}
