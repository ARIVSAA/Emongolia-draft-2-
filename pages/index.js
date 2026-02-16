import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [pin, setPin] = useState("");
  const router = useRouter();

  const login = () => {
    if (pin.length === 4) {
      router.push("/home");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="password"
        maxLength="4"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="Enter PIN"
      />

      <button onClick={login}>Login</button>
    </div>
  );
}
