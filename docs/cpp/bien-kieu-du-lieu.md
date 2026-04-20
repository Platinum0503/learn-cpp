# Biến & Kiểu dữ liệu

## Biến là gì?

Biến là ô nhớ dùng để lưu trữ dữ liệu trong chương trình. Mỗi biến có **tên**, **kiểu dữ liệu** và **giá trị**.

```cpp
int tuoi = 20;       // biến kiểu số nguyên
float diem = 9.5;    // biến kiểu số thực
char kyTu = 'A';     // biến kiểu ký tự
bool daQua = true;   // biến kiểu đúng/sai
```

## Các kiểu dữ liệu cơ bản

| Kiểu | Kích thước | Ví dụ |
|---|---|---|
| `int` | 4 bytes | -2,147,483,648 đến 2,147,483,647 |
| `float` | 4 bytes | 3.14, 9.5 |
| `double` | 8 bytes | 3.14159265358979 |
| `char` | 1 byte | 'A', 'z', '9' |
| `bool` | 1 byte | true, false |
| `string` | động | "Hello", "C++" |

## Khai báo biến

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    int tuoi = 20;
    double chieu_cao = 1.75;
    string ten = "Dang";
    bool la_sinh_vien = true;

    cout << "Ten: " << ten << endl;
    cout << "Tuoi: " << tuoi << endl;
    cout << "Chieu cao: " << chieu_cao << endl;
    return 0;
}
```

**Output:**