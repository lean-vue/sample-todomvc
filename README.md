# Sample: TodoMVC

> Vue Implementation for https://todomvc.com

## E2E Testing

Das E2E Testing während der Entwicklung wird mit [Cypress](https://cypress.io) durchgeführt. Dazu
muss der Dev-Server gestartet sein (`npm run dev`).

Öffnen des Cypress Test-Runners:

    npm run cypress:open

Einmaliger Headless-Start (für CI):

    npm run cypress:run

Die Cypress-Testsuite erwartet, dass nicht sichtbare DOM-Elemente auch nicht im DOM-Tree existieren.
Also einfaches Ausblenden mit CSS-Stilen ist nicht korrekt.
