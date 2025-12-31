import { useEffect, useState } from "react"
import { supabase } from "../Components/Supabase"

export default function Profile() {
  const [profile, setProfile] = useState(null)
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
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
      setName(data?.name || "")
      setUsername(data?.username || "")
      setLoading(false)
    }

    fetchProfile()
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault()
    setSaving(true)

    const { error } = await supabase
      .from("profiles")
      .update({
        name,
        username,
      })
      .eq("id", profile.id)

    if (error) {
      alert(error.message)
    } else {
      alert("Profile updated successfully ✅")
    }

    setSaving(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-gray-400">
        Loading profile...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-6 py-10 mt-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <p className="text-gray-400 text-sm">
          Manage your account information
        </p>
      </div>

      {/* Profile Card */}
      <form
        onSubmit={handleUpdate}
        className="max-w-xl bg-[#111827] border border-gray-800 rounded-2xl p-6 space-y-5"
      >
        {/* Name */}
        <div>
          <label className="text-sm text-gray-400">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 px-4 py-3 bg-[#0B0F19] text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Username */}
        <div>
          <label className="text-sm text-gray-400">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-2 px-4 py-3 bg-[#0B0F19] text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Email (Read Only) */}
        <div>
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="email"
            value={profile.email}
            disabled
            className="w-full mt-2 px-4 py-3 bg-gray-900 text-gray-500 border border-gray-700 rounded-xl cursor-not-allowed"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          disabled={saving}
          className="w-full bg-cyan-500 text-black py-3 rounded-xl font-semibold hover:bg-cyan-400 transition disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  )
}
