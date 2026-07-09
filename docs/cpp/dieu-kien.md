# Câu lệnh điều kiện

## if / else

```cpp
#include <iostream>
using namespace std;

int main() {
    int diem = 75;

    if (diem >= 90) {
        cout << "Xuat sac" << endl;
    } else if (diem >= 70) {
        cout << "Kha" << endl;
    } else if (diem >= 50) {
        cout << "Trung binh" << endl;
    } else {
        cout << "Yeu" << endl;
    }
    return 0;
}
```

**Output:** `Kha`

## Toán tử ba ngôi

```cpp
int a = 10, b = 20;
int max = (a > b) ? a : b;
cout << "Max: " << max << endl; // Max: 20
```

## switch - case

```cpp
int ngay = 3;

switch (ngay) {
    case 1: cout << "Thu Hai"; break;
    case 2: cout << "Thu Ba"; break;
    case 3: cout << "Thu Tu"; break;
    case 4: cout << "Thu Nam"; break;
    case 5: cout << "Thu Sau"; break;
    default: cout << "Cuoi tuan"; break;
}
```

**Output:** `Thu Tu`

> ⚠️ Đừng quên `break` trong mỗi case, không thì code sẽ chạy tiếp xuống các case bên dưới.
## Trực quan hoá

<iframe 
  src="/visualizer-dieukien.html" 
  width="100%" 
  height="540px" 
  style="border:none; border-radius:12px;">
</iframe>