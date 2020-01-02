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
  {"prompt": "Would you provide this website with the name of your bank?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your current location to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your full name to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your fingerprint to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide a scan of your face to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your passport number to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide the content of your emails to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide the content of your personal messages to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your browsing history on other websites to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide the kind of device you're using to this site?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide the the operating system you're using to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide a unique ID of your device to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your contact list to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your place of employment to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your racial/ethnic origin to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide information your hobbies or interests to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide information about who you're going to vote for to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide information about whether you are left or right leaning politically to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide information about your sexuality to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide information about your disability status to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your photos to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your home address to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide information about the products you like to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your dietary requirements to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your religious beliefs to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide your credit card number to this website?",
  "options": ["Yes","No"]},
  {"prompt": "Would you provide this website with your bank account number?",
  "options": ["Yes","No"]}
]

function rand_questions(questions, num_qs){
  questionsCopy = questions;
  randomqs = [];
  for(i=0;i<num_qs;i++){
    random_index = Math.floor(Math.random()*questionsCopy.length);
    randomqs.push(questionsCopy[random_index]);
    questionsCopy.splice(random_index,1);
  };
  return randomqs;
}

var website_images = [
  "<img class='website' id='allrecipes' src='img/websites/allrecipes.png' style='width:90%;height:50%;border:2px solid black'/>",
  "<img class='website' id='amazon' src='img/websites/amazon.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='apple' src='img/websites/apple.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='bbc' src='img/websites/bbc.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='craiglist' src='img/websites/craigslist.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='dictionary' src='img/websites/dictionary.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='ebay' src='img/websites/ebay.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='expedia' src='img/websites/expedia.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='facebook' src='img/websites/facebook.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='gmail' src='img/websites/gmail.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='google_maps' src='img/websites/google_maps.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='google_play' src='img/websites/google_play.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='gov_uk' src='img/websites/gov_uk.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='imbd' src='img/websites/imdb.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='instagram' src='img/websites/instagram.png' style='width:50%;height:30%;border:2px solid black'/>",
  "<img class='website' id='linkedin' src='img/websites/linkedin.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='met_office' src='img/websites/met_office.png' style='width:80%;height:60%;border:2px solid black'/>",
  "<img class='website' id='ny_times' src='img/websites/ny_times.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='outlook' src='img/websites/outlook.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='reddit' src='img/websites/reddit.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='tripadvisor' src='img/websites/tripadvisor.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='twitter' src='img/websites/twitter.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='usagov' src='img/websites/usagov.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='whatsapp' src='img/websites/whatsapp.png' style='height:200px;border:2px solid black'/>",
  "<img class='website' id='wikipedia' src='img/websites/wikipedia.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='yahoo' src='img/websites/yahoo.jpg' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='youtube' src='img/websites/youtube.jpeg' style='width:80%;height:50%;border:2px solid black'/>",
]

var scenario_images = [
  "<img class='scenario' id='allrecipes' src='img/scenarios/allrecipes.png' style='width:90%;height:50%'/>",
  "<img class='scenario' id='accuweather-facebook' src='img/scenarios/accuweather-facebook.png' style='width:90%;height:50%'/>",
  "<img class='scenario' id='amazon-1' src='img/scenarios/amazon-1.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='amazon-2' src='img/scenarios/amazon-2.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='amazon-3' src='img/scenarios/amazon-3.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='apple-1' src='img/scenarios/apple.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='apple-2' src='img/scenarios/apple-2.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='bbc-1' src='img/scenarios/bbc-1.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='bbc-2' src='img/scenarios/bbc-2.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='dictionary-1' src='img/scenarios/dictionary-1.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='dictionary-2' src='img/scenarios/dictionary-2.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='ebay-1' src='img/scenarios/ebay-1.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='ebay-2' src='img/scenarios/ebay-2.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='expedia-facebook' src='img/scenarios/expedia-facebook.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='facebook-1' src='img/scenarios/facebook-1.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='facebook-2' src='img/scenarios/facebook-2.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='facebook-3' src='img/scenarios/facebook-3.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='instagram' src='img/scenarios/instagram.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='netflix' src='img/scenarios/netflix.png' style='width:80%;height:50%/>",
]

var sorting_stimuli = [
  "<img src='img/website-logos/bbc-logo.png' style='height:30px'/>"
]

function rand_website_trial(){
  rand_index = Math.floor(Math.random()*website_images.length);
  rand_website_image = website_images[rand_index];
  website_images.splice(rand_index,1);
  return {"type":"survey-multi-choice","image":rand_website_image,"questions":rand_questions(data_questions,3),"randomize_question_order":true};
}

function rand_scenario_trial(){
  rand_index = Math.floor(Math.random()*scenario_images.length);
  rand_scenario_image = scenario_images[rand_index];
  scenario_images.splice(rand_index,1);
  return {"type": "survey-likert","questions": [ {"prompt": rand_scenario_image, "labels": scale_1}]};
}

var scale_1 = [
  "Not concerning at all",
  "Not very concerning",
  "Neither concerning nor not concerning",
  "Quite concerning",
  "Very concerning"
];

var scale_2 = [
  "A",
  "B",
  "C",
  "D",
  "E"
]

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
  // trial 1 - scenarios
  "practiceScenarios":[
    {
      "type": "survey-likert",
      "questions": [
        {"prompt": "<img class='scenario' id='netflix' src='img/scenarios/scenario-example.png' style='width:80%;height:50%'/>", "labels": scale_1}
      ]
    }
  ],
  "trialScenarios":[
    rand_scenario_trial(),
    rand_scenario_trial(),
    rand_scenario_trial(),
    rand_scenario_trial(),
    rand_scenario_trial()
  ],
	"loadingMsg": "Loading resources:",
	"progressMsg": "Progress:",
	"results": {
		"header": "Based on your answers, your risk score is: ",
		"riskyMsg": "Your data might be at risk while you browse. Be aware of the kinds of information sites collect from you - take a look at the privacy policies on websites, or download some of these browser extensions to help protect your data:",
		"notRiskyMsg": "Your data probably isn't at too much risk while you browse - great! It might still be worth taking a look at some of these browser extensions  to keep yourself as safe as possible: "
	},
  "website_use":[
    {
    type: 'free-sort',
    stimuli: sorting_stimuli,
    prompt: "<p>Click and drag the images below and drop them in the right box depending on whether you have heard of/used that website before.</p>"
    }
  ],
  // trial 2 - webpages
	"practiceWebpages": [
		{
      "type":"survey-multi-choice",
      "image":"<img class='website' id='twitter' src='img/websites/twitter.png' style='width:80%;height:50%;border:2px solid black'/>",
      "questions":[
          {"prompt": "Would you provide this website with your bank account number?",
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
  ],
  "practiceTools":[
    {
      "type": "survey-likert",
      "questions": [
        {"prompt": "<img class='tool' id='browser' src='img/tools/browser.png' style='width:80%;height:50%'/>", "labels": scale_2}
      ]
    }
  ],
  "trialTools":[
    {
      "type": "survey-likert",
      "questions": [
        {"prompt": "<img class='tool' id='adblocker' src='img/tools/adblocker.png' style='width:80%;height:50%'/>", "labels": scale_2}
      ]
    }
  ],
	"resultsExplanation": ["The tasks you completed in this study helped us to understand your attitude towards data privacy online.", "We are interested in learning more about this in order to build a product to help people protect their data online."],
};
