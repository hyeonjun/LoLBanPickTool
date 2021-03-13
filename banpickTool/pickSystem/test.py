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

result={}
for i in range(len(eng_name())):
    result[i+1]=eng_name_[i]


# pandas로 json 파일 읽기
df = pd.DataFrame.from_dict([result])
df = df.transpose()
# df = df.sort_values(by="name", ascending=True)
print(df)
# csv 저장
df.to_csv(r"C:\\banpick\\banpickTool\\pickSystem\\eng_name.csv", mode="w", encoding="euc-kr")