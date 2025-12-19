import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginPage({ setIsLogin }) {
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const [phoneError, setPhoneError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setPhoneError(false);
    setPasswordError(false);

    if (phone === "+998900535016" && password === "Alisher123") {
      localStorage.setItem("isLogin", "true");
      setIsLogin(true); // Bu muhim — App dagi state ni yangilaydi
      toast.success("Muvaffaqiyatli kirdingiz!");
      navigate("/teachers");
    } else {
      setPhoneError(true);
      setPasswordError(true);
      toast.error("Noto'g'ri telefon raqam yoki parol!");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-linear-to-br from-amber-600 to-orange-800">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Forma */}
      <div className="relative z-10 flex justify-center items-center h-full px-4">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-6 max-w-md w-full p-8 rounded-2xl shadow-2xl bg-white/95 backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Tizimga kirish
          </h2>

          <div>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full rounded-lg border-2 p-4 text-lg transition-all ${
                phoneError ? "border-red-500" : "border-amber-500"
              } focus:outline-none focus:border-amber-600`}
              type="text"
              placeholder="Telefon raqam (+998...)"
            />
            {phoneError && (
              <p className="text-red-600 text-sm mt-1">Telefon raqam noto'g'ri</p>
            )}
          </div>

          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded-lg border-2 p-4 text-lg transition-all ${
                passwordError ? "border-red-500" : "border-amber-500"
              } focus:outline-none focus:border-amber-600`}
              type="password"
              placeholder="Parol"
            />
            {passwordError && (
              <p className="text-red-600 text-sm mt-1">Parol noto'g'ri</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 w-full py-4 rounded-lg text-white text-xl font-semibold transition-all transform hover:scale-105"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}