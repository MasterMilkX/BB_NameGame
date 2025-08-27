# Blackboard Name Game

Turns the headshots of students from the Blackboard system into a game to learn their names

### Requirements

- [Python](https://www.python.org/downloads/)
- A browser capable of running HTML5 (any modern browser)
- Campus Wifi connection
- Administrator access to a Blackboard class

### Setup

#### Getting photos from Blackboard
1. Navigate to the Blackboard classroom you would like to get students from
2. Goto Course Tools > Student Photographs
    - *Note: You must be connected to campus WiFi in order to load the page for these photos*
3. Right-click on the page with the loaded images and click 'Save As'
4. Navigate to the [html](html/) folder of this repository and create a new folder with the class ID and section (or something else identifiable).
5. In the drop down for "Save type as" make sure to select **Webpage, Complete**. This should save a .html file Course Photo Roster and a folder full of pictures called Course Photo Roster_files
6. Repeat this section (steps 1-5) for any other class sections you have.


#### Creating game data
1. In the Python file named [bb_data_conv.py](bb_data_conv.py) change the variable called `PROFESSOR_NAME` to your name as it appears in Blackboard. This will remove your photo from the game and leave only students.
    - *Note: You may also manually remove yourself from the JSON created later instead*
2. To create the game data you will need to run the following file for your OS (double-click): 
    - Windows: [make_game_data_windows.bat](make_game_data_windows.bat)
    - MacOS + Linux: [make_game_data_macos.sh](make_game_data_macos.sh)
    Make sure you have Python installed!
3. After running the command, you should have a new file called [class_photos.json](class_photos.json). This file contains the name and image association to each student in each class folder given in [html](html/). You can modify the name of a student (e.g. using a preferred name or nickname, fixing typos) in this JSON file and it will update in the game.


### Playing the Game

1. To play the game you will need to run the following file for your OS (double-click): 
    - Windows: [start_game.bat](start_game.bat)
    - MacOS + Linux: [start_game.sh](start_game.sh)
    This should open a browser window automatically.

2. Click on the class you would like to play the name game for.
3. Type in the student's name as you see it (first names are ok!)
4. After 3 misses, the student's name will appear as a placeholder the text box.
5. The game will show your score at the end.

*Note: You can combine classes and students for added challenge by clicking the 'All Classes' button on the home screen*


### Notes

- This game was developed by [Professor M Charity](https://mastermilkx.github.io/) at the University of Richmond. It is very hacky I apologize -- but it still helps tremendously!
- This game is intended for personal and academic use ONLY!
- Feel free to fork this repo and improve on the game (and please let me know if you do -- I'd love to play it!)


- No student information will be shared or posted from running this game. Everything is only on your computer and not posted online. 
- Your student's data is protected so long as you don't post or share the files from [html](html/) online. Please be mindful and careful with your student's data!
- Thanks for playing!