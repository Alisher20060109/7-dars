import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SinglPage() {
  const { id } = useParams();
  const [teacher, setTeacher] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getTeacher() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://692458a93ad095fb8473d421.mockapi.io/teachers/${id}`
        );
        setTeacher(res.data);
      } catch (err) {
        console.log("Xatolik yuz berdi:", err);
      } finally {
        setLoading(false);
      }
    }
    getTeacher();
  }, [id]);

  // Loading holati
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-2xl">
        Yuklanmoqda...
      </div>
    );
  }

  // Agar teacher topilmasa
  if (!teacher) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-2xl">
        O'qituvchi topilmadi
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-gray-700 py-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        {/* LEFT CARD */}
        <div className="rounded-2xl  dark:bg-[#1e293b] p-6 bg-gray-400   shadow-xl">
          <div className="flex flex-col items-center">
            <img
              src={teacher.avatar || "https://via.placeholder.com/150"} // agar avatar bo'lmasa
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-blue-600 object-cover"
            />

            <h2 className="mt-4 text-xl font-semibold">{teacher.name}</h2>

            <span className="mt-2 rounded-full bg-black text-white px-4 py-1 text-sm">
              {teacher.subject || "Teacher"}
            </span>
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="">Age</span>
              <span>{teacher.age} years</span>
            </div>

            <div className="flex justify-between">
              <span className="">Experience</span>
              <span>{teacher.experience} years</span>
            </div>

            <div className="flex justify-between">
              <span className="">Gender</span>
              <span>{teacher.gender}</span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="">Rating</span>
                <span className="text-yellow-400">⭐ {teacher.rating}</span>
              </div>

              <div className="mt-2 h-2 w-full rounded bg-gray-600">
                <div
                  className="h-2  w-50 rounded bg-white transition-all"
                    
                ></div>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full rounded-xl bg-white py-3 text-black font-medium hover:bg-blue-600 cursor-pointer hover:text-white transition">
            ✏️ Edit Profile
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="lg:col-span-2 rounded-2xl bg-gray-400 dark:bg-[#1e293b] p-6 text-white shadow-xl">
          <div className="mb-6 flex w-fit rounded-xl bg-black/40 p-1">
            <div className="px-6 py-2 rounded-lg dark:bg-black">Contact Info</div>
            <div className="px-6 py-2 rounded-lg text-gray-400 cursor-not-allowed">
              Assigned Students
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 rounded-xl bg-[#334155] p-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">{teacher.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl bg-[#334155] p-4">
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">{teacher.emile}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl bg-[#334155] p-4">
              <span className="text-2xl">✈️</span>
              <div>
                <p className="text-sm text-gray-400">Telegram</p>
                <p className="font-medium">{teacher.telegram || "—"}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl bg-[#334155] p-4">
              <span className="text-2xl">💼</span>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="font-medium">
                  {teacher.linkedin ? (
                    <a href={teacher.emile} className="text-blue-400 underline">
                      Link
                    </a>
                  ) : (
                    "—"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}