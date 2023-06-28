"use client";
import { useState } from "react";
import en from "../../locales/en.json";
import da from "../../locales/da.json";
import styles from "./Home.module.scss"; // Import SCSS file
import Image from "next/image";

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [selectedImage, setSelectedImage] = useState(null);
  const translations = currentLanguage === "en" ? en : da;

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "en" ? "da" : "en");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <>
      <button className={styles.button} onClick={toggleLanguage}>
        {currentLanguage === "en" ? "Switch to Danish" : "Switch to English"}
      </button>
      <h2>Current Language: {translations.language}</h2>
      <form>
        <label htmlFor="name-field">
          <p>{translations.name_field.label}:</p>
        </label>
        <input
          type="text"
          name="name-field"
          id="name-field"
          placeholder={translations.name_field.placeholder}
        />
        <br />
        <br />
        <label htmlFor="phone-field">
          <p>{translations.telephone_field.label}:</p>
        </label>
        <input
          type="tel"
          name="phone-field"
          id="phone-field"
          placeholder={translations.telephone_field.placeholder}
        />
        <br />
        <br />
        <label htmlFor="email-field">
          <p>{translations.email_field.label}:</p>
        </label>
        <input
          type="email"
          name="email-field"
          id="email-field"
          placeholder={translations.email_field.placeholder}
        />
        <br />
        <br />
        <label htmlFor="image-field">
          <p>{translations.image_field.label}:</p>
        </label>
        <input
          type="file"
          name="image-field"
          id="image-field"
          onChange={handleImageChange}
        />
        {selectedImage && (
          <Image
            className={styles.thumbnail}
            src={selectedImage}
            alt="Selected thumbnail"
            width={150}
            height={150}
          />
        )}
        <br />
        <br />
        <label htmlFor="image-field">
          <p>{translations.submit_button.label}:</p>
        </label>
        <input
          className={styles.submitButton}
          type="submit"
          value={translations.submit_button.button_text}
        />
      </form>
    </>
  );
}
