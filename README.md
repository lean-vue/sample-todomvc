# Sample: TodoMVC

> Vue Implementation for https://todomvc.com with TypeScript

## TypeScript-Konfiguration

Die Konfiguration im Branch wächst progressiv. Es fehlen noch ein paar
best-practices - aber auch Notwendigkeiten, die an gegebener Stelle eingeführt
und erklärt werden.

## Ausgangspunkt:

Dieses Projekt dient als Startpunkt für eine Beispiel-Implementierung. Der [main](https://github.com/lean-vue/sample-todomvc/tree/main)-Branch enthält eine minimale Vue-Anwendung mit dem statischen
Template der TodoMVC-Anwendung (kopiert von [tastejs/todomvc-app-template](https://github.com/tastejs/todomvc-app-template)) sowie eine komplette E2E-Testsuite mit Cypress als Framework.

Auf dem [ts-starter](https://github.com/lean-vue/sample-todomvc/tree/ts-starter)-Branch ist ein Startpunkt mit vorkonfiguriertem TypeScript-Support.

## Fertige Implementierungen:

- Branch [vue-plain](https://github.com/lean-vue/sample-todomvc/tree/vue-plain): Vue 3 Implementierung mit SFC, Composition API mit script-setup. Der State ist minimal über ein Vue Composition Hook realisiert.

## E2E Testing

Das E2E Testing während der Entwicklung wird mit [Cypress](https://cypress.io) durchgeführt. Dazu
muss der Dev-Server gestartet sein (`npm run dev`).

Öffnen des Cypress Test-Runners:

    npm run cypress:open

Einmaliger Headless-Start (für CI):

    npm run cypress:run

Die Cypress-Testsuite erwartet, dass nicht sichtbare DOM-Elemente auch nicht im DOM-Tree existieren.
Also einfaches Ausblenden mit CSS-Stilen ist nicht korrekt.
