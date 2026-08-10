import sys, base64
if len(sys.argv) >= 3:
    outpath = sys.argv[1]
    b64data = sys.argv[2]
    with open(outpath, 'wb') as f:
        f.write(base64.b64decode(b64data))
    print(f'Successfully wrote {outpath} ({len(b64data)} b64 chars)')
