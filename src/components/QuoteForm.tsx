"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck, LoaderCircle, Phone, Send, TriangleAlert } from "lucide-react";
import { COMPANY } from "@/lib/company";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const REQUEST_TIMEOUT_MS = 15_000;

const PROJECT_TYPES = [
  "Single-Family Production",
  "Multi-Family/Townhome",
  "Commercial/Tenant",
  "Exterior Repair/Renovation",
  "Other",
] as const;

const fieldClasses =
  "mt-2 block w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-ink placeholder:text-slate-500 transition-colors hover:border-slate-400 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-600";

const labelClasses = "block text-sm font-semibold text-ink";

type Status = "idle" | "sending" | "success" | "error" | "mailto";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const sending = status === "sending";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const fields = {
      name: get("name"),
      company: get("company") || "N/A",
      phone: get("phone"),
      email: get("email"),
      projectType: get("projectType"),
      details: get("details"),
    };
    const subject = `Quote request: ${fields.projectType} – ${fields.name}`;

    // Graceful fallback until NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is configured:
    // hand the inquiry to the visitor's email client instead.
    if (!ACCESS_KEY) {
      console.warn(
        "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set. Falling back to mailto."
      );
      const body = [
        `Name: ${fields.name}`,
        `Company / Builder: ${fields.company}`,
        `Phone: ${fields.phone}`,
        `Email: ${fields.email}`,
        `Project type: ${fields.projectType}`,
        "",
        "Scope / project details:",
        fields.details,
      ].join("\r\n");

      const link = document.createElement("a");
      link.href = `${COMPANY.emailHref}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      link.click();
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: "Alpha Builders Website",
          replyto: fields.email,
          botcheck: data.get("botcheck") ? "true" : "",
          ...fields,
          // Web3Forms renders `message` as the main body of the email.
          message: fields.details,
        }),
        signal: controller.signal,
      });

      const result: { success?: boolean } = await res.json().catch(() => ({}));
      if (!res.ok || !result.success) throw new Error("Submission rejected");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="quote-form-heading"
      aria-busy={sending}
      className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8"
    >
      <h3 id="quote-form-heading" className="text-2xl font-bold text-ink">
        Tender / Quote Request
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      {/* Spam honeypot (Web3Forms `botcheck`): hidden from people and assistive tech */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <fieldset disabled={sending} className="mt-6 min-w-0 border-0 p-0">
        <legend className="sr-only">Project inquiry details</legend>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Full Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="company" className={labelClasses}>
              Company / Builder Name{" "}
              <span className="font-normal text-slate-600">(optional)</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number <span aria-hidden="true">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              required
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={fieldClasses}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="projectType" className={labelClasses}>
              Project Type <span aria-hidden="true">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              defaultValue=""
              className={fieldClasses}
            >
              <option value="" disabled>
                Select a project type
              </option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="details" className={labelClasses}>
              Scope / Project Details <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              maxLength={1500}
              required
              placeholder="Trades required, project location, tender close date, drawings available…"
              className={`${fieldClasses} resize-y`}
            />
          </div>
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-accent"
      >
        {sending ? (
          <>
            <LoaderCircle
              className="size-4 motion-safe:animate-spin"
              aria-hidden="true"
            />
            Sending Inquiry...
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Submit Tender / Inquiry
          </>
        )}
      </button>

      {/* Feedback */}
      <div aria-live="polite">
        {status === "success" && (
          <div
            role="status"
            className="mt-5 flex items-start gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
          >
            <CircleCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-700"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold">Inquiry Sent Successfully.</p>
              <p className="mt-1">
                Our estimators will review your drawings and be in touch within
                1 business day.
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="mt-5 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-900"
          >
            <TriangleAlert
              className="mt-0.5 size-5 shrink-0 text-red-700"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold">
                We couldn&apos;t send your inquiry.
              </p>
              <p className="mt-1">
                Please check your connection and try again, or call us directly
                and we&apos;ll take your details over the phone.
              </p>
              <a
                href={COMPANY.phoneHref}
                className="mt-3 inline-flex items-center gap-2 rounded-md bg-red-900 px-3.5 py-2 font-semibold text-white transition-colors hover:bg-red-950"
              >
                <Phone className="size-4" aria-hidden="true" />
                {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>
        )}

        {status === "mailto" && (
          <div
            role="status"
            className="mt-5 flex items-start gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
          >
            <CircleCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-700"
              aria-hidden="true"
            />
            <p>
              Your email app should now open with your inquiry ready to send.
              If nothing opens, email us at{" "}
              <a
                href={COMPANY.emailHref}
                className="font-semibold underline underline-offset-2"
              >
                {COMPANY.email}
              </a>{" "}
              or call{" "}
              <a
                href={COMPANY.phoneHref}
                className="font-semibold underline underline-offset-2"
              >
                {COMPANY.phoneDisplay}
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
