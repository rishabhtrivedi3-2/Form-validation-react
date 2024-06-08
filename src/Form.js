import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  CountrySelect,
  StateSelect,
  CitySelect,
} from "react-country-state-city";
import { NavLink, useNavigate } from "react-router-dom";

const Form = () => {
  const [error, setError] = useState(false);
  const [showHide, setShowHide] = useState("password");
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    Password: "",
    ContactNo: "",
    Country: "",
    State: "",
    City: "",
    panNo: "",
    AadharNo: "",
  });

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(data));
  };

  const validateEmail = (e) => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const value = e.target.value;
    if (value && value.match(isValidEmail)) {
      setError(true);
    } else {
      setError(false);
    }
    setData((prevData) => ({ ...prevData, email: value }));
  };

  const handlePassword = () => {
    setShowHide((prevShowHide) =>
      prevShowHide === "password" ? "text" : "password"
    );
  };

  const handleChange = (e, name) => {
    setData((prevData) => ({ ...prevData, [name]: e.target.value }));
  };

  const handlePhoneChange = (value) => {
    setData((prevData) => ({ ...prevData, ContactNo: value }));
  };

  const handleCountryChange = (value) => {
    setCountryId(value.id);
    setData((prevData) => ({ ...prevData, Country: value.name }));
  };

  const handleStateChange = (value) => {
    setStateId(value.id);
    setData((prevData) => ({ ...prevData, State: value.name }));
  };

  const handleCityChange = (value) => {
    setData((prevData) => ({ ...prevData, City: value.name }));
  };

  return (
    <div className="max-w-xl mx-auto mb-4 text-xl">
      <div className="border-2 border-t-purple-700 rounded-md bg-white shadow-sm">
        <h1 className="text-center font-semibold py-2">
          Form Validation React
        </h1>
      </div>

      <div className="border-2 mt-2 p-4 bg-white shadow-sm">
        <label className="font-semibold block mb-1">First Name</label>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          className="w-full border p-2"
          placeholder="Your answer"
          onChange={(e) => handleChange(e, "firstName")}
        />
      </div>

      <div className="border-2 mt-2 p-4 bg-white shadow-sm">
        <label className="font-semibold block mb-1">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          className="w-full border p-2"
          placeholder="Your answer"
          onChange={(e) => handleChange(e, "lastName")}
        />
      </div>

      <div className="border-2 mt-2 p-4 bg-white shadow-sm">
        <label className="font-semibold block mb-1">User Name</label>
        <input
          type="text"
          name="userName"
          value={data.userName}
          className="w-full border p-2"
          placeholder="Your answer"
          onChange={(e) => handleChange(e, "userName")}
        />
      </div>

      <div className="border-2 mt-2 p-4 bg-white shadow-sm">
        <label className="font-semibold block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          className={`w-full border p-2 ${
            error ? "border-green-500" : "border-red-500"
          }`}
          placeholder="Your answer"
          onChange={validateEmail}
        />
        {data.email && (
          <span className="text-sm" style={{ color: error ? "green" : "red" }}>
            {error ? "Valid Email" : "Invalid Email"}
          </span>
        )}
      </div>

      <div className="border-2 mt-2 p-4 bg-white shadow-sm">
        <label className="font-semibold block mb-1">Password</label>
        <div className="flex items-center">
          <input
            type={showHide}
            name="Password"
            value={data.Password}
            className="w-full border p-2"
            placeholder="Your answer"
            onChange={(e) => handleChange(e, "Password")}
          />
          <button onClick={handlePassword} type="button" className="ml-2">
            {showHide === "password" ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
        </div>
      </div>

      <div className="border-2 mt-2 p-4 bg-white shadow-sm">
        <label className="font-semibold block mb-1">Contact No.</label>
        <PhoneInput
          placeholder="Enter phone number"
          defaultCountry="IN"
          value={data.ContactNo}
          onChange={handlePhoneChange}
          className="w-full border p-2"
        />
      </div>

      <div className="border-2 mt-2 p-4 bg-white shadow-sm">
        <label className="font-semibold block mb-1">Country</label>
        <CountrySelect
          className="cursor-pointer w-full border p-2"
          onChange={handleCountryChange}
          placeHolder="Select Country"
        />
      </div>

      <div className="border-2 mt-2 p-4 bg-white shadow-sm">
        <label className="font-semibold block mb-1">State</label>
        <StateSelect
          countryid={countryId}
          onChange={handleStateChange}
          placeHolder="Select State"
        />
      </div>

      <div className="border-2 mt-2 p-4 bg-white shadow-sm">
        <label className="font-semibold block mb-1">City</label>
        <CitySelect
          countryId={countryId}
          stateId={stateId}
          onChange={handleCityChange}
          placeHolder="Select City"
        />
      </div>
      <div className="border-2 mt-2 p-4 bg-white shadow-sm">
        <label className="font-semibold block mb-1">Pan No</label>
        <input
          type="text"
          name="panNo"
          value={data.panNo}
          className="w-full border p-2"
          onChange={(e) => handleChange(e, "panNo")}
        />
      </div>

      <div className="border-2 mt-2 p-4 bg-white shadow-sm">
        <label className="font-semibold block mb-1">Aadhar No</label>
        <input
          type="text"
          name="AadharNo"
          value={data.AadharNo}
          className="w-full border p-2"
          onChange={(e) => handleChange(e, "AadharNo")}
        />
      </div>
      <NavLink
        className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handleSubmit}
        to={"/signup"}
      >
        Submit
      </NavLink>
    </div>
  );
};

export default Form;
