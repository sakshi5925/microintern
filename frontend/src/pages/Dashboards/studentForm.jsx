import { useState } from "react";
import axios from "axios";
import { use } from "react";
import { useEffect } from "react";

export default function StudentDetailsForm() {
  const [formData, setFormData] = useState({
    education: "",
    skills: "",
  });

  const [resume, setResume] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);


    
    const token = localStorage.getItem("token");
    useEffect(() => {
      console.log("Token from localStorage:", token);
      if (!token) {
        alert("You are not logged in. Please log in to submit your details.");
        window.location.href = "/login"; // Redirect to login page if not logged in
      }
    }, [token]);
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "resume") setResume(files[0]);
    else if (name === "profilePic") setProfilePicture(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();
    submissionData.append("education", formData.education);
    submissionData.append("skills", formData.skills);
    if (resume) submissionData.append("resume", resume);
    if (profilePicture) submissionData.append("profilePic", profilePicture);

 


    try {
      const res = await axios.post("http://localhost:5000/student/studentdocs", submissionData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Student details submitted!");
      console.log(res.data);
    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
      alert("Failed to submit details.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-white p-6 rounded-lg max-w-xl mx-auto shadow-lg"
      encType="multipart/form-data"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-100">Student Details</h2>

      <label className="block mb-2 text-gray-300">Education</label>
      <input
        type="text"
        name="education"
        value={formData.education}
        onChange={handleChange}
        className="w-full mb-4 p-2 bg-gray-800 border border-gray-600 rounded text-white"
        required
      />

      <label className="block mb-2 text-gray-300">Skills</label>
      <input
        type="text"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        className="w-full mb-4 p-2 bg-gray-800 border border-gray-600 rounded text-white"
        required
      />

      <label className="block mb-2 text-gray-300">Upload Resume (PDF only)</label>
      <input
        type="file"
        name="resume"
        accept=".pdf"
        onChange={handleFileChange}
        className="w-full mb-4 p-2 bg-gray-900 text-white border border-gray-600 rounded"
        required
      />

      <label className="block mb-2 text-gray-300">Upload Profile Picture</label>
      <input
        type="file"
        name="profilePic"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full mb-4 p-2 bg-gray-900 text-white border border-gray-600 rounded"
        required
      />

      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
      >
        Submit
      </button>
    </form>
  );
}
