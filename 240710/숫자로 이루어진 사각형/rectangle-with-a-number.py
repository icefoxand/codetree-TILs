N = int(input()) # 4

for r in range(N): # 0 1 2 3
    if r >0:
        print()
    for c in range(N): # 0 1 2 3
        val = r*N + c + 1
        if val <=9:
            print(val, end=" ")
        elif val >9:
            s = val//9 # 9로 나눈 몫을 s로 정의
            print(val - s*9, end=" ")