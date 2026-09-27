type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className={`section-heading${eyebrow ? "" : " section-heading--compact"}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="section-heading__copy">
        <h2 id={id}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}
