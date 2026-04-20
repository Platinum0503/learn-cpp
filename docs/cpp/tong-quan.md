# Tổng quan về C++

## C++ là gì?

C++ là ngôn ngữ lập trình mạnh mẽ, được phát triển từ C vào năm 1983 bởi Bjarne Stroustrup.
Điểm khác biệt lớn nhất so với C là C++ hỗ trợ **lập trình hướng đối tượng (OOP)**.

## C++ khác C ở chỗ nào?

| Tính năng | C | C++ |
|---|---|---|
| OOP (class, object) | Không | Có |
| `cout` / `cin` | Không | Có |
| Template | Không | Có |
| STL | Không | Có |

## Chương trình C++ đầu tiên

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}
```

**Output:**
```
Hello, C++!
```