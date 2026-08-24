interface PageSeoOptions {
  title: string
  description: string
  path: string
  ogType?: string
  robots?: string
}

export function usePageSeo({ title, description, path, ogType = 'website', robots }: PageSeoOptions) {
  const { public: { siteUrl } } = useRuntimeConfig()
  const url = `${siteUrl}${path}`
  const ogImage = `${siteUrl}/og-default.png`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    ogType,
    ogSiteName: 'HaveAGreatYesterday.com',
    ogImage,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    ...(robots ? { robots } : {}),
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })
}
