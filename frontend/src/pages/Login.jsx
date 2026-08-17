import React, { useState } from "react";

const API_URL = "http://localhost:5000/api/auth";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [mobileVerified, setMobileVerified] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ================= OTP =================

  const handleSendOtp = () => {
    setError("");
    setSuccess("");

    if (mobile.length !== 10) {
      setError("Enter a valid 10 digit mobile number");
      return;
    }

    setOtpSent(true);

    setSuccess(
      "Demo OTP sent. Use any 6 digit OTP for testing."
    );
  };
const handleVerifyOtp = () => {
  setError("");

  if (otp !== "123456") {
    setError("Invalid OTP. For testing use 123456.");
    return;
  }

  setMobileVerified(true);
  setOtpSent(false);
  setSuccess("Mobile number verified successfully.");
};
  // ================= SUBMIT =================

const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (isSignUp) {
    if (!name || !email || !mobile || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (!mobileVerified) {
      setError("Please verify your mobile number first");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            mobile,
            password,
            confirmPassword,
            otp,
          }),
        }
      );

      const data = await response.json();

      console.log("REGISTER RESPONSE:", data);

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Save token
      localStorage.setItem("token", data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setSuccess("Account created successfully!");

      // Clear form
      setName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setConfirmPassword("");
      setOtp("");
      setMobileVerified(false);
      setOtpSent(false);

      // Switch to login
      setIsSignUp(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

    return;
  }

  // LOGIN
  if (!email || !password) {
    setError("Please enter email and password");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    console.log("LOGIN RESPONSE:", data);

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    localStorage.setItem("token", data.token);

    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    setSuccess(`Welcome back, ${data.user.name}!`);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

  // ================= TOGGLE =================

  const handleToggle = () => {
    setIsSignUp(!isSignUp);

    setError("");
    setSuccess("");

    setOtpSent(false);
    setOtp("");
    setMobileVerified(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* LOGO */}

        <div className="flex justify-center mb-6">

          <div className="w-14 h-14 rounded-2xl bg-[#363332] flex items-center justify-center">

            <span className="text-white text-xl font-bold">
              L
            </span>

          </div>

        </div>

        {/* HEADING */}

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-[#363332]">
            {isSignUp
              ? "Create Account"
              : "Welcome Back"}
          </h1>

          <p className="text-[#363332]/60 mt-2 text-sm">
            {isSignUp
              ? "Create your account and get started"
              : "Login to continue to your account"}
          </p>

        </div>

        {/* ERROR */}

        {error && (
          <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* SUCCESS */}

        {success && (
          <div className="mb-5 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
            {success}
          </div>
        )}

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* NAME */}

          {isSignUp && (
            <div>

              <label className="block text-sm font-semibold text-[#363332] mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Enter your full name"
                className="w-full px-4 py-3.5 rounded-xl border border-[#363332]/20 outline-none focus:border-[#363332]"
              />

            </div>
          )}

          {/* EMAIL */}

          <div>

            <label className="block text-sm font-semibold text-[#363332] mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              className="w-full px-4 py-3.5 rounded-xl border border-[#363332]/20 outline-none focus:border-[#363332]"
            />

          </div>

          {/* MOBILE */}

          {isSignUp && (
            <div>

              <label className="block text-sm font-semibold text-[#363332] mb-2">
                Mobile Number
              </label>

              <div className="flex gap-2">

                <div className="flex items-center px-3 rounded-xl border border-[#363332]/20 text-sm">
                  +91
                </div>

                <input
                  type="tel"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) =>
                    setMobile(
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                  placeholder="Enter mobile number"
                  disabled={mobileVerified}
                  className="flex-1 px-4 py-3.5 rounded-xl border border-[#363332]/20 outline-none disabled:bg-gray-50"
                />

                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={mobileVerified}
                  className="px-4 rounded-xl bg-[#363332] text-white text-sm font-semibold disabled:opacity-50"
                >
                  {mobileVerified
                    ? "Verified"
                    : "Send OTP"}
                </button>

              </div>

              {/* OTP */}

              {otpSent && !mobileVerified && (
                <div className="mt-4 p-4 rounded-xl border border-[#363332]/15">

                  <p className="text-sm mb-3">
                    Enter the 6-digit OTP.
                  </p>

                  <div className="flex gap-2">

                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={otp}
                      onChange={(e) =>
                        setOtp(
                          e.target.value.replace(
                            /\D/g,
                            ""
                          )
                        )
                      }
                      placeholder="Enter OTP"
                      className="flex-1 px-4 py-3 rounded-xl border border-[#363332]/20 outline-none tracking-[0.3em]"
                    />

                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      disabled={otp.length !== 6}
                      className="px-4 rounded-xl bg-[#363332] text-white text-sm font-semibold disabled:opacity-40"
                    >
                      Verify
                    </button>

                  </div>

                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="mt-3 text-xs font-semibold hover:underline"
                  >
                    Resend OTP
                  </button>

                </div>
              )}

              {mobileVerified && (
                <p className="mt-2 text-sm font-semibold text-green-600">
                  ✓ Mobile number verified
                </p>
              )}

            </div>
          )}

          {/* PASSWORD */}

          <div>

            <label className="block text-sm font-semibold text-[#363332] mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter your password"
              className="w-full px-4 py-3.5 rounded-xl border border-[#363332]/20 outline-none focus:border-[#363332]"
            />

          </div>

          {/* CONFIRM PASSWORD */}

          {isSignUp && (
            <div>

              <label className="block text-sm font-semibold text-[#363332] mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                placeholder="Confirm your password"
                className="w-full px-4 py-3.5 rounded-xl border border-[#363332]/20 outline-none focus:border-[#363332]"
              />

            </div>
          )}

          {/* FORGOT */}

          {!isSignUp && (
            <div className="flex justify-end">

              <button
                type="button"
                className="text-sm font-medium hover:underline"
              >
                Forgot Password?
              </button>

            </div>
          )}

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={
              loading ||
              (isSignUp && !mobileVerified)
            }
            className="w-full bg-[#363332] text-white py-3.5 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-40"
          >
            {loading
              ? "Please wait..."
              : isSignUp
              ? "Create Account"
              : "Login"}
          </button>

        </form>

        {/* DIVIDER */}

        <div className="flex items-center gap-4 my-7">

          <div className="h-px flex-1 bg-[#363332]/15" />

          <span className="text-xs text-[#363332]/50">
            OR
          </span>

          <div className="h-px flex-1 bg-[#363332]/15" />

        </div>

        {/* SWITCH */}

        <div className="text-center text-sm text-[#363332]/70">

          {isSignUp
            ? "Already have an account?"
            : "Don't have an account?"}

          <button
            type="button"
            onClick={handleToggle}
            className="ml-2 font-bold hover:underline"
          >
            {isSignUp
              ? "Login"
              : "Create Account"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default Login;