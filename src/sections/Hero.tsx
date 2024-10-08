import Image from "next/image";
import ArrowDown from "../assets/icons/ArrowDown.svg";
import grain from "../assets/images/grain.jpg";
import Star from "../assets/icons/Star.svg";
import Sparkle from "../assets/icons/Sparkle.svg";
import profileimg from "../assets/images/profileimg.jpg";
import { HeroOrbit } from "../components/HeroOrbit";
import Link from "next/link";


export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grain.src})`}}></div>
      <div className="size-[680px] hero-ring"></div>
      <div className="size-[880px] hero-ring"></div>
      <div className="size-[1080px] hero-ring"></div>
      <div className="size-[1280px] hero-ring"></div>
      <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s"shouldSpin spinDuration="3s" >
      <Sparkle className="size-8 text-emerald-300/20"/>
      </HeroOrbit> 
      <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s" >
      <Sparkle className="size-5 text-emerald-300/20"/>
      </HeroOrbit> 
      <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s" >
      <div className="size-2 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
      <Sparkle className="size-10 text-emerald-300/20"/>
      </HeroOrbit> 
      <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
      <Star className="size-12 text-emerald-300"/>
      </HeroOrbit>  
      <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s" >
      <Star className="size-8 text-emerald-300"/>
      </HeroOrbit>  
      <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s" >
      <div className="size-2 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={700} rotation={-18} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
      <Sparkle className="size-16 text-emerald-300/20"/>
      </HeroOrbit> 
      <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="3s">
      <Sparkle className="size-14 text-emerald-300/20"/>
      </HeroOrbit> 
      <HeroOrbit size={720} rotation={70} shouldOrbit orbitDuration="48s" >
      <div className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="3s">
      <Sparkle className="size-5 text-emerald-300/20"/>
      </HeroOrbit> 
      <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="52s" shouldSpin spinDuration="6s">
      <Star className="size-28 text-emerald-300"/>
      </HeroOrbit>   
      </div>
        <div className="container">
          <div className="flex flex-col gap-0 items-center">
            <div className="custom-shadow rounded-full">
        <Image src={profileimg} className="size-[100px] rounded-full border-2 border-emerald-600" alt="Person peeking from behind laptop" />
            </div>
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg" >
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0  rounded-full animate-ping-large"></div>
          </div>
          <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Hello I&apos;m Zoya Afzal!</h1>
         <h2 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Web Developer & Designer</h2>
        <p className="mt-4 text-center textt-white/60 md:text-lg">
        I&apos;m skilled front-end developer based in Pakistan, with a passion of building responsive, user-friendly websites and applications.
        I excel at transforming intricate concepts into simple, effective solutions that fulfill user needs and result in enduring products.
        </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link href="#projects"
          className="inline-flex cursor-pointer items-center gap-2 border border-white/15 px-6 h-12 rounded" >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4"/>
          </Link>
          <Link href="#contact" className="inline-flex cursor-pointer items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </Link>
        </div>
     </div>
        
    </div>
  )
}
