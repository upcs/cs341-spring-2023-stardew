## cs341-spring-2023-stardew
Team Stardew, Spring 2023

# Author: Milton, Harry, Gavin, Bryan, Vincent

# 1. Visual/Aesthetics
The repository primarily focuses on user experience to allow clients of all ages to access the website without any issue. In doing so, we placed a major emphasis on the object interactions of website, routing of pages, and how website looks based on screen size. We used the colors white and green along with fonts requested by our client to reflect the theme of the company and easy to understand icons/images that support routing/javascript features.

# 2. Login Security Implementation + Password
We prioritized creating a database to store login/password information hashed to prevent malicious access of information. To allow users to easily login to the webpage, a login/signup/forgot password page exists that posts information on the server side to generate necessary information. If user fails to login due to wrong email/password, text will be generated to inform the user that either the email or password is incorrect.

# 3. Ease of Use
As stated earlier, we primarily focused on the user experience of the website. In doing so, we made sizing of text and buttons big enough to allow users to easily see what kind of actions they can do. Furthermore, hovering towards certain actions will change the color, indicating that user can perform action.

--------------------------------------------------------------------------------------------------

  Our goal with this project was getting most of the functions done that needed to be done for our client. We focused zone in on a few functions to be the most important which were the user login/signup functionality of the code where the site should be able to store a new user and also see if the user is entering the correct data when they are trying to logging in. We were able to acompish that task as well as having the site save that login and reconize who is currently loged in using web cookies. 
  Currently our database is stored on 2 local sqls, one for user login data and one for plant data. We have them being acssessed directly from the JS file however we do have a .env set up that we can use to store it away from the user so that it is a bit harder for someone to enter in our MYSQl. For now we have it in the open for easy access and use because eventually when are client takes over, they can change it to a live MYSQL.
  Our current website is using handlebars(.hbs) as the way to make the website pages. The hbs are near idential to html, but it allows you have access to a few more commands. We have use some of these commands to send error messages from the login/signup messages directly to the page for it to render in. One draw backs to hbs is that it cant be directly open in a brower but you can easily change the file from hbs to html in visual code without to much issues.
  Some things that we were not able to complete due to the time constrants was the plant data display to the farm page. We were having issues sending request from the pages, to the routes, and back with the needed reqirements. We found that we couldn't just have the hbs/html get direct access to the MYSQL due to the technical limitations of htmls/hbs. We were in the process of working with post commands but it the post commands were not being sent and recive to the right locations and fail to post. If we had more time then that will be number one on the list.
  There were other functionalities that are avalible and setup to be implemented. Those ones we kept it there for extra feature to implement, but didn't have the time to do so. We also didn't work on it too much because our client said to ignore them and focus on the main things like login funtionality.
  I will provide a link or file that will contain a video that will breifly go over the different feature that are in this project:
