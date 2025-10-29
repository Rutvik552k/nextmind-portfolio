// /components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container-wide py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <p>&copy; {new Date().getFullYear()} NextMind Inspired. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}
