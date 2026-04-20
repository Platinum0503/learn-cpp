# Câu hỏi thường gặp

## `endl` vs `"\n"` — cái nào nhanh hơn?

`"\n"` nhanh hơn vì `endl` flush buffer sau mỗi lần in. Trong vòng lặp lớn nên dùng `"\n"`.

## Khi nào dùng `float`, khi nào dùng `double`?

Mặc định dùng `double`. Chỉ dùng `float` khi cần tiết kiệm bộ nhớ (embedded systems).

## `struct` và `class` khác nhau gì?

Gần như giống nhau, chỉ khác mặc định: `struct` mặc định `public`, `class` mặc định `private`.

## Tại sao phải `delete` sau `new`?

Vì `new` cấp phát bộ nhớ trên heap — không tự giải phóng. Quên `delete` gây **memory leak**.

## `nullptr` vs `NULL` vs `0`?

Dùng `nullptr` trong C++ hiện đại. `NULL` và `0` là cách cũ, có thể gây nhầm lẫn kiểu.

## `#include <iostream>` vs `#include <stdio.h>`?

`<iostream>` là C++ (`cout`, `cin`). `<stdio.h>` là C (`printf`, `scanf`). Trong C++ dùng `<iostream>`.