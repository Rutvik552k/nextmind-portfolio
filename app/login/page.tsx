// /app/login/page.tsx
export default function LoginPage() {
  return (
    <section className="py-16 max-w-lg mx-auto w-full">
      <h1 className="text-3xl font-bold mb-6">Log in</h1>
      <form className="card p-6 space-y-4">
        <div>
          <label className="block mb-2 text-sm text-white/70">Email</label>
          <input type="email" className="input" placeholder="you@example.com" required />
        </div>
        <div>
          <label className="block mb-2 text-sm text-white/70">Password</label>
          <input type="password" className="input" placeholder="••••••••" required />
        </div>
        <button className="btn-primary w-full">Continue</button>
        <p className="text-xs text-white/60">
          By continuing you agree to our Terms and Privacy Policy.
        </p>
      </form>
    </section>
  );
}
