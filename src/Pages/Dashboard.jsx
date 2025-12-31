import { useEffect, useState } from "react"
import { supabase } from "../Components/Supabase"
import { NavLink } from "react-router"

export default function Dashboard() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        window.location.href = "/login"
        return
      }

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()

      setProfile(data)
      setLoading(false)
    }

    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = "/login"
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-gray-400">
        Loading Dashboard...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-6 py-8 mt-10">

      {/* 🔹 Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Hi, {profile?.name} 👋</h1>
          <p className="text-gray-400 text-sm">
            Tech Society Dashboard
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500/90 hover:bg-red-400 px-5 py-2 rounded-xl transition"
        >
          Logout
        </button>
      </div>

      {/* 🔹 Dashboard Nav */}
      <div className="flex gap-6 mb-10 text-sm">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-semibold"
              : "text-gray-400 hover:text-white"
          }
        >
          Overview
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-semibold"
              : "text-gray-400 hover:text-white"
          }
        >
          Events
        </NavLink>

        <NavLink
          to="/opportunities"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-semibold"
              : "text-gray-400 hover:text-white"
          }
        >
          Opportunities
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-semibold"
              : "text-gray-400 hover:text-white"
          }
        >
          Profile
        </NavLink>
      </div>

      {/* 🔹 Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Profile Card */}
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-cyan-400 mb-4">
            👤 Your Profile
          </h2>

          <p className="text-sm text-gray-300">
            <span className="text-gray-400">Username:</span>{" "}
            {profile?.username}
          </p>
          <p className="text-sm text-gray-300 mt-2">
            <span className="text-gray-400">Email:</span>{" "}
            {profile?.email}
          </p>

          <NavLink
            to="/profile"
            className="block text-center mt-5 bg-gray-800 hover:bg-gray-700 py-2 rounded-xl transition"
          >
            Edit Profile
          </NavLink>
        </div>

        {/* Activity */}
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-cyan-400 mb-4">
            📌 Activity
          </h2>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>✔ Joined Tech Society</li>
            <li>✔ Access to events</li>
            <li>✔ Hackathon enabled</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-cyan-400 mb-4">
            ⚡ Quick Actions
          </h2>

          <div className="space-y-3">
            <NavLink
              to="/events"
              className="block text-center bg-cyan-500 text-black py-2 rounded-xl hover:bg-cyan-400 transition"
            >
              View Events
            </NavLink>

            <NavLink
              to="/hackathons"
              className="block text-center bg-gray-800 hover:bg-gray-700 py-2 rounded-xl transition"
            >
              Join Hackathon
            </NavLink>

            <NavLink
              to="/opportunities"
              className="block text-center bg-gray-800 hover:bg-gray-700 py-2 rounded-xl transition"
            >
              Explore Opportunities
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  )
}
