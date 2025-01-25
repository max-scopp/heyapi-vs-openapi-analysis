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

## Humble Opinions

The Angular Team and TanStack don’t work in isolation. They draw inspiration from each other, with names like Matthieu Riegler and Arnoud often crossing paths. Neither promotes one over the other—they coexist in a shared ecosystem.

I see a bright future for reactive Angular. However, Angular’s history of small, cautious steps and a commitment to backward compatibility means we won’t see a fully comparable API to TanStack Query anytime soon. That’s not ideal for delivering in fast-paced environments.

I need solutions that are practical today—not relying on outdated, inefficient patterns or waiting for bare-minimum features to arrive. TanStack Query, even under the “experimental” label, already outpaces what Angular’s ecosystem currently offers. I’m confident it will shed the experimental tag long before Angular ships anything close to a robust remote state management API.

Angular's experimental promise-based Resource API approach hints at a simplified HttpClient on the horizon, potentially replacing RxJS for many use cases. For me, that reinforces the idea: minimize RxJS where possible and move toward simpler, more modern patterns.

In addition to this isolated case, MrLubos from HeyAPI has shown strong commitment to give us a huge helping hand by working on a properly integrated Angular client. One of its biggest strengths, aside from a significant performance boost compared to typical OpenAPI tools, is its deep, native integration with TanStack Query. This automation of error-prone or tedious tasks in my daily workflow is invaluable. It enables me to develop features and components faster without compromising on UX quality or the readability, extensibility, and maintainability of declarative code.

Therefore, I firmly stand behind my decisions. With a clear vision and collaborative support from high-quality community libraries, I believe we can achieve the perfect balance between innovation and velocity.

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
