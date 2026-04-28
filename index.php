<?php
require_once 'router.php';
(new Router())->rotear($_SERVER['REQUEST_METHOD'], $_POST);