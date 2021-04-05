def extract_info(movie_list):

    final_result = []

    for movie in movie_list:
        title = movie.find("dt", {"class":"tit"}).find("a").text
        img_src = movie.find("div", {"class":"thumb"}).find("a").find("img")['src']
        ratings = movie.find("div",{"class":"star_t1"}).find("span", {"class":"num"}).text

        info = movie.find("dl",{"class":"info_txt1"}).find_all("dd")

        director = info[1].text.replace('\n','')
        release = info[0].text.replace('\r','').replace('\t','').replace('\n','').split('|')[2].replace('개봉','')
                
        if len(info) >= 3 :
            actor = info[2].text.replace('\n','').replace('\t','').replace('\r','')
        else :
            actor = None


        # director = movie.find_all("span", {"class" : "link_txt"})[1].find("a").text
        # actor = movie.find("dt", {"class":"tit_t3"}).find("span", {"class":"link_txt"}).find("a").text
        # release = movie.find("dl",{"class":"info_txt1"}).find.("dd").contents[6].text

        movie_info = {
            'title' : title,
            'img_src' : img_src,
            'ratings' : ratings,
            'director' : director,
            'actor' : actor,
            'release': release
        }
        final_result.append(movie_info)

    return final_result

 