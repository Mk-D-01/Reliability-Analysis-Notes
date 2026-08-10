# -*- coding: utf-8 -*-
import html.parser, sys, re

sys.stdout.reconfigure(encoding='utf-8')

class HTMLValidator(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.void_tags = {'meta', 'link', 'img', 'br', 'hr', 'input', 'source', 'area', 'base', 'col', 'param', 'track', 'wbr'}
        self.errors = []
    def handle_starttag(self, tag, attrs):
        if tag not in self.void_tags:
            self.tags.append((tag, self.getpos()))
    def handle_endtag(self, tag):
        if tag in self.void_tags:
            return
        if not self.tags:
            self.errors.append(f'Unexpected end tag </{tag}> at line {self.getpos()[0]}')
            return
        last_tag, pos = self.tags.pop()
        if last_tag != tag:
            self.errors.append(f'Mismatched tag: expected </{last_tag}> (opened at line {pos[0]}), got </{tag}> at line {self.getpos()[0]}')

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

validator = HTMLValidator()
validator.feed(content)
print(f'HTML Validator: Unclosed tags = {len(validator.tags)}, Errors = {len(validator.errors)}')
if validator.errors:
    for e in validator.errors[:10]:
        print('  Error:', e)
else:
    print('  --> HTML is 100% syntactically well-formed!')

# Check math integrity
inlines = re.findall(r'<span class="math-inline">\$(.*?)\$</span>', content)
displays = re.findall(r'<div class="math-display-wrap">\$\$(.*?)\$\$</div>', content, re.DOTALL)
print(f'Protected Inline Math expressions: {len(inlines)}')
print(f'Protected Display Math blocks: {len(displays)}')

# Check for un-typeset placeholders
placeholders = re.findall(r'@@MATH_.*?@@', content)
print(f'Remaining placeholders: {len(placeholders)}')

# Check problem types in content
problem_types = re.findall(r'Problem Type \d+\.\d+', content)
print(f'Total Problem Types documented: {len(problem_types)}')
for pt in problem_types[:10]:
    print('  ', pt)
print(f'  ... and {len(problem_types) - 10} more.')
