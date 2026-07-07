# Nederlands · B1.2 → C1 (PWA)

Interactieve cursus Nederlands gericht op **spreken**, met directe feedback,
spraakherkenning, beloningen en een voortgangsbalk van B1.2 naar C1.

## Inhoud
- **16 lessen** over 3 niveaus (B2 · B2+ · C1)
- **64 vocabulaire-items** met audio en voorbeeldzin
- **32 gespreksbeurten** met realistische situaties
- Voortgang, XP en streak worden lokaal bewaard (localStorage)

## Functies
- 🔊 **Audio (TTS)** — Nederlandse stem leest woorden en zinnen voor
- 🎤 **Spraakherkenning (STT)** — spreek vocabulaire en antwoorden in;
  de app telt je herhalingen en vult je antwoord in
- ✓ **Directe feedback** — controle op de juiste spreekvormen, met
  gericht advies en een modelzin om naar te luisteren
- 🔁 **Woordherhaling** — elk nieuw woord 3× hardop herhalen om te memoriseren
- ⭐ **Beloningen** — XP, niveaus en een streak die je stimuleren door te gaan
- 📊 **Voortgangsbalk** — totaaltraject van je huidige niveau naar C1

## Installeren / draaien
De app is een PWA en moet via **HTTP(S)** geserveerd worden (niet via
`file://`), zodat de service worker en de microfoon werken.

### Lokaal testen
```bash
cd dutch
python3 -m http.server 8080
```
Open daarna **http://localhost:8080** in Chrome of Edge.
Tik op **⤓ Installeer app** (of "Toevoegen aan beginscherm" op mobiel).

### Hosten
Upload de map naar een statische host met HTTPS (GitHub Pages, Netlify,
Vercel, enz.). Spraakherkenning vereist HTTPS op een echt domein.

## Browserondersteuning
- **Spraakherkenning** werkt het best in **Chrome / Edge** (desktop & Android).
  In Safari/Firefox is herkenning beperkt; dan verschijnt een knop om je
  herhaling handmatig te bevestigen — de rest van de cursus werkt gewoon.
- **Audio (TTS)** vereist een Nederlandse systeemstem (`nl-NL`). Ontbreekt die,
  dan meldt de app dit en kun je hardop meelezen.

## Bestanden
```
dutch/
├─ index.html               app-shell + install/SW-registratie
├─ app.js                   logica: TTS, STT, feedback, XP, voortgang
├─ curriculum.js            alle lessen en gesprekken
├─ manifest.webmanifest     PWA-manifest
├─ sw.js                    service worker (offline)
└─ icons/                   app-iconen (192, 512, maskable)
```

## Voortgang resetten
Wis de sitegegevens in je browser, of run in de console:
`localStorage.removeItem('nl_c1_state_v1')`.
