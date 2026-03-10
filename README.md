# CAU Exposed: Sexual Violence, Financial Crimes & Institutional Failure

A public-interest documentation project tracking confirmed sexual violence perpetrators, Doosan financial crimes, and governance failures at Chung-Ang University (CAU / 중앙대학교) in Seoul, South Korea.

**Live site:** [https://chungang.genderwatchdog.org](https://chungang.genderwatchdog.org)

---

## About This Project

This timeline documents:

- **9 confirmed sexual violence perpetrators** across 7 departments at CAU (1998–2019)
- **Doosan Group financial crimes** including ₩20.3 billion in accounting fraud and ₩1.8 billion in bribery
- **Institutional cover-ups**: disciplinary procedure manipulation, perpetrators allowed to resign before formal sanctions, re-hiring at other universities
- **Partner university accountability**: blank partner pages at Ajou and Hongik universities as of March 2026

The project is maintained by [Gender Watchdog](https://genderwatchdog.org) and published under open licenses (see below).

---

## Languages

| Language | File |
|----------|------|
| English | `index.html` |
| 한국어 (Korean) | `timeline_ko.html` |
| 简体中文 (Simplified Chinese) | `timeline_zh_cn.html` |
| Tiếng Việt (Vietnamese) | `timeline_vi.html` |

---

## Repository Structure

```
_config.yml          — Jekyll site configuration
CNAME                — chungang.genderwatchdog.org
css/timeline.css     — CAU color scheme (navy #0033A0, red #CC0000)
_data/ui_text.yml    — UI strings (en + ko + zh-CN + vi)
_layouts/            — timeline.html, post.html
_includes/           — head, footer, support section, resources section
index.html           — English timeline (18 events)
timeline_ko.html     — Korean timeline (18 events)
timeline_zh_cn.html  — Simplified Chinese timeline (18 events)
timeline_vi.html     — Vietnamese timeline (18 events)
blog_posts/en/       — English blog posts
blog_posts/ko/       — Korean blog posts
blog_posts/zh_ch/    — Simplified Chinese blog posts
blog_posts/vi/       — Vietnamese blog posts
imgs/                — Images and evidence screenshots
structured_data/     — Schema.org JSON-LD (index.json, timeline_ko.json,
                       timeline_zh_cn.json, timeline_vi.json)
sitemap.xml
robots.txt
```

---

## Running Locally

Requirements: Ruby, Bundler, Jekyll

```bash
bundle install
bundle exec jekyll serve
# Open http://localhost:4000
```

---

## Licenses

- **Code**: [Apache 2.0](LICENSE)
- **Investigative content**: [CC BY-NC-ND 4.0](LICENSE-CONTENT)

---

## Legacy Dongguk Content

The original Dongguk University timeline content is preserved on the `dongguk-legacy` branch of this repository.

---

## Contact

For tips, corrections, or collaboration: through [Gender Watchdog](https://genderwatchdog.org).
