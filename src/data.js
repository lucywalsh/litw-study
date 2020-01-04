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
  {"prompt": "Would you mind if this website knew the name of your bank?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew your current location?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew your full name?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you use your fingerprint to login to or access this website?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you use a scan of your face to login to or access this website?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew your passport number?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website could access the contents of your emails?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website could access the contents of your personal messages?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website collected information about your browsing history on other websites?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew which kind of device you were using? e.g. if you are using a mobile phone or laptop",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website was uniquely able to identify your device without you logging in?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website could access your contact list?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew where you worked?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew your racial/ethnic origin?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew about your hobbies or interests?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew who you wanted to vote for?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew if left or right leaning politically?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew your sexuality? i.e. whether you are heterosexual, homosexual, pansexual etc.",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would mind if this website knew if you were disabled or not?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would mind if this website had access to your photos?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew your home address?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew what kind of products you liked?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew if you had allergies/dietary requirements?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew your religious beliefs?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew your credit card number?",
  "options": ["Yes","Maybe","No"],"required":true},
  {"prompt": "Would you mind if this website knew your bank account number?",
  "options": ["Yes","Maybe","No"],"required":true}
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
  "<img class='website' id='dictionary' src='img/websites/dictionary.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='ebay' src='img/websites/ebay.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='expedia' src='img/websites/expedia.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='facebook' src='img/websites/facebook.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='gmail' src='img/websites/gmail.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='google_maps' src='img/websites/google_maps.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='gov_uk' src='img/websites/gov_uk.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='instagram' src='img/websites/instagram.png' style='width:50%;height:30%;border:2px solid black'/>",
  "<img class='website' id='linkedin' src='img/websites/linkedin.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='ny_times' src='img/websites/ny_times.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='reddit' src='img/websites/reddit.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='tripadvisor' src='img/websites/tripadvisor.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='twitter' src='img/websites/twitter.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='usagov' src='img/websites/usagov.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='whatsapp' src='img/websites/whatsapp.png' style='height:200px;border:2px solid black'/>",
  "<img class='website' id='wikipedia' src='img/websites/wikipedia.png' style='width:80%;height:50%;border:2px solid black'/>",
  "<img class='website' id='youtube' src='img/websites/youtube.jpeg' style='width:80%;height:50%;border:2px solid black'/>",
]

var scenario_images = [
  "<img class='scenario' id='allrecipes' src='img/scenarios/allrecipes.png' style='width:90%;height:50%'/>",
  "<img class='scenario' id='accuweather-facebook' src='img/scenarios/accuweather-facebook.png' style='width:90%;height:50%'/>",
  "<img class='scenario' id='amazon-1' src='img/scenarios/amazon-1.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='amazon-2' src='img/scenarios/amazon-2.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='amazon-3' src='img/scenarios/amazon-3.png' style='width:80%;height:50%'/>",
  "<img class='scenario' id='apple-1' src='img/scenarios/apple-1.png' style='width:80%;height:50%'/>",
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
  return {"type": "survey-likert","questions": [ {"prompt": rand_scenario_image, "labels": scale_1, "required":true}]};
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

var tools_question = [{"prompt": "Have you used this tool?",
"options": [
  "I don't use this tool currently but <strong>I would be</strong> willing to use it",
  "I don't use this tool currently and <strong>I would not</strong> be willing to use it",
  "I have used this tool in the past and <strong>would</strong> be willing to use it again",
  "I have used this tool in the past but <strong>would not</strong> use it again",
  "I use this tool <strong>currently</strong>"
],"required":true}];





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
        {"prompt": "<img class='scenario' id='scenario-example' src='img/scenarios/scenario-example.png' style='width:80%;height:50%'/>", "labels": scale_1}
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
		"header": "Based on your answers, your score is: ",
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
          {"prompt": "Would mind if this website knew your bank account number?",
          "options": ["Yes","Maybe","No"],"required":true,
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
    {"type":"survey-multi-choice","image":"<img class='tool' id='browser' src='img/tools/browser.png' style='width:80%;height:50%'/>","questions":tools_question,"randomize_question_order":false}
  ],
  "trialTools":[
    {"type":"survey-multi-choice","image":"<img class='tool' id='adblocker' src='img/tools/adblocker.png' style='width:80%;height:50%'/>","questions":tools_question,"randomize_question_order":false}
  ],
	"resultsExplanation": ["The tasks you completed in this study helped us to understand your attitude towards data privacy online.", "We are interested in learning more about this in order to build a product to help people protect their data online."],
};
