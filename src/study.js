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
var loadingTemplate = require("../templates/loading.html");
var resultsTemplate = require("../templates/results.html");
var progressTemplate = require("../templates/progress.html");
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
			maxValue: 99
		})
		.add("country", {
      style: "dropdown",
      prompt: "Where do you live?",
      options: "countries",
      expandable: true,
    })
		.add("education")
		.render(startTrials);

		LITW.utils.showSlide("demographics");
	},

	initJsPsych = function() {
		// ******* BEGIN STUDY PROGRESSION ******** //

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

		// 5. MID-TRIAL BREAK
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
		var studyData = jsPsych.data.getTrialsOfType("single-stim"),
		whichCat;

		// strip out the data generated from the practice trial
		studyData.splice(0, params.practiceStims1.length);

		var numNiceCats = studyData.filter(function(item) {

			// the nice cats are always on the right!
			return item.key_press === 50;
		}).length;
		var numMeanCats = studyData.filter(function(item) {

			// the mean cats are always on the left!
			return item.key_press === 49;
		}).length;

		if (numNiceCats === numMeanCats) {
			whichCat = ["cat-nice.jpg", "cat-mean.jpg"];
		} else {
			whichCat = (numNiceCats > numMeanCats) ?
				["cat-nice.jpg"] :
				["cat-mean.jpg"];
		}

		LITW.utils.showSlide("results");
		$("#results").html(resultsTemplate({
			content: C.results,
			resultsExplanation: C.resultsExplanation,
			citations: C.citations,
			whichCat: whichCat,
			bothCats: (whichCat.length === 2)
		}));

		LITW.results.insertFooter();
	};

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

	readSummaryData = function() {
		$.getJSON( "summary.json", function( data ) {
			//TODO: 'data' contains the produced summary form DB data
			//      in case the study was loaded using 'index.php'
			//SAMPLE: The example code gets the cities of study partcipants.
			console.log(data);
		});
	}

	// when the page is loaded, start the study!
	$(document).ready(function() {
		// get initial data from database (nmaybe needed for the results page!?)
		readSummaryData();

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

		// Load the trial configuration data for the practice
		// trials and the real trials
		params.practiceStims1 = C.practiceWebpages;
		params.stims1 = C.trialWebpages;
    params.practiceStims2 = C.practiceScenarios;
    params.stims2 = C.trialScenarios;

		// shuffle the order of the trials
		params.practiceStims1 = LITW.utils.shuffleArrays(params.practiceStims1);
		params.stims1 = LITW.utils.shuffleArrays(params.stims1);

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
