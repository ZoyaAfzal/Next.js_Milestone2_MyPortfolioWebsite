import { twMerge } from "tailwind-merge";
import grain from "../assets/images/grain.jpg";
import { ComponentPropsWithoutRef } from "react";

export const Card = ({ className, children, ...other }: ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={twMerge("bg-gray-800 rounded-3xl relative z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none", className)} {...other}>
            <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grain.src})`}}></div>
            {children}
        </div>
    )
}