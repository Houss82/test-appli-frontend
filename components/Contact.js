"use client";
//Salut les amis
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [serverErrors, setServerErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // État pour le message de succès
  const [touched, setTouched] = useState({
    name: false,
    phoneNumber: false,
    email: false,
    message: false,
  });

  const validateName = () => {
    if (name.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Le nom doit avoir minimum 2 lettres",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
  };

  const validatePhoneNumber = () => {
    if (!phoneNumber.match(/^\d{10}$/)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Numéro de téléphone invalide",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i;
    if (!email.match(emailPattern)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email invalide",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const validateMessage = () => {
    if (message.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message obligatoire",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
    }
  };

  useEffect(() => {
    if (touched.name) validateName();
  }, [name, touched.name]);

  useEffect(() => {
    if (touched.phoneNumber) validatePhoneNumber();
  }, [phoneNumber, touched.phoneNumber]);

  useEffect(() => {
    if (touched.email) validateEmail();
  }, [email, touched.email]);

  useEffect(() => {
    if (touched.message) validateMessage();
  }, [message, touched.message]);

  const handleBlur = (field) => () => {
    setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateName();
    validatePhoneNumber();
    validateEmail();
    validateMessage();

    if (errors.name || errors.phoneNumber || errors.email || errors.message) {
      console.log("Form has errors:", errors);
      return;
    }

    try {
      const res = await fetch("https://test-appli-backend.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          phoneNumber,
          email,
          message,
          dateDue: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Réinitialiser les erreurs et le message de succès en cas de succès
        setErrors({ name: "", phoneNumber: "", email: "", message: "" });
        setServerErrors([]);
        setSuccessMessage("Votre message a été envoyé avec succès !"); // Ajoute un message de succès
        console.log("Form submitted successfully:", data);
      } else {
        // Afficher les erreurs du serveur
        setServerErrors(data.errors || ["Une erreur inattendue est survenue."]);
        setSuccessMessage(""); // Réinitialise le message de succès en cas d'échec
        console.log("Form submission failed:", data.errors);
      }
    } catch (error) {
      // Afficher une erreur si le fetch échoue
      setServerErrors(["Une erreur inattendue est survenue."]);
      setSuccessMessage(""); // Réinitialise le message de succès en cas d'échec
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-11/12">
      <form
        onSubmit={handleSubmit}
        className="py-4  px-10 sm:px-20 bg-gradient-to-r from-slate-900 to-slate-700 mt-4 border-t flex flex-col gap-5 w-5/6 sm:w-2/3 xxl:w-3/5"
      >
        <div>
          <input
            className="rounded-md mt-5 p-3 xl:p-5"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="fullName"
            placeholder="Nom"
            onBlur={handleBlur("name")}
          />
          {touched.name && errors.name && (
            <div className="text-red-600 px-5 py-1">{errors.name}</div>
          )}
        </div>
        <div>
          <input
            className="rounded-md mt-2 p-3 xl:p-5"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            type="text"
            id="phoneNumber"
            placeholder="Téléphone"
            onBlur={handleBlur("phoneNumber")}
          />
          {touched.phoneNumber && errors.phoneNumber && (
            <div className="text-red-600 px-5 py-2">{errors.phoneNumber}</div>
          )}
        </div>
        <div>
          <input
            className="rounded-md mt-2 p-3 xl:p-5"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="Email"
            onBlur={handleBlur("email")}
          />
          {touched.email && errors.email && (
            <div className="text-red-600 px-5 py-2">{errors.email}</div>
          )}
        </div>
        <div>
          <textarea
            className="rounded-md h-32 xl:h-40 mt-2 p-3 xl:p-5"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id="message"
            placeholder="Votre message"
            onBlur={handleBlur("message")}
          />
          {touched.message && errors.message && (
            <div className="text-red-600 px-5 py-2">{errors.message}</div>
          )}
        </div>

        <div className="bg-allostoreSaumon flex flex-col">
          {successMessage && ( // Affiche le message de succès si présent
            <div className="text-green-600 px-5 py-2 text-center font-semibold">
              {successMessage}
            </div>
          )}
        </div>
        <button
          className="bg-allostoreRouge hover:bg-allostoreGris p-3 my-5 text-allostoreBlanc font-bold rounded-full"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
