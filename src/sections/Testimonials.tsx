import { SectionHeader } from "@/components/SectionHeader";
import memojiavatar1 from "../assets/images/memojiavatar1.png";
import memojiavatar2 from "../assets/images/memojiavatar2.png";
import memojiavatar3 from "../assets/images/memojiavatar3.png";
import memojiavatar4 from "../assets/images/memojiavatar4.png";
import memojiavatar5 from "../assets/images/memojiavatar5.png";
import { Card } from "@/components/Card";
import Image from "next/image";
import { Fragment } from "react";


const testimonials = [
    {
        name: "Alex Turner",
        position: "Peer from Web Development Course",
        text: "Zoya is incredibly passionate about web development and has shown excellent problem-solving abilities during our group projects.",
        image: memojiavatar1
    },
    {
        name: "Olivia Green",
        position: "Instructor, Programming",
        text: "Her work ethic and dedication are commendable. She consistently goes above and beyond to ensure the project’s success. Her attention to detail and design sense make her a valuable team member. She always finds innovative solutions to challenging problems",
        image: memojiavatar2
    },
    {
        name: "Daniel White",
        position: "Open Source Project Collaborator",
        text: "Zoya's ability to create seemless user experiences is unmatched. Our website has seen a significantincrease in conversions since launching the new design. We couldn't be happier.",
        image: memojiavatar3
    },
    {
        name: "Emily Carter",
        position: "Fellow Developer",
        text: "Zoya is a true frontend wizard. She tooks our complexed projects and transformed it into an intuitive and engaging user interface. Zoya is a quick learner with an impressive grasp of modern web technologies.",
        image: memojiavatar4
    },
    {
        name: "Michael Brown",
        position: "Mentor, Web Development",
        text: "Zoya’s creativity and problem-solving mindset are truly exceptional. Her ability to break down complex challenges and deliver high-quality solutions is inspiring. I look forward to seeing the incredible projects she’ll create in the future.",
        image: memojiavatar5
    }
]

export const TestimonialsSections = () => {
    return (
        <div className="py-16 lg:py-24">
            <div className="container">
          <SectionHeader eyebrow="Happy Clients" title="What People Say About Me" description="Don&apos;t take my words for it. See what others have to say about my work."/>
           <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
           <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]">
            {[...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>         
            {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6  md:p-8 hover:-rotate-3 transition duration-300">
                <div className="flex gap-4 items-center">
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <Image src={testimonial.image} alt={testimonial.name} className="max-h-full"/>
                </div>
                <div className="">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm md:text-base text-white/40">{testimonial.position}</div>
                </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm">{testimonial.text}</p>
                </Card>
            ))}
            </Fragment>
    ))]}
            </div>
            </div>
            </div>
            </div>

        
    )
}