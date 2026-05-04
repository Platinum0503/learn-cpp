# Con trỏ (Pointer)

## Con trỏ là gì?

Con trỏ là biến lưu **địa chỉ bộ nhớ** của biến khác, không phải giá trị trực tiếp.

```cpp
int x = 10;
int *p = &x;  // p lưu địa chỉ của x

cout << x << endl;   // 10   — giá trị của x
cout << &x << endl;  // 0x... — địa chỉ của x
cout << p << endl;   // 0x... — địa chỉ (giống &x)
cout << *p << endl;  // 10   — giá trị tại địa chỉ p trỏ tới
```

## Thay đổi giá trị qua con trỏ

```cpp
int x = 10;
int *p = &x;

*p = 99;  // thay đổi giá trị của x thông qua con trỏ
cout << x << endl; // 99
```

## Con trỏ và mảng

```cpp
int arr[] = {1, 2, 3, 4, 5};
int *p = arr; // p trỏ vào phần tử đầu tiên

for (int i = 0; i < 5; i++) {
    cout << *(p + i) << " ";
}
// Output: 1 2 3 4 5
```

## Con trỏ null

```cpp
int *p = nullptr; // con trỏ không trỏ vào đâu

if (p == nullptr) {
    cout << "Con tro null!" << endl;
}
```

> ⚠️ Truy cập vào con trỏ null sẽ gây crash chương trình. Luôn kiểm tra trước khi dùng.

## Cấp phát bộ nhớ động

```cpp
int *p = new int(42);  // cấp phát 1 int trên heap
cout << *p << endl;    // 42

delete p;  // giải phóng bộ nhớ — KHÔNG được quên!
p = nullptr;
```
## Trực quan hoá con trỏ

<iframe 
  src="/visualizer-pointer.html" 
  width="100%" 
  height="540px" 
  style="border:none; border-radius:12px;">
</iframe>