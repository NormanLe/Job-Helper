from selenium import webdriver
import time


def scrape_jobs(num):

    baseURL = "https://www.linkedin.com/jobs/search/?keywords="
    jobTitles = ['Software Engineer', 'Software Developer', 'QA Engineer']

    for title in jobTitles:
        driver = webdriver.Chrome('./chromedriver')

        driver.get(baseURL + title)
        time.sleep(20)

        # search_box = driver.find_element_by_name('q')
        # search_box.send_keys('ChromeDriver')
        # search_box.submit()
        # time.sleep(5)  # Let the user actually see something!
        driver.quit()


def main():
    scrape_jobs(100)


if __name__ == "__main__":
    main()
