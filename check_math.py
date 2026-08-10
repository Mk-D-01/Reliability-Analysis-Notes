# -*- coding: utf-8 -*-
import os, sys, glob, re

sys.stdout.reconfigure(encoding='utf-8')

for f in sorted(glob.glob('modules/*.md')):
    with open(f, 'r', encoding='utf-8') as fp:
        txt = fp.read()
    
    # count single and double dollars
    # replace $$ with a placeholder to count single dollars easily
    temp = txt.replace('$$', '@@DOUBLE_DOLLAR@@')
    single_count = temp.count('$')
    double_count = txt.count('$$')
    
    print(f"{f}: length={len(txt)}, single $ count={single_count} (odd? {single_count % 2 != 0}), double $$ count={double_count} (odd? {double_count % 2 != 0})")
    
    if single_count % 2 != 0:
        print(f"  --> ALERT: Odd single $ in {f}!")
        # find where unclosed $ might be
        lines = txt.split('\n')
        for i, l in enumerate(lines):
            l_temp = l.replace('$$', '@@')
            if l_temp.count('$') % 2 != 0:
                print(f"    Line {i+1}: {l}")

    if double_count % 2 != 0:
        print(f"  --> ALERT: Odd double $$ in {f}!")
