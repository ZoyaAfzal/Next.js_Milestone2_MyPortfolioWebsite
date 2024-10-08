
import ArrowUpIcon from "../assets/icons/ArrowUpIcon.svg";


const footerLinks = [
    {
        title: 'LinkedIn',
        href: "https://www.linkedin.com/in/zoya-afzal-5b2bb823a/"
    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/zoeeezoeeee/'
    },
    {
        title: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=100000442058187'
    },
    {
        title: 'Github',
        href: 'https://github.com/ZoyaAfzal'
    },
]



export const Footer = () => {
    return (
        <footer className="relative overflow-x-clip">
            <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10">
            </div>
         <div className="container mx-auto">
         <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
            <div className="text-white/40">©copy; 2024. All rights reserved.</div>
            <nav className="flex flex-col md:flex-row items-center gap-8 cursor-pointer">
                {footerLinks.map((link) => (
                    <a
                    href={link.href}
                    key={link.title} 
                    target="_blank"
                    rel="noopener noreferrer"
                     className="inline-flex cursor-pointer items-center gap-1.5 "
                    >
                    <span className="font-semibold">{link.title}</span>
                    <ArrowUpIcon className="w-4 h-4"/> 
                  </a>  
                ))}
            </nav>
                </div>
         </div>
        </footer>
    )
}