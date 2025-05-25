import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../Common component/Navbar";
import FooterMain from "../Common component/FooterMain";
import { Link } from "react-router-dom";

// Security Code Component
const SecurityCode = ({ onCodeChange }) => {
  const generateCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const [code, setCode] = useState(() => {
    const initialCode = generateCode();
    if (onCodeChange) {
      onCodeChange(initialCode);
    }
    return initialCode;
  });

  const refreshCode = () => {
    const newCode = generateCode();
    setCode(newCode);
    if (onCodeChange) {
      onCodeChange(newCode);
    }
  };

  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-600",
    "text-yellow-600",
  ];

  return (
    <div
      className="bg-green-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-green-300 transition-colors"
      onClick={refreshCode}
      title="Click to refresh code"
    >
      <div className="flex space-x-1 text-lg font-bold">
        {code.split("").map((digit, index) => (
          <span key={index} className={colors[index]}>
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
};

// Main Login Component
const LoginPage = () => {
  const [generatedCode, setGeneratedCode] = useState("");

  // Validation Schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username or Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    securityCode: Yup.string()
      .required("Security code is required")
      .test(
        "match",
        "Security code does not match",
        (value) => value === generatedCode
      ),
    rememberMe: Yup.boolean(),
  });

  // Initial Values
  const initialValues = {
    username: "",
    password: "",
    securityCode: "",
    rememberMe: false,
  };

  // Handle Form Submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", values);
      alert("Login successful!");

      // Reset form after successful submission
      resetForm();
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCodeChange = (newCode) => {
    setGeneratedCode(newCode);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left side - Image Container */}
            <div className="hidden lg:flex lg:w-1/2 p-8">
              <div className="w-full h-full bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/login-1-jJuG9VuNcc0siEPHeisG3fTjr4KCw0.png"
                  alt="Professional woman working on laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
              <div className="w-full max-w-md space-y-8">
                {/* Header */}
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Login
                  </h1>
                  <p className="text-gray-600">
                    Don't have an account?
                    <Link
                      to="/Register"
                      className="text-teal-500 hover:text-teal-600 font-medium"
                    >
                      Create Here
                    </Link>
                  </p>
                </div>

                {/* Formik Form */}
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                >
                  {({ isSubmitting, errors, touched, setFieldValue }) => (
                    <Form className="space-y-6">
                      {/* Username/Email Field */}
                      <div>
                        <Field
                          name="username"
                          type="text"
                          placeholder="Username or Email *"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all ${
                            errors.username && touched.username
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Password Field */}
                      <div>
                        <Field
                          name="password"
                          type="password"
                          placeholder="Your password *"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all ${
                            errors.password && touched.password
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Security Code Field */}
                      <div>
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                          <div className="flex-1">
                            <Field
                              name="securityCode"
                              type="text"
                              placeholder="Security code *"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all ${
                                errors.securityCode && touched.securityCode
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                            />
                          </div>
                          <SecurityCode onCodeChange={handleCodeChange} />
                        </div>
                        <ErrorMessage
                          name="securityCode"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Remember Me & Forgot Password */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <label className="flex items-center">
                          <Field
                            name="rememberMe"
                            type="checkbox"
                            className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                          />
                          <span className="ml-2 text-gray-600">
                            Remember me
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-slate-700 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Logging in..." : "Log in"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
