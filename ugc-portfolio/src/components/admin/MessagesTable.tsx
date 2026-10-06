import { formatDateTimeBR } from "@/lib/utils";
import type { ContactSubmission } from "@/lib/types";

export function MessagesTable({ submissions }: { submissions: ContactSubmission[] }) {
  if (submissions.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-ink-900/20 bg-white p-6 text-sm text-ink-700/60">
        Nenhuma solicitação recebida ainda.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {submissions.map((submission) => (
        <div
          key={submission.id}
          className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-ink-900">
                {submission.name}
                {submission.brand && (
                  <span className="font-normal text-ink-700/60"> — {submission.brand}</span>
                )}
              </p>
              <p className="text-xs text-ink-700/60">
                {formatDateTimeBR(submission.created_at)}
              </p>
            </div>
            {submission.budget_range && (
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {submission.budget_range}
              </span>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-700">
            <a href={`mailto:${submission.email}`} className="hover:text-brand-700">
              {submission.email}
            </a>
            {submission.whatsapp && (
              <a
                href={`https://wa.me/55${submission.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-700"
              >
                {submission.whatsapp}
              </a>
            )}
          </div>

          {submission.message && (
            <p className="mt-3 whitespace-pre-wrap text-sm text-ink-700/90">
              {submission.message}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
