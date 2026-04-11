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
  "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95",
  secondary: "bg-secondary text-secondary-foreground hover:shadow-lg hover:shadow-secondary/30 hover:scale-105 active:scale-95",
  abstract: "bg-white text-foreground border-2 border-border hover:border-primary hover:text-primary hover:scale-105 active:scale-95",
  outline: "border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary hover:scale-105 active:scale-95",
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
