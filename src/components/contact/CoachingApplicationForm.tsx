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
  location: string;
  preferredFormat: FormatOption | "";
  primaryGoal: string;
  currentChallenges: string;
  privacyConsent: boolean;
  website: string;
}

function normalizeFormat(param?: string): FormatOption | "" {
  if (!param) return "";
  const lower = param.toLowerCase();
  if (lower === "online") return "Online";
  if (lower === "in-person" || lower === "inperson") return "In-Person";
  if (lower === "not-sure" || lower === "notsure") return "Not Sure";
  return "";
}

export function CoachingApplicationForm({
  initialFormat,
}: CoachingApplicationFormProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    preferredFormat: normalizeFormat(initialFormat),
    primaryGoal: "",
    currentChallenges: "",
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

    const parsed = coachingApplicationSchema.safeParse(values);

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
        className="jpf-surface rounded-2xl p-7 sm:p-10 flex flex-col gap-5"
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#9B1C26]/50 bg-[#9B1C26]/15 px-3.5 py-1.5 font-heading text-xs uppercase tracking-[0.16em] text-[#D63B47]">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Application Received
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
          Thank You, {values.fullName}.
        </h2>

        <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
          Your JAYPEEFLY coaching application has been securely recorded for
          Patrick Jeremy to review. You will be contacted via the email or
          phone/WhatsApp details you provided.
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
                location: "",
                preferredFormat: "",
                primaryGoal: "",
                currentChallenges: "",
                privacyConsent: false,
                website: "",
              });
              setSubmissionId(null);
              setSubmitState("idle");
            }}
            className="jpf-glass-btn rounded-full px-6 py-3 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  const inputBaseClass =
    "w-full rounded-xl border bg-black px-4 py-3 text-base sm:text-sm text-white placeholder:text-white/30 transition-colors focus:border-[#9B1C26] focus:outline-none";

  const errorClass = (name: string) =>
    fieldErrors[name] ? "border-rose-400" : "border-white/15";

  return (
    <form
      id="coaching-application-form"
      onSubmit={handleSubmit}
      noValidate
      className="jpf-surface rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-7"
    >
      <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
        <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#D63B47]">
          Option 02 · Coaching Application
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
          Apply for Personal Coaching
        </h2>
      </div>

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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-xs font-heading uppercase tracking-[0.14em] text-white"
          >
            Full Name <span className="text-[#D63B47]">*</span>
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
            Email Address <span className="text-[#D63B47]">*</span>
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
            Phone / WhatsApp Number <span className="text-[#D63B47]">*</span>
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

        <div className="flex flex-col gap-2">
          <label
            htmlFor="location"
            className="text-xs font-heading uppercase tracking-[0.14em] text-white"
          >
            Location <span className="text-[#D63B47]">*</span>
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

      <fieldset className="flex flex-col gap-3">
        <legend className="text-xs font-heading uppercase tracking-[0.14em] text-white">
          Preferred Coaching Format <span className="text-[#D63B47]">*</span>
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {coachingFormatOptions.map((option) => {
            const isSelected = values.preferredFormat === option;
            return (
              <label
                key={option}
                className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3.5 text-sm transition-colors ${
                  isSelected
                    ? "border-[#9B1C26] bg-[#9B1C26]/20 text-white"
                    : "border-white/15 bg-black text-[#A7A9B0] hover:border-white/30 hover:text-white"
                }`}
              >
                <span className="font-medium">{option}</span>
                <input
                  type="radio"
                  name="preferredFormat"
                  value={option}
                  checked={isSelected}
                  onChange={() => updateField("preferredFormat", option)}
                  className="accent-[#9B1C26] h-4 w-4"
                />
              </label>
            );
          })}
        </div>
        {fieldErrors.preferredFormat ? (
          <p className="text-xs text-rose-300">{fieldErrors.preferredFormat}</p>
        ) : null}
      </fieldset>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="primaryGoal"
          className="text-xs font-heading uppercase tracking-[0.14em] text-white"
        >
          Primary Fitness Goal <span className="text-[#D63B47]">*</span>
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
          htmlFor="currentChallenges"
          className="text-xs font-heading uppercase tracking-[0.14em] text-white"
        >
          Current Challenges <span className="text-[#D63B47]">*</span>
        </label>
        <textarea
          id="currentChallenges"
          name="currentChallenges"
          rows={3}
          required
          placeholder="What currently holds you back? Consistency, busy schedule, nutrition habits, accountability?"
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
            className="mt-1 h-4 w-4 shrink-0 accent-[#D63B47]"
          />
          <span className="text-xs sm:text-sm text-[#A7A9B0] leading-relaxed">
            I consent to Patrick Jeremy (JAYPEEFLY) reviewing this coaching
            application and contacting me regarding coaching options.
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
        className="jpf-oxblood-btn inline-flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-4 font-heading text-xs font-semibold uppercase tracking-[0.14em] disabled:cursor-not-allowed disabled:opacity-60"
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
