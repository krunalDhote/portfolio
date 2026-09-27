type IconProps = React.SVGProps<SVGSVGElement>;

const baseProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M15 22v-3.87c.04-.5-.07-1-.32-1.44 2.63-.3 5.4-1.29 5.4-5.82a4.56 4.56 0 0 0-1.2-3.17 4.25 4.25 0 0 0-.12-3.13s-1-.32-3.3 1.2a11.38 11.38 0 0 0-6 0C7.16 4.25 6.16 4.57 6.16 4.57a4.25 4.25 0 0 0-.12 3.13 4.56 4.56 0 0 0-1.2 3.17c0 4.52 2.76 5.52 5.4 5.82-.25.44-.36.94-.32 1.44V22" />
      <path d="M9 19c-3 .92-3-1.5-4.2-1.8" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.62 2.65a2 2 0 0 1-.45 2.11L8.01 9.75a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.86.29 1.75.5 2.65.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 7h16M4 17h16" />
    </svg>
  );
}
