import random

def shuffle(arr):
  for _ in range(len(arr)):
    rnd = random.randint(0, (len(arr) - 1))
    arr[rnd - 1], arr[rnd] = arr[rnd], arr[rnd - 1]
  return arr 

cards = [i for i in range(52)]
print(shuffle(cards))
random.shuffle(cards)
print(cards)
