import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "abstract";
  disabled?: boolean;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[14px] font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover-scale";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-primary-foreground w-[100px] hover:shadow-lg hover:shadow-primary/30",
  secondary: "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30",
  abstract: "bg-muted text-foreground border border-border hover:border-primary/50",
  outline: "border border-foreground/30 text-foreground hover:border-primary hover:text-primary",
};

export default function BrainButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
