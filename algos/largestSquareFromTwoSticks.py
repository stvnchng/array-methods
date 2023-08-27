'''
2 wooden sticks, len A and B
each can be cut into shorter int lengths

goal is to construct largest
possible square, cut the sticks
in a way to achieve 4 sticks of the
same lenght. what is the longest side
of the square we can achieve?
'''

import math


def sticks(A, B):
    if A == B:
        return A // 2
    A, B = max(A, B), float(min(A, B))
    if A / B >= 4:
        return A // 4
    if A / B >= 3: 
        return int(B)
    if A / B >= 2:
        return math.ceil(min(A / 3, B))
    if A / B > 1:
        return min (A, B) // 2
    

print(sticks(10, 21)) # expects 7
print(sticks(13, 11)) # expects 5
print(sticks(1, 8)) # expects 2
print(sticks(2, 1)) # expects 1

