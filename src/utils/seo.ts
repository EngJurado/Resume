export const siteUrl = 'https://engjurado.me';

export function buildJsonLd(title: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
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
        description,
        isPartOf: {
          '@type': 'WebSite',
          name: title,
          url: siteUrl
        }
      },
      {
        '@type': 'WebSite',
        name: title,
        url: siteUrl,
        description
      }
    ]
  };
}

export function canonical(pathname: string) {
  return `${siteUrl}${pathname}`;
}
