import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '20px',
        lg: '32px',
        xl: '48px',
      },
      fontSize: {
        'xxs': ['0.6875rem', { lineHeight: '1' }],
        'xs': ['0.75rem', { lineHeight: '1' }],
        'sm': ['0.875rem', { lineHeight: '1.2' }],
        'base': ['1rem', { lineHeight: '1.4' }],
        'lg': ['1.125rem', { lineHeight: '1.3' }],
        'xl': ['1.25rem', { lineHeight: '1.2' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          pink: "hsl(var(--brand-pink))",
          blue: "hsl(var(--brand-blue))",
          dark: "hsl(var(--brand-dark))",
          "light-pink": "hsl(var(--brand-light-pink))",
        },
        school: {
          pink: "hsl(var(--school-pink))",
          "pink-light": "hsl(var(--school-pink-light))",
          blue: "hsl(var(--school-blue))",
          "blue-light": "hsl(var(--school-blue-light))",
          navy: "hsl(var(--school-navy))",
          yellow: "hsl(var(--school-yellow))",
          green: "hsl(var(--school-green))",
        },
        footer: {
          bg: "hsl(var(--footer-bg))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 30s linear infinite",
      },
      transitionDuration: {
        '1100': '1100ms',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;