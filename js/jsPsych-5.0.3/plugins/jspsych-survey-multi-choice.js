/**
 * jspsych-survey-multi-choice
 * a jspsych plugin for multiple choice survey questions
 *
 * Shane Martin
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['survey-multi-choice'] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {

    var plugin_id_name = "jspsych-survey-multi-choice";
    var plugin_id_selector = '#' + plugin_id_name;
    var _join = function( /*args*/ ) {
      var arr = Array.prototype.slice.call(arguments, _join.length);
      return arr.join(separator = '-');
    }

    // trial defaults
    trial.preamble = typeof trial.preamble == 'undefined' ? "" : trial.preamble;
    trial.required = typeof trial.required == 'undefined' ? null : trial.required;
    trial.horizontal = typeof trial.required == 'undefined' ? false : trial.horizontal;

    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    display_element.append(trial.image)

    // form element
    var trial_form_id = _join(plugin_id_name, "form");
    display_element.append($('<form>', {
      "id": trial_form_id
    }));
    var $trial_form = $("#" + trial_form_id);

    // show preamble text
    var preamble_id_name = _join(plugin_id_name, 'preamble');
    $trial_form.append($('<div>', {
      "id": preamble_id_name,
      "class": preamble_id_name
    }));
    $('#' + preamble_id_name).html(trial.preamble);

    // add multiple-choice questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create question container
      var question_classes = [_join(plugin_id_name, 'question')];
      if (trial.horizontal) {
        question_classes.push(_join(plugin_id_name, 'horizontal'));
      }

      $trial_form.append($('<div>', {
        "id": _join(plugin_id_name, i),
        "class": question_classes.join(' ')
      }));

      var question_selector = _join(plugin_id_selector, i);

      // add question text
      $(question_selector).append(
        '<p class="' + plugin_id_name + '-text survey-multi-choice">' + trial.questions[i].prompt + '</p>'
      );

      // create option radio buttons
      for (var j = 0; j < trial.questions[i].options.length; j++) {
        var option_id_name = _join(plugin_id_name, "option", i, j),
          option_id_selector = '#' + option_id_name;

        // add radio button container
        $(question_selector).append($('<div>', {
          "id": option_id_name,
          "class": _join(plugin_id_name, 'option')
        }));

        // add label and question text
        var option_label = '<label class="' + plugin_id_name + '-text">' + trial.questions[i].options[j] + '</label>';
        $(option_id_selector).append(option_label);

        // create radio button
        var input_id_name = _join(plugin_id_name, 'response', i);
        $(option_id_selector + " label").prepend('<input type="radio" name="' + input_id_name + '" value="' + trial.questions[i].options[j] + '">');
      }

      if (trial.required && trial.required[i]) {
        // add "question required" asterisk
        $(question_selector + " p").append("<span class='required'>*</span>")

        // add required property
        $(question_selector + " input:radio").prop("required", true);
      }
    }

    // add submit button
    $trial_form.append($('<input>', {
      'type': 'submit',
      'id': plugin_id_name + '-next',
      'class': plugin_id_name + ' jspsych-btn',
      'value': 'Submit Answers'
    }));

    $trial_form.submit(function(event) {

      event.preventDefault();

      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      $("div." + plugin_id_name + "-question").each(function(index) {
        var id = "Q" + index;
        var val = $(this).find("input:radio:checked").val();
        var obje = {};
        obje[id] = val;
        $.extend(question_data, obje);
      });

      var question_dict = {
        "Would you mind if this website knew the name of your bank?":"bank",
        "Would you mind if this website knew your current location?":"location",
        "Would you mind if this website knew your full name?":"fullname",
        "Would you use your fingerprint to login to or access this website?":"fingerprint",
        "Would you use a scan of your face to login to or access this website?":"face",
        "Would you mind if this website knew your passport number?":"passport",
        "Would you mind if this website could access the contents of your emails?":"emails",
        "Would you mind if this website could access the contents of your personal messages?":"messages",
        "Would you mind if this website collected information about your browsing history on other websites?":"history",
        "Would you mind if this website knew which kind of device you were using? e.g. if you are using a mobile phone or laptop":"device",
        "Would you mind if this website was uniquely able to identify your device without you logging in?":"deviceID",
        "Would you mind if this website could access your contact list?":"contacts",
        "Would you mind if this website knew where you worked?":"employment",
        "Would you mind if this website knew your racial/ethnic origin?":"race",
        "Would you mind if this website knew about your hobbies or interests?":"hobbies",
        "Would you mind if this website knew who you wanted to vote for?":"vote",
        "Would you mind if this website knew if left or right leaning politically?":"lean",
        "Would you mind if this website knew your sexuality? i.e. whether you are heterosexual, homosexual, pansexual etc.":"sexuality",
        "Would mind if this website knew if you were disabled or not?":"disability",
        "Would mind if this website had access to your photos?":"photos",
        "Would you mind if this website knew your home address?":"address",
        "Would you mind if this website knew what kind of products you liked?":"products",
        "Would you mind if this website knew if you had allergies/dietary requirements?":"dietary",
        "Would you mind if this website knew your religious beliefs?":"religion",
        "Would you mind if this website knew your credit card number?":"creditcard",
        "Would you mind if this website knew your bank account number?":"bankaccount"
      };

      var questionText = {};
      var question={};
      var questions=[];
      $("div." + plugin_id_name + "-question .jspsych-survey-multi-choice-text.survey-multi-choice").each(function(index) {
        questionText = $(this).context.innerText;
        question = question_dict[questionText];
        questions.push(question);
      });

      var website = {};
      $("#trials .website").each(function(index){
        website = $(this).context.id;
      });

      // save data
      var trial_data = {
        "rt": response_time,
        "responses": JSON.stringify(question_data),
        "questions": JSON.stringify(questions),
        "website": JSON.stringify(website)
      };

      display_element.html('');

      // next trial
      jsPsych.finishTrial(trial_data);
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
