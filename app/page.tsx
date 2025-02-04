import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface Project {
    title: string;
    desc: string;
    deploy: string;
    repo: string;
}

export default function Home() {
    const projectList: Project[] = [
        {
            title: "I-am",
            desc: "My personal portfolio",
            deploy: "https://i-am.enriquevierne.dev/",
            repo: "https://github.com/enriquevierne/i-am",
        },
        {
            title: "Siiiiiiiiiiiiuuuu",
            desc: " How much does CR7 earn from Al Nassr?",
            deploy: "https://cr7.enriquevierne.dev/",
            repo: "https://github.com/enriquevierne/Siiiiiiiiiiiiuuuu",
        },
        {
            title: "Math Functions",
            desc: "This site has many maths functions and utilities for our days",
            deploy: "https://math.enriquevierne.dev/",
            repo: "https://github.com/enriquevierne/math-apps",
        },
    ];
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
                    href="https://i-am.enriquevierne.dev/Curriculum2025.pdf"
                    download="Currículo de Enrique.pdf"
                    className="p-2 border rounded-full text-neutral-300 hover:text-neutral-500 hover:border-neutral-500 transition ease-in-out duration-300"
                    aria-label="Baixar currículo em português">
                    pt-BR
                </a>
                <a
                    href="https://i-am.enriquevierne.dev/Curriculum2025en.pdf"
                    download="Enrique's curriculum.pdf"
                    className="p-2 border rounded-full text-neutral-300 hover:text-neutral-500 hover:border-neutral-500 transition ease-in-out duration-300"
                    aria-label="Download curriculum in English">
                    en-US
                </a>
            </div>
            <div>
                <p className="text-xl font-bold py-6 w-full text-center">
                    My public projects
                </p>
                <ul className="w-full grid grid-cols-2 gap-6">
                    {projectList.map((project) => {
                        return (
                            <Card
                                key={project.deploy}
                                className="w-[350px] col-span-2 sm:col-span-1">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>
                                        {project.desc}
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter className="flex justify-between gap-2">
                                    <Button className="w-full">
                                        <Link
                                            href={project.deploy}
                                            target="_blank">
                                            {" "}
                                            visit
                                        </Link>
                                    </Button>
                                    <Button
                                        className="w-full"
                                        variant={"ghost"}>
                                        <Link
                                            href={project.repo}
                                            target="_blank">
                                            {" "}
                                            repo
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
