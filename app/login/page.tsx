// app/login/page.tsx
import LoginForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center relative bg-emerald-800"
      style={{
        backgroundImage: "url('/darkworld.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay (same as signup page) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login form */}
      <div className="relative z-10 w-full max-w-md bg-emerald-900/95 p-8 rounded-2xl shadow-xl border border-emerald-900/50">
        {/* Stylish heading */}
        <h2 className="text-3xl font-extrabold text-center mb-2 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent tracking-wide">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Login to continue your journey
        </p>

        <LoginForm />
      </div>
    </main>
  );
}
