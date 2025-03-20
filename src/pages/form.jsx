import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    title: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 py-32">
        <div className="max-w-[800px]">
          <h1 className="text-5xl font-bold mb-8">HUMAN SPACEFLIGHT INQUIRY</h1>
          <p className="text-lg mb-12 opacity-70">
            For human spaceflight inquiries, please submit the form below and a
            member of our team will follow up as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  className="bg-transparent border-b border-white/20 w-full focus:border-white/40 focus:outline-none placeholder:text-white/40 px-0 py-4"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="LAST NAME"
                  className="bg-transparent border-b border-white/20 w-full focus:border-white/40 focus:outline-none placeholder:text-white/40 px-0 py-4"
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="EMAIL"
                className="bg-transparent border-b border-white/20 w-full focus:border-white/40 focus:outline-none placeholder:text-white/40 px-0 py-4"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="COMPANY"
                className="bg-transparent border-b border-white/20 w-full focus:border-white/40 focus:outline-none placeholder:text-white/40 px-0 py-4"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="TITLE"
                className="bg-transparent border-b border-white/20 w-full focus:border-white/40 focus:outline-none placeholder:text-white/40 px-0 py-4"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="DETAILS"
                rows={4}
                className="bg-transparent border-b border-white/20 w-full focus:border-white/40 focus:outline-none placeholder:text-white/40 px-0 py-4 resize-none"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="border-2 border-white text-sm duration-200 hover:bg-white hover:text-black px-12 py-3 transition-colors"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
