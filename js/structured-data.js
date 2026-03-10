/**
 * structured-data.js
 * Client-side JSON-LD structured data injection for CAU Exposed
 * Site: https://chungang.genderwatchdog.org
 */

function injectStructuredData() {
  const isBlogPost = window.location.pathname.includes('/blog_posts/');

  let language = document.documentElement.lang || 'en';

  if (isBlogPost) {
    const pathParts = window.location.pathname.split('/');
    const langIndex = pathParts.indexOf('blog_posts') + 1;
    if (langIndex < pathParts.length) {
      language = pathParts[langIndex];
    }
    injectBlogPostStructuredData(language);
  } else {
    if (window.location.pathname.includes('_ko')) language = 'ko';
    injectBlogPostsStructuredData(language);
  }
}

// Inject structured data for a single blog post page
function injectBlogPostStructuredData(language) {
  const title = document.title || '';
  const description = document.querySelector('meta[name="description"]')?.content || '';
  const datePublished = document.querySelector('time')?.getAttribute('datetime') || '2026-03-09';
  const url = window.location.href;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "inLanguage": language === 'ko' ? 'ko-KR' : 'en-US',
    "datePublished": datePublished,
    "url": url,
    "author": {
      "@type": "Organization",
      "name": "Gender Watchdog"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gender Watchdog",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chungang.genderwatchdog.org/imgs/favicons/gender_watchdog_favicon_128x128.png"
      }
    }
  };

  injectJSONLD(structuredData, 'blog-post-structured-data');
}

// Inject blog post collection structured data on timeline pages
function injectBlogPostsStructuredData(language) {
  const blogPosts = getBlogPosts(language);
  if (!blogPosts.length) return;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": language === 'ko'
      ? '중앙대학교 성폭력 및 거버넌스 실패: 기사 모음'
      : 'Articles on Sexual Violence & Governance Failure at Chung-Ang University',
    "description": language === 'ko'
      ? '중앙대학교의 성폭력 사례, 두산 재정 범죄, 제도적 실패를 기록한 기사 모음'
      : 'Collection of articles documenting sexual violence, Doosan financial crimes, and institutional failures at Chung-Ang University',
    "inLanguage": language === 'ko' ? 'ko-KR' : 'en-US',
    "mainEntity": {
      "@type": "ItemList",
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "numberOfItems": blogPosts.length,
      "itemListElement": blogPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "headline": post.title,
          "description": post.description,
          "inLanguage": language === 'ko' ? 'ko-KR' : 'en-US',
          "datePublished": post.datePublished,
          "url": post.url,
          "author": {
            "@type": "Organization",
            "name": "Gender Watchdog"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Gender Watchdog",
            "logo": {
              "@type": "ImageObject",
              "url": "https://chungang.genderwatchdog.org/imgs/favicons/gender_watchdog_favicon_128x128.png"
            }
          }
        }
      }))
    }
  };

  injectJSONLD(structuredData, 'blog-structured-data');
}

function getBlogPosts(language) {
  const base = 'https://chungang.genderwatchdog.org/blog_posts/';
  return [
    {
      title: language === 'ko'
        ? '파트너 페이지 공백: 아주대·홍익대 (2026년 3월)'
        : 'Partner Pages Blank: Ajou & Hongik Universities (March 2026)',
      description: language === 'ko'
        ? '2026년 3월 8일, 아주대학교와 홍익대학교의 공식 파트너십 페이지에서 중앙대와의 활성 파트너십이 확인되지 않음.'
        : 'Screenshot evidence from March 8, 2026 showing Ajou University and Hongik University partner pages with no active partnership with Chung-Ang University.',
      datePublished: '2026-03-08',
      url: language === 'ko'
        ? base + 'ko/cau_partner_pages_blank.html'
        : base + 'en/cau_partner_pages_blank.html'
    }
  ];
}

function injectJSONLD(structuredData, id) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', injectStructuredData);
