import { Badge } from "@/components/ui/badge";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <span>Hey, I am</span>
            <h1 className="text-4xl font-bold">Enrique Vierne</h1>
            <p>Full Stack Web Developer</p>
            <ul className="max-w-80 w-11/12">
                <Badge>Next.JS</Badge>
                <Badge>VueJS</Badge>
                <Badge>Prisma</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>supabase</Badge>
                <Badge>Vitepress</Badge>
            </ul>
        </div>
    );
}
