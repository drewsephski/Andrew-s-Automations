import { StyledLink } from "@/components/styled-link";
import { Badge } from "@/components/ui/badge";

import Balancer from "react-wrap-balancer";

import Project from "@/components/project";
import projects from "@/projects.config";

import { Component, Rocket } from "lucide-react";

export default function Home() {
  return (
    <>
      <Intro />
      <Work />
    </>
  );
}

const Intro = () => {
  return (
    <div className="mx-auto max-w-4xl text-center space-y-6 sm:space-y-8 fade-in px-4">
      <h1 className="sr-only">Andrew&apos;s Automations - AI App Marketplace</h1>
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium leading-tight">
        <Balancer>
          Discover & Deploy{" "}
          <span className="text-[#9d89d8] dark:text-yellow-100">AI-Powered</span>{" "}
          Applications
        </Balancer>
      </h2>
      <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground space-y-3 sm:space-y-4">
        <p>Ready-to-use templates with</p>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-3 md:gap-5">
          <span className="flex items-center gap-2">
            <Component className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" /> Authentication
          </span>
          <span className="text-muted-foreground">+</span>
          <span className="flex items-center gap-2">
            <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" /> Payments
          </span>
        </div>
      </div>
      <div className="space-y-4 sm:space-y-6">
        <p className="text-base sm:text-lg">
          Launch your next project in minutes, not months. Our marketplace features
          production-ready apps with AI integrations, user management, and monetization built-in.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <StyledLink href="mailto:drewsepeczi@gmail.com">
            Get Started
          </StyledLink>
          <span className="text-muted-foreground">or</span>
          <StyledLink href="https://cal.com/drew-sepeczi-gbmxql">
            Schedule Demo
          </StyledLink>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="mx-auto max-w-6xl mt-16 sm:mt-20 md:mt-24 space-y-8 sm:space-y-12 fade-in px-4">
      <div className="text-center space-y-3 sm:space-y-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium">Featured Apps</h3>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our curated collection of AI-powered applications and starter kits
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Project
            key={project.name}
            name={project.name}
            link={project.link}
            image={project.image}
            desc={project.description}
            year={project.year.toString()}
            delay={index === 0 ? 500 : 500 + 150 * index}
          />
        ))}
      </div>
    </div>
  );
};
