#Challenge found here http://www.pythonchallenge.com/pc/def/map.html
#Decode the string by changing each letter to the one two places further in the alphabet
#Is this the best solution? I don't know yet but it's what I came up with and it works

code = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."
translation = ""
alphabet = "abcdefghijklmnopqrstuvwxyz"

for letter in code:
    if letter.isalpha() == False:
        translation += letter
    else:
        for index, value in enumerate(alphabet):
            if value == letter:
                if index > 23:
                    translation += alphabet[index-24]
                else:
                    translation += alphabet[index+2]

print(translation)