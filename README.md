# Sample: TodoMVC

> Vue Implementation for https://todomvc.com

Dieses Projekt dient als Startpunkt für eine Beispiel-Implementierung. Der [main](https://github.com/lean-vue/sample-todomvc/tree/main)-Branch enthält eine minimale Vue-Anwendung mit dem statischen
Template der TodoMVC-Anwendung (kopiert von [tastejs/todomvc-app-template](https://github.com/tastejs/todomvc-app-template)) sowie eine komplette E2E-Testsuite mit Cypress als Framework.

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
