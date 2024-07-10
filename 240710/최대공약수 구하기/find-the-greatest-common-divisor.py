from collections import deque

def get_greatest_common_divisor(n, m):
    result = deque([])
    max_divisor = min(n, m)  # 최대 공약수는 N과 M 중 작은 값보다 크거나 같을 수 없습니다.

    for divisor in range(1, max_divisor + 1):  # 1부터 최대 공약수까지 반복합니다.
        if n % divisor == 0 and m % divisor == 0:  # 해당 수가 N과 M의 공약수인지 확인합니다.
            result.append(divisor)  # 공약수를 결과 리스트에 추가합니다.

    return max(list(result))  # 공약수 리스트를 반환합니다.

N, M = map(int, input().split())
print(get_greatest_common_divisor(N,M))  # 공약수 리스트 출력