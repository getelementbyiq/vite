# Vite + React + Tailwind CSS Template

Ein modernes Template für React-Anwendungen mit Vite als Build-Tool und Tailwind CSS für das Styling.

## 🚀 Features

- ⚡ **Vite** - Ultraschneller Build-Tool mit Hot Module Replacement
- ⚛️ **React 18** - Moderne UI-Bibliothek mit Hooks
- 🎨 **Tailwind CSS** - Utility-first CSS Framework
- 📦 **ES Modules** - Moderne JavaScript-Module
- 🔧 **ESLint** - Code-Linting für bessere Code-Qualität
- 🔥 **Hot Reload** - Sofortige Aktualisierung bei Änderungen

## 📋 Voraussetzungen

- Node.js (Version 16 oder höher)
- npm oder yarn

## 🛠️ Installation & Verwendung

### 1. Abhängigkeiten installieren
```bash
npm install
```

### 2. Entwicklungsserver starten
```bash
npm run dev
```

Die Anwendung läuft dann auf `http://localhost:5173`

### 3. Für Produktion bauen
```bash
npm run build
```

### 4. Build-Vorschau anzeigen
```bash
npm run preview
```

## 📁 Projektstruktur

```
vite-react-tailwind-template/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Haupt-App-Komponente
│   ├── main.jsx         # Einstiegspunkt
│   └── index.css        # Tailwind CSS Imports
├── index.html           # HTML Template
├── package.json         # Projekt-Konfiguration
├── postcss.config.js    # PostCSS Konfiguration
├── tailwind.config.js   # Tailwind CSS Konfiguration
└── vite.config.js       # Vite Konfiguration
```

## 🎨 Tailwind CSS

Tailwind CSS ist bereits konfiguriert und einsatzbereit. Du kannst sofort mit den Utility-Klassen arbeiten:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hallo Welt!
</div>
```

## 📝 Verfügbare Scripts

- `npm run dev` - Startet den Entwicklungsserver
- `npm run build` - Baut die Anwendung für Produktion
- `npm run preview` - Zeigt eine Vorschau der gebauten Anwendung
- `npm run lint` - Führt ESLint-Prüfung durch

## 🔧 Anpassungen

### Tailwind CSS anpassen
Bearbeite `tailwind.config.js` um deine eigenen Farben, Schriftarten oder andere Design-Token hinzuzufügen.

### Vite konfigurieren
Bearbeite `vite.config.js` für erweiterte Vite-Konfigurationen.

## 📚 Nützliche Links

- [Vite Dokumentation](https://vitejs.dev/)
- [React Dokumentation](https://react.dev/)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/)

## 🤝 Beitragen

Du hast Verbesserungsvorschläge? Gerne kannst du Issues erstellen oder Pull Requests einreichen!

---

**Viel Spaß beim Entwickeln! 🎉** 