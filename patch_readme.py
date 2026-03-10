import re

with open('README.md', 'r') as f:
    text = f.read()

text = text.replace(
    "# CAU Exposed: Sexual Violence, Financial Crimes & Institutional Failure",
    "# <img src=\"imgs/favicons/gender_watchdog_favicon_128x128.png\" width=\"40\" align=\"left\" style=\"margin-right:10px\"> CAU Exposed: Sexual Violence, Financial Crimes & Institutional Failure\n<br>"
)

text = text.replace(
    "- **Partner university accountability**: blank partner pages at Ajou and Hongik \nuniversities as of March 2026",
    "- **Phantom Partnership Audit**: documented 27% reciprocity rate among CAU's top 63 claimed international partners, followed by entire database deletion in March 2026"
)

# If the multi-line replace above fails because of python formatting, let's use a simpler one.
