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
            <ul className="max-w-lg w-11/12 flex gap-1 flex-wrap justify-center items-center text-center">
                <Badge className="p-2 px-4 sm:text-sm">
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
            <div className="flex items-center gap-2  pt-6">
                <p>My curriculum 👉🏻</p>
                <a
                    href="https://i-am.enriquevierne.dev/Curriculo.pdf"
                    download="Enrique Vierne Full Stack Web Developer en-US.pdf"
                    className="p-2 border rounded-full text-neutral-300 hover:text-neutral-500 hover:border-neutral-500 ease-in-out duration-300">
                    pt-BR
                </a>
                <a
                    href="https://i-am.enriquevierne.dev/Curriculum.pdf"
                    download="Enrique Vierne Full Stack Web Developer pt-BR.pdf"
                    className="p-2 border rounded-full text-neutral-300 hover:text-neutral-500 hover:border-neutral-500 ease-in-out duration-300">
                    en-US.
                </a>
            </div>
        </div>
    );
}
