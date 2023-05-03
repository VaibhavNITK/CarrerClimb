# CAREER DEVELOPMENT WEBSITE


[Demo to website](https://screenrec.com/share/TWNUpkg9EQ)


# INSTALLATION INSTRUCTION
- Click on the green code button on top right corner.
- In HTTPS column copy the url.
- Go to your terminal cd to location of your choice then write "git clone https://github.com/VaibhavNITK/IRIS_Rec23_211CS162_MERN.git  " . You can specify the name of folder after MERN.git, if not specified it will create folder with by default name.
- cd to **backend**
- Run command **npm i** then **npm install --global nodemon** (if not installed) then **npm run dev** on your terminal.
- This will be visible on your terminal **Server is listening on port 4000
Database Connected with ac-2idpws3-shard-00-00.aqnwcgv.mongodb.net**
- cd to **frontend**
- Run command **npm i** then **npm start** or **npm run start** on your terminal.
- Backend will be running on http://localhost:4000/
- Frontend will be running on http://localhost:3000/


# LIST OF IMPLEMENTED FEATURES
- Whole website is responsive
- Landing Page
- Authentication of admin during login
- Option for admin to create new company 
- Option for admin to update the company if it already exists(like making active true)
- Option for admin to delete the company
- Option for admin to view his profile page
- Option for new users to register
- Authentication of users during login
- All companies with status active visible to users .
- Users fulfilling the requirements(basically there is a branch check criterion) of company can apply to it
- Option for Users to see applied companies
- Options for Users to see profile page.
- Option for POC to update details of company for which he is assigned POC.
- Option for logout for both Users and Admin.

## NON-IMPLEMENTED / PLANNED FEATURES

- There is no option for admin and poc to see whoever has applied to that company although backend is ready but not able to integrate it.
- There is no option for users to upload resume.(will add in future)
- In company branch requirement I'm assuming only one branch

## LIST OF BUGS

- Page needs to refreshed after both user and admin login otherwise it wont work properly.

## SCREENSHOTS
![User Login page](https://user-images.githubusercontent.com/95856567/235907393-609bf83c-a8eb-46a3-9af4-9a4f2da5220a.png)

