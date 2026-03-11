import { Button } from "@/components/ui/button";
import { projectCardProps } from "@/interface";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectCard: React.FC<projectCardProps> = ({
  title,
  description,
  image,
  techStack,
  demoUrl,
  githubUrl,
}) => {
  return (
    <div className="group relative bg-white dark:bg-gray-900 shadow-md rounded-2xl overflow-hidden">
      {/* img container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          height={400}
          width={400}
          className="w-full h-full object-cover"
        />
        {/* main content */}
      </div>
      <div className="p-6">
        <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex md:flex-col flex-wrap mb-6 gap-2">
          {techStack.map((tech) => {
            return (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-indigo-600 text-white font-medium"
              >
                {tech}
              </span>
            );
          })}
        </div>
        {/* button */}
        <div className="flex flex-col sm:flex-row gap-3">
          {demoUrl && (
            <Button asChild size={"sm"} className="flex-1">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2 " />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant={"outline"} size={"sm"} className="flex-1">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 " />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
