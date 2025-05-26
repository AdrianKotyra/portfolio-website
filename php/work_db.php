<?php

class Work {
    public $work_id;
    public $work_name;
    public $work_extra_img;
    public $work_extra_img_2;
    public $work_desc;
    public $work_desc_tech;
    public $work_link;
    public $git_link;
    public $work_img;
    public $work_level;
    public function create_work_by_name($name){
        global $database;
        $result = $database ->query_array("SELECT * FROM works WHERE work_name = '$name'");

        while($row = mysqli_fetch_array($result )) {
            $this-> work_id = $row['work_id'];
            $this->work_name = $row['work_name'];
            $this->work_img = $row['work_img'];
            $this->work_extra_img = $row['work_extra_img'];
            $this->work_extra_img_2 = $row['work_extra_img_2'];
            $this->work_desc = $row['work_desc'];
            $this->work_desc_tech = $row['work_desc_tech'];
            $this->work_link= $row['work_link'];
            $this->git_link= $row['git_link'];
            $this->work_level= $row['level'];
        }




    }
      public function create_work_by_id($id){
        global $database;
        $result = $database ->query_array("SELECT * FROM works WHERE work_id = $id");

        while($row = mysqli_fetch_array($result )) {
            $this-> work_id = $row['work_id'];
            $this->work_name = $row['work_name'];
            $this->work_img = $row['work_img'];
            $this->work_extra_img = $row['work_extra_img'];
            $this->work_extra_img_2 = $row['work_extra_img_2'];
            $this->work_desc = $row['work_desc'];
            $this->work_desc_tech = $row['work_desc_tech'];
            $this->work_link= $row['work_link'];
            $this->git_link= $row['git_link'];
            $this->work_level= $row['level'];
        }




    }


    function Work_Cart(){
        $template = '
        	<a target="_blank" href="porfolio-webpage.php?work_name='.$this->work_name.'"class="animate-on-scroll col-md-3 col-xs-6 wow fadeIn  cinema-trigger level '.$this->work_level.' level-all" data-wow-delay="0.2s">
                <div class="portfolio-thumb">

                    <img src="images/'.$this->work_img.'" id="loch_img" class="img-responsive" alt="portfolio img">
                    <div >
                        <div class="portfolio-overlay ">
                        <h4>'.$this->work_name.'</h4>
                        </div>
                    </div>

                </div>
            </a>
        ';
        return  $template;

    }
}



?>
