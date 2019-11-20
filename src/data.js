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

var data_questions = [
  {"prompt": "Would you provide this website with your financial information?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide your location to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide your full name to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide your biometric data to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide your passport number to this webiste?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide the content of your texts, emails or messages to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide your browsing history on other websites to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide information about your device to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide your contact list to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide your place of employment to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide your racial/ethnic origin to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide your likes and interests to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide your poltiical views to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
  {"prompt": "Would you provide your religious beliefs to this website?",
  "options": ["Yes","No"],
  "horizontal":true},
]

function rand_questions(questions, num_qs){
  randomqs = [];
  for(i=0;i<num_qs;i++){
    randomqs.push(questions[Math.floor(Math.random()*questions.length)])
  };
  return randomqs;
}

var website_images = [
  "<img src='img/websites/allrecipes.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/amazon.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/apple.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/bbc.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/craigslist.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/dictionary.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/ebay.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/expedia.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/facebook.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/google_maps.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/google_play.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/gov_uk.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/imdb.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/instagram.png' style='width:50%;height:50%'/>",
  "<img src='img/websites/linkedin.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/met_office.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/ny_times.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/reddit.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/tripadvisor.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/twitter.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/wikipedia.png' style='width:100%;height:50%'/>",
  "<img src='img/websites/youtube.png' style='width:100%;height:50%'/>",
]
function rand_website_trial(){
  rand_website_image = website_images[Math.floor(Math.random()*website_images.length)];
  return {"type":"survey-multi-choice","image":rand_website_image,"questions":rand_questions(data_questions,3),"randomize_question_order":true}
}

var scale_1 = [
  "Not concerning at all",
  "Not very concerning",
  "Neither concerning nor not concerning",
  "Quite concerning",
  "Very concerning"
];

module.exports = {
	"preTrial": {
		"header": "Nice job!",
		"body": [
			"Now that you have the hang of it, we'll start the trial.",
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
  // trial 1 - webpages
	"practiceWebpages": [
		{
      "type":"survey-multi-choice",
      "image":"<img src='img/websites/twitter.png' style='width:100%;height:50%'/>",
      "questions":[
          {"prompt": "Would you provide this website with your financial information?",
          "options": ["Yes","No"],
          "horizontal":true}
      ]
		}
	],
	"trialWebpages": [
    rand_website_trial(),
    rand_website_trial(),
    rand_website_trial(),
    rand_website_trial(),
    rand_website_trial(),
    rand_website_trial(),
    rand_website_trial(),
  ],
  // trial 2 - scenarios
  "practiceScenarios":[
    {
      "type": "survey-likert",
      "questions": [
        {"prompt": "<img src='img/scenarios/scenario-1.png' style='width:100%;height:50%'/>", "labels": scale_1}
      ]
    }
  ],
  "trialScenarios":[
    {
      "type": "survey-likert",
      "questions": [
        {"prompt": "<img src='img/scenarios/scenario-2.png' style='width:100%;height:50%'/>", "labels": scale_1}
      ]
    },
    {
      "type": "survey-likert",
      "questions": [
        {"prompt": "<img src='img/scenarios/scenario-3.png' style='width:100%;height:50%'/>", "labels": scale_1}
      ]
    },
    {
      "type": "survey-likert",
      "questions": [
        {"prompt": "<img src='img/scenarios/scenario-4.png' style='width:100%;height:50%'/>", "labels": scale_1}
      ]
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
