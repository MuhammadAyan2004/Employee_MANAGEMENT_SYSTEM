import { useRef } from "react";

const Login = ({ handleLogin }) => {
  const emailElem = useRef("");
  const passwordElem = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailElem.current.value;
    const password = passwordElem.current.value;
    handleLogin(email, password)
    emailElem.current.value = "";
    passwordElem.current.value = "";
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#0b0b0b] px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111111] p-8 shadow-[0_0_35px_rgba(0,0,0,0.45)]">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">
            Welcome
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white">Login</h1>
        </div>

        <form className="flex flex-col gap-6" onSubmit={submitHandler}>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              ref={emailElem}
              className="w-full rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-[#f59e0b]/60 focus:ring-2 focus:ring-[#f59e0b]/20"
              required
            />

            <input
              type="password"
              ref={passwordElem}
              placeholder="Password"
              className="mt-1 w-full rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-[#f59e0b]/60 focus:ring-2 focus:ring-[#f59e0b]/20"
              required
            />

            <div className="flex items-center justify-between gap-3 text-sm text-zinc-300">
              <label htmlFor="check" className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  className="h-4 w-4 accent-[#f59e0b]"
                />
                Remember me
              </label>

              <a
                href="http://#"
                className="text-[#fbbf24] transition hover:text-[#facc15]"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#f59e0b] py-3 text-base font-bold text-black transition hover:bg-[#fbbf24]"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
