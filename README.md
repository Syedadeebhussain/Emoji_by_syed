Project Title --->  Fake Store App (React + Tailwind + Axios)

->This is a small web app made using React.
->It shows emojis/memes that are coming from an online API.
->I have used Axios to get data and Tailwind CSS for the design.

The API used here is: https://api.imgflip.com/get_memes

Steps I followed
1. Creating the project

a)First, I created a new React project using Vite by command
->npm create vite@latest then it asked me few questions in my terminal
   Project name:  webd_exam(provided by me)
   Select a framework:  React(provided by me)
   Select a variant:  JavaScript(provided by me)


b)Then I installed all the required packages:
    npm install axios(for Api calling)
    npm install tailwindcss @tailwindcss/vite(for using tailwind for ui)
    npm i react-icons(for icons which is to be displayed on searchbar)

c)Cleared All the content from App.css,App.jsx,index.css.

2. Setting up Tailwind

a)I replaced the vite.config.ts file with the following code:
        import { defineConfig } from 'vite'
        import tailwindcss from '@tailwindcss/vite'
        export default defineConfig({
        plugins: [
            react(),tailwindcss(),
        ],
        })
                         
b)In index.css and in App.css, I wrote:@import "tailwindcss";
   After this, Tailwind classes started working properly.

3. Folder structure
My src folder looks like this:
src
   components
      Apicalling.jsx (for fetching data from https://api.imgflip.com/get_memes)
       MemeCard.jsx (For Showing each meme/extracted from Api)
       Search.jsx (search bar ui and for searching extracted data based on user)
       Body.jsx(combining search.jsx and MemeCard.jsx)



4. What each file does

a)Apicalling.jsx
This is one of the main files where I wrote the logic to  extract data from the API.
I imported useEffect, useState from React and also axios.
I created a component named Apicalling inside Components folder.
Inside it, I declared a state variable:   const [memes, setMemes] = useState([]);
Then I used useEffect() so the API runs only once when the page first loads so that data can be extracted at once.
I called the API using Axios:
const res = await axios.get("https://api.imgflip.com/get_memes");(i used async and await beacuse it returns a promise)
setMemes(res.data.data.memes);;(set the "memes" to data which is extracted from an Api).

b)Body.jsx
It shows the heading (Emoji Search).
It shows the search bar.
When nothing is searched then nothing is shown there.
When you search then it searches the memes.
It stores the searched results.
If nothing matches then it shows “No results found”.
If something matches then it shows the grid of ProductCard items.

Each result is displayed using MemeCard.jsx
Searching is done using Search.jsx



c)MemeCard.jsx
This file is used only for showing the data to user that has extracted from Api.
I created a component called MemeCard that receives the data through props from Apicalling.jsx.
Inside it, I used .map() to loop through each product and show it in a proper format.
Each card displays:  image,title,Short description

d)Search.jsx
It is the file which is used for Seraching the memes/emoji from the data extracted using ApiCalling

e)App.jsx
This file combines everything from components.
I imported Body and displayed it in the follwing format
return (
  <>
    <Body />
  </>
);.


5. How I run the project

a)I opened the project in VS code and reached to the folder where my project is saved.
  In my case, the path is: "C:\Users\DELL\Desktop\Webd_exam\webd_exam"
b)I opened the terminal inside VS code and ran these follwing commands one by one:
  1)cd "C:\Users\DELL\Desktop\Webd_exam\webd_exam"(ensuring i am running correct project)
  2)npm run dev(for running the project)

c)After running the second command, local server link will be visible on your terminal,something    like:http://localhost:5173/

d)I copied that link and opened it in my browser and after that my project started running

6. How I Pushed My Project to GitHub
  a)In .gitignore and node-modules and packages-lock.json
  b) Firstly I created repository on github named as  emoji_search
  c) then executed these commands
        git init
        git add README.md
        git commit -m "first commit"
        git branch -M main
        git remote add origin https://github.com/Syedadeebhussain/Emoji_by_syed.git
        git push -u origin main
  
8. How I Deployed My Project on Vercel
  a)After uploading the project to GitHub, I deployed it  using Vercel so that anyone can view it easily.
  b) 1)I logged in to Vercel.com
     2)Clicked “Add New Project” and selected my GitHub repository.
     3)Vercel automatically detected that it’s a Vite + React project.
     4)Then I clicked on Deploy.

After a few seconds, Vercel gave me a live link 
I can now open that link anywhere to view my project live.


