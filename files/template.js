// text for License

const createLicenseBadge = LicenseName => {
    // if there is no license name selected from the list
    if (LicenseName) {
        return '';
    }
    // if any of the follow are selected
    if (LicenseName.includes('GNU')) {
        LicenseName = 'GNU_General_Public_v3.0';
    }
    if (LicenseName.includes('MIT')) {
        LicenseName = 'MIT';
    }
    if (LicenseName.includes('Mozilla')) {
        LicenseName = 'Mozilla_Public_2.0';
    }
    if (LicenseName.includes('Unlicense')) {
        LicenseName = 'The_Unlicense';
    }
    // it returns the image of the License
    return `
    ![license](https://img.shields.io/badge/License-${LicenseName}-blue)`
}

// The text of the License
const createLicense = licenseText => {
    if(!licenseText){
        return '';
    }
    return `# License
${licenseText}
    
    `;
};

// Badges
const createBadges = badgesText => {
    if(!badgesText){
        return '';
    }
    return `# Badges
${badgesText}
    
    `;
};

// Features
const createFeatures = featuresText => {
    if(!featuresText){
        return '';
    }
    return `# Features
${featuresText}
    
    `;
};

//Contributions 
const createContributions = contributionsText => {
    if(!contributionsText){
        return '';
    }
    return `# Contribution
${contributionsText}
    
    `;
};

// Tests
const createTest = testText => {
    if(!testText){
        return '';
    }
    return `# Test
${testText}
    
    `;
};

// Table of Content
const createTableOfContents = tableOfContents => {
    if (tableOfContents === false){
        return '';
    }
    return `# Table of Contents
    
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [Questions?](#Questions)`;
};

const tableOfContentsLicense = license => {
    if (!license){
        return '';
    }
    return `* [License](#license)`
}
const tableOfContentsBadges = badges => {
    if (!badges){
        return '';
    }
    return `* [Badges](#badges)`
}
const tableOfContentsFeatures = feature =>{
    if (!feature){
        return '';
    }
    return `* [Features](#feature)`
}
const tableOfContentsContribution = contribution =>{
    if (!contribution){
        return '';
    }
    return `* [Contribution](#contribution)`
}
const tableOfContentsTest = test =>{
    if (!test){
        return '';
    }
    return `* [Test](#test)`
}
module.exports = pageTemplate => {
    const{ projectTitle, description, credits, installationInstructions, usageInformation, github, email, ...notRequired} = pageTemplate;

    console.log(pageTemplate);

    return `# ${projectTitle}
        ${createLicenseBadge(notRequired.license)}

${description}

${createTableOfContents(notRequired.confirmTableOfContents)}
${tableOfContentsLicense(notRequired.license)}
${tableOfContentsBadges(notRequired.badges)}
${tableOfContentsFeatures(notRequired.feature)}
${tableOfContentsContribution(notRequired.contribution)}
${tableOfContentsTest(notRequired.test)}

# Installation
${installationInstructions}

# Usage
${usageInformation}

# Credits
${credits}

# Questions
[Reach Me](${email})
[GitHub](https://github.com/${github})

${createLicense(notRequired.license)}
${createBadges(notRequired.badges)}
${createFeatures(notRequired.feature)}
${createContributions(notRequired.contribution)}
${createTest(notRequired.test)}
`;
}