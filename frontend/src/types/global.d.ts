interface GoogleTranslateInlineLayout {
    HORIZONTAL: number;
    VERTICAL: number;
    SIMPLE: number;
  }
  
  interface GoogleTranslateElement {
    new (options: GoogleTranslateOptions, elementId: string): void;
    InlineLayout?: GoogleTranslateInlineLayout;
  }
  
  interface GoogleTranslate {
    translate?: {
      TranslateElement?: GoogleTranslateElement;
    };
  }
  
  interface GoogleTranslateOptions {
    pageLanguage: string;
    includedLanguages: string;
    layout?: number;
    autoDisplay?: boolean;
  }
  
  declare global {
    interface Window {
      googleTranslateElementInit?: () => void;
      google?: GoogleTranslate;
    }
  }