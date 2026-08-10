# -*- coding: utf-8 -*-
import sys, re

sys.stdout.reconfigure(encoding='utf-8')

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's check for any math blocks that might have HTML tags injected inside them, e.g. $...<em>...$ or $...<strong>...$
# In markdown parsing, if regex replaces *...* with <em>...</em> inside $...$, MathJax will fail to render it!
math_inlines = re.findall(r'\$([^\$]+)\$', html)
corrupted_inline = [m for m in math_inlines if '<' in m or '>' in m]
print(f"Total inline math expressions: {len(math_inlines)}")
print(f"Corrupted inline math expressions (containing HTML tags like <em> or <strong>): {len(corrupted_inline)}")
for c in corrupted_inline[:15]:
    print("  Corrupted:", c)

math_blocks = re.findall(r'\$\$([^\$]+)\$\$', html)
corrupted_blocks = [m for m in math_blocks if '<' in m or '>' in m and not '\\le' in m and not '\\ge' in m]
print(f"Total display math blocks: {len(math_blocks)}")
print(f"Display math containing HTML: {len(corrupted_blocks)}")
for c in corrupted_blocks[:15]:
    print("  Block Corrupted:", c)
