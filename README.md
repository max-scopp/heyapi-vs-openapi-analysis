# Compare heyapi vs openapi

CPU

    AMD Ryzen 9 3900X 12-Core Processor

    Base speed:	3,80 GHz
    Sockets:	1
    Cores:	12
    Logical processors:	24

Memory

    16,0 GB

    Speed:	3600 MT/s
    Slots used:	2 of 4
    Form factor:	DIMM

Big api source: https://tripletex.no/v2-docs/

## Perf Metric

```
Execution Times:
openapi-generator-cli generate: 71.8766834 seconds (Did not finish)
npx @hey-api/openapi-ts: 3.8726455 seconds
Result: 'npx @hey-api/openapi-ts' was faster by 68.0040379 seconds.
```

## Read Up

https://michalzalecki.com/elegant-frontend-architecture/

## HeyAPI

Pro:

- Performant
- Gute Dokumentation
- Generiert wie als hättest du es selber geschrieben - Sehr gut lesbar
- ist ein richtiger compiler und nutzt die native typescript compiler api
- Da der TS AST genutzt wird extrem flexibel & anpassbar
- Tiefe integration mit populären, data-fetching relevanten bibliotheken
- Direkter, lösungsorientierter, schneller Support

Con:

- Aktuell kein Angular Client Support (Prototyp funktionsfähig)
- Vergleichsweise jung

Undecided:

- Ebenso ein fork vom einer alten version

---

## OpenApi Tools

Pros:

- kann XML u.a. absetzen (aber warum wollen wir XML apis?)
- Gruppiert in services - fühlt sich schön an, aber für mich kein effektiver vorteil

Cons:

- Träge
- Template basiert
- Dokumentation sehr technisch - verwirrend
- Ich kann nur eine BASE_URL für alle clients definieren? Wie kann ich mehrere APIs in einer Applikation ansprechen?
  - Siehe MOCS_Server use case
- Services inhaltlich schwer nachvollziehbar
  - alte DI
  - methoden signatur überladung
  - sehr verboser code
- Unklarer Umgang für komplexere use-cases
  - Machbar, aber sehr pflegebelastend

Undecided:

- Es gibt ein Cache, aber kein Cache Management?
- OpenAPITools ist ein fork vom offiziellen?
  https://openapi-generator.tech/docs/fork-qna#why-was-it-decided-to-fork-swagger-codegen

## Alternativen

- https://openapi-ts.dev/
- https://www.stainless.com/
- https://www.speakeasy.com/product/sdk-generation
