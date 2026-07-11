# Đa hình (Polymorphism)

## Virtual function

```cpp
#include <iostream>
using namespace std;

class HinhHoc {
public:
    virtual float dienTich() {
        return 0;
    }
};

class HinhTron : public HinhHoc {
public:
    float r;
    HinhTron(float r) : r(r) {}

    float dienTich() override {
        return 3.14 * r * r;
    }
};

class HinhChuNhat : public HinhHoc {
public:
    float dai, rong;
    HinhChuNhat(float d, float r) : dai(d), rong(r) {}

    float dienTich() override {
        return dai * rong;
    }
};

int main() {
    HinhHoc *h1 = new HinhTron(5);
    HinhHoc *h2 = new HinhChuNhat(4, 6);

    cout << h1->dienTich() << endl; // 78.5
    cout << h2->dienTich() << endl; // 24

    delete h1;
    delete h2;
    return 0;
}
```

## Abstract class

Class chứa ít nhất 1 pure virtual function — không thể tạo object trực tiếp:

```cpp
class HinhHoc {
public:
    virtual float dienTich() = 0;  // pure virtual
    virtual float chuVi() = 0;
};

class HinhVuong : public HinhHoc {
public:
    float canh;
    HinhVuong(float c) : canh(c) {}

    float dienTich() override { return canh * canh; }
    float chuVi() override { return 4 * canh; }
};
```
## Trực quan hoá

<iframe 
  src="/visualizer-dahinh.html" 
  width="100%" 
  height="560px" 
  style="border:none; border-radius:12px;">
</iframe>