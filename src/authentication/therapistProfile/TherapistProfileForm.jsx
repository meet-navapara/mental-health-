import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Layout from "../../components/Layout";
import signUp_brain from "../../assets/signup_brain.png";
import TherapistStep1PersonalInfo from "./TherapistStep1PersonalInfo";
import TherapistStep2EducationCertification from "./TherapistStep2EducationCertification";
import TherapistStep3Specializations from "./TherapistStep3Specializations";
import TherapistStep4Review from "./TherapistStep4Review";
import TherapistEducationModal from "./TherapistEducationModal";
import TherapistCertificationModal from "./TherapistCertificationModal";
import TherapistExperienceModal from "./TherapistExperienceModal";
import {
  FaUserCircle,
  FaGraduationCap,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  { id: 1, title: "Personal Info", icon: <FaUserCircle /> },
  { id: 2, title: "Education & Certification", icon: <FaGraduationCap /> },
  { id: 3, title: "Specializations", icon: <FaStar /> },
  { id: 4, title: "Review", icon: <FaCheckCircle /> },
];

const getValidationSchema = (step) => {
  switch (step) {
    case 1:
      return Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string()
          .email("Please enter a valid email address")
          .required("Email is required"),
        phone: Yup.string().required("Phone number is required"),
        dob: Yup.string().required("Date of birth is required"),
        gender: Yup.string().required("Gender is required"),
        city: Yup.string().required("City is required"),
        country: Yup.string().required("Country is required"),
        bio: Yup.string().required("Bio is required"),
      });
    case 2:
      // Remove validation for second step as per user request
      return Yup.object().shape({});
    case 3:
      return Yup.object().shape({
        specializations: Yup.array()
          .min(1, "At least one specialization is required")
          .required("Specializations is required"),
        languages: Yup.array()
          .min(1, "At least one language is required")
          .required("Languages is required"),
      });
    default:
      return Yup.object().shape({});
  }
};

const TherapistProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isCertificationModalOpen, setIsCertificationModalOpen] =
    useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);

  const isLastStep = currentStep === steps.length;
  const isFirstStep = currentStep === 1;

  const initialValues = {
    profilePhoto: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    city: "",
    country: "",
    bio: "",
    videoIntroduction: null,
  };

  const handleNext = (values, actions) => {
    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    } else {
      alert("Form submitted: " + JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = (step, formikProps) => {
    switch (step) {
      case 1:
        return <TherapistStep1PersonalInfo {...formikProps} />;
      case 2:
        return (
          <TherapistStep2EducationCertification
            {...formikProps}
            isEducationModalOpen={isEducationModalOpen}
            setIsEducationModalOpen={setIsEducationModalOpen}
            isCertificationModalOpen={isCertificationModalOpen}
            setIsCertificationModalOpen={setIsCertificationModalOpen}
            isExperienceModalOpen={isExperienceModalOpen}
            setIsExperienceModalOpen={setIsExperienceModalOpen}
          />
        );
      case 3:
        return <TherapistStep3Specializations {...formikProps} />;
      case 4:
        return <TherapistStep4Review {...formikProps} />;
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema(currentStep)}
      onSubmit={handleNext}
    >
      {(formikProps) => (
        <Layout img={signUp_brain}>
          <div
            className={
              isEducationModalOpen ||
              isCertificationModalOpen ||
              isExperienceModalOpen
                ? "opacity-10 pointer-events-none w-full max-w-lg rounded-lg font-sans text-[18px] leading-[100%] tracking-[0px] mt-10 pt-10"
                : "w-full max-w-lg rounded-lg font-sans text-[18px] leading-[100%] tracking-[0px] mt-10 pt-6 h-screen"
            }
          >
            <div className="mb-6">
              <h2 className="text-[22px] font-semibold text-gray-800 text-center">
                Create Your Therapist Profile
              </h2>
              <div className="flex items-center justify-between w-full max-w-3xl mx-auto mt-8">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="relative flex-1 flex flex-col items-center"
                  >
                    {/* Circle */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 bg-white transition-all duration-300 ${
                        currentStep === step.id
                          ? "border-[#65C6F2] bg-blue-100 text-[#65C6F2]"
                          : currentStep > step.id
                          ? "border-[#65C6F2] text-[#65C6F2]"
                          : "border-gray-300 text-gray-400"
                      }`}
                    >
                      {step.icon}
                    </div>

                    {/* Label */}
                    <span className="text-xs mt-2 text-black text-center whitespace-nowrap">
                      {step.title}
                    </span>

                    {/* Connector line */}
                    {index !== steps.length - 1 && (
                      <div className="absolute top-1/3 left-[calc(50%+25px)] w-[calc(100%-50px)] -translate-y-1/2">
                        {/* 20px = half circle width; 40px = full circle width */}
                        <div
                          className={`h-[2px] ${
                            currentStep > step.id
                              ? "bg-[#65C6F2]"
                              : "bg-gray-300"
                          }`}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Form>
              {renderStep(currentStep, formikProps)}
              <div
                className={`flex justify-between gap-4 mt-6 ${
                  isFirstStep ? "" : "flex-row"
                }`}
              >
                {!isFirstStep && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2 w-[50%] gap-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Back
                  </button>
                )}

                <button
                  type="submit"
                  disabled={formikProps.isSubmitting && currentStep !== 2}
                  className={`${
                    isFirstStep ? "w-full" : "w-[50%]"
                  } bg-[#65C6F2] text-white py-3 rounded-md hover:bg-[#4aa0d8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isLastStep ? "Submit" : "Save & Next"}
                </button>
              </div>
            </Form>
          </div>
          <TherapistEducationModal
            isOpen={isEducationModalOpen}
            onClose={() => setIsEducationModalOpen(false)}
          />
          <TherapistCertificationModal
            isOpen={isCertificationModalOpen}
            onClose={() => setIsCertificationModalOpen(false)}
          />
          <TherapistExperienceModal
            isOpen={isExperienceModalOpen}
            onClose={() => setIsExperienceModalOpen(false)}
          />
        </Layout>
      )}
    </Formik>
  );
};

export default TherapistProfileForm;
