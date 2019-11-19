/*************************************************************
 * test.js
 *
 * Raw data for the LITW demo study.
 *
 * Author: Trevor Croxson
 *
 * Last Modified: February 5, 2017
 *
 * © Copyright 2017 LabintheWild.
 * For questions about this file and permission to use
 * the code, contact us at info@labinthewild.org
 *************************************************************/

module.exports = {
	"preTrial": {
		"header": "Nice job!",
		"body": [
			"Now that you have the hang of it, we'll start the study.",
			"Click the arrow or press the <strong>spacebar</strong> when you are ready to begin."
		],
		"bodyWithTouch": [
			"Now that you have the hang of it, we'll start the study.",
			"Tap the arrow when you are ready to begin."
		],
	},
	"midTrial": {
		"header": "You're doing great! Take a breather."
	},
	"practiceWebpages": [
		{
			"type": "survey-multi-select",
      "questions": {
        "prompt": "Which types of data would you be happy to provide this website? <span class='bolded-blue'>(Click on a type of data to select it. Select as many as you like.)</span>",
        "options": ['Email address','Payment information','Likes and dislikes','Protected characteristics'],
        "horiztonal":true,
        "required": true,
        "name":"Data"
      }
			//"stimulus": "<img src='img/websites/twitter.png' style='width:100%;height:50%'/>",
			//"is_html": true,
			//"options": ['Email address','Payment information','Likes and dislikes','Protected characteristics'],
			//"prompt": "Which types of data would you be happy to provide this website? <span class='bolded-blue'>(Click on a type of data to select it. Select as many as you like.)</span>",
			//"promptWithTouch": "Which data would you be happy to provide to this website? <span class='bolded-blue'>(Tap on a type of data to select it. Select as many as you like.)</span>"
		}
	],
	"trialWebpages": [
    {
			"type": "single-stim",
			"stimulus": "<img src='img/websites/facebook.png'/>",
			"is_html": true,
			"choices": [49, 50], // the numbers 1 - 2
			"prompt": "Which data would you be happy to provide this website? <span class='bolded-blue'>(Click on a type of data to select it. Select as many as you like.)</span>",
			"promptWithTouch": "Which data would you be happy to provide to this website? <span class='bolded-blue'>(Tap on a type of data to select it. Select as many as you like.)</span>"
		},
    {
			"type": "single-stim",
			"stimulus": "<img src='img/websites/amazon.png'/>",
			"is_html": true,
			"choices": [49, 50], // the numbers 1 - 2
			"prompt": "Which data would you be happy to provide this website? <span class='bolded-blue'>(Click on a type of data to select it. Select as many as you like.)</span>",
			"promptWithTouch": "Which data would you be happy to provide to this website? <span class='bolded-blue'>(Tap on a type of data to select it. Select as many as you like.)</span>"
		},
    {
			"type": "single-stim",
			"stimulus": "<img src='img/websites/google_maps.png'/>",
			"is_html": true,
			"choices": [49, 50], // the numbers 1 - 2
			"prompt": "Which data would you be happy to provide this website? <span class='bolded-blue'>(Click on a type of data to select it. Select as many as you like.)</span>",
			"promptWithTouch": "Which data would you be happy to provide to this website? <span class='bolded-blue'>(Tap on a type of data to select it. Select as many as you like.)</span>"
		},
	],
	"loadingMsg": "Loading resources:",
	"progressMsg": "Progress:",
	"results": {
		"header": "Have a look at your results!",
		"predictionMsg": "Based on your responses, we think you might like to take this cat home!",
		"predictionMsgBoth": "Based on your responses, we think you might like to take both these cats home!"
	},
	"resultsExplanation": ["The task you completed in this study is one measure of cat preference [1]. We determined your cat preference based on the set of features exhibited by the cats you chose, such as posture.", "We are interested in learning whether cat preferences are consistent across cultures. We will report on this result on our blog."],
	"citations": ["[1] Buttons, C.W., Patches, R.A. (2012). Evaluation of a method for determining cat preference: the cat selection task. Journal of Cats: Applied, 8:2, 75-84."]
};
