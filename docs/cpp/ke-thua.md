# Kế thừa

## Kế thừa cơ bản

```cpp
#include <iostream>
using namespace std;

class DongVat {
public:
    string ten;

    void an() {
        cout << ten << " dang an" << endl;
    }
};

class Cho : public DongVat {
public:
    void sua() {
        cout << ten << " dang sua: Go go!" << endl;
    }
};

int main() {
    Cho c;
    c.ten = "Milu";
    c.an();   // Milu dang an
    c.sua();  // Milu dang sua: Go go!
    return 0;
}
```

## Constructor trong kế thừa

```cpp
class DongVat {
public:
    string ten;
    DongVat(string t) : ten(t) {}
};

class Meo : public DongVat {
public:
    string mauLong;
    Meo(string t, string ml) : DongVat(t), mauLong(ml) {}

    void info() {
        cout << ten << " - long " << mauLong << endl;
    }
};

int main() {
    Meo m("Kitty", "trang");
    m.info(); // Kitty - long trang
    return 0;
}
```

## Ghi đè phương thức (override)

```cpp
class DongVat {
public:
    virtual void keu() {
        cout << "..." << endl;
    }
};

class Cho : public DongVat {
public:
    void keu() override {
        cout << "Go go!" << endl;
    }
};

class Meo : public DongVat {
public:
    void keu() override {
        cout << "Meo meo!" << endl;
    }
};
```
## Trực quan hoá

<iframe 
  src="/visualizer-kethua.html" 
  width="100%" 
  height="560px" 
  style="border:none; border-radius:12px;">
</iframe>