import React, { useState } from "react";

export default function Student() {
  const [search, setSearch] = useState("");

  // vaqtinchalik static data
  const students = [
    {
      id: 1,
      name: "Ali Valiyev",
      age: 18,
      grade: "A",
      rating: 4.5,
      avatar: "https://i.pravatar.cc/150?img=3",
      phone: "+998 90 123 45 67",
      email: "ali@gmail.com",
      telegram: "@ali",
      linkedin: "ali-linkedin",
    },
    {
      id: 2,
      name: "Madina Karimova",
      age: 19,
      grade: "B",
      rating: 4.2,
      avatar: "https://i.pravatar.cc/150?img=5",
      phone: "+998 91 555 66 77",
      email: "madina@gmail.com",
      telegram: "@madina",
      linkedin: "madina-linkedin",
    },
  ];

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      {/* SEARCH */}
      <div className="max-w-xl mb-5">
        <input
          type="search"
          placeholder="O‘quvchini qidirish"
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-amber-700 p-2 rounded w-full"
        />
      </div>

      {/* STUDENTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredStudents.map((el) => (
          <div
            key={el.id}
            className="bg-linear-to-b from-gray-500 to-gray-900 rounded-3xl shadow-2xl p-6 text-white"
          >
            <div className="flex justify-center mb-4">
              <img
                src={el.avatar}
                className="w-32 h-32 rounded-full border-4 border-pink-500"
                alt={el.name}
              />
            </div>

            <h2 className="text-xl font-bold text-center">{el.name}</h2>

            <p className="text-center mt-2">
              Age: {el.age} | Grade: {el.grade}
            </p>

            <div className="flex justify-center my-3">
              ⭐ <span className="ml-2">{el.rating}</span>
            </div>

            <div className="text-sm space-y-2">
              <p>📞 {el.phone}</p>
              <p>✉️ {el.email}</p>
              <p>📨 {el.telegram}</p>
              <p>🔗 {el.linkedin}</p>
            </div>

            <div className="flex justify-center gap-3 mt-5">
              <button className="bg-blue-600 px-5 py-2 rounded">
                Edit
              </button>
              <button className="bg-red-600 px-5 py-2 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
