# Mảng

## Mảng một chiều

```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};

    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    // Output: 10 20 30 40 50
    return 0;
}
```

## Mảng hai chiều

```cpp
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        cout << matrix[i][j] << " ";
    }
    cout << endl;
}
```

**Output:**
## Trực quan hoá mảng

<iframe 
  src="/visualizer-mang.html" 
  width="100%" 
  height="540px" 
  style="border:none; border-radius:12px;">
</iframe>