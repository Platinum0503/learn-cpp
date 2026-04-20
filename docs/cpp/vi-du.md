# Ví dụ thực tế

## Ví dụ 1: Tính điểm trung bình

```cpp
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    float diem[] = {8.5, 7.0, 9.0, 6.5, 8.0};
    float tong = 0;

    for (int i = 0; i < n; i++) tong += diem[i];

    cout << "DTB: " << tong / n << endl; // DTB: 7.8
    return 0;
}
```

## Ví dụ 2: Kiểm tra số nguyên tố

```cpp
bool laSoNguyenTo(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    for (int i = 2; i <= 20; i++) {
        if (laSoNguyenTo(i)) cout << i << " ";
    }
    // Output: 2 3 5 7 11 13 17 19
    return 0;
}
```

## Ví dụ 3: Quản lý sinh viên bằng OOP

```cpp
#include <iostream>
#include <vector>
using namespace std;

class SinhVien {
public:
    string ten;
    float gpa;

    SinhVien(string t, float g) : ten(t), gpa(g) {}

    void hienThi() {
        cout << ten << " - GPA: " << gpa << endl;
    }
};

int main() {
    vector<SinhVien> ds;
    ds.push_back(SinhVien("Dang", 3.5));
    ds.push_back(SinhVien("An", 3.8));
    ds.push_back(SinhVien("Binh", 3.2));

    for (auto &sv : ds) sv.hienThi();
    return 0;
}
```

## Ví dụ 4: Bubble Sort

```cpp
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22};
    bubbleSort(arr, 5);
    for (int i = 0; i < 5; i++) cout << arr[i] << " ";
    // Output: 12 22 25 34 64
    return 0;
}
```