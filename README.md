# team-profile-gen

Project Repository address: https://github.com/JhonatanDP/team-profile-gen

## Pics
![_Users_jhonatandiaz_Desktop_Bootcamp_Modules_Module-10_Challenge_team-profile-gen_output_team html](https://user-images.githubusercontent.com/106892660/186500874-171aff70-602c-4e02-86a5-fce1bc302326.png)

## Video link 
https://drive.google.com/file/d/1nu-gOIOis8HSaPf-x_XBVMhzC_ud_aW7/view?usp=sharing

## User History
- AS A manager
- I WANT to generate a webpage that displays my team's basic info
- SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criterial
- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
- THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
- THEN that GitHub profile opens in a new tab
- WHEN I start the application
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
- THEN I exit the application, and the HTML is generated

# Work done to complete the challenge
- As suggested, I created the folder tree.
- I created classes for each name, Employee, Manager, Engineer and Intern.
- I created a test for each classes.
- I added corresponding properties to classes.
- I used Inquirer for the question.
- I use fs for the file manipulation
