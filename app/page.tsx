import Image from "next/image";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import {
  approach,
  additionalProjects,
  contact,
  experience,
  expertise,
  projects,
  snapshot,
} from "@/lib/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id='top'>
        <section className='hero container' aria-labelledby='hero-title'>
          <div className='hero__grid' aria-hidden='true' />
          <div className='hero__content'>
            <p className='hero__status'>
              <span /> Backend Software Engineer
            </p>
            <h1 id='hero-title'>
              Krunal Dhote
              <span>builds the systems behind the product.</span>
            </h1>
            <p className='hero__lead'>
              Secure backend architecture, scalable services, asynchronous
              workflows, and cloud infrastructure—built with Node.js, NestJS,
              TypeScript, and AWS.
            </p>
            <div className='hero__actions'>
              <a className='button button--primary' href='#work'>
                Explore my work <ArrowDownIcon />
              </a>
              <a
                className='button button--secondary'
                href={contact.resume}
                download
              >
                Download resume <ArrowDownIcon />
              </a>
            </div>
          </div>

          <aside className='hero__signal' aria-label='Engineering focus'>
            <div className='hero__signal-head'>
              <span>Current focus</span>
              <span className='status-dot' aria-hidden='true' />
            </div>
            <div className='hero__signal-body'>
              <div>
                <span>01</span>
                <p>Security-focused backend architecture</p>
              </div>
              <div>
                <span>02</span>
                <p>Distributed and asynchronous systems</p>
              </div>
              <div>
                <span>03</span>
                <p>Cloud infrastructure and delivery</p>
              </div>
            </div>
            <div className='hero__signal-foot'>
              <span>Node.js / NestJS</span>
              <span>PostgreSQL / MongoDB</span>
              <span>AWS / Terraform</span>
            </div>
          </aside>
        </section>

        <section className='snapshot' aria-label='Professional snapshot'>
          <div className='container snapshot__grid'>
            {snapshot.map((item) => (
              <div className='snapshot__item' key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          className='section container'
          id='work'
          aria-labelledby='work-title'
        >
          <SectionHeading
            id='work-title'
            title='Selected Engineering Work'
            description='Three featured case studies from my professional work at Shaligram Infotech. The visuals are conceptual representations, not production architecture diagrams.'
          />
          <div className='projects'>
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.name} />
            ))}
          </div>

          <div
            className='additional-work'
            aria-labelledby='additional-work-title'
          >
            <div className='additional-work__heading additional-work__heading--compact'>
              <div>
                <h3 id='additional-work-title'>Additional Engineering Work</h3>
                <p>
                  Additional project experience spanning reusable backend
                  foundations, connected product modules, payments, and ongoing
                  delivery.
                </p>
              </div>
            </div>

            <div className='additional-work__grid'>
              {additionalProjects.map((project, index) => (
                <article className='additional-project' key={project.name}>
                  <div className='additional-project__index'>
                    <span>{String(index + 4).padStart(2, "0")}</span>
                    <span>{project.descriptor}</span>
                  </div>
                  <p className='additional-project__focus'>{project.focus}</p>
                  <h4>{project.name}</h4>
                  <p className='additional-project__summary'>
                    {project.summary}
                  </p>
                  <ul>
                    {project.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                  <div className='additional-project__technologies'>
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className='section section--border'
          id='expertise'
          aria-labelledby='expertise-title'
        >
          <div className='container'>
            <SectionHeading
              id='expertise-title'
              title='Technical Expertise'
              description='Technologies grouped by the engineering job they perform—not by arbitrary proficiency scores.'
            />
            <div className='expertise-grid'>
              {expertise.map((group, index) => (
                <article className='expertise-card' key={group.category}>
                  <span className='expertise-card__index'>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{group.category}</h3>
                  <p>{group.description}</p>
                  <ul aria-label={`${group.category} technologies`}>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className='section container'
          id='experience'
          aria-labelledby='experience-title'
        >
          <SectionHeading
            id='experience-title'
            title='Professional Experience'
            description='Technical ownership from architecture and data modelling through production delivery, client collaboration, and mentoring.'
          />
          <div className='experience'>
            <div className='experience__rail' aria-hidden='true'>
              <span />
            </div>
            <div className='experience__meta'>
              <p>{experience.period}</p>
              <span>Professional experience</span>
            </div>
            <div className='experience__body'>
              <p className='experience__company'>{experience.company}</p>
              <h3>{experience.role}</h3>
              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className='section section--border approach-section'
          aria-labelledby='approach-title'
        >
          <div className='container approach-layout'>
            <div className='approach-intro'>
              <h2 id='approach-title'>Engineering Approach</h2>
              <p>
                I work from system boundaries and operating constraints toward
                implementation, keeping security, maintainability, and delivery
                part of the same conversation.
              </p>
            </div>
            <div className='approach-list'>
              {approach.map((item) => (
                <article key={item.index}>
                  <span>{item.index}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className='section container ai-section'
          aria-labelledby='ai-title'
        >
          <div className='ai-panel'>
            <div className='ai-panel__visual' aria-hidden='true'>
              <span>Context</span>
              <i />
              <span>Review</span>
              <i />
              <span>Standards</span>
            </div>
            <div className='ai-panel__content'>
              <h2 id='ai-title'>AI-Augmented Engineering</h2>
              <p>
                I use Claude, Cursor, and AI-enabled development workflows to
                improve productivity, review quality, and consistency—while
                keeping architecture, security, and coding standards under
                deliberate engineering control.
              </p>
            </div>
          </div>
        </section>

        <section
          className='section container about'
          id='about'
          aria-labelledby='about-title'
        >
          <div className='about__portrait'>
            <div className='about__image-frame'>
              <Image
                src='/Krunal-Dhote.jpeg'
                alt='Professional portrait of Krunal Dhote'
                width={1553}
                height={2090}
                sizes='(max-width: 760px) 88vw, 36vw'
                quality={88}
              />
            </div>
            <p>Backend Software Engineer · India</p>
          </div>

          <div className='about__content'>
            <h2 id='about-title'>About Krunal Dhote</h2>
            <p>
              I’m a backend software engineer with 3.5+ years of experience
              across secure data systems, multi-service applications, messaging
              workflows, database optimization, and AWS infrastructure. My work
              spans technical ownership, client collaboration, architectural
              decisions, and production delivery.
            </p>
            <p>
              I also mentor junior engineers and established a recurring
              JavaScript training program for new-developer onboarding. I value
              clear standards, practical feedback, and sharing the reasoning
              behind engineering decisions.
            </p>
            <div className='education'>
              <span>Education</span>
              <div>
                <strong>Bachelor of Engineering</strong>
                <p>
                  P.R. Pote Institute of Engineering · 2019–2023 · CGPA 7.61
                </p>
              </div>
            </div>
            <div className='about__links'>
              <a href={`mailto:${contact.email}`}>
                <MailIcon /> {contact.email}
              </a>
              <a href={contact.phoneHref}>
                <PhoneIcon /> {contact.phone}
              </a>
              <a href={contact.linkedIn} target='_blank' rel='noreferrer'>
                <LinkedInIcon /> LinkedIn <ArrowUpRightIcon />
              </a>
              <a href={contact.github} target='_blank' rel='noreferrer'>
                <GitHubIcon /> GitHub <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
