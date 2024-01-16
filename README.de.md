# Interview Aufgabe - Frontend
Diese Aufgabe beschreibt eine Anforderung die so oder so ähnlich immer mal wieder auftaucht. Du hast bei diese Aufgabe Freiraum für eigene Konzeption und Entwicklung, denn es gibt kein fertiges Design. Die fachliche Analyse der vorliegenden Daten und deren gestalterische Umsetzung liegen bei dir.

Nach Abgabe und Überprüfung der Aufgabe findet ein gemeinsames Gepsräch statt, welches eine Art Code Review Prozess abbildet.
Wir geben dir Feedback und stellen Fragen, während du uns deine Lösung präsentierst.

Bitte nimm dir zwei bis vier Stunden Zeit und teile uns mit wenn du fertig bist.

## Fachliche Aufgabe
Entwickle eine Produktliste für heruntergesetze Produkte. Die Nutzer sollen die Seite verwenden um sich zwischen den Produkten zu entscheiden.
Ermögliche die Nutzung auf verschiedenen Endgeräten, entwickle ein attraktives Design und überlege die sinnvolle Zusatzfunktionen(z.B eine Sortierung).
Es müssen nicht alle möglichen Zusatzfeatures umgesetzt werden, du kannst diese gerne notieren und uns im Gespräch mitteilen.

## Technische Aufgabe
Es soll eine Produktliste für heruntergesetze Produkte auf einer HTML Seite dargestellt werden.

Jeder Eintrag enthält dabei ein Produkt. Die Liste der Produkte wird von einem Server bereitgestellt und soll über eine API-Schnittstelle abgefragt werden. Die Abfrage der Produkte soll einmalig bei Seitenaufruf und anschließen fortlaufend im fünf Sekunden-Takt per JavaScript erfolgen.
Es soll durch diese fortlaufende Abfrage eine Gesamtliste and Produkten erzeugt werden.
Es werden also Unbekannte Produkte hinzugefügt. So simuliaren wir, dass Produkte von verschiedenen Shops Bereitgestellt werden, auf deren Ergebnisse wir Warten.

## Rahmenbedingungen
Es steht dir frei, welche Bibliotheken, Frameworks, Tools oder Bundler du für JavaScript, CSS und HTML benutzt. Nutze am besten solche, die dir bereits bekannt sind.

## API-Schnittstelle
Im Projektordner befindet sich ein Node.js-Projekt für den Server, welcher unverändert bleiben soll. Das Node.js-Projekt ist mit npm install zu installieren und startet mit npm start. Der Server stellt dabei die folgende API bereit:

| Methode | Request | Response |
|---------|---------|----------|
|`GET`|`http://localhost:3000/api/products` | Liefert eine zufällige Auswahl an fünf Produkten |

### Begriffserklärung
Die API liefert Produkte mit folgender Eigenschaften unter dem `data` key:
| Feld                  | Wert |
|---------              |---------|
| `id`                  | Die eindeutige Kennung des Produkts |
| `name`                | Der Name des Produkts |
| `price`               | Der Preis des Produkts |
| `description`         | Die Beschreibung des Produkts. |
| `imageURL`            | Die URL des Produktbilds. |
| `brand`               | Die Marke des Produkts. |
| `category`            | Die Kategorie des Produkts |
| `discount`            | Der Rabattprozentsatz, der auf das Produkt angewendet wird |
| `originalProductUrl`  | Die URL der Orginalen Produktseite. |
| `rating`              | Das Rating des Produkts |


Und allgemeine Informationen unter dem `meta` key:
| Feld | Wert |
|---------|---------|
| `total` | Die Gesamtanzahl an Produkten |

## Worauf legen wir Wert?

- Qualität des geschriebenen Quelltextes anhand des Aufbaus, der Konsistenz, der Dokumentation und der Herangehensweise
- Instruktionen für das Setup des Projekts, z.B. in der Readme
- Durchdachtes Design, Responsive Darstellung, UI / UX
- Kreativität bei Zusatzfunktionalitäten