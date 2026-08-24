export default defineEventHandler((event) => {
  const { public: { siteUrl } } = useRuntimeConfig()
  const base = siteUrl.replace(/\/$/, '')

  const routes = [
    '/',
    '/method',
    '/ideas',
    '/our-story',
    '/for-organizations',
    '/hall-of-fame',
    '/hall-of-fame/dan-sullivan',
    '/history',
    '/hall-of-fame/eckhart-tolle',
    '/hall-of-fame/maxwell-maltz',
    '/hall-of-fame/viktor-frankl',
    '/hall-of-fame/martin-seligman',
    '/hall-of-fame/james-clear',
    '/hall-of-fame/bob-proctor',
  ]

  const urls = routes
    .map(r => `  <url>\n    <loc>${base}${r}</loc>\n  </url>`)
    .join('\n')

  setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})
