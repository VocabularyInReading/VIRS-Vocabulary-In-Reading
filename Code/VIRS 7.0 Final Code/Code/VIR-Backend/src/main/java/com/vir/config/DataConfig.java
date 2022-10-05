package com.vir.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataConfig {
	
	@Value("${spring.datasource.username}")
	private String userName;
	
	@Value("${spring.datasource.password}")
	private String password;
	
	@Value("${spring.datasource.url}")
	private String url;
	
	@Value("${spring.datasource.driver-class-name}")
	private String driverClassName;
		
	@Bean
	DataSource dataSource() {
		return DataSourceBuilder
				.create()
				.username(userName)
				.password(password)
				.url(url)
				.driverClassName(driverClassName)
				.build();
	}
}
