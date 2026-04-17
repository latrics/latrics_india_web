import { useState } from "react";
import { postDemoRequest } from "../services/api";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

/**
 * State shape for tracking the outcome of the last submission attempt.
 */
const initialSubmitState = {
  type: "", // 'success' or 'error'
  message: "" // User-friendly feedback string
};

/**
 * Custom Hook: Encapsulates the demo request form state and HTTP submission flow.
 * 
 * Why a hook?
 * Moving this out of `DemoForm.jsx` keeps the UI component clean and allows us
 * to potentially reuse this network logic elsewhere easily.
 * 
 * @returns {Object} formData, setFormData, isSubmitting, submitState, handleFormSubmit
 */
export function useDemoRequest() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState(initialSubmitState);

  /**
   * Main submission handler triggered by the form's onSubmit event.
   * Handles preventing default behavior, toggling loading states, 
   * performing the network request, and updating feedback state.
   */
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState(initialSubmitState); // Reset previous message

    try {
      // Abstraction layer: separates form logic from API endpoint knowledge
      const result = await postDemoRequest(formData);

      if (result.ok) {
        setSubmitState({
          type: "success",
          message: result.data.message || "Demo request sent successfully."
        });
        setFormData(initialFormData); // Clear inputs on success
      } else {
        // Backend validation errors or controlled failures
        setSubmitState({
          type: "error",
          message: result.data.message || "We couldn't send your request. Please try again."
        });
      }
    } catch (error) {
      // Fatal network failures (e.g. server down, offline)
      console.error("[Form Error]", error);
      setSubmitState({
        type: "error",
        message: "We couldn't reach the server. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    submitState,
    handleFormSubmit
  };
}
