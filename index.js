/* 
Author: Sudhanshu Batra
Date Created: July 08, 2021
Description: This project uses node and npm to generate a professional README for a project. 
*/

const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./files/template');

const promptUser = () => {
    return inquirer.prompt([
        {   // Project Title
            type: 'input',
            name: 'projectTitle',
            message: 'Please enter the title for your Project. *Required',
            validate: checkTitleInput => {
                if (checkTitleInput){
                    return true;
                }
                else{
                    console.log('Enter the project title to proceed further!');
                    return false
                }
            }
        },
        {
            //Project Description
            type: 'input',
            name:'description',
            message: 'Please enter the description of your project. *Required',
            validdate: checkProjectDescription => {
                if (checkProjectDescription) {
                    return true;
                }
                else{
                    console.log('Enter the description of your project');
                    return false
                }
            }
        },
        {
            //Table of Content
            type: 'confirm',
            name: 'Would you liek to add a table of contents for your project',
            default: true
        },
        {
            // Credits
            type: 'input',
            name: 'credits',
            message: 'Please enter any Credits for your project! *Required',
            validate: checkCredits => {
                if (checkCredits){
                    return true;
                }
                else{
                    console.log('Enter Contributions for your project!');
                    return false;
                }
            }
        },
        {
            //Installation Insructions
            type: 'input',
            name: 'InstallationInstructions',
            message: 'Please provide any installation instructions if any. *Required',
            validate: checkInstallationInstructions =>{
                if (checkInstallationInstructions){
                    return true;
                }
                else{
                    console.log('Enter instructions for your project. Input N/A if none.');
                    return false;
                }
            }
        },
        {
            //Usage Information
            type: 'input',
            name: 'usageInformation',
            message: 'Please enter any Usage Information. *Required',
            validate: checkUsageInformation =>{
                if (checkUsageInformation){
                    return true;
                }
                else{
                    console.log('Enter Usage Information for the project. Enter N/A if none.');
                    return false;
                }
            }
        },
        {
            //Confirmation to add the Licence
            type: 'confirm',
            name: 'checkLicence',
            message: 'do you want to add a Licence for your project!',
            default: false
        },
        {
            // Licence
            type: 'list',
            name: 'license',
            message: 'Please choose from the list of licenses you would like to add.',
            choices: ['GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0','THe Unlicense'],
            when: ({checkLicense}) => {
                if (checkLicense) {
                    return true;
                }
                else{
                    return false;
                }
            }
        },
        {
            //Confirmation to add Badges
            type: 'confirm',
            name: 'confirmBadge';
            message: 'Do you want to add any Badhes?',
            default: false
        },
        {
            // When confirmed!, Add Badges
            type: 'input',
            name: 'badges',
            message: 'PLease enter the Badges you want to include in your project!',
            when: ({confirmBadge}) => {
                if (confirmBadge) {
                    return true;
                }
                else{
                    return false;
                }
            }
        }
        {
            // Confirmation to add Features
            type: 'confirm',
            name: 'confirmFeatures',
            message: 'Do you want yo add any features?',
            default: false
        },
        {
            // WHen confirmed. Add features
            name: 'input',
            type: 'feature',
            message: 'Please enter the Features you want to include in your project',
            when: ({confirmFeatures}) =>{
                if (confirmFeatures){
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            // Confirmation to add Constribtuion Info
            type: 'input',
            name: 'confirmContribution',
            message: 'Do you want ro add any Contribution information',
            default: false,
        },
        {
            // when confirmed, Add Contribution information 
            type: 'input',
            name: 'contribtuion',
            message: 'Please enter the Contribution Information you want to Include!',
            when: ({confirmContribution}) =>{
                if (confirmContribution){
                    return true;
                }
                else{
                    return false;
                }
            }
        },
        {  
            // Confirmation to add Tests
            type: 'input',
            name: 'confirmTest',
            message: 'DO you want to add any Test Information',
            default: false,
        },
        {
            // When confirmed, add Tests
            type: 'input',
            name: 'test',
            message: 'Please enter the Test Information you would want to include!',
            when: ({confirmTest}) =>{
                if (confirmTest) {
                    return true;
                }
                else{
                    return false;
                }
            }
        },
        {
            //  GitHub Information
            type: 'input',
            name: 'github',
            message: 'Please prvide your Github user name. *Required',
            validate: checkGithub =>{
                if (checkGithub){
                    return true;
                }
                else{
                    console.log('Enter your GitHub username to proceed!');
                    return false;
                }
            }
        },
        {
            // Email Address
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. *Required',
            validate: checkEmail =>{
                if (checkEmail){
                    return true;
                }
                else{
                    console.log('Enter your email address to proceed!');
                    return false;
                }
            }
        }
    ])
};

promptUser()
    .then(answers =>{
        const userAnswers = template(answers);

        fs.writeFile('./files/README.md', userAnswers, err =>{
            if(err) throw err;
            console.log('Your README file has been generated. Please checke the files folder to see the generated README')
        });

    });