def simpleCipher(encrypted, k):
    decrypted = ""
    for char in encrypted:
        # แปลงตัวอักษรเป็นตัวเลข 0-25 (A=0, Z=25)
        current_pos = ord(char) - ord('A')
        
        # เลื่อนตำแหน่งไปทางทวนเข็มนาฬิกา (ลบ k) 
        # และใช้ % 26 เพื่อให้วนกลับจาก A ไป Z ได้
        new_pos = (current_pos - k) % 26
        
        # แปลงตัวเลขกลับเป็นตัวอักษร
        decrypted += chr(new_pos + ord('A'))
        
    return decrypted

# ตัวอย่างการใช้งาน
encrypted_str = "VTAOG"
shift = 2
result = simpleCipher(encrypted_str, shift)
print(result)  # ผลลัพธ์: TRYME
