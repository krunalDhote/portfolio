import { CheckIcon } from "@/components/icons";
import { SystemDiagram } from "@/components/system-diagram";
import type { Project } from "@/lib/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={`project project--${project.kind}`}>
      <div className="project__topline">
        <span>{number}</span>
        <span>Professional work at Shaligram Infotech</span>
      </div>

      <div className="project__layout">
        <div className="project__content">
          <p className="project__narrative">{project.narrative}</p>
          <h3>{project.name}</h3>
          <p className="project__descriptor">{project.descriptor}</p>
          <p className="project__summary">{project.summary}</p>

          <div className="project__contribution">
            <span>My contribution</span>
            <p>{project.contribution}</p>
          </div>

          <ul className="project__concepts" aria-label={`${project.name} engineering concepts`}>
            {project.concepts.map((concept) => (
              <li key={concept}>
                <CheckIcon />
                {concept}
              </li>
            ))}
          </ul>
        </div>

        <div className="project__visual">
          <SystemDiagram kind={project.kind} />
          <div className="project__technologies" aria-label={`${project.name} technologies`}>
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
