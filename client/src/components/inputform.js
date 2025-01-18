import React, { useState } from "react";
import axios from "axios";

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [image, setImage] = useState(null);
  const [formId, setFormId] = useState(null);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/submit-form`,
        formData
      );
      setFormId(response.data.id);
      setMessage("Form submitted successfully");
      setFormData({
        name: "",
        phonenumber: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
      });
      
   alert("Form submitted successfully. Now you can upload an image")
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Form submission failed.");
    }
  };

  const handleImageUpload = async () => {
    if (!image || !formId) {
      setMessage("Please select an image and submit the form first.");
      return;
    }

    const formDataToUpload = new FormData();
    formDataToUpload.append("image", image);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/upload-image/${formId}`,
        formDataToUpload
      );
      setMessage("Image uploaded successfully.");
      setImage("")
    } catch (error) {
      console.error("Error uploading image:", error);
      setMessage("Image upload failed.");
    }
  };

  return (
    <div className="w-full h-screen max-w-xl mx-auto p-6 bg-black rounded-xl shadow-xl">
      <h2 className="text-2xl text-white font-semibold mb-6 text-center">
        Submit Form and Upload Screenshot
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-transparent border-[#C3AC44] hover:border-yellow-400 border-2 text-white focus:outline-nonwhite placeholder:text-white focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
            value={formData.phonenumber}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-transparent border-[#C3AC44] hover:border-yellow-400 border-2 text-white placeholder:text-white  focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-transparent border-[#C3AC44] hover:border-yellow-400 border-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-transparent border-[#C3AC44] hover:border-yellow-400 border-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-transparent border-[#C3AC44] hover:border-yellow-400 border-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-transparent border-[#C3AC44] hover:border-yellow-400 border-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 rounded-lg bg-[#A9850B] hover:bg-yellow-600 text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        >
          Submit Form
        </button>
      </form>

      <div className="mt-4">
        <h3 className="text-xl text-center text-black font-bold mb-2">
         Upload the Payment Screenshot!
        </h3>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full max-w-xs p-3 rounded-lg bg-gray-100 border border-gray-300 text-black file:border-0 file:rounded-md file:p-2 file:px-10 file:bg-[#A9850B] file:text-white file:font-bold hover:file:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <button
            onClick={handleImageUpload}
            className="w-full max-w-xs px-4 py-3 rounded-lg bg-[#A9850B] hover:bg-yellow-600 text-white font-bold focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            Upload Screenshot
          </button>
        </div>
      </div>
      {message && <p className="mt-4 text-center text-white">{message}</p>}
    </div>
  );
};

export default InputForm;
