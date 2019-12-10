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

      var questions = {
        "Would you provide this website with the name of your bank?":"bank",
        "Would you provide your current location to this website?":"location",
        "Would you provide your full name to this website?":"fullname",
        "Would you provide your fingerprint to this website?":"fingerprint",
        "Would you provide a scan of your face to this website?":"face",
        "Would you provide your passport number to this website?":"passport",
        "Would you provide the content of your emails to this website?":"emails",
        "Would you provide the content of your personal messages to this website?":"messages",
        "Would you provide your browsing history on other websites to this website?":"history",
        "Would you provide the kind of device you're using to this site?":"device",
        "Would you provide the the operating system you're using to this website?":"operatingsystem",
        "Would you provide a unique ID of your device to this website?":"deviceID",
        "Would you provide your contact list to this website?":"contacts",
        "Would you provide your place of employment to this website?":"employment",
        "Would you provide your racial/ethnic origin to this website?":"race",
        "Would you provide information your hobbies or interests to this website?":"hobbies",
        "Would you provide information about who you're going to vote for to this website?":"vote",
        "Would you provide information about whether you are left or right leaning politically to this website?":"lean",
        "Would you provide information about your sexuality to this website?":"sexuality",
        "Would you provide information about your disability status to this website?":"disability",
        "Would you provide your photos to this website?":"photos",
        "Would you provide your home address to this website?":"address",
        "Would you provide information about the products you like to this website?":"products",
        "Would you provide your dietary requirements to this website?":"dietary",
        "Would you provide your religious beliefs to this website?":"religion",
        "Would you provide your credit card number to this website?":"creditcard",
        "Would you provide this website with your bank account number?":"bankaccount"
      };

      var questionText = {};
      var question={};
      $("div." + plugin_id_name + "-question .jspsych-survey-multi-choice-text.survey-multi-choice").each(function(index) {
        questionText = $(this).context.innerText;
        question = questions[questionText];
      });

      var website = {};
      $("#trials .website").each(function(index){
        website = $(this).context.id;
      });

      // save data
      var trial_data = {
        "rt": response_time,
        "responses": JSON.stringify(question_data),
        "question": JSON.stringify(question),
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
