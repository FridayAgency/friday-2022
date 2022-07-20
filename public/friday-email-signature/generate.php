<?php 

if(isset($_POST['submit'])) {
   $fname = htmlspecialchars($_POST["fname"]);
   $sname = htmlspecialchars($_POST["sname"]);
   $pos = htmlspecialchars($_POST["position"]);
   $logo = htmlspecialchars($_POST["logo_img"]);
    $linkedIn = htmlspecialchars($_POST["linkedin"]);



}else{
    header('Location: index.php');
}

?>


<div id="code_to_generate">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="format-detection" content="telephone=no">
<style>.ExternalClass * {line-height: 100%} </style>
   <p style="font-family:Helvetica; font-size:12px; color:#000000; margin-bottom:4px; margin-top:0px; padding-bottom:0px">&nbsp;</p>
<p style="font-family:Helvetica; font-size:12px; color:#000000; margin-bottom:4px; margin-top:0px; padding-bottom:0px"><span style="font-size: 12px; color: #000000; margin-bottom: 0px; margin-top: 0px; padding-bottom: 0px"><span style="font-weight:normal; font-size:12px">Best regards,</span></span></p>
<p style="font-family:Helvetica; font-size:12px; color:#000000; margin-bottom:14px; margin-top:0px; padding-bottom:0px"><span style="font-size: 12px; color: #000000; margin-bottom: 0px; margin-top: 0px; padding-bottom: 0px"><span style="font-size: 12px"><?php echo $fname; ?></span></span></p>
&nbsp;
<p style="color:#333F48; font-weight:500; font-size:13px; font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;">
  <a href="https://www.friday.ie" style="float:left; margin-right:14px; text-decoration:none;">
    <img src="<?php echo $logo; ?>" width="82" height="31" alt="Friday" />
  </a>
</p>
<p style="color:#333F48; font-weight:500; font-size:13px; font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;">
  <span style="line-height:15px;">
    <strong style="color:#FC1E42; font-size:14px; margin-bottom:3px;"><?php echo $fname; ?> <?php echo $sname; ?></strong>
    <br />
    <?php echo $pos; ?>
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
  <a href="<?php echo $linkedIn; ?>" style="text-decoration:none; margin-right:8px;">
    <img src="https://www.friday.ie/emailsig_assets/linkedinx2.png" width="20" height="20" alt="LinkedIn" style="border:none" />
  </a>
  <a href="https://www.instagram.com/fridayagency/" style="text-decoration:none; margin-right:8px;">
    <img src="https://www.friday.ie/emailsig_assets/instagramx2.png" width="20" height="20" alt="Instagram" style="border:none" />
  </a>
  <a href="https://twitter.com/fridayagency" style="text-decoration:none;">
    <img src="https://www.friday.ie/emailsig_assets/twitterx2.png" width="20" height="20" alt="Twitter" style="border:none" />
  </a>
</p>
<br>
<br>
<br>
</div>