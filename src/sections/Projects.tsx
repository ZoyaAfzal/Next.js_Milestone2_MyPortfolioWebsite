import ecommercewebsiteimg from "../assets/images/ecommercewebsiteimg.png";
import onlinestoreimg from "../assets/images/onlinestoreimg.png";
import portfolioimg from "../assets/images/portfolioimg.png";
import CheckCircleIcon from "../assets/icons/CheckCircleIcon.svg";
import ArrowUpIcon from "../assets/icons/ArrowUpIcon.svg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
    {
    year: "2024",
    title: " Ecommerce Website created with Next.js 14, Typescript & CSS Tailwind",
    results: [
        {title: "This is high-performance E-commerce Website."},
        {title: "I have used an impressive stack of cutting-edge technologies like Next.js, React, Stripe,Typescript and Tailwind CSS."},
        {title: "I used modern tools, including Redux Toolkit, Framer Motion, React Slick, CLSX."}
],
link: "https://next-js-milestone3-ecommerce-website.vercel.app/",
image: ecommercewebsiteimg
    },
    {
        year: "2024",
        title: "Basic Ecommerce Website created with Next.js 14, Typescript & CSS Tailwind",
        results: [
            {title: "I have developed a basic-ecommerce site."},
            {title:  "I have added featured products, product details and a shopping cart."},
            {title: "I have used cutting-edge technologies like Next.js, Typescript and Tailwind CSS."},
          
    ],
    link: "https://ecommerce-website-xy27.vercel.app/",
    image: onlinestoreimg
        },
        {
            year: "2024",
            title: "Basic Portfolio Website created with Next.js 14, Typescript & CSS Tailwind",
            results: [
                {title: "I have developed a basic portfolio website."},
                {title: " I have used cutting-edge technologies like Next.js, Typescript and Tailwind CSS."},
                
        ],
        link: "https://basic-portfolio-website-kappa.vercel.app/",
        image: portfolioimg
            }
];

export const ProjectsSections = () => {
    return (
        <section id="projects" className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how i transformed concepts into engaging digital experiences"/>
                <div className="flex flex-col mt-10 md:mt-20 gap-20">
                    {portfolioProjects.map((project, projectIndex) => (
                        <Card key={project.title}
                        className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
                        style={{ top: `calc(64px + ${projectIndex * 40}px`}}>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                            <div className="lg:pb-16">
                            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                            <span>Projects</span>
                            <span>&bull;</span>
                           <span>{project.year}</span> 
                        </div>
                        <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                        <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                        <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                            {project.results.map((result) => (
                                <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                                <CheckCircleIcon className="size-5 md:size-6"/>
                                <span>
                                {result.title}
                                </span>
                            </li>
                            ))
                        }
                        </ul>
                        <a href={project.link}>
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpIcon className="size-4"/>
                        </button>
                        </a>
                        </div>
                        <div className="relative">
                        <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                        </div>
                        </div>
                 </Card>
                    ))}
                    </div>
                </div>
        </section>
    )
}