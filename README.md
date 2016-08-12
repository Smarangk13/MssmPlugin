# MssmPlugin
Our git repo for creating a plugin. Since you know how to use the extension I will tell you how to use git


TERMS TO REMEMBER
master branch- the main branch you are working on. if you are working on the shell it always refers to your local repository

remote - this is the repository that is saved online for you to download anywhere

baseline - the repository that you have created your fork from


*Instructions on how to use git*
One time steps-
1. Create your own fork by pressing the fork button, you should have something like https://github.com/Manisha/MssmPlugin
This is your remote repository

2. on your shell, go to a convinient folder and then type git clone https://github.com/Manisha/MssmPlugin.git (the link under the clone or download option)
This will make a copy of MssmPlugin on your desktop

3. Make sure that you are working in the MssmPlugin folder using cd MssmPlugin

4. To make sure that you are keeping up with the main repository type
git remote add baseline https://github.com/Smarangk13/MssmPlugin.git (again same as the one under clone on my repository)

*Making changes*
After you have done all the above steps you are ready to make your own changes to the code.
Once you have modified things with the editor of your choice and save them.

1. see differences with git status

2. add the files you want to save using git add -A or got add --all or git add <filename>

3. to save your files type git commit, a notepad will appear allowing you to name your commit
you can also use git commit -m "(your commit message here)" to avoid having notepad open each time

4. Ready to add your changes to the remote
a. It is good programming practice to make sure you are up to date with the main branch, so use
git fetch baseline master
git rebase baseline/master

The first command will allow git to acknowledge the differences between the latest version of the main repository with your LOCAL repository
The second command will add the changes from the latest version of the code to your LOCAL repository
(If there are outdated changes, you may have merge conflicts and git will help you, hopefully this isnt an issue)

b. Finally to upload your code to remote use
git push

If it gives you issues use git push -f remote master

If it says something like remote not found you can just say git remote add origin https://github.com/Manisha/MssmPlugin.git
Remember: pushing will update the remote with changes from baseline if you did a rebase
PS: I will not make any further commits till you try this once so you need not rebase it the first time

*Merge your code with my code*
On the https://github.com/Manisha/MssmPlugin page on your browser find something called pull requests. You will be able to make pull requests as long as you have some commits made. Simply click on it and follow the instructions.

AND WE ARE DONE :D

*ADVANCED* :P
If when creating a pull request to me you have to make sure you are making a pull request from your branch with the commits to my master branch. you may locally do a pull request between your own branches and then add to my branch
