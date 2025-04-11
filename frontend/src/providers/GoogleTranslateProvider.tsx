// components/GoogleTranslateProvider.jsx
import { useEffect } from "react";

const GoogleTranslateProvider = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ig,yo,ha",
            layout: google.translate.TranslateElement.InlineLayout.VERTICAL,
          },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        position: "fixed",
        bottom: 10,
        right: 10,
        zIndex: 9999,
        background: "black", // u fit change color here or remove em totally
        padding: 8,
        borderRadius: "4px",
      }}
    />
  );
};

export default GoogleTranslateProvider;
