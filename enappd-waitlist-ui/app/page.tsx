"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [success, setSuccess] = useState<boolean>(false);

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Enter a valid email address";
    } else {
      if (email.toLowerCase().endsWith("@gmail.com")) {
        newErrors.email = "Gmail is not allowed";
      }

      const domainPart = email.split("@")[1]; // company.com
      if (domainPart) {
        const domainName = domainPart.split(".")[0]; // company
        if (domainName.length > 10) {
          newErrors.email = "Domain name must be max 10 characters";
        }
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        {!success ? (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Join the Waitlist
            </h1>

            <p className="text-gray-500 text-sm mb-6">
              Get early access by joining our waitlist.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors({ ...errors, name: "" });
                  }}
                  placeholder="Enter your name"
                  className="w-full bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: "" });
                  }}
                  placeholder="Enter your email"
                  className="w-full bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Request Access
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              Already have access?{" "}
              <span className="text-black font-semibold cursor-pointer hover:underline">
                Login
              </span>
            </p>
          </>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-green-600 mb-3">
              🎉 Success!
            </h2>
            <p className="text-gray-700 font-medium">
              You have been added to the waitlist.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
