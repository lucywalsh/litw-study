/*************************************************************
 * test.js
 *
 * Main experiment file for the LITW demo study.
 *
 * Author: Trevor Croxson
 *       : Nigini A. Oliveira
 *
 * Last Modified: February 5, 2017
 *
 * © Copyright 2017 LabintheWild.
 * For questions about this file and permission to use
 * the code, contact us at info@labinthewild.org
 *************************************************************/

// load webpack modules
window.$ = window.jQuery = require("jquery");
require("bootstrap");
require("jquery-ui-bundle");
var LITW_STUDY_CONTENT = require("./data");
var irbTemplate = require("../templates/irb.html");
var instructionsPart1Template = require("../templates/instructions.html");
var instructionsPart2Template = require("../templates/instructions2.html");
var instructionsPart3Template = require("../templates/instructions3.html");
var loadingTemplate = require("../templates/loading.html");
var resultsTemplate = require("../templates/results.html");
var progressTemplate = require("../templates/progress.html");
var websiteUseTemplate = require("../templates/website_use.html");
var i18n = require("../js/i18n");
require("./jspsych-display-info");
require("./jspsych-display-slide");

module.exports = (function() {

	window.litwWithTouch = false;

	var timeline = [],
	self = this,
	C,
	params = {
		stims1: [],
		practiceStims1: [],
		currentProgress: 0
	},

	irb = function() {
		LITW.tracking.recordCheckpoint("irb");
		$("#irb").html(irbTemplate());
		$("#irb").i18n();
		LITW.utils.showSlide("irb");
		$("#agree-to-study").on("click", function() {
			if ($(this).prop("checked")) {
				LITW.utils.showNextButton(demographics);
				$("#approve-irb").hide();
			} else {
				LITW.utils.hideNextButton();
				$("#approve-irb").show();
			}
		});

		// show the introductory splash screen
		$("#splash-screen").modal({backdrop: "static"});
	},

	demographics = function() {
		LITW.tracking.recordCheckpoint("demographics");
		LITW.forms.newForm("demographics", {
			autocomplete: true
		})
		.add("retake", {
			required: true
		})
		.add("age", {
			style: "numericalFreeText",
			prompt: "How old are you? (Please type a number)",
			boundsMessage: "Are you really %s years old? If not, please make sure to enter the correct age so that your data contributes to our research.",
			minValue: 6,
			maxValue: 99,
			required: true
		})
		.add("country", {
      style: "dropdown",
      prompt: "Where do you live?",
      options: "countries",
      expandable: true,
			required: true,
    })
		.add("education",{
			required: true,
		})
    .add("dataprivacy",{
      style:"radio",
      prompt:"Would you like to know more about how your data is used online?",
      options: ["Yes","No"],
			required: true
    })
    .add("why",{
      style:"dropdown",
      prompt:"What is the the main reason?",
      options:["I think it would be interesting","I'm curious","I am concerned about how my data is used", "I don't feel well-informed", "I think I am well-informed","I don't care enough", "It would worry me too much", "Ignorance is bliss"],
			required: true
    })
		.render(startTrials);

		LITW.utils.showSlide("demographics");
	},

	initJsPsych = function() {
		// ******* BEGIN STUDY PROGRESSION ******** //

    //website use survey
    timeline.push({
			type: "display-slide",
            display_element: $("#websiteUseSurvey"),
			name: "websiteUseSurvey",
            template: websiteUseTemplate({withTouch: window.litwWithTouch}),
      finish: function () {
        var surveyData = {"dataType":"websiteUseSurvey"};
        surveyData["accuweather"] = $("input[name=accuweather]:checked").val();
        surveyData["allrecipes"] = $("input[name=allrecipes]:checked").val();
        surveyData["amazon"] = $("input[name=amazon]:checked").val();
        surveyData["apple"] = $("input[name=apple]:checked").val();
        surveyData["bbc"] = $("input[name=bbc]:checked").val();
        surveyData["craigslist"] = $("input[name=craigslist]:checked").val();
        surveyData["dictionary"] = $("input[name=dictionary]:checked").val();
        surveyData["ebay"] = $("input[name=ebay]:checked").val();
        surveyData["expedia"] = $("input[name=expedia]:checked").val();
        surveyData["facebook"] = $("input[name=facebook]:checked").val();
        surveyData["gmail"] = $("input[name=gmail]:checked").val();
        surveyData["google"] = $("input[name=google]:checked").val();
        surveyData["google-maps"] = $("input[name=google-maps]:checked").val();
        surveyData["google-play"] = $("input[name=google-play]:checked").val();
        surveyData["govuk"] = $("input[name=govuk]:checked").val();
        surveyData["imdb"] = $("input[name=imdb]:checked").val();
        surveyData["instagram"] = $("input[name=instagram]:checked").val();
        surveyData["linkedin"] = $("input[name=linkedin]:checked").val();
        surveyData["metoffice"] = $("input[name=metoffice]:checked").val();
        surveyData["netflix"] = $("input[name=netflix]:checked").val();
        surveyData["nytimes"] = $("input[name=nytimes]:checked").val();
        surveyData["outlook"] = $("input[name=outlook]:checked").val();
        surveyData["paypal"] = $("input[name=paypal]:checked").val();
        surveyData["reddit"] = $("input[name=reddit]:checked").val();
        surveyData["tripadvisor"] = $("input[name=tripadvisor]:checked").val();
        surveyData["twitter"] = $("input[name=twitter]:checked").val();
        surveyData["usagov"] = $("input[name=usagov]:checked").val();
        surveyData["whatsapp"] = $("input[name=whatsapp]:checked").val();
        surveyData["wikipedia"] = $("input[name=wikipedia]:checked").val();
        surveyData["yahoo"] = $("input[name=yahoo]:checked").val();
        surveyData["youtube"] = $("input[name=youtube]:checked").val();
        LITW.data.submitStudyData(surveyData);
      }
    });

		// Instructions part 1
		timeline.push({
			type: "display-slide",
            display_element: $("#instructions"),
			name: "instructions",
            template: instructionsPart1Template({withTouch: window.litwWithTouch})
		});

		// 2. PRACTICE for trial 1
		// loop through practice stims and register them with the jsPsych timeline
		params.practiceStims1.forEach(
      function(stim, index) {
  			// record tracking information and update progress counter
  			timeline.push({
  				type: "call-function",
  				func: function() {
  					$("#progress-header").html(progressTemplate({
  						msg: C.progressMsg,
  						progress: ++params.currentProgress,
  						total: params.practiceStims1.length
  					}))
  					.show();

  					LITW.utils.showSlide("trials");
  					LITW.tracking.recordCheckpoint("practice-" + (index + 1));
  				}
  			});

  			stim.withTouch = window.litwWithTouch;
  			timeline.push(stim);

  			// register a function to submit data as soon
  			// as this trial is completed
  			timeline.push({
  				type: "call-function",
  				func: submitData
  			});
		  }
    );

		//var trial_data_1 = {"stimulus_1": trial.stimulus, "answer_1": trial.response};
		//LITW.data.submitStudyData(trial_data_1);

		// 3. PRE-TRIAL BREAK
		timeline.push({
			type: "call-function",
			func: function() {
				params.currentProgress = 0;
				$("#progress-header").hide();
				LITW.utils.showSlide("break");
				LITW.tracking.recordCheckpoint("pre-trial break");
			}
		})
		timeline.push({
			type: "display-info",
			name: "preTrialBreak",
			content: C.preTrial,
			withTouch: window.litwWithTouch,
			display_element: $("#break")
		});

		// First trial
		params.stims1.forEach(function(stim, index) {

			// record tracking information and update progress counter
			timeline.push({
				type: "call-function",
				func: function() {
					$("#progress-header").html(progressTemplate({
						msg: C.progressMsg,
						progress: ++params.currentProgress,
						total: params.stims1.length
					}))
					.show();

					LITW.utils.showSlide("trials");
					LITW.tracking.recordCheckpoint("trials-1-" + (index + 1));
				}
			});

			stim.withTouch = window.litwWithTouch;
			timeline.push(stim);

			// register a function to submit data as soon
			// as this trial is completed
			timeline.push({
				type: "call-function",
				func: submitData
			});
		});

		// MID-TRIAL BREAK
		timeline.push({
			type: "call-function",
			func: function() {
        params.currentProgress = 0;
				$("#progress-header").hide();
				LITW.utils.showSlide("break");
				LITW.tracking.recordCheckpoint("mid-trial break");
			}
		});
		timeline.push({
			type: "display-info",
			content: C.midTrial,
			name: "midTrialBreak",
			display_element: $("#break")
		});

    // Instructions part 2
		timeline.push({
			type: "display-slide",
            display_element: $("#instructions"),
			name: "instructions",
            template: instructionsPart2Template({withTouch: window.litwWithTouch})
		});

    // PRACTICE for trial 2
		// loop through practice stims and register them with the jsPsych timeline
		params.practiceStims2.forEach(
      function(stim, index) {
  			// record tracking information and update progress counter
  			timeline.push({
  				type: "call-function",
  				func: function() {
  					$("#progress-header").html(progressTemplate({
  						msg: C.progressMsg,
  						progress: ++params.currentProgress,
  						total: params.practiceStims2.length
  					}))
  					.show();

  					LITW.utils.showSlide("trials");
  					LITW.tracking.recordCheckpoint("practice-" + (index + 1));
  				}
  			});

  			stim.withTouch = window.litwWithTouch;
  			timeline.push(stim);

  			// register a function to submit data as soon
  			// as this trial is completed
  			timeline.push({
  				type: "call-function",
  				func: submitData
  			});
		  }
    );

		// PRE-TRIAL BREAK
		timeline.push({
			type: "call-function",
			func: function() {
				params.currentProgress = 0;
				$("#progress-header").hide();
				LITW.utils.showSlide("break");
				LITW.tracking.recordCheckpoint("pre-trial break");
			}
		})
		timeline.push({
			type: "display-info",
			name: "preTrialBreak",
			content: C.preTrial,
			withTouch: window.litwWithTouch,
			display_element: $("#break")
		});


    // TRIAL 2
		params.stims2 = LITW.utils.shuffleArrays(params.stims2);
		params.stims2.forEach(function(stim, index) {

			// record tracking information
			timeline.push({
				type: "call-function",
				func: function() {
					$("#progress-header").html(progressTemplate({
						msg: C.progressMsg,
						progress: ++params.currentProgress,
						total: params.stims2.length
					}))
					.show();

					LITW.utils.showSlide("trials");
					LITW.tracking.recordCheckpoint("trials-2-" + (index + 1));
				}
			});

			timeline.push(stim);

			// register a function to submit data as soon
			// as this trial is completed
			timeline.push({
				type: "call-function",
				func: submitData
			});
		});

		// MID-TRIAL BREAK
		timeline.push({
			type: "call-function",
			func: function() {
        params.currentProgress = 0;
				$("#progress-header").hide();
				LITW.utils.showSlide("break");
				LITW.tracking.recordCheckpoint("mid-trial break");
			}
		});
		timeline.push({
			type: "display-info",
			content: C.midTrial,
			name: "midTrialBreak",
			display_element: $("#break")
		});

		// Instructions part 3
		timeline.push({
			type: "display-slide",
            display_element: $("#instructions"),
			name: "instructions",
            template: instructionsPart3Template({withTouch: window.litwWithTouch})
		});

    // PRACTICE for trial 3
		// loop through practice stims and register them with the jsPsych timeline
		params.practiceStims3.forEach(
      function(stim, index) {
  			// record tracking information and update progress counter
  			timeline.push({
  				type: "call-function",
  				func: function() {
  					$("#progress-header").html(progressTemplate({
  						msg: C.progressMsg,
  						progress: ++params.currentProgress,
  						total: params.practiceStims2.length
  					}))
  					.show();

  					LITW.utils.showSlide("trials");
  					LITW.tracking.recordCheckpoint("practice-" + (index + 1));
  				}
  			});

  			stim.withTouch = window.litwWithTouch;
  			timeline.push(stim);

  			// register a function to submit data as soon
  			// as this trial is completed
  			timeline.push({
  				type: "call-function",
  				func: submitData
  			});
		  }
    );

		// PRE-TRIAL BREAK
		timeline.push({
			type: "call-function",
			func: function() {
				params.currentProgress = 0;
				$("#progress-header").hide();
				LITW.utils.showSlide("break");
				LITW.tracking.recordCheckpoint("pre-trial break");
			}
		})
		timeline.push({
			type: "display-info",
			name: "preTrialBreak",
			content: C.preTrial,
			withTouch: window.litwWithTouch,
			display_element: $("#break")
		});


    // TRIAL 3
		params.stims3 = LITW.utils.shuffleArrays(params.stims3);
		params.stims3.forEach(function(stim, index) {

			// record tracking information
			timeline.push({
				type: "call-function",
				func: function() {
					$("#progress-header").html(progressTemplate({
						msg: C.progressMsg,
						progress: ++params.currentProgress,
						total: params.stims3.length
					}))
					.show();

					LITW.utils.showSlide("trials");
					LITW.tracking.recordCheckpoint("trials-3-" + (index + 1));
				}
			});

			timeline.push(stim);

			// register a function to submit data as soon
			// as this trial is completed
			timeline.push({
				type: "call-function",
				func: submitData
			});
		});

		// ******* END STUDY PROGRESSION ******** //
	},

	submitData = function() {
		LITW.data.submitStudyData(jsPsych.data.getLastTrialData());
	},

	startTrials = function(demographicsData) {

		// send demographics data to the server
		LITW.data.submitDemographics(demographicsData);

		LITW.utils.showSlide("trials");
		jsPsych.init({
		  timeline: timeline,
		  on_finish: comments,
		  display_element: $("#trials")
		});
	},

	comments = function() {
		$("#progress-header").hide();
		LITW.utils.showSlide("comments");
		LITW.comments.showCommentsPage(results);
	},

	results = function(commentsData) {

		LITW.data.submitComments(commentsData);

		// get the trial data from jsPsych
		var studyData = jsPsych.data.getTrialsOfType("survey-likert");
    var studyData2 = jsPsych.data.getTrialsOfType("survey-multi-choice");
    console.log(studyData2);

    var riskFactor = 0.0;

		studyData.filter(function(item) {
      if(item.scenario!="{}"){
        var levelOfConcern = parseInt(item.responses[7]);
        if(levelOfConcern<3){
          riskFactor=riskFactor+0.33;
        }
      }
      else{
        var toolUse = parseInt(item.responses[9]);
        switch(toolUse){
          case 0:
            riskFactor=riskFactor+0.33;
            break
          case 1:
            riskFactor=riskFactor+0.66;
            break
          case 2:
            riskFactor=riskFactor+0.33;
            break
          case 3:
            riskFactor=riskFactor+0.66;
            break
        }
      }
		});

    studyData2.filter(function(item){
      var website = item.website;
      var questions = item.questions.split(",");
      var responses = item.responses.split(/,|:/);
      for (var j=0;j<responses.length;j++){
        responses[j] = responses[j].replace("{","");
        responses[j] = responses[j].replace("}","");
        responses[j] = responses[j].replace(/['"]+/g, '');
        if(responses[j] == "Q0" || responses[j] == "Q1" || responses[j] == "Q2"){
          responses.splice(j,1);
        }
      }

      for(var i=0;i<questions.length;i++){
        questions[i] = questions[i].replace("[","");
        questions[i] = questions[i].replace("]","");
        questions[i] = questions[i].replace(/['"]+/g, '');
        //naive risk factor calculation
				if( typeof repsonses !== "undefined"){
	        if(responses[i].includes("No")){
	          riskFactor=riskFactor+0.33;
	        }
					if(responses[i].includes("Maybe")){
	          riskFactor=riskFactor+0.15;
	        }
					if(responses[i].includes("I don't use this tool currently but <strong>I would be</strong> willing to use it")){
	          riskFactor=riskFactor+0.33;
	        }
					if(responses[i].includes("I don't use this tool currently and <strong>I would not</strong> be willing to use it")){
	          riskFactor=riskFactor+0.33;
	        }
					if(responses[i].includes("I have used this tool in the past and <strong>would</strong> be willing to use it again")){
	          riskFactor=riskFactor+0.15;
	        }
					if(responses[i].includes("I have used this tool in the past but <strong>would not</strong> use it again")){
	          riskFactor=riskFactor+0.66;
	        }
				}
      }
    });

    var riskLevel = "";
    riskFactor = Math.floor(riskFactor);
    if(riskFactor<4){
      riskLevel = "low risk";
    }
		else if(riskFactor<8){
			riskLevel = "medium risk";
		}
		else{
			riskLevel = "high risk";
		}

		var submitRiskFactor = {"riskFactor":riskFactor};
		LITW.data.submitData(submitRiskFactor);

		var avgRiskFactor = 0;
		var request = new XMLHttpRequest();
		request.open("GET", "summary.json", false);
		request.send(null)
		var data = JSON.parse(request.responseText);
		avgRiskFactor = data['avgRiskFactor'];
		console.log(avgRiskFactor);

		LITW.utils.showSlide("results");
		$("#results").html(resultsTemplate({
			content: C.results,
			resultsExplanation: C.resultsExplanation,
			citations: C.citations,
      riskFactor: riskFactor,
      riskLevel: riskLevel,
			averageRisk: avgRiskFactor
		}));

		LITW.results.insertFooter();
	};

//not sure if this function is necessary
	summaryInitialData = function(json_data){
		var summary = {};
		for (count in json_data) {
			var country = json_data[count].country;
			if( country in summary){
				summary[country] = summary[country]+1;
			} else {
				summary[country] = 1;
			}
		};
		var data = {summary : true};
		data.data = summary;
		LITW.data.submitStudyData(data);
	}

	// when the page is loaded, start the study!
	$(document).ready(function() {

		// detect touch devices
		window.litwWithTouch = ("ontouchstart" in window);

		// determine and set the study language
		$.i18n().locale = i18n.getLocale();
		$.i18n().load('src/i18n/en.json', 'en').done(
			function(){
				$('head').i18n();
				$('body').i18n();
			}

		);

		// generate unique participant id and geolocate participant
		LITW.data.initialize();
		LITW.share.makeButtons("#header-share");

		// shortcut to access study content
		C = LITW_STUDY_CONTENT;

		// Load the trial configuration data for the practice trials and the real trials
		params.practiceStims1 = C.practiceScenarios;
		params.stims1 = C.trialScenarios;
    params.practiceStims2 = C.practiceWebpages;
    params.stims2 = C.trialWebpages;
    params.practiceStims3 = C.practiceTools;
    params.stims3 = C.trialTools;

		// shuffle the order of the questions in trial 3
		params.practiceStims3 = LITW.utils.shuffleArrays(params.practiceStims3);
		params.stims3 = LITW.utils.shuffleArrays(params.stims3);

		LITW.utils.showSlide("img-loading");


		// preload images
		jsPsych.pluginAPI.preloadImages(params.stims1,

			// initialize the jsPsych timeline and
			// proceed to IRB page when loading has finished
			function() {
				initJsPsych();
				irb();
			},

			// update loading indicator as stims preload
			function(numLoaded) {
				$("#img-loading").html(loadingTemplate({
					msg: C.loadingMsg,
					numLoaded: numLoaded,
					total: params.stims1.length
				}));
			}
		);

	});
})();
