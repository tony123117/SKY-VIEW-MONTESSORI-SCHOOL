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
  "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[14px] font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover-scale";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30",
  secondary: "bg-secondary text-secondary-foreground hover:shadow-lg hover:shadow-secondary/30",
  abstract: "bg-white text-brand-dark border border-border hover:border-primary hover:text-primary",
  outline: "border border-brand-dark text-brand-dark hover:border-primary hover:text-primary",
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
