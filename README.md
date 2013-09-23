Emailselected
=============

Email selected text on page Chrome extension

Simple my first chrome extensions was made for myself use.

The application mission:

Take selected(highligted) text from browsed active tab and pass it to sender.php which sends it to defined email.

Almost 90% of code was taken from stackoverflow post:
http://stackoverflow.com/questions/14203551/get-highlight-text-in-current-window-and-send-it-in-a-popup
Answer of: Sudarshan

I want to share the code, because while creating the extention i fount a lot posts which similar problem.

How to install:
1) Download zip;
2) Unzip it;
2.1) Edit popup.js, and edit opengmail function;
2.2) You need to define domain name and file name of sender which get Params of mail;
3) Go to chrome options->tools->extensions;
4) Check Developer mode;
5) Load unpacked extension;
6) Select unziped folder;
7) Done.

For better userability do keyboard shortcut:
1) Go to chrome options->tools->extensions;
2) Scroll down to "Keyboard shortcuts", open it;
3) Press into a box next to "Email selected text" and press your desired keyboard combination;
4) Done.

p.s. i wonder why there still not official extension in app store.
