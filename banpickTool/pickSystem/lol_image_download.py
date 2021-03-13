import requests

language = "ko_KR"

def eng_name():
    url = "http://ddragon.leagueoflegends.com/cdn/11.3.1/data/"+language+"/champion.json"
    res = requests.get(url=url)
    res_ = res.json()
    return res_['data'].keys()

eng_name_= []
for i in eng_name():
    eng_name_.append(i)

def kor_name():
    url = "http://ddragon.leagueoflegends.com/cdn/11.3.1/data/"+language+"/champion.json"
    res = requests.get(url=url)
    res_1 = res.json()['data']
    result=[]
    for key in res_1.keys():
        result.append(res_1[key]['name'])
    return result

kor_name_ = []
for i in kor_name():
    kor_name_.append(i)
# for i in kor_name():
#     print(i)

def image(name):
    image_1 = "http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+name+".png" # small
    image_2 = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+name+"_0.jpg" # long
    return image_1, image_2

def voice(name):
    return name+".mp3"

image_1=[]
image_2=[]
voice_=[]
for i in eng_name():
    image_1.append(image(i)[0])
    image_2.append(image(i)[1])
    voice_.append(voice(i))

# result = {
#     eng_name_[0] : {
#         "name":kor_name_[0],
#         "image_1":image_1[0],
#         "image_2":image_2[0],
#         "voice":voice_[0]
#     }
# }
result={}
for i in range(0,len(eng_name_)):
    result[eng_name_[i]]={}

for i in range(0,len(eng_name_)):
    result[eng_name_[i]]["name"]=kor_name_[i]
    result[eng_name_[i]]["image_1"]=image_1[i]
    result[eng_name_[i]]["image_2"]=image_2[i]
    result[eng_name_[i]]["voice"]=voice_[i]
import json
res = json.dumps(result, ensure_ascii=False, indent="\t")
for i in range(0, len(eng_name_)):
    url = result[eng_name_[i]]["image_1"]
    r = requests.get(url)
    file = open("C:\\banpick\\banpickTool\\champ_image\\small_image\\"+result[eng_name_[i]]["name"]+".jpg","wb")
    file.write(r.content)
    file.close()
    print(i)
for i in range(0, len(eng_name_)):
    url = result[eng_name_[i]]["image_2"]
    r = requests.get(url)
    file = open("C:\\banpick\\banpickTool\\champ_image\\long_image\\"+result[eng_name_[i]]["name"]+".jpg","wb")
    file.write(r.content)
    file.close()
    print(i)

# "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png"
#
