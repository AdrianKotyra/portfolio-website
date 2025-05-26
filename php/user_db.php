<?php

class User {
    public $user_id;
    public $user_login;
    public $user_password;

    public function login_in_user($name, $password) {
    if ($name && $password) {
        global $database;


        // Prepare statement
        $stmt = $database->prepare("SELECT * FROM users WHERE user_login = ? AND user_password = ?");
        if ($stmt) {

            $stmt->bind_param("ss", $name, $password);


            $stmt->execute();


            $result = $stmt->get_result();
            if ($result->num_rows >= 1) {
                while ($row = $result->fetch_assoc()) {
                    $this->user_id = $row['id'];
                    $this->user_login = $row['user_login'];
                    $this->user_password = $row['user_password'];
                }
                $new_session = new session();
                $new_session->login($this->user_id);
            }

            // Close statement
            $stmt->close();
        }
    }
    }


    public function create_user($id){
        if($id) {
            global $database;

            $result = $database ->query_array("SELECT * FROM users WHERE id = $id");

            while($row = mysqli_fetch_array($result )) {
                $this->user_id = $row['id'];
                $this->user_login = $row['user_login'];
                $this-> user_password = $row["user_password"];






            }
        }



        }
    }




?>
