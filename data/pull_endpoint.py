import requests
from time import sleep

# CREATE TABLE Units (uoscode CHAR(8) PRIMARY KEY, uosdesc VARCHAR(4096), uostitle VARCHAR(512), uosurl VARCHAR(256));

rank = 1
max_rank = 1000
units = ["SOFT", "INFO", "ISYS"]
unit = units.pop()

first_print = True


def sanitise_input(uoscode, uosdesc, uostitle):
    return uoscode.replace("'", "''"), uosdesc.replace("'", "''"), uostitle.replace("'", "''")


while(units or unit):

    if unit == "" and units:
        unit = units.pop();
        first_print = True

    search_str = f"https://www.sydney.edu.au/s/search.html?query={unit}&collection=Sydney-Curriculum_UOS&profile=_default_preview&form=custom-json&start_rank={rank}"
    print(search_str)

    results = requests.get(search_str).json()
    max_rank = int(results["resultsSummary"]["totalMatching"])
    data: list  = results["results"]

    if first_print:
        print(results["resultsSummary"])

    with open('sqltext.sql', 'a') as f:
        for item in data:
            print(f"{item['uosCode']}")

            uoscode, uosdesc, uostitle = sanitise_input(item["uosCode"], item["description"], item["title"])

            f.write(f"INSERT INTO Units (uoscode, uosdesc, uostitle, uosurl) values (\'{uoscode}\', \'{uosdesc}\', \'{uostitle}\', \'{item['UoSURL']}\');\n")
        f.close()

    if max_rank > rank:
        rank += min(max_rank - rank, 10)

    else:
        unit = ""
        rank = 1

    sleep(5)
    # print(results)
