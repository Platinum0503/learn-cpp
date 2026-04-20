# STL cơ bản

## vector

```cpp
#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> v = {3, 1, 4, 1, 5};
    v.push_back(9);   // thêm cuối
    v.pop_back();     // xóa cuối

    cout << v.size() << endl;  // 5
    cout << v[0] << endl;      // 3

    for (int x : v) cout << x << " ";
    return 0;
}
```

## map

```cpp
#include <map>
#include <iostream>
using namespace std;

int main() {
    map<string, int> diemSV;
    diemSV["Dang"] = 90;
    diemSV["An"] = 85;
    diemSV["Binh"] = 78;

    for (auto &kv : diemSV) {
        cout << kv.first << ": " << kv.second << endl;
    }
    return 0;
}
```

## set

```cpp
#include <set>
#include <iostream>
using namespace std;

int main() {
    set<int> s = {3, 1, 4, 1, 5, 9, 2, 6};
    // set tự động loại bỏ trùng lặp và sắp xếp

    for (int x : s) cout << x << " ";
    // Output: 1 2 3 4 5 6 9
    return 0;
}
```

## sort và algorithm

```cpp
#include <algorithm>
#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9};
    sort(v.begin(), v.end()); // sắp xếp tăng dần

    for (int x : v) cout << x << " ";
    // Output: 1 2 5 8 9
    return 0;
}
```