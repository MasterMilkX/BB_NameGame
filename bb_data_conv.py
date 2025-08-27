## Import libraries
from bs4 import BeautifulSoup
from tqdm import tqdm
from urllib.parse import urljoin
from os import walk
import json

# CONSTANTS
PROFESSOR_NAME = "M Charity"    # CHANGE TO YOUR NAME
HTML_FOLDER = "html/"

# parse HTML
def getClassDat(class_folder):
    ''' Parses the Student Photos html complete file to extract the imgs and names'''
    html_file = urljoin(class_folder, 'Course Photo Roster.html')

    with open(html_file, 'r') as f:
        soup = BeautifulSoup(f, 'html.parser')

        # get the pic div
        json_dat = []
        all_imgs = soup.find_all('img')
        print(f"Found {len(all_imgs)} images")

        # parse each image
        for img in all_imgs:

            # not a student image
            if 'alt' not in img.attrs:
                continue

            # get the student name
            rev_name = img['alt']
            student_name = rev_name.split(" ")[::-1]
            student_name = ' '.join(student_name)

            # skip the professor
            if student_name == PROFESSOR_NAME:
                continue

            # get the image path and data
            img_path = urljoin(class_folder, img['src'])

            # add to json data
            json_dat.append({'name': student_name, 'img': img_path})

        return json_dat
    

# main 
if __name__ == "__main__":
    # find all directories in the html folder
    class_folders = walk(HTML_FOLDER).__next__()[1]
    print(f"Classes found: {class_folders}")

    # parse each class folder
    class_json = {}
    with tqdm(class_folders) as pbar:
        for class_folder in tqdm(class_folders):
            pbar.set_description("Parsing class folders: %r" % class_folder)
            class_json[class_folder] = getClassDat(HTML_FOLDER+class_folder+"/")
            pbar.update(1)
            

    # export to json
    with open('class_photos.json', 'w') as f:
        json.dump(class_json, f, indent=4)


    print("="*20)
    print("DONE!")
    print("Data exported to class_photos.json")
