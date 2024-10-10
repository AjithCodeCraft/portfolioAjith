// components/Home.jsx
"use client";
import { Half1Icon } from "@radix-ui/react-icons";
import Image from 'next/image';
import logo from "../../public/man.png";
import { HeroHighlight } from "./ui/hero-highlight";
import TextRotator from "./textRooter";
import { Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/framewrapper";
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

const HeroTexts = () => {
  const links = [
    { name: "GitHub", link: "", icon: <Facebook /> },
    { name: "Linkedin", link: "", icon: <Linkedin /> },
    { name: "External", link: "", icon: <ExternalLink /> },
  ];

  const [displayText, setDisplayText] = useState('Download Resume');
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const scramble = async (input) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble('Download Resume');
    setTimeout(() => {
      console.log("Submitted");
      // Logic to handle the download, e.g., redirecting to the resume file
      window.open('/path/to/your/resume.pdf', '_blank'); // Update with your resume link
    }, displayText.length * 50);
  };

  useEffect(() => {
    setDisplayText('Download Resume');
  }, []);

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between min-h-screen px-11 gap-10">
        <div className="px-10 flex flex-col items-start p-6">
          <h1 className="font-poppins text-2xl max-sm:text-xl">My name is</h1>
          <h1 className="font-rubik text-red-900 text-8xl name_underline text-primary max-sm:text-6xl font-bold">
            Ajith S
          </h1>
          <TextRotator />
          <h2 className="font-poppins text-xl mt-4">I am a Software Developer &</h2>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              {links.map((itm, indx) => {
                const timing = 0.55 + indx * 0.125;
                return (
                  <FramerWrapper key={indx} delay={timing} y={50}>
                    <Link 
                      target="_blank"
                      href={itm.link}
                      className={cn(buttonVariants({ variant: "outline", size: "icon" }))}>
                      {itm.icon}
                    </Link>
                  </FramerWrapper>
                );
              })}
            </div>

            {/* Download Resume Button */}
            <Button size={'lg'} className='text-base px-5 py-6' onMouseEnter={startScrambling}>
              <Download className="mx-1" />
              {displayText}
            </Button>
          </div>
        </div>
        
        <div className="ml-auto ">
          <Image
            src={logo}
            alt="Logo"
            loading="eager"
            priority
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTexts;
