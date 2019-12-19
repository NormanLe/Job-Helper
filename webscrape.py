import bs4
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
from datetime import datetime, timedelta


filename = "jobs.csv"
f = open(filename, 'w')

headers = "jobPostingTitle , companyName, Location, date, status\n"
f.write(headers)

def main():
   
    my_url = 'https://www.monster.com/jobs/search/?q=entry-level-software-engineer&stpage=1&page=10'

    uClient = uReq(my_url)
    page_html = uClient.read()
    uClient.close()
    scrapJobs(page_html)

    f.close()

def scrapJobs(page_html):
    page_soup = soup(page_html, 'html.parser')
    containers = page_soup.findAll("section", {"class" : "card-content"})

    jobSet = set()
    for container in containers:
        title = container.find('h2', class_='title')
        company = container.find('div', class_='company')
        location = container.find('div', class_='location')
        time = container.find('time', {"datetime" : "2017-05-26T12:00"})
        if None in (title, company, location, time):
            continue
       
        title = title.text.strip().replace(',',' ')
        company = company.text.strip().replace(',',' ')
        location = location.text.strip().replace(',',' ')
        time = (str)(subtractDays(time))
        timeParse = time.split(" ")
        
        job = title + "," + company + "," + location
        if not isDupJob(jobSet,job):
            jobSet.add(job)
            f.write(job + "," + timeParse[0] + "," + "Not Applied" +  "\n")
            
        else:
           print("There was a Dup: " + job)
           
def isDupJob(jobSet, job):
    return (job in jobSet)


def subtractDays(time):
    
    time = time.text.strip()
    if time == 'Posted today':
        return datetime.today()
    elif time == '+30 days ago':
        return datetime.today() - timedelta(days = 30)
    else:
        timeParse = time.split(" ")
        day = (int)(timeParse[0])
        return datetime.today() - timedelta(days = day)



if __name__ == "__main__":
    main()