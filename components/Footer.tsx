const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rutvik-savaliya5/" },
  { label: "GitHub", href: "https://github.com/Rutvik552k" },
  { label: "YouTube", href: "https://www.youtube.com/@AIWithRutvik" },
  { label: "Email", href: "mailto:rutviksavaliya141@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container-wide py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/50 hover:text-white font-body transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-white/30 font-body">
          &copy; {new Date().getFullYear()} Rutvik Savaliya
        </p>
      </div>
    </footer>
  );
}
