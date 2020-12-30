## 图片编码成Base64后体积变大

Each Base64 digit represents exactly 6 bits of data. 
So, three 8-bits bytes of the input string/binary file (3×8 bits = 24 bits) can be represented by four 6-bit Base64 digits (4×6 = 24 bits).

二进制文件特点：3个字节（每个字节 = 8-bits bytes）
Base64字符特点：4个字符（每个字符 = 6-bits bytes）

两者代表的比特位不同。Base64每个字符代表6个比特位，相比二进制每个字节代表8个比特位要小。

因此，二进制制文件转Base64格式后，内存占用体积是之前的 133% 倍。

