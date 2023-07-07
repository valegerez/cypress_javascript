const fs = require('fs-extra');
const path = require('path');
const cucumberHTMLReporter = require('cucumber-html-reporter');

const execute = (rootDirectory) => {
  try {
    const reportDir = path.normalize(`${rootDirectory}/../report/cucumber_report/html`);
    const jsonReportDir = path.normalize(`${rootDirectory}/../report/cucumber_report`);
    const outputReportFilePath = path.normalize(`${rootDirectory}/../report/cucumber_report/html/cucumber_report.html`);
    const screenshotsDir = path.normalize(`${rootDirectory}/../screenshots/`);

    if (fs.existsSync(reportDir)) {
      fs.removeSync(reportDir);
    }
    fs.mkdirSync(reportDir);

    console.log('Configuring report ...');
    const reporter = cucumberHTMLReporter;

    const options = {
      theme: 'bootstrap',
      jsonDir: jsonReportDir,
      output: outputReportFilePath,
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      ignoreBadJsonFile: true,
      screenshotsDirectory: screenshotsDir
    };

    console.log('Generating report ...');
    reporter.generate(options);

  } catch (e) {
    console.log(e);
  }
};

execute(__dirname)