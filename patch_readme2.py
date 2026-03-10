with open('README.md', 'r') as f:
    text = f.read()

text = text.replace(
    "| 한국어 (Korean) | `timeline_ko.html` |\n| 简体中文 (Simplified Chinese) | `timeline_zh_cn.html` |",
    "| 한국어 (Korean) | `timeline_ko.html` |\n| 日本语 (Japanese) | `timeline_ja.html` |\n| 简体中文 (Simplified Chinese) | `timeline_zh_cn.html` |"
)

text = text.replace(
    "timeline_ko.html     — Korean timeline (18 events)\n",
    "timeline_ko.html     — Korean timeline (18 events)\ntimeline_ja.html     — Japanese timeline (18 events)\n"
)

text = text.replace(
    "en + ko + zh-CN + vi",
    "en + ko + ja + zh-CN + vi"
)

text = text.replace(
    "blog_posts/ko/       — Korean blog posts\n",
    "blog_posts/ko/       — Korean blog posts\nblog_posts/ja/       — Japanese blog posts\n"
)

text = text.replace(
    "- **Partner university accountability**: blank partner pages at Ajou and Hongik universities as of March 2026",
    "- **Phantom Partnership Audit**: documented 27% reciprocity rate among CAU's top 63 claimed international partners, followed by entire database deletion in March 2026"
)

with open('README.md', 'w') as f:
    f.write(text)
