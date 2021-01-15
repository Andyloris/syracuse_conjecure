import sys

cache = []
def filt(k):
    if(k%2 == 0):
        return True
    else:
        return False
def invert(b):
    if(b == True):
        return False
    else:
        return True
def search():
    tree = []
    with open('syracuse_results.txt', 'w+') as dataend:
        i = 0
        while i < sys.maxsize:
            i += 1
            n = i
            print('testing ' + str(i))
            while n != 4 or n != 2 or n != 1 or n != 0 or invert(n in cache):
                # print(n)
                check = filt(n)
                if(check == True):
                    n = n / 2
                    tree.append(n)
                else:
                    n = (3*n)+1
                    tree.append(n)
                if n == 4.0 or n == 2.0 or n == 1.0 or n == 0.0:
                    cache.extend(tree)
                    tree.clear()
                    print(str(i) + ' stops\n')
                    # dataend.write(str(i) + ' stops\n')
                    break
            else:
                print('tesr')
                pass

search()
