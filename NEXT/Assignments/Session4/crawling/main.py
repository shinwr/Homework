import requests
from bs4 import BeautifulSoup
import csv
from movie import extract_info

file = open('movie.csv', mode='w', newline='')
writer = csv.writer(file)
writer.writerow(["영화 제목","이미지 주소","평점","감독","개봉일자","출연"])

MOVIE_URL = f'https://movie.naver.com/movie/running/current.nhn'
movie_html = requests.get(MOVIE_URL)
movie_soup = BeautifulSoup(movie_html.text, "html.parser")

movie_list_box = movie_soup.find("ul", {"class":"lst_detail_t1"})
movie_list = movie_list_box.find_all("li")

final_result = extract_info(movie_list)

for result in final_result:
    row = []
    row.append(result['title'])
    row.append(result['img_src'])
    row.append(result['ratings'])
    row.append(result['director'])
    row.append(result['release'])
    row.append(result['actor'])
    writer.writerow(row)