#Challenge found here http://www.pythonchallenge.com/pc/def/map.html
#Decode the string by changing each letter to the one two places further in the alphabet
#Is this the best solution? I don't know yet but it's what I came up with and it works

code = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."
translation = ""
alphabet = "abcdefghijklmnopqrstuvwxyz"

#Cycle through letters in code string
for letter in code:
    #Check for non-alpha chars such as spaces and add to the translation string
    if letter.isalpha() == False:
        translation += letter
    else:
        #Cycle through letters in alphabet string using enumerate so that index can be used
        for index, value in enumerate(alphabet):
            if value == letter:
                #If near the end of the string a special case is needed to avoid exceeding string length
                if index > 23:
                    translation += alphabet[index-24]
                #Otherwise just add 2 to the index of the matched alphabet letter to get the letter two places further
                else:
                    translation += alphabet[index+2]

print(translation)