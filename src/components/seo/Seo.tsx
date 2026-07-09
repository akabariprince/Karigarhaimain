import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoData, getSiteUrl } from '../../data/seo';
import type { RouteGroup } from '../../data/routes';

type SeoProps = {
  route?: RouteGroup | null;
  noindex?: boolean;
};

function upsertMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  const selector = `meta[${attr}="${name}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.rel = 'canonical';
    document.head.appendChild(tag);
  }
  tag.href = href;
}

function upsertJsonLd(id: string, data: unknown) {
  let tag = document.head.querySelector<HTMLScriptElement>(`script[data-seo-id="${id}"]`);
  if (!tag) {
    tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.setAttribute('data-seo-id', id);
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
}

export function Seo({ route, noindex }: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeoData(location.pathname, route ?? null);
    const siteUrl = getSiteUrl();
    const canonical = `${siteUrl}${seo.canonicalPath === '/' ? '' : seo.canonicalPath}`;
    const shouldNoindex = noindex || seo.noindex;

    document.title = seo.title;
    upsertMeta('description', seo.description);
    upsertMeta('robots', shouldNoindex ? 'noindex, nofollow' : 'index, follow');
    upsertMeta('theme-color', '#071316');
    upsertCanonical(canonical);

    upsertMeta('og:type', 'website', 'property');
    upsertMeta('og:site_name', 'KarigarHai', 'property');
    upsertMeta('og:title', seo.title, 'property');
    upsertMeta('og:description', seo.description, 'property');
    upsertMeta('og:url', canonical, 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', seo.title);
    upsertMeta('twitter:description', seo.description);

    upsertJsonLd('site-organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'KarigarHai',
      url: siteUrl,
      email: 'hello@karigarhai.com',
      telephone: '+91 9099 807 800',
    });

    upsertJsonLd('site-webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title,
      url: canonical,
      description: seo.description,
      isPartOf: {
        '@type': 'WebSite',
        name: 'KarigarHai',
        url: siteUrl,
      },
    });
  }, [location.pathname, noindex, route]);

  return null;
}
