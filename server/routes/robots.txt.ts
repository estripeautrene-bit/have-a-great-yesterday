export default defineEventHandler((event) => {
  const { public: { siteUrl } } = useRuntimeConfig()
  const base = siteUrl.replace(/\/$/, '')

  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  return `User-agent: *
Disallow: /design-system

Sitemap: ${base}/sitemap.xml`
})
