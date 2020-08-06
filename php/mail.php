<?php


if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $errorEmpty = false;
    $errorEmail = false;
    

    if (empty($name) || empty($email) || empty($message)) {
        echo "<span class='form-error'>Fill in all fields!</span>";
        $errorEmpty = true;

    }
    elseif (!filter_var($email, FILER_VALIDATE_EMAIL)){
        echo "<span class='form-error'>Write a valid email address!</span>";
    }
    else {
        echo "<span class='form-success'>message sent!</span>";
    }
}
else {
    echo "there was an error!";
}


?>

<script>
    var errorEmpty = "<?php echo $errorEmpty; ?>";
    var errorEmail = "<?php echo $errorEmail; ?>";

    if (errorEmpty == true){
        $("#mail-name, #mail-email, #mail-message").addClass("input-error");
    }
    if (errorMail == true){
        $("#mail-email").addClass("input-error");
    }
    if(errorEmpty == false && errorMail == false){
        $("#mail-name, #mail-email, #mail-message").val("");
    }

</script>