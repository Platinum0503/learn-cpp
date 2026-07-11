# Template

## Function template

Viết hàm dùng được cho nhiều kiểu dữ liệu:

```cpp
#include <iostream>
using namespace std;

template <typename T>
T timMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << timMax(3, 7) << endl;        // 7 (int)
    cout << timMax(3.14, 2.71) << endl;  // 3.14 (double)
    cout << timMax('a', 'z') << endl;    // z (char)
    return 0;
}
```

## Class template

```cpp
template <typename T>
class Stack {
private:
    T data[100];
    int top = -1;

public:
    void push(T val) {
        data[++top] = val;
    }

    T pop() {
        return data[top--];
    }

    bool isEmpty() {
        return top == -1;
    }
};

int main() {
    Stack<int> s;
    s.push(1);
    s.push(2);
    s.push(3);
    cout << s.pop() << endl; // 3
    cout << s.pop() << endl; // 2
    return 0;
}
```
## Trực quan hoá

<iframe 
  src="/visualizer-template.html" 
  width="100%" 
  height="560px" 
  style="border:none; border-radius:12px;">
</iframe>