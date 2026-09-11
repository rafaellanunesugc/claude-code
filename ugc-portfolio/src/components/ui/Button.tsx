import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-brand-600 text-white hover:bg-brand-700",
        variant === "secondary" &&
          "bg-ink-900 text-white hover:bg-ink-800",
        variant === "ghost" &&
          "border border-ink-900/15 bg-white text-ink-900 hover:bg-ink-900/5",
        className
      )}
      {...props}
    />
  );
}
