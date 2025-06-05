# BlogApp-Setup

## Neues Angular-Projekt aufsetzen

1. In Verzeichnis
2. ng new "projekt-name"
3. mit routing und SCSS bevorzugt
4. Mit IDE öffnen und ggf. Plugins installieren
5. npm install auf root ausführen
6. ng serve aufrufen

## Git-Repository einrichten

1. Neues Repo erstellen (public)
2. Angular-Projekt in Repo pushen

## Einrichtung von Code-Qualitätstools für eine Angular-Anwendung

### ESLint zum Angular-Projekt hinzufügen

ng add @angular-eslint/schematics

### Prettier installieren und konfigurieren

1. npm install prettier --save-dev
2. Skript im package.json hinzufügen

"scripts": {
   "format": "npx prettier --write ./src/app/*"
  }

### Commitlint einrichten

1. npm install @commitlint/cli @commitlint/config-conventional
2. Konfiguration im package.json hinzufügen

"commitlint": {
"extends": [
"@commitlint/config-conventional"
]
}

### lint-staged einrichten

1. npm install --save-dev lint-staged
2. Konfiguration im package.json hinzufügen

"lint-staged": {
"*.{ts,js,html}": "eslint --cache --fix",
"*.{ts,js,html,css,scss,less,md}": "prettier --write"
}

### Husky einrichten

1. npm install --save-dev husky
2. npx husky init 
3. Skript im package.json hinzufügen

"scripts": {
"prepare": "husky"
}

4. npm run prepare
5. File .husky/commit-msg erstellen

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
npx --no-install commitlint --edit "$1"

6. Pre-Commit-Hook für lint-staged erstellen

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
npx --no-install lint-staged

## Automatisiertes Deployment auf Azure

1. Azure-Konto mit nötigen Berechtigungen haben oder Azure for Students Konto erstellen
2. Im Azure-Portal einloggen und Static Web App erstellen

resource group definieren
Enter a name for the static web app
Select a Service Plan
Select Angular
Enter "/" for the directory
Blank
Enter dist/<yout-app-name>/browser

## Automatisierte CI/CD-Pipeline via GitHub Actions:

Build: Angular-App wird produktionsreif gebaut

Tests: Alle Unit-Tests werden automatisch im CI mit ChromeHeadless ausgeführt

Abhängigkeitsprüfung:

Sicherheitscheck via npm audit

Updates via ng update + npm-check-updates (ncu)

Automatische Updates werden committed & gepusht (sofern Änderungen vorhanden)

→ Pipeline-Definition: .github/workflows/ci-security.yml

## Sicherheitscheck

npm audit prüft automatisch auf bekannte Schwachstellen (mittleres Level oder höher)

## Abhängigkeitsupdates

Angular-Core-Updates via ng update

Drittanbieter-Pakete via npm-check-updates

Updates werden automatisch committet
