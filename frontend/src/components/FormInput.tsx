// FormInput.tsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Imageupload from "../assets/img/imageupload.svg"; // adjust path if needed
import "./FormInput.css";

const FormInput: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isComposing, setIsComposing] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputText]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearFileSelection = () => {
    setSelectedFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async () => {
    if (inputText.trim() || selectedFile) {
      try {
        const response = await fetch(
          `https://odinseye-351h.onrender.com/api/fact-check?query=${encodeURIComponent(
            inputText
          )}`
        );
        const data = await response.json();

        navigate("/quick-check/result", {
          state: { result: data, query: inputText },
        });

        setInputText("");
        clearFileSelection();

        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
        }

        setTimeout(() => {
          if (textareaRef.current) textareaRef.current.focus();
        }, 0);
      } catch (error) {
        console.error("Error calling API:", error);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !isComposing) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="enhanced-form-container">
      <textarea
        ref={textareaRef}
        className="enhanced-text-input"
        placeholder="What would you like to check?"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        rows={1}
      />

      {imagePreview && (
        <div className="image-preview-container">
          <img
            src={imagePreview}
            alt="Selected file preview"
            className="image-preview"
          />
          <button
            className="remove-image"
            onClick={clearFileSelection}
            aria-label="Remove image"
          >
            ×
          </button>
        </div>
      )}

      <div className="enhanced-button-group">
        <div className="left-buttons">
          <label className="upload-button">
            <span className="icon">
              <img src={Imageupload} alt="imageupload" />
            </span>{" "}
            Click to upload screenshot or image
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>

          <div className="text-dropdown">
            <span>Text</span>
            <span className="dropdown-icon">▼</span>
          </div>
        </div>

        <button
          className={`quick-check-button ${
            !inputText.trim() && !selectedFile ? "disabled" : ""
          }`}
          onClick={handleSubmit}
          disabled={!inputText.trim() && !selectedFile}
        >
          Quick check
        </button>
      </div>
    </div>
  );
};

export default FormInput;
