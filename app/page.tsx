import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-4">
            <div className="size-28 animate-wiggle ">
                <span className="text-6xl">👋🏻</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <span className="font-bold">Hey, I am</span>
                <h1 className="text-4xl font-bold">Enrique Vierne</h1>
                <p>
                    Full Stack Web Developer{" "}
                    <Link
                        href={
                            "https://www.linkedin.com/company/biometil-group/about/"
                        }>
                        @biometil
                    </Link>
                </p>
            </div>
            <ul className="max-w-96 w-11/12 flex gap-1 flex-wrap justify-center">
                <Badge className="p-2">
                    VueJS | Next.js | TailwindCSS | Prisma | Supabase |
                    Vitepress | Git
                </Badge>
            </ul>
            <ul className="flex gap-4 justify-center">
                <Link
                    target="_blank"
                    href={"https://www.linkedin.com/in/enriquevierne"}>
                    <Linkedin />
                </Link>
                <Link target="_blank" href={"https://wa.me/5547991171512"}>
                    <MessageCircle />
                </Link>
                <Link target="_blank" href={"https://github.com/enriquevierne"}>
                    <Github />
                </Link>
            </ul>
            <a
                href="https://i-am.enriquevierne.dev/Curriculum.pdf"
                download="Enrique Vierne Full Stack Web Developer.pdf"
                className="p-2 border rounded-full text-neutral-300 hover:text-neutral-500 hover:border-neutral-500 ease-in-out duration-300">
                Clique aqui para baixar meu currículo.
            </a>
        </div>
    );
}
