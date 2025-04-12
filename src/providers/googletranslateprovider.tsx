import { useEffect } from "react";

declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: {
          new (options: GoogleTranslateOptions, elementId: string): void;
          InlineLayout: {
            HORIZONTAL: number;
            VERTICAL: number;
            SIMPLE: number;
          };
        };
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

interface GoogleTranslateOptions {
  pageLanguage: string;
  includedLanguages: string;
  layout?: number;
  autoDisplay?: boolean;
}

const GoogleTranslateProvider = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script") || window.google?.translate?.TranslateElement) {
        return;
      }

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      window.googleTranslateElementInit = () => {
        if (!window.google?.translate?.TranslateElement) {
          console.error("Google Translate API failed to load");
          return;
        }

        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,ig,yo,ha",
              layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
            },
            "google_translate_element"
          );
        } catch (error) {
          console.error("Error initializing Google Translate:", error);
        }
      };

      script.onerror = () => console.error("Failed to load Google Translate script");
      document.body.appendChild(script);

      return () => {
        document.getElementById("google-translate-script")?.remove();
        delete window.googleTranslateElementInit;
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        backgroundColor: "#360083",
        padding: "8px",
        borderRadius: "4px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    />
  );
};

export default GoogleTranslateProvider;