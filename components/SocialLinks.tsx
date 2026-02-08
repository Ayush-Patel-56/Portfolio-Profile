import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Ayush-Patel-56", color: "text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/50" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ayush-patel-15429b359", color: "text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/50" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/_ayush.patel05/", color: "text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/50" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/AyushPatel19592", color: "text-sky-500 hover:bg-sky-500/10 hover:border-sky-500/50" },
    { icon: Mail, label: "Email", href: "mailto:ayushpatel2731@gmail.com", color: "text-red-500 hover:bg-red-500/10 hover:border-red-500/50" },
];

export default function SocialLinks() {
    return (
        <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
            <div className="h-24 w-px bg-gradient-to-b from-transparent to-white/20 mx-auto" />
            {socialLinks.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className={`p-2 rounded-full bg-secondary/50 border border-white/5 transition-all duration-300 transform hover:scale-110 ${item.color}`}
                >
                    <item.icon className="w-5 h-5" />
                </Link>
            ))}
            <div className="h-24 w-px bg-gradient-to-t from-transparent to-white/20 mx-auto" />
        </div>
    );
}
