import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Navbar from "../CommonComponent/Navbar";

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

// Main Registration Component
const RegistrationForm = () => {
  const [generatedCode, setGeneratedCode] = useState("");

  // Validation Schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    securityCode: Yup.string()
      .required("Security code is required")
      .test(
        "match",
        "Security code does not match",
        (value) => value === generatedCode
      ),
    userType: Yup.string().required("Please select user type"),
  });

  // Initial Values
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    securityCode: "",
    userType: "vendor", // Default to vendor as shown in image
  };

  // Handle Form Submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", values);
      alert("Registration successful!");

      // Reset form after successful submission
      resetForm();
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCodeChange = (newCode) => {
    setGeneratedCode(newCode);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Create an Account
            </h1>
            <p className="text-gray-600">
              Already have an account?
              <Link
                to="/Login"
                className="text-teal-500 hover:text-teal-600 font-medium"
              >
                Login
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
            {({ isSubmitting, errors, touched, values }) => (
              <Form className="space-y-6">
                {/* Username Field */}
                <div>
                  <Field
                    name="username"
                    type="text"
                    placeholder="Username"
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

                {/* Email Field */}
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
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

                {/* Confirm Password Field */}
                <div>
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="confirmPassword"
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit & Register"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
