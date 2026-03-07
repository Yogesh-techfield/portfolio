import React, { useState } from 'react';

const Portfolio = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Connects to the backend created above
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) alert("Message Sent!");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-400">Yogesh | Portfolio</h1>
        <div className="space-x-6">
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      <section className="py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-4">Full Stack Developer</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Specializing in MERN stack and building responsive web applications.</p>
      </section>

      {/* Projects Section - referenced in your report */}
      <section id="projects" className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold">Virtual Exam Trainer</h3>
          <p className="text-gray-400 mt-2">A platform for simulated testing environments.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold">Personal Portfolio</h3>
          <p className="text-gray-400 mt-2">The site you are currently viewing.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="p-10 max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="p-3 bg-gray-800 rounded" 
                 onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <input type="email" placeholder="Email" className="p-3 bg-gray-800 rounded" 
                 onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <textarea placeholder="Message" className="p-3 bg-gray-800 rounded" 
                 onChange={(e) => setFormData({...formData, message: e.target.value})} />
          <button className="bg-blue-500 py-3 rounded font-bold hover:bg-blue-600">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;