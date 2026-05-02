Assistant prompt package

Files created:
- whatsapp-assistant-prompt.md — production-ready system prompt
- tones.md — formal / casual / pidgin tone variants
- flow.json — expanded intent menu and example responses
- whatsapp-business-flow.json — interactive message templates for WhatsApp Business API

How to use
1. Replace placeholders ([ADMISSIONS_URL], [SCHOOL_NAME], etc.) with real values.
2. Load `whatsapp-assistant-prompt.md` into your prompt management or bot system as the system prompt.
3. Use `flow.json` to implement intent matching and quick replies in your bot logic.
4. Use `whatsapp-business-flow.json` to build interactive payloads for the WhatsApp Business API (list messages, buttons).

Quick test
- Start your frontend and call the assistant with a sample greeting: "hi". Expect the assistant to return the Quick Menu.

Next steps I can take
- Generate a single-file system-prompt JSON for your runtime.
- Create ready-to-send WhatsApp Business API payload examples (cURL / Node sample).
- Wire the NAV:/ tokens to your client-side router (React navigate or similar).

Tell me which next step to do.