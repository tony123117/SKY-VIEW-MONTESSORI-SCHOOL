import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Global image fallback handler: when an image fails to load, try alternate responsive filename patterns.
window.addEventListener(
	"error",
	(e) => {
		const el = e.target as HTMLElement | null;
		if (!el) return;
		if (el.tagName !== "IMG") return;
		const img = el as HTMLImageElement;
		if (img.dataset.__responsiveFallbackTried) return;
		const src = img.getAttribute("src") || "";
		if (!src.includes("/responsive/")) return;

		// try two naming conventions:
		// 1) /responsive/<base>-w<size>.<ext>
		// 2) /responsive/<filename> -w<size>.<ext>  (where filename may include an extra dot)
		const m = src.match(/\/responsive\/(.+)-w(\d+)\.(jpg|jpeg|png|webp|avif)$/i);
		if (!m) return;
		const base = m[1];
		const size = m[2];
		const ext = m[3];

		// If base already contains a dot (e.g., "544A7178.jpg"), try using that full base first
		const alt1 = `/responsive/${base}.${ext}-w${size}.${ext}`; // unlikely but covers weird cases
		const alt2 = `/responsive/${base}-w${size}.${ext}`; // original
		const alt3 = `/responsive/${base.replace(/\.[^.]+$/, "")}-w${size}.${ext}`; // strip inner ext if present

		img.dataset.__responsiveFallbackTried = "1";

		const tryNext = (candidates: string[]) => {
			if (candidates.length === 0) return;
			const next = candidates.shift()!;
			const tester = new Image();
			tester.onload = () => {
				img.src = next;
			};
			tester.onerror = () => tryNext(candidates);
			tester.src = next;
		};

		tryNext([alt1, alt3]);
	},
	true
);
