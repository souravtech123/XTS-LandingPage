import { useState } from "react"
import { supabase } from "../Components/Supabase"
import { NavLink } from "react-router"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)

  // Email + Password Register
  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert(error.message)
      setLoading(false)
      return
    }

    // Save extra data
    await supabase.from("profiles").insert({
      id: data.user.id,
      email,
      username,
    })

    window.location.href = "/dashboard"
  }

  // Google Login / Register
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/dashboard",
      },
    })

    if (error) alert(error.message)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] px-4">
      <div className="w-full max-w-md bg-[#111827] border border-gray-800 rounded-2xl shadow-2xl p-8 space-y-6">

        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white">
            Tech Society
          </h2>
          <p className="text-gray-400 text-sm">
            Create your account
          </p>
        </div>

        {/* Email Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 bg-[#0B0F19] text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-[#0B0F19] text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-[#0B0F19] text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 text-black py-3 rounded-xl font-semibold hover:bg-cyan-400 transition disabled:opacity-60"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 text-gray-500 text-sm">
          <div className="flex-1 h-px bg-gray-700"></div>
          OR
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-400">
          Already a member?{" "}
          <NavLink to="/login" className="text-cyan-400 hover:underline">
            Login
          </NavLink>
        </p>

      </div>
    </div>
  )
}
