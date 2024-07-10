N = int(input()) # 4

def print_num(n):
    cnt = 1
    for _ in range(n):
        for _ in range(n):
            print(cnt, end=" ")
            cnt += 1
            if cnt == 10:
                cnt =1 # 초기화 하는 작업을 생각 못했음.
        print() # 개행을 열을 다 채우고 삽입하면, 굳이 r이 0이냐 0이 아니냐를 판단할 필요가 없어짐

print_num(N)