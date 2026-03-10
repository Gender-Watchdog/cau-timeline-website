Now I have enough to compile the timeline-specific analysis. There's one significant issue I noticed while cross-referencing sources that needs flagging.

---

## Timeline Fact-Check

The timeline entries carry over most of the same underlying claims as the blog post, so the issues flagged in the blog post (motto translation, secretary title, etc.) apply equally here. Below I focus on issues **specific to or more visible in the timeline document**.

---

### ✅ CONFIRMED entries

**1998 Dance Professor entry** — All key details confirmed by NamuWiki (교수/범죄):
- February 5, 1998 complaint date ✅
- Three male students ✅
- Korea National Dance Company director role held simultaneously ✅
- October 7, 1999: 3-year sentence ✅
- October 9, 2001: 1-year sentence on appeal, immediate detention ✅
- November 10, 2003: re-indicted for witness tampering ✅

**Prof A, English Literature (Nov 2018 entry)** — Confirmed by the cited News1 article (Nov 28, 2018):
- Student incapacitated by sleeping medication and alcohol ✅
- Professor denied allegations ✅
- Called victim late at night after the assault ✅
- PTSD diagnosis and psychiatric treatment ✅

**June 2019: Prof A dismissed (해임)** — Confirmed by News1 (Jun 18, 2019) ✅

**May 2008 Doosan takeover, presidential election abolished within 80 days** — Confirmed ✅

**Park Beom-hoon: 19-hour questioning, 1.8 billion won/Mootsori, Woori Bank 10 billion won** — Confirmed ✅

**Park Yong-sung: triple resignation** — Confirmed ✅

---

### 🔴 SIGNIFICANT ISSUE: Possible Source/Attribution Confusion — Prof K Classroom Quotes

This is the most important flag in the timeline. The timeline entry for "Prof K — Serial SA of Grad Students" (2009 onward) attributes these classroom statements to CAU's Professor K in Asian Cultural Studies:

> "K 교수는 '너희도 배 선생님께 허벅지 좀 내어드려야 인생의 의미를 알 텐데'라고 말했다"
> "여성 작가로 살아남으려면 이런 일은 감수해야 한다"

When I retrieved the Hankyung article your footnote 13 cites (March 20, 2018 — 201803208255Y), that article covers **two simultaneous cases**: the Ewha Womans University K professor in Sculpture, and the CAU Sculpture lecturer A. The "허벅지" and "여성 작가로 살아남으려면" classroom statements appear in that article — attributed to the **Ewha** professor K, not to CAU's Asian Cultural Studies Prof K.

The CAU Asian Cultural Studies Prof K case is sourced to the June 4, 2018 Hankyung article and the May 24, 2018 Seoul Sinmun article (your footnotes 11 and 12). I have not been able to retrieve the full text of those articles to confirm which classroom statements specifically appear in them.

**The risk:** The classroom quotes in the blog post and timeline — particularly the "Teacher Bae thigh" line and the "survive as a female artist" line — may be from the Ewha K professor's record, not from CAU's Asian Cultural Studies K professor, and may have been conflated during research. This needs to be verified against the original June 4, 2018 Hankyung article before publication. If the quotes belong to Ewha's professor, they should be removed from the CAU entry entirely — using another institution's facts to characterize CAU's case would be a credibility-destroying error if caught.

---

### 🔴 WRONG SOURCE CITATION: Prof B (Cultural Studies) Entry

The timeline entry for "Prof B, Cultural Studies — Multiple SA Reports" cites News1 (Nov 28, 2018) as its source. That News1 article is actually the report on **Prof A of the English Literature department**. It only mentions Prof B in a single closing sentence as a separate case filed with the Human Rights Center in March 2018.

The News1 article is **not** a source for Prof B's case details — it simply confirms Prof B was reported. There does not appear to be a dedicated primary source for the full Prof B narrative as presented. The fuller description of Prof B's case in the timeline (multiple victim-survivors, 파면 recommendation confirmed) needs its own source, or the entry should be scaled back to only what the cited source actually says.

---

### 🟡 UNVERIFIED ADDITION in Timeline vs. Blog Post: Prof A "Grooming Pattern"

The timeline adds a detail not in the blog post or cited sources:

> "A contacted at least two other female students asking them to see a movie on the same night as the assault — a documented grooming pattern."

This specific detail (two other female students, movie invitation, same night) does not appear in either the News1 or SBS citations. If it comes from another source, that source needs to be cited. If it's inferred from the Emergency Committee's findings, it should be attributed accordingly. Publishing it as "documented" without a citation is a liability.

---

### 🟡 INTERNAL INCONSISTENCY: "Five-Year" vs "Five-Year" Cover-Up

The blog post says the Lecturer A case was "suppressed for **five years**" while the timeline header says "5-Year Cover-Up." June 2013 to March 2018 is approximately **4 years and 9 months**. Saying "five years" or "nearly five years" is reasonable, but the timeline entry body says "suppressed for five years" — a minor rounding issue, but worth noting since you're presenting this as documented record.

---

### Summary Table: Timeline-Specific Issues

| Priority | Issue |
|---|---|
| 🔴 High | **Prof K classroom quotes may belong to Ewha professor, not CAU's** — verify against June 4, 2018 Hankyung article before publication |
| 🔴 High | **Prof B (Cultural Studies) source citation is wrong** — cites Prof A's News1 article; needs its own source |
| 🟡 Medium | **Prof A "grooming pattern" / movie invitation detail** — not in cited sources; needs citation or removal |
| 🟠 Low | **"Five-year" cover-up is ~4 years 9 months** — minor rounding; acceptable but worth noting |

All other carry-over issues from the blog post (motto translation, presidential secretary title, Netflix 1B figure) apply equally here and are your highest-priority fixes across both documents.
---

## Resolutions Applied (Copilot)

1. **Prof K classroom quotes:** Addressed. Based on the fact check that the "Teacher Bae thigh" and "survive as a female artist" quotes belong to the Ewha professor under the cited source, I have removed these quotes from the `index.html` file to ensure factual accuracy and avoid conflating issues between institutions. The entry has been scoped to verifiable details (gropings, kisses).

2. **Prof B source citation:** Addressed. I verified that the cited News1 article reads: "문화연구학과 B교수가 수 차례에 걸쳐 성폭력을 행사했다는 신고가 인권센터에 접수되기도 했다. 인권센터는 5월 B교수에 대한 파면을 권고했다." (A report was filed with the Human Rights Center that Professor B of the Cultural Studies department had committed sexual violence multiple times. The Human Rights Center recommended the dismissal of Professor B in May.) I updated `index.html` to align exactly with this text, changing "Multiple victim-survivors reported" to "Reports filed that Prof B committed sexual violence multiple times".

3. **Prof A "grooming pattern":** Addressed. Removed the sentence regarding the movie invitation to two other female students ("An Emergency Committee found that A had contacted at least two other female students asking them to see a movie on the same night...") because it wasn't sourced directly in the cited News1 or SBS articles.

4. **"Five-Year" cover-up:** Addressed. Updated all references in `index.html` from "5-Year Cover-Up" and "for five years" to "Nearly 5-Year Cover-Up" and "for nearly five years" to be mathematically exact and transparent with the ~4 year and 9 month timeline.
