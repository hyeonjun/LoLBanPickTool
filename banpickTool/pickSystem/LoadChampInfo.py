import requests
import pandas as pd

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


def small_and_ban(name):
    image_3 = "http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/"+name+".png"
    return image_3

def lobby_img(name):
    image_1 = "http://39.118.174.168:8000/champ_image/right/"+name+".png"
    image_2 = "http://39.118.174.168:8000/champ_image/left/"+name+".png"
    image_4 = "http://39.118.174.168:8000/champ_image/long_image_noColor/"+name+".jpg"
    return image_1, image_2, image_4

def voice(name):
    return name+".mp3"

dummy=[]
image_1=[] # right
image_2=[] # left
image_3=[] # small
image_4=[] # ban
voice_=[]
for i in eng_name():
    image_3.append(small_and_ban(i))
    voice_.append(voice(i))
print(image_3)
for i in kor_name():
    image_1.append(lobby_img(i)[0])
    image_2.append(lobby_img(i)[1])
    image_4.append(lobby_img(i)[2])

result={}
for i in range(0,len(eng_name_)):
    result[eng_name_[i]]={}

for i in range(0,len(eng_name_)):
    result[eng_name_[i]]["name"]=kor_name_[i]
    result[eng_name_[i]]["lobby_image_right"]=image_1[i]
    result[eng_name_[i]]["lobby_image_left"]=image_2[i]
    result[eng_name_[i]]["small_img"]=image_3[i]
    result[eng_name_[i]]["ban_img"]=image_4[i]
    result[eng_name_[i]]["voice"]=voice_[i]
import json
res = json.dumps(result, ensure_ascii=False, indent="\t")

# # Json 파일로 저장
# with open("C:\\banpick\\banpickTool\\pickSystem\\sample.json", 'w') as outfile:
#     json.dump(result, outfile, ensure_ascii=False, indent="\t")

# Json 파일 읽기
# with open("C:\\Users\\user\\Desktop\\sample.json", "r") as json_file:
#     json_data = json.load(json_file)
#     print(json_data)

# pandas로 json 파일 읽기
df = pd.read_json(r"C:\\banpick\\banpickTool\\pickSystem\\sample.json", encoding="euc-kr")
df = df.transpose()
df = df.sort_values(by="name", ascending=True)
print(df)
# csv 저장
df.to_csv(r"C:\\banpick\\banpickTool\\pickSystem\\sample.csv", mode="w", encoding="euc-kr")


# import csv
# with open("C:\\banpick\\banpickTool\\pickSystem\\sample.csv", "r") as fp:
#     csv_reader = csv.reader(fp)
#     next(csv_reader)
#     for row in csv_reader:
#         print(row)
# data = pd.read_csv("C:\\banpick\\banpickTool\\pickSystem\\sample.csv")
# print(data)

