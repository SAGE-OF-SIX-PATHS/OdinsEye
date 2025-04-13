import { useEffect } from "react";

const GoogleTranslateProvider = () => {
  useEffect(() => {
    const addScript = () => {
      if (document.getElementById("google-translate-script")) return;
      if (window.google?.translate?.TranslateElement) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      window.googleTranslateElementInit = () => {
        if (!window.google?.translate?.TranslateElement) return;

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ig,yo,ha",
            layout: window.google.translate.TranslateElement.InlineLayout?.VERTICAL,
          },
          "google_translate_element"
        );

        const observer = new MutationObserver(() => {
          const iframe = document.querySelector<HTMLIFrameElement>(
            'iframe[src*="translate.google.com"]'
          );
          if (iframe) {
            // Properly add event listener for iframe load
            iframe.addEventListener("load", () => {
              const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
              if (iframeDoc) {
                const style = iframeDoc.createElement("style");
                style.innerHTML = `
                  body {
                    background-color: #6E2BD9 !important;
                    font-family: "Work Sans", sans-serif !important;
                    color: white !important;
                  }
                  .goog-te-menu-value, .goog-te-menu2 {
                    color: white !important;
                    font-family: "Work Sans", sans-serif !important;
                  }
                  .goog-te-gadget .goog-te-combo {
                    background-color: #6E2BD9 !important;
                    color: white !important;
                    border: 1px solid white !important;
                    border-radius: 4px !important;
                    padding: 4px !important;
                  }
                `;
                iframeDoc.head.appendChild(style);
              }
            });
            observer.disconnect();
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      };

      document.body.appendChild(script);

      return () => {
        const script = document.getElementById("google-translate-script");
        if (script?.parentNode) {
          script.parentNode.removeChild(script);
        }
        delete window.googleTranslateElementInit;
      };
    };

    addScript();
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        backgroundColor: "#6E2BD9",
        fontFamily: "'Work Sans', sans-serif",
        padding: "8px",
        borderRadius: "4px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    />
  );
};

export default GoogleTranslateProvider;