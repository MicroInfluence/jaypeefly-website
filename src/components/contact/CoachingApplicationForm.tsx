"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import {
  coachingApplicationSchema,
  coachingFormatOptions,
} from "@/lib/validations/application";

interface CoachingApplicationFormProps {
  initialFormat?: string;
}

type FormatOption = (typeof coachingFormatOptions)[number];

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  location: string;
  preferredFormat: FormatOption;
  primaryGoal: string;
  fitnessExperience: string;
  currentChallenges: string;
  whyStart: string;
  additionalInfo: string;
  privacyConsent: boolean;
  website: string; // honeypot
}

function normalizeFormat(param?: string): FormatOption {
  if (!param) return "Not Sure";
  const lower = param.toLowerCase();
  if (lower === "online") return "Online";
  if (lower === "in-person" || lower === "inperson") return "In-Person";
  return "Not Sure";
}

export function CoachingApplicationForm({
  initialFormat,
}: CoachingApplicationFormProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    preferredFormat: normalizeFormat(initialFormat),
    primaryGoal: "",
    fitnessExperience: "",
    currentChallenges: "",
    whyStart: "",
    additionalInfo: "",
    privacyConsent: false,
    website: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState<string>("");
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const updateField = <K extends keyof FormValues>(
    field: K,
    value: FormValues[K]
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (submitState === "error") {
      setSubmitState("idle");
      setServerError("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError("");

    const parsed = coachingApplicationSchema.safeParse({
      ...values,
      age: values.age,
    });

    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      }
      setFieldErrors(nextErrors);
      setSubmitState("error");
      setServerError("Please review the highlighted fields before submitting.");
      return;
    }

    setFieldErrors({});
    setSubmitState("submitting");

    try {
      const response = await fetch("/api/coaching-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        id?: string | null;
        error?: string;
        fieldErrors?: Record<string, string>;
      } | null;

      if (!response.ok || !payload?.ok) {
        if (payload?.fieldErrors) {
          setFieldErrors(payload.fieldErrors);
        }
        setSubmitState("error");
        setServerError(
          payload?.error ||
            "Your application could not be submitted right now. Please try again shortly."
        );
        return;
      }

      setSubmissionId(payload.id ?? null);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
      setServerError(
        "Network error while submitting your application. Please check your connection and try again."
      );
    }
  };

  if (submitState === "success") {
    return (
      <div
        id="coaching-application-form"
        className="border border-[#F2A0C0]/40 bg-[#111318] p-7 sm:p-10 flex flex-col gap-5"
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex w-fit items-center gap-2 border border-[#F2A0C0]/40 bg-[#F2A0C0]/10 px-3 py-1.5 font-heading text-xs uppercase tracking-[0.18em] text-[#F2A0C0]">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Application Received
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
          Thank You, {values.fullName}.
        </h2>

        <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
          Your JAYPEEFLY coaching application has been securely recorded for
          Patrick Jeremy to review. You will be contacted via the email or
          phone/WhatsApp details you provided to discuss your goals, preferred
          format ({values.preferredFormat}), availability, and next steps.
        </p>

        {submissionId ? (
          <p className="font-mono text-xs text-[#A7A9B0]">
            Reference ID: <span className="text-white">{submissionId}</span>
          </p>
        ) : null}

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setValues({
                fullName: "",
                email: "",
                phone: "",
                age: "",
                location: "",
                preferredFormat: "Not Sure",
                primaryGoal: "",
                fitnessExperience: "",
                currentChallenges: "",
                whyStart: "",
                additionalInfo: "",
                privacyConsent: false,
                website: "",
              });
              setSubmissionId(null);
              setSubmitState("idle");
            }}
            className="border border-white/15 px-5 py-3 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#F2A0C0] hover:text-[#F2A0C0]"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  const inputBaseClass =
    "w-full border bg-[#08090B] px-4 py-3 text-base sm:text-sm text-white placeholder:text-white/30 transition-colors focus:border-[#F2A0C0] focus:outline-none";

  const errorClass = (name: string) =>
    fieldErrors[name] ? "border-rose-400" : "border-white/15";

  return (
    <form
      id="coaching-application-form"
      onSubmit={handleSubmit}
      noValidate
      className="border border-white/10 bg-[#111318] p-5 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-7"
    >
      <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
        <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
          Option 02 · Coaching Application
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
          Apply for Personal Coaching
        </h2>
        <p className="text-sm text-[#A7A9B0] leading-relaxed">
          Provide honest details about your starting point, lifestyle, and goals
          so Patrick can give you a meaningful response.
        </p>
      </div>

      {/* Global Server / Validation Alert */}
      {submitState === "error" && serverError ? (
        <div
          role="alert"
          className="flex items-start gap-3 border border-rose-400/50 bg-rose-950/30 p-4 text-sm text-rose-100"
        >
          <AlertCircle
            className="mt-0.5 h-4 w-4 shrink-0 text-rose-300"
            aria-hidden="true"
          />
          <p className="leading-relaxed">{serverError}</p>
        </div>
      ) : null}

      {/* Honeypot Field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      {/* Personal Details Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-xs font-heading uppercase tracking-[0.14em] text-white"
          >
            Full Name <span className="text-[#F2A0C0]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Your full name"
            value={values.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            aria-invalid={Boolean(fieldErrors.fullName)}
            aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
            className={`${inputBaseClass} ${errorClass("fullName")}`}
          />
          {fieldErrors.fullName ? (
            <p id="fullName-error" className="text-xs text-rose-300">
              {fieldErrors.fullName}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs font-heading uppercase tracking-[0.14em] text-white"
          >
            Email Address <span className="text-[#F2A0C0]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={`${inputBaseClass} ${errorClass("email")}`}
          />
          {fieldErrors.email ? (
            <p id="email-error" className="text-xs text-rose-300">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-xs font-heading uppercase tracking-[0.14em] text-white"
          >
            Phone / WhatsApp Number <span className="text-[#F2A0C0]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+CountryCode Number"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            className={`${inputBaseClass} ${errorClass("phone")}`}
          />
          {fieldErrors.phone ? (
            <p id="phone-error" className="text-xs text-rose-300">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="age"
              className="text-xs font-heading uppercase tracking-[0.14em] text-white"
            >
              Age <span className="text-[#F2A0C0]">*</span>
            </label>
            <input
              id="age"
              name="age"
              type="number"
              min={16}
              max={100}
              required
              placeholder="e.g. 28"
              value={values.age}
              onChange={(e) => updateField("age", e.target.value)}
              aria-invalid={Boolean(fieldErrors.age)}
              aria-describedby={fieldErrors.age ? "age-error" : undefined}
              className={`${inputBaseClass} ${errorClass("age")}`}
            />
            {fieldErrors.age ? (
              <p id="age-error" className="text-xs text-rose-300">
                {fieldErrors.age}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="location"
              className="text-xs font-heading uppercase tracking-[0.14em] text-white"
            >
              Location <span className="text-[#F2A0C0]">*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="City, Country"
              value={values.location}
              onChange={(e) => updateField("location", e.target.value)}
              aria-invalid={Boolean(fieldErrors.location)}
              aria-describedby={fieldErrors.location ? "location-error" : undefined}
              className={`${inputBaseClass} ${errorClass("location")}`}
            />
            {fieldErrors.location ? (
              <p id="location-error" className="text-xs text-rose-300">
                {fieldErrors.location}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      {/* Preferred Format Selector */}
      <fieldset className="flex flex-col gap-3">
        <legend className="text-xs font-heading uppercase tracking-[0.14em] text-white">
          Preferred Coaching Format <span className="text-[#F2A0C0]">*</span>
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {coachingFormatOptions.map((option) => {
            const isSelected = values.preferredFormat === option;
            return (
              <label
                key={option}
                className={`flex cursor-pointer items-center justify-between border px-4 py-3.5 text-sm transition-colors ${
                  isSelected
                    ? "border-[#F2A0C0] bg-[#F2A0C0]/10 text-white"
                    : "border-white/15 bg-[#08090B] text-[#A7A9B0] hover:border-white/30"
                }`}
              >
                <span className="font-medium">{option}</span>
                <input
                  type="radio"
                  name="preferredFormat"
                  value={option}
                  checked={isSelected}
                  onChange={() => updateField("preferredFormat", option)}
                  className="accent-[#F2A0C0] h-4 w-4"
                />
              </label>
            );
          })}
        </div>
        {fieldErrors.preferredFormat ? (
          <p className="text-xs text-rose-300">{fieldErrors.preferredFormat}</p>
        ) : null}
      </fieldset>

      {/* Goals & Background */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="primaryGoal"
            className="text-xs font-heading uppercase tracking-[0.14em] text-white"
          >
            Primary Fitness Goal <span className="text-[#F2A0C0]">*</span>
          </label>
          <input
            id="primaryGoal"
            name="primaryGoal"
            type="text"
            required
            placeholder="e.g. Sustainable fat loss, strength, daily routine"
            value={values.primaryGoal}
            onChange={(e) => updateField("primaryGoal", e.target.value)}
            aria-invalid={Boolean(fieldErrors.primaryGoal)}
            aria-describedby={
              fieldErrors.primaryGoal ? "primaryGoal-error" : undefined
            }
            className={`${inputBaseClass} ${errorClass("primaryGoal")}`}
          />
          {fieldErrors.primaryGoal ? (
            <p id="primaryGoal-error" className="text-xs text-rose-300">
              {fieldErrors.primaryGoal}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="fitnessExperience"
            className="text-xs font-heading uppercase tracking-[0.14em] text-white"
          >
            Fitness Experience <span className="text-[#F2A0C0]">*</span>
          </label>
          <input
            id="fitnessExperience"
            name="fitnessExperience"
            type="text"
            required
            placeholder="e.g. Complete beginner, returning after a break, consistent gym-goer"
            value={values.fitnessExperience}
            onChange={(e) => updateField("fitnessExperience", e.target.value)}
            aria-invalid={Boolean(fieldErrors.fitnessExperience)}
            aria-describedby={
              fieldErrors.fitnessExperience
                ? "fitnessExperience-error"
                : undefined
            }
            className={`${inputBaseClass} ${errorClass("fitnessExperience")}`}
          />
          {fieldErrors.fitnessExperience ? (
            <p id="fitnessExperience-error" className="text-xs text-rose-300">
              {fieldErrors.fitnessExperience}
            </p>
          ) : null}
        </div>
      </div>

      {/* Challenges & Motivation */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="currentChallenges"
            className="text-xs font-heading uppercase tracking-[0.14em] text-white"
          >
            Current Challenges <span className="text-[#F2A0C0]">*</span>
          </label>
          <textarea
            id="currentChallenges"
            name="currentChallenges"
            rows={3}
            required
            placeholder="What currently holds you back—consistency, busy schedule, nutrition habits, accountability?"
            value={values.currentChallenges}
            onChange={(e) => updateField("currentChallenges", e.target.value)}
            aria-invalid={Boolean(fieldErrors.currentChallenges)}
            aria-describedby={
              fieldErrors.currentChallenges
                ? "currentChallenges-error"
                : undefined
            }
            className={`${inputBaseClass} ${errorClass("currentChallenges")}`}
          />
          {fieldErrors.currentChallenges ? (
            <p id="currentChallenges-error" className="text-xs text-rose-300">
              {fieldErrors.currentChallenges}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="whyStart"
            className="text-xs font-heading uppercase tracking-[0.14em] text-white"
          >
            Why Do You Want to Start This Journey?{" "}
            <span className="text-[#F2A0C0]">*</span>
          </label>
          <textarea
            id="whyStart"
            name="whyStart"
            rows={3}
            required
            placeholder="What makes transforming your body, mindset, and habits important right now?"
            value={values.whyStart}
            onChange={(e) => updateField("whyStart", e.target.value)}
            aria-invalid={Boolean(fieldErrors.whyStart)}
            aria-describedby={fieldErrors.whyStart ? "whyStart-error" : undefined}
            className={`${inputBaseClass} ${errorClass("whyStart")}`}
          />
          {fieldErrors.whyStart ? (
            <p id="whyStart-error" className="text-xs text-rose-300">
              {fieldErrors.whyStart}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="additionalInfo"
            className="text-xs font-heading uppercase tracking-[0.14em] text-white"
          >
            Additional Information (Optional)
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={3}
            placeholder="Anything else you would like Patrick to know—injuries, equipment access, or schedule notes."
            value={values.additionalInfo}
            onChange={(e) => updateField("additionalInfo", e.target.value)}
            aria-invalid={Boolean(fieldErrors.additionalInfo)}
            aria-describedby={
              fieldErrors.additionalInfo ? "additionalInfo-error" : undefined
            }
            className={`${inputBaseClass} ${errorClass("additionalInfo")}`}
          />
          {fieldErrors.additionalInfo ? (
            <p id="additionalInfo-error" className="text-xs text-rose-300">
              {fieldErrors.additionalInfo}
            </p>
          ) : null}
        </div>
      </div>

      {/* Privacy & Consent */}
      <div className="flex flex-col gap-2 border-t border-white/10 pt-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            id="privacyConsent"
            name="privacyConsent"
            type="checkbox"
            checked={values.privacyConsent}
            onChange={(e) => updateField("privacyConsent", e.target.checked)}
            aria-invalid={Boolean(fieldErrors.privacyConsent)}
            aria-describedby={
              fieldErrors.privacyConsent ? "privacyConsent-error" : undefined
            }
            className="mt-1 h-4 w-4 shrink-0 accent-[#F2A0C0]"
          />
          <span className="text-xs sm:text-sm text-[#A7A9B0] leading-relaxed">
            I consent to Patrick Jeremy (JAYPEEFLY) reviewing the information in
            this coaching application and contacting me regarding coaching
            options. Submitted details are kept confidential and are never sold
            or shared publicly.
          </span>
        </label>
        {fieldErrors.privacyConsent ? (
          <p id="privacyConsent-error" className="text-xs text-rose-300">
            {fieldErrors.privacyConsent}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2.5 bg-[#F2A0C0] px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#08090B] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting Application...
          </>
        ) : (
          <>
            Submit Coaching Application
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
