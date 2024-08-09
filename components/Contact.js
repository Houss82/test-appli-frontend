"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://test-appli-backend.vercel.app/contact", {
        // L'URL doit pointer vers ton backend Express
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setResponseMessage(data.message || "Message envoyé avec succès");
    } catch (error) {
      setResponseMessage("Erreur lors de l'envoi du message");
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen">
      <h1 className="text-white">Contactez-nous</h1>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-3/4 m-4">
          <label className="text-white">Nom</label>
          <input
            className="p-2 rounded-lg"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-3/4 m-4">
          <label className="text-white text-">Téléphone</label>
          <input
            className="p-2 rounded-lg"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-3/4 m-4">
          <label className="text-white">Message</label>
          <textarea
            className="p-2 rounded-lg h-32"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="text-white bg-slate-300 m-auto p-4 rounded-lg mt-5"
          type="submit"
        >
          Envoyer
        </button>
      </form>
      {responseMessage && (
        <p className="text-green-500 text-center mt-8">{responseMessage}</p>
      )}
    </div>
  );
}
