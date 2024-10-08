'use client';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookcover from "../assets/images/bookcover.png";
import Nextjs from "../assets/icons/Nextjs.svg";
import Type from "../assets/icons/Type.svg";
import Tailwindcss from "../assets/icons/Tailwindcss.svg";
import Html5 from "../assets/icons/Html5.svg";
import Reacticon from "../assets/icons/Reacticon.svg";
import Github from "../assets/icons/Github.svg";
import mapImage from "../assets/images/mapImage.png";
import memojiavatar4 from "../assets/images/memojiavatar4.png";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Next.js",
    iconType: Nextjs,
  },
  {
    title: "TypeScript",
    iconType: Type,
  },
  {
    title: "CSS Tailwind",
    iconType: Tailwindcss,
  },
  {
    title: "HTML5",
    iconType: Html5,
  },
  {
    title: "React",
    iconType: Reacticon,
  },
  {
    title: "GitHub",
    iconType: Github,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Fitness",
    emoji: "🧎‍♀️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "70%",
    top: "45%",
  },
  {
    title: "Shopping",
    emoji: "👠👜",
    left: "5%",
    top: "65%",
  },
  {
    title: "Movies",
    emoji: "🍿",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
    const constraintRef = useRef(null);
  return (
    <section id="about">
      <div className="py-20 lg:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="Learn more about who I am, what I do and what inspires me."
          />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspectives."
                />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={bookcover} alt="Book Cover" />
                </div>
              </Card>
              <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional digital experiences."
                  className=""
                />
                <ToolboxItems
                  items={toolboxItems}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                />
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm."
                  className="px-6 py-6"
                />
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="map"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]">
                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10">
                  <Image
                    src={memojiavatar4}
                    alt="profile image"
                    className="size-20 border-emerald-600"
                    />                                
                    </div>
                    </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};