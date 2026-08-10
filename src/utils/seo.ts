export const siteUrl = 'https://engjurado.me';

export function buildJsonLd(siteName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': siteUrl,
        name: 'Carlos Mateo Jurado Díaz',
        jobTitle: 'Bioingeniero',
        url: siteUrl,
        sameAs: [
          'https://www.linkedin.com/in/engjurado/',
          'https://github.com/engjurado'
        ]
      },
      {
        '@type': 'ProfilePage',
        mainEntity: { '@id': siteUrl },
        description,
        isPartOf: {
          '@type': 'WebSite',
          name: siteName,
          url: siteUrl
        }
      },
      {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
        description
      }
    ]
  };
}

export function canonical(pathname: string) {
  return `${siteUrl}${pathname}`;
}
