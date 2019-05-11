About:

This alexa skill is a module for home automation which provides solution to technical issues of user.
Usage:
•User: Alexa open techie
•Alexa:Welcome to techie, ask me about your queries
•User:why why my wifi is not connected
•Alexa:<gives some steps to solve the problem>

Repository Contents:

•Node Modules: Contains “ask-sdk”,”alexa-sdk”and “aws-sdk”
•Index.js file: contains code of lambda function
•JSON file: contains intents sample utterences in JSON format

Pre-requisites:

•Register for an AWS Account
•Register for an Amazon Developer Account
Deployment
•Go to Amazon Developer?Alexa Skills Kit?Start A Skill?Create Skill?Select Skill Name “technical help”,here your skill will be created.
•Now Open JSON Editor present in left panel?open it?paste the JSON file code to it?save model.
•Go to endpoint and paste lambda function ARN to it.
•Go to AWS?services?lambda?function?create new function named anything?trigger ASK from lambda and paste skill ID to it?upload zip file containing all code for lambda.
•Add Entries to database with attributes ID,name and solution.
•Go to Amazon Alexa Developer console to test the skill.

How User Can Use This Skill:

•User will need to have Alexa device and Alexa app.
•User can search for techie skill and install it.
•To open Say to Alexa open techie, then on alexa user will see account linking page.
•Signin/signup using valid credentials on alexa app.
•Then user can contine to use skill for asking queries and his authentication details are saved.

Tutorials & Guides

•Voice Design Guide - A great resource for learning conversational and voice user interface design.
•CodeAcademy: Learn Alexa - Learn how to build an Alexa Skill from within your browser with this beginner friendly tutorial on CodeAcademy!

Documentation

•Official Alexa Skills Kit Node.js SDK - The Official Node.js SDK Documentation
•Official Alexa Skills Kit Documentation - Official Alexa Skills Kit Documentation


