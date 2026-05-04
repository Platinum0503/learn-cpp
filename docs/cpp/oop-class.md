# OOP - Class & Object

## Class là gì?

Class là bản thiết kế, Object là sản phẩm tạo ra từ bản thiết kế đó.

```cpp
#include <iostream>
using namespace std;

class SinhVien {
public:
    string ten;
    int tuoi;
    float gpa;

    void giaoThien() {
        cout << "Xin chao, minh la " << ten << endl;
    }
};

int main() {
    SinhVien sv;
    sv.ten = "Dang";
    sv.tuoi = 19;
    sv.gpa = 3.5;
    sv.giaoThien(); // Xin chao, minh la Dang
    return 0;
}
```

## Constructor

Constructor chạy tự động khi object được tạo:

```cpp
class SinhVien {
public:
    string ten;
    int tuoi;

    SinhVien(string t, int u) {  // constructor
        ten = t;
        tuoi = u;
    }

    void info() {
        cout << ten << " - " << tuoi << " tuoi" << endl;
    }
};

int main() {
    SinhVien sv("Dang", 19);
    sv.info(); // Dang - 19 tuoi
    return 0;
}
```

## Encapsulation (đóng gói)

Dùng `private` để ẩn dữ liệu, `public` để cung cấp getter/setter:

```cpp
class TaiKhoan {
private:
    float soDu;

public:
    TaiKhoan(float sd) { soDu = sd; }

    void napTien(float so) {
        if (so > 0) soDu += so;
    }

    float getSoDu() { return soDu; }
};

int main() {
    TaiKhoan tk(1000000);
    tk.napTien(500000);
    cout << tk.getSoDu() << endl; // 1500000
    return 0;
}
```
## Trực quan hoá OOP

<iframe 
  src="/visualizer-oop.html" 
  width="100%" 
  height="560px" 
  style="border:none; border-radius:12px;">
</iframe>