import { StyledLink } from "@/components/styled-link";
import Link from "next/link";
import Image from "next/image";

import {
  Search,
  Paperclip,
  Rocket,
  Beaker,
  Palette,
  LifeBuoy,
  icons,
} from "lucide-react";

const process = [
  {
    title: "Discovery",
    icon: <Search className="h-6 w-6" />,
    description:
      "We start by understanding your business goals, target audience, and unique challenges through in-depth discussions and research.",
  },
  {
    title: "Strategy & Planning",
    icon: <Paperclip className="h-6 w-6" />,
    description:
      "We collaborate to develop a comprehensive strategy and roadmap, aligning our efforts with your objectives and ensuring a seamless execution.",
  },
  {
    title: "Design & Development",
    icon: <Palette className="h-6 w-6" />,
    description:
      "Our experienced designers and developers work together to create intuitive, user-friendly interfaces and robust, secure software solutions tailored to your needs.",
  },
  {
    title: "Testing & Quality Assurance",
    icon: <Beaker className="h-6 w-6" />,
    description:
      "We rigorously test our solutions to ensure they meet the highest standards of quality, performance, and accessibility before deployment.",
  },
  {
    title: "Launch & SEO Optimization",
    icon: <Rocket className="h-6 w-6" />,
    description:
      "We help you launch your solutions successfully and optimize them for search engines to ensure maximum visibility and engagement.",
  },
  {
    title: "Ongoing Support & Optimization",
    icon: <LifeBuoy className="h-6 w-6" />,
    description:
      "We provide ongoing support, maintenance, and optimization to ensure your solutions continue to meet your evolving needs.",
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl grid gap-4 fade-in">
      <h1 className="text-2xl">About Andrew&apos;s Automations</h1>
      <p>
        Andrew&apos;s Automations is a marketing-minded software design and development studio founded
        by <StyledLink href="https://drewsepeczi.com">Drew Sepeczi</StyledLink>. We
        specialize in helping innovative companies across the United States with
        their design, coding, and marketing needs, learn more about our{" "}
        <StyledLink href="/services">services</StyledLink>.
      </p>

      <hr className="my-8" />

      <h2 className="text-lg">Process</h2>

      <ul className="grid gap-4">
        {process.map((step, index) => (
          <li
            key={index}
            className="grid gap-4 rounded-lg border bg-accent/25 p-6"
          >
            <h4 className="-mt-px flex flex-col gap-2 text-lg md:flex-row md:items-center md:text-xl">
              <span className="text-[#9d89d8] dark:text-yellow-100">
                {step.icon}
              </span>{" "}
              {step.title}
            </h4>
            <p className="text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ul>

      <hr className="my-8" />
    </div>
  );
}
