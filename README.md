# PizzaHack

Project from Maghimim 2015 camp for teaching about the SQL Injection vulnerability, and about SQL.

Further documentation is pending. Pull requests and help appreciated.

![](http://i.imgur.com/9cOHfYrm.png?1)
##What it is?

Using [SQLite emscripten'd to JavaScript](kripken.github.io/sql.js) and [Materialize](http://materializecss.com/) this small website is here to educate people about SQL Injection. It runs locally and does not require any installations, only a static web server - additionally it can be accessed at http://benjamingr.github.io/PizzaHack/index.html .

## How do I use it?

There is an attached exercise file, currently it is in Hebrew. The tasks are:

 - Login to the site.
 - Login to the site as administrator.
 - List all the pizzas.
 - Remove the pizza causing the visa-spam.
 - Add a new Pizza.
 - Login as administrator.
 - Change the price of Pizzas to 10.
 
For obvious reasons, any "client side" tinkering (like using the developer tools) is prohibited.

## Why is the code ugly?

Because it was written in one go, I was sleep deprived when I wrote it and it worked. There is basic routing and view management through loading HTML/CSS pages. jQuery was added in retrospect because Materialize needed it - code can be simplified to use more jQuery to be slimmer. The route `index.html#<route>` loads `views/<route>.html`, places it in the view, then loads `views/<route>.js` and `eval`s it. 

## Why aren't the jokes funny?

Because of [this guy](https://www.facebook.com/galgalatz?fref=ts), he has spent the last three years making my jokes less and less funny until I eventually sort of gave up on sane or sophisticated humor. Hey, Rebecca's happy - right? Right? Right?

## What is Uziely? Why should he forgive?

Uziely is [Nitzan Uziely](https://www.facebook.com/nitzan.uziely?fref=ts), he should forgive [Inbal](https://www.facebook.com/inbalooloo?fref=ts) so they can be friends again just like in freshmen year. Here is an [accurate description](http://i.imgur.com/lSOBWD5.jpg) of the conflict. Also that joke never apprears in the PizzaHack site.

## Who is Robert Lemon? Did He Really Do a #2 on a Slide?

[No Comment.](http://chat.stackoverflow.com/transcript/message/8231986#8231986)
