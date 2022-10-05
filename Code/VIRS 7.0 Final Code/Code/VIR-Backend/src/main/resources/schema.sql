USE `vir`;

--
-- Table structure for table `words`
--

DROP TABLE IF EXISTS `vir`.`word`;
CREATE TABLE `vir`.`word` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(255) NOT NULL,
  `category` varchar(5) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `value_UNIQUE` (`value`, `category`) COMMENT 'The value should be unique'
) ENGINE=InnoDB AUTO_INCREMENT=41981 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `vir`.`user`;
CREATE TABLE `vir`.`users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(256) NOT NULL,
  `user_name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(20)  NOT NULL,
  `user_level`varchar(20)  NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `value_UNIQUE` (`user_name`) COMMENT 'The value should be unique'
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

alter table word change column value value varchar(256)CHARACTER SET 'utf8' COLLATE 'utf8_general_ci';