<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "02976cef6a";
$dbname = "php";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Sanitize the user input
$name = mysqli_real_escape_string($conn, $_POST['name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$text = mysqli_real_escape_string($conn, $_POST['text']);

// Insert the data into the "about" table
$sql = "INSERT INTO about (full_name, email, message)
        VALUES ('$name', '$email', '$text')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
