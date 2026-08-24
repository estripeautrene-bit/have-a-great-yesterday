export function useJsonLd(schema: Record<string, unknown> | Record<string, unknown>[]) {
  useHead({
    script: [{
      key: 'json-ld',
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schema),
    }],
  })
}
