# Hàm

## Khai báo và gọi hàm

```cpp
#include <iostream>
using namespace std;

// khai báo hàm
int tong(int a, int b) {
    return a + b;
}

int main() {
    int kq = tong(3, 4);
    cout << "Tong: " << kq << endl; // Tong: 7
    return 0;
}
```

## Hàm không trả về giá trị (void)

```cpp
void inLoi(string thongBao) {
    cout << "[LOI] " << thongBao << endl;
}

int main() {
    inLoi("Khong tim thay file!");
    return 0;
}
```

## Tham số mặc định

```cpp
void chao(string ten, string loi = "Xin chao") {
    cout << loi << ", " << ten << "!" << endl;
}

int main() {
    chao("Dang");           // Xin chao, Dang!
    chao("Dang", "Hello");  // Hello, Dang!
    return 0;
}
```

## Truyền tham chiếu (pass by reference)

```cpp
void tangGap2(int &x) {
    x = x * 2;
}

int main() {
    int so = 5;
    tangGap2(so);
    cout << so << endl; // 10 — giá trị gốc bị thay đổi
    return 0;
}
```

## Đệ quy

```cpp
int giaiThua(int n) {
    if (n == 0 || n == 1) return 1;
    return n * giaiThua(n - 1);
}

int main() {
    cout << giaiThua(5) << endl; // 120
    return 0;
}
```
## Trực quan hoá hàm

<iframe 
  src="/visualizer-ham.html" 
  width="100%" 
  height="540px" 
  style="border:none; border-radius:12px;">
</iframe>