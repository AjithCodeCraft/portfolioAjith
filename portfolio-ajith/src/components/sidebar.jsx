"use client";
import { House, Mailbox, BriefcaseBusiness, University, FolderArchive, User } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="bg-black text-white w-52 transition-all duration-300 relative h-screen p-6"> {/* Added padding */}
            <ul className="mt-2"> {/* Optional: Adjust margin if needed */}
                {[
                    { icon: <House />, label: 'Home', href: '/' },
                    { icon: <User />, label: 'Profile', href: '/skills' },
                    { icon: <BriefcaseBusiness />, label: 'Skill', href: '/skills' },
                    { icon: <University />, label: 'Education', href: '/education' },
                    { icon: <FolderArchive />, label: 'Projects', href: '/projects' },
                    { icon: <Mailbox />, label: 'Contact me', href: '/contact' },
                ].map((item) => (
                    <li key={item.label} className="flex items-center p-4 cursor-pointer hover:bg-gray-700 transition-colors">
                        <a href={item.href} className="flex items-center w-full">
                            {item.icon}
                            <span className="ml-3">{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
