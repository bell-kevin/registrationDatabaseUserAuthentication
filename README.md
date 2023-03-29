# Registration DB User Authentication

In this project, you will continue to change and improve the registration and validation project you have previously worked on by adding in user authentication as just covered in the Udemy tutorial.

The launch of the app should begin with the same user authentication screen as the Udemy tutorial, where it asks the user to log on or create a new account. If the user logs on and authenticates successfully, the app should go to a new page that says simply "Welcome to this app". If the user wants to create a new account, the app should go to those pages in the authentication project from the Udemy tutorial. When the account has successfully been created, the next screen should be the one from your previous project that asks for the user's name, followed by the screen to ask for the user's address. You do not need to use the screen for the email address from this project -- it has already been acquired in the authentication section. The screen following the address is the validation screen. If the user says all data is valid, go to the same "Welcome" screen as that shown for a successful log-in attempt. If the user says the data is not valid, go back to the screen for the user's name and go through that process again.

Take screenshots showing the authentication log-in screen, authentication new account screen, validation screen, and the new Welcome screen. 

Submission: Zip together the root folder and the 4 screenshots, and submit the single zipped folder.

https://github.com/academind/react-native-practical-guide-code/tree/11-auth/code/10-storing-auth-tokens-on-the-device

![p](https://github.com/bell-kevin/registrationDatabaseUserAuthentication/blob/main/15380ae0-876f-4870-8fed-9bb004f59e1a.png)

![p](https://github.com/bell-kevin/registrationDatabaseUserAuthentication/blob/main/screenshots/1.PNG)

![p](https://github.com/bell-kevin/registrationDatabaseUserAuthentication/blob/main/screenshots/2.PNG)

![p](https://github.com/bell-kevin/registrationDatabaseUserAuthentication/blob/main/screenshots/3.PNG)

![p](https://github.com/bell-kevin/registrationDatabaseUserAuthentication/blob/main/screenshots/4.PNG)

## How to:

Create one app. for both Android and iOS (Apple) using one computer alorithm for both apps. You'll need Visual Studio Code and Android Studio to get started:

https://code.visualstudio.com/download

https://developer.android.com/studio

If you want to see how your app. will look on iOS (Apple) devices, you'll need Xcode from the Apple app. store:

https://developer.apple.com/xcode/

To run the Xcode app, you'll need a fairly new Apple computer.

https://reactnative.dev/docs/environment-setup

https://reactnative.dev/docs/components-and-apis

https://reactnative.dev/docs/intro-react

Check out App.js here in the code files for the computer algorithm code.

## Storing Projects

When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.


== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
