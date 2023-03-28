# newsletter-signup

It's a simple newsletter signup that uses Mailchimp service as a database.

![image](https://user-images.githubusercontent.com/50785245/228215373-c4b4b385-125f-42d5-aba5-d9e2cb10d0fb.png)


# Introduction

First of all register on Mailchimp service and get the URL and your API_KEY (more information in Mailchimp Doc).
Then import them in .env file the following:

URL=https://us14.api.mailchimp.com/3.0/lists/yourID

API_KEY=anystring:yourApiKey

Then

```
npm init
node app.js
```
Finally, you can have a dataset of your user's Emails and their specifications that is customizable (more information in Mailchimp Doc).

![image](https://user-images.githubusercontent.com/50785245/228217635-bf98c84e-2c54-4b90-a456-d899143fbdd2.png)

