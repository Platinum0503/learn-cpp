# Vòng lặp

## for

```cpp
for (int i = 1; i <= 5; i++) {
    cout << i << " ";
}
// Output: 1 2 3 4 5
```

## while

```cpp
int i = 1;
while (i <= 5) {
    cout << i << " ";
    i++;
}
// Output: 1 2 3 4 5
```

## do - while

Khác `while` ở chỗ: **chạy ít nhất 1 lần** dù điều kiện sai ngay từ đầu.

```cpp
int i = 10;
do {
    cout << i << " ";
    i++;
} while (i <= 5);
// Output: 10  (chạy 1 lần dù i > 5)
```

## break và continue

```cpp
// break: thoát khỏi vòng lặp
for (int i = 1; i <= 10; i++) {
    if (i == 5) break;
    cout << i << " ";
}
// Output: 1 2 3 4

// continue: bỏ qua iteration hiện tại
for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    cout << i << " ";
}
// Output: 1 2 4 5
```

## Vòng lặp lồng nhau

```cpp
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        cout << i * j << "\t";
    }
    cout << endl;
}
```

**Output:**
```
1   2   3
2   4   6
3   6   9
```
## Trực quan hoá vòng lặp

<iframe 
  src="/visualizer.html" 
  width="100%" 
  height="520px" 
  style="border:none; border-radius:12px;">
</iframe>