import { useState } from "react";
import { postDemoRequest } from "../services/api";

const initialFormData = {
  name: "",
  email: "",
  phone: ""
};

const initialSubmitState = {
  type: "",
  message: ""
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState(initialSubmitState);

    try {
      const result = await postDemoRequest(formData);

      if (result.ok) {
        setSubmitState({
          type: "success",
          message: result.data.message || "Demo request sent successfully."
        });
        setFormData(initialFormData);
      } else {
        setSubmitState({
          type: "error",
          message: result.data.message || "We couldn't send your request. Please try again."
        });
      }
    } catch (error) {
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
