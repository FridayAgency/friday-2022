<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>
        Friday | Email Signature Generator
    </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assets/dist/css/main.min.css">
</head>

<body>
    <div class="container">
        <img src="assets/dist/images/friday_logo_full.svg" alt="Friday">
        <h1>Email Signature Generator</h1>
      <!--   <ol>
            <li>Enter your details and preview your signature below.</li>
            <li>Once you're happy with your preview, open instructions for your email client. (Instructions will open in a new tab, you will need to come back to this page to complete)
                <ul>
                    <li><a href="instructions/How_to_setup_an_email_signature_in_Outlook_2013.pdf" target="_blank">Outlook 2013</a></li>
                    <li><a href="instructions/How_to_setup_an_email_signature_in_Outlook_2010.pdf" target="_blank">Outlook 2010</a></li>
                    <li><a href="instructions/How_to_setup_an_email_signature_in_Outlook_2007.pdf" target="_blank">Outlook 2007</a></li>
                </ul>
            </li>
            <li>Click on the "Generate Signature" button below, this will open your signature in a new window, this new window is where you will copy and paste from as per the instructions for your email client.</li>

        </ol> -->
        <div class="generator">
            <div class="generator__form">
                <h2>Edit</h2>
                <form action="#" method="post">
                    <label for="signoff">Sign off</label>
                    <input id="sig__signoff" name="signoff" type="text" value="Best regards," />

                    <label for="fname">First Name</label>
                    <input id="sig__fname" name="fname" type="text" value="First name" />
                    <label for="sname">Surname</label>
                    <input id="sig__sname" name="sname" type="text" value="Surname" />
                    <label for="position">Position</label>
                    <input id="sig__position" name="position" type="text" value="Your job title" />

                    <fieldset class="logo-radios">
                        <p><strong>Logo Type</strong></p>
                        <label>
                          <input type="radio" name="logo_img" value="https://friday.ie/emailsig_assets/fri-logox2-v2.png">
                          <span>Static</span>
                        </label>

                        <label>
                          <input type="radio" name="logo_img" value="https://friday.ie/emailsig_assets/friday-animated-once.gif">
                          <span>Play once</span>
                        </label>

                         <label>
                          <input type="radio" name="logo_img" value="https://friday.ie/emailsig_assets/friday-animated-loop.gif" checked>
                        <span>Loop</span>
                        </label>
                    </fieldset>




                     <label for="linkedin">Linked In URL</label>
                     <span class="desc">Insert your personal Linked In URL, or leave default to use Fridays.</span>
                    <input id="li__url" name="linkedin" type="text" value="https://www.linkedin.com/company/the-friday-agency/" />


                    <input id="generate_code" name="submit" class="submit" type="submit" value="Generate my signature >">
                </form>
            </div>
            <div class="generator__preview">
                <h2 class="green">Preview</h2>
                <br /><br />

                <div id="code_to_generate">
                   <p style="font-family:Helvetica; font-size:12px; color:#000000; margin-bottom:4px; margin-top:0px; padding-bottom:0px">&nbsp;</p>
                   <p style="font-family:Helvetica; font-size:12px; color:#000000; margin-bottom:4px; margin-top:0px; padding-bottom:0px"><span style="font-size: 12px; color: #000000; margin-bottom: 0px; margin-top: 0px; padding-bottom: 0px"><span style="font-weight:normal; font-size:12px"><span id="signoff"></span></span></span></p>
                   <p style="font-family:Helvetica; font-size:12px; color:#000000; margin-bottom:14px; margin-top:0px; padding-bottom:0px"><span style="font-size: 12px; color: #000000; margin-bottom: 0px; margin-top: 0px; padding-bottom: 0px"><span style="font-size: 12px"><span id="fname"></span>.</span></span></p>
                   &nbsp;
                   <p style="color:#333F48; font-weight:500; font-size:13px; font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;">
                      <a href="https://www.friday.ie" style="float:left; margin-right:14px; text-decoration:none;">
                        <img id="logo_img" src="https://friday.ie/emailsig_assets/fri-logox2-v2.png" width="82" height="31" alt="Friday" />
                    </a>
                </p>
                <p style="color:#333F48; font-weight:500; font-size:13px; font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;">
                  <span style="line-height:15px;">
                    <strong style="color:#FC1E42; font-size:14px; margin-bottom:3px;"><span id="fname2"></span> <span id="sname"></span></strong>
                    <br />
                    <span id="pos"></span>
                </span>
            </p>
            <p style="border-bottom:1px solid #FC1E42;"></p>
            <p style="color:#333F48; font-size:13px; font-weight:500; text-decoration:none; margin: 5px 0px; font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;">
              61 Merrion Square South, Dublin 2.
          </p>
          <p style="margin: 5px 0px;">
              <a href="https://www.friday.ie" style="color:#FC1E42; font-size:13px; font-weight:500; margin-left:-1px; text-decoration:none; font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;">friday.ie</a>
              <span style="color:#333F48; margin:0px 5px;">|</span>
              <a href="tel:+35315571321" style="color:#333F48; font-size:13px; font-weight:500; text-decoration:none; font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;">+353 1 557 1321</a>
          </p>
          <p style="margin: 8px 0px 0px;">
              <a id="linkedin" href="#" style="text-decoration:none !important; text-decoration-line: none; margin-right:8px;">
                <img src="https://www.friday.ie/emailsig_assets/linkedinx2.png" width="20" height="20" alt="LinkedIn" style="border:none" />
            </a>
            <a href="https://www.instagram.com/fridayagency/" style="text-decoration:none !important; text-decoration-line: none; margin-right:8px;">
                <img src="https://www.friday.ie/emailsig_assets/instagramx2.png" width="20" height="20" alt="Instagram" style="border:none" />
            </a>
            <a href="https://twitter.com/fridayagency" style="text-decoration:none  !important; text-decoration-line: none;">
                <img src="https://www.friday.ie/emailsig_assets/twitterx2.png" width="20" height="20" alt="Twitter" style="border:none" />
            </a>
        </p>
        <br>
        <br>
        <br>


    </div>

    <div id="generated_code__wrapper">
             <p><strong>Below is the source code for your signature.</strong></p>
             <ol>
                 <li>
                    <a href="https://www.daretothink.co.uk/html-email-signature-in-apple-mail/">Instructions for Apple Mail</a>
                </li>
                <li><a href="https://support.google.com/mail/answer/8395?co=GENIE.Platform%3DDesktop&hl=en">Instructions for Gmail</a> NB: For Gmail dont' add your signature in Chrome Browser. It will insert underlines on all links. Use any other browser to insert and save signature. It will then work in Chrome. </li>
             </ol>
    <div class="generate_code_btn">

        <button id="copyCode" class="button"><strong>Select Source Code</strong> (Apple Mail)</button>
        <button id="copyHtml" class="button"><strong>Select HTML</strong> (Gmail)</button>
    </div>
    <div id="generated_code_to_copy">  </div>
    
    </div>


</div>

<?php //include 'generate.php'; ?>


</div>
</div>
<script type="text/javascript" src="assets/dist/js/main.min.js"></script>
</body>

</html>
