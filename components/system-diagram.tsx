import type { ProjectKind } from "@/lib/portfolio";

const diagramContent: Record<
  ProjectKind,
  { label: string; nodes: readonly string[]; caption: string }
> = {
  security: {
    label: "Conceptual encrypted secret lifecycle",
    nodes: ["Identity", "Policy", "Encrypt", "Store"],
    caption: "Identity and policy guard the encrypted-data lifecycle.",
  },
  async: {
    label: "Conceptual asynchronous processing flow",
    nodes: ["API", "Queue", "Worker", "Data"],
    caption: "Background consumers separate intake from bulk processing.",
  },
  infrastructure: {
    label: "Conceptual deployment pipeline",
    nodes: ["Source", "CI / CD", "Container", "AWS"],
    caption: "Infrastructure as code supports repeatable delivery.",
  },
};

export function SystemDiagram({ kind }: { kind: ProjectKind }) {
  const content = diagramContent[kind];

  return (
    <figure className={`diagram diagram--${kind}`} aria-label={content.label}>
      <div className="diagram__grid" aria-hidden="true" />
      <div className="diagram__flow" aria-hidden="true">
        {content.nodes.map((node, index) => (
          <div className="diagram__step" key={node}>
            <span className="diagram__node">
              <i />
              {node}
            </span>
            {index < content.nodes.length - 1 ? <span className="diagram__line" /> : null}
          </div>
        ))}
      </div>
      <figcaption>{content.caption}</figcaption>
    </figure>
  );
}
