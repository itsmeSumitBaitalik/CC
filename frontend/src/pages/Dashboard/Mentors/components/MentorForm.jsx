import { useState } from "react";
import { toast } from "react-toastify";
import { createMentor } from "../../../../api/allApis/mentors.api.js";

export default function MentorForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    yearDept: "",
    skillsStr: "",
    availability: "Weekdays only",
    bio: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.bio) {
      toast.warning("Name and Bio are required!");
      return;
    }

    let year = null;
    let department = formData.yearDept;
    
    const yearMatch = formData.yearDept.match(/(\d)/);
    if (yearMatch) {
      year = parseInt(yearMatch[0], 10);
      department = formData.yearDept.replace(/.*(?:•|-|:)\s*/, "").trim();
      if (department === formData.yearDept) {
         department = formData.yearDept.replace(/\d(st|nd|rd|th)?\s*year\s*/i, "").trim();
      }
    }

    const role = year ? "student" : "alumni";
    const skills = formData.skillsStr.split(",").map(s => s.trim()).filter(Boolean);
    const finalBio = formData.availability ? `${formData.bio}\n\nAvailability: ${formData.availability}` : formData.bio;

    try {
      setIsLoading(true);
      const res = await createMentor({
         name: formData.name,
         role,
         year,
         department,
         skills,
         bio: finalBio,
         categories: ["tech"] 
      });
      if (res && res.data && res.data.success) {
         toast.success("Mentor profile created!");
         onClose();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit application");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`form-panel ${isOpen ? 'open' : ''}`}>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="retro-label">Full Name</label>
          <input className="retro-input" placeholder="Your name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="retro-label">Year / Department</label>
          <input className="retro-input" placeholder="e.g. 3rd Year • Computer Science" value={formData.yearDept} onChange={(e) => handleChange("yearDept", e.target.value)} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="retro-label">Primary Skills</label>
          <input className="retro-input" placeholder="React, DSA, Design, etc." value={formData.skillsStr} onChange={(e) => handleChange("skillsStr", e.target.value)} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="retro-label">Availability</label>
          <select className="retro-select" value={formData.availability} onChange={(e) => handleChange("availability", e.target.value)}>
            <option>Weekdays only</option>
            <option>Weekends only</option>
            <option>Anytime</option>
            <option>By appointment</option>
          </select>
        </div>
        <div className="md:col-span-2 flex flex-col gap-1">
          <label className="retro-label">Why do you want to mentor?</label>
          <textarea rows="3" className="retro-input resize-none" placeholder="Tell juniors what they can expect from sessions with you..." value={formData.bio} onChange={(e) => handleChange("bio", e.target.value)}></textarea>
        </div>
        <div className="md:col-span-2 flex gap-4">
          <button onClick={handleSubmit} disabled={isLoading} className="retro-btn retro-btn-dark px-8 py-3 disabled:opacity-50">
            {isLoading ? "Submitting..." : "Submit Application →"}
          </button>
          <button onClick={onClose} disabled={isLoading} className="retro-btn px-8 py-3">Cancel</button>
        </div>
      </div>
    </div>
  );
}
