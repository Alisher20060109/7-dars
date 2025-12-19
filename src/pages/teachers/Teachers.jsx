import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getAllTeachers() {
      try {
        const response = await fetch(
          "https://692458a93ad095fb8473d421.mockapi.io/teachers"
        );
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    }
    getAllTeachers();
  }, []); // Bu yerda [] — faqat komponent yuklanganda ishlasin

  // Qidiruv bo'yicha filtr
  const filteredTeachers = teachers.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      {/* Modal (hozircha faqat ko'rinishi, funksiyasi yo'q) */}
      <div
        onClick={() => setIsModalOpen(false)}
        className={`${
          isModalOpen ? "flex" : "hidden"
        } fixed inset-0 z-50 items-center justify-center bg-black/40 backdrop-blur-sm`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col w-full max-w-xl gap-3 bg-gray-300 p-5 rounded-xl"
        >
          <h3 className="text-xl font-bold text-center">
            Yangi o'qituvchi qo'shish
          </h3>
          <div className="flex gap-3">
            <input className="w-full p-2 border-2 rounded" placeholder="Ismi" />
            <input
              className="w-full p-2 border-2 rounded"
              placeholder="Rasm URL"
            />
          </div>

          <div className="flex gap-3">
            <input
              className="w-full p-2 border-2 rounded"
              placeholder="Yoshi"
            />
            <input
              className="w-full p-2 border-2 rounded"
              placeholder="Tajriba (yil)"
            />
          </div>

          <button className="bg-amber-600 text-white p-2 rounded">
            Qo‘shish
          </button>
        </div>
      </div>

      {/* Qidiruv va Qo'shish tugmasi */}
      <div className="flex mb-5 gap-3">
        <input
          type="search"
          placeholder="O‘qituvchini qidirish"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-amber-700 p-2 rounded w-full"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded whitespace-nowrap"
        >
          Qo‘shish
        </button>
      </div>

      {/* O'qituvchilar kartochkalari */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredTeachers.map((el) => (
          <div
            key={el.id}
            className="bg-linear-to-b from-gray-500 to-gray-900 rounded-3xl shadow-2xl p-6 text-white"
          >
            <div className="flex justify-center mb-4">
              <Link to={`/singl-teachers/${el.id}`} className="block mb-4">
                <img
                  className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
                  src={el.avatar || "https://via.placeholder.com/150"} // agar rasm bo'lmasa placeholder
                  alt={el.name}
                />
              </Link>
            </div>

            <h2 className="text-xl font-bold text-center">{el.name}</h2>

            <p className="text-center mt-2">
              Age: {el.age} | Grade: {el.experience}
            </p>

            <div className="flex justify-center my-3">
              ⭐ <span className="ml-2">{el.rating}</span>
            </div>

            <div className="text-sm space-y-2">
              <p>📞 {el.phone}</p>
              <p>✉️ {el.emile}</p>
              <p>📨 {el.telegram}</p>
              <p>🔗 {el.emile}</p>
            </div>

            <div className="flex justify-center gap-3 mt-5">
              <button className="bg-blue-600 px-5 py-2 rounded">Edit</button>
              <button className="bg-red-600 px-5 py-2 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Agar hech kim topilmasa */}
      {filteredTeachers.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-xl">
          Hech narsa topilmadi 😔
        </p>
      )}
    </div>
  );
}
