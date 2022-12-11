package com.vir.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Value("${security.user.name}")
	private String user;

	@Value("${security.user.password}")
	private String password;

	@Override
	@Bean
	public UserDetailsService userDetailsService() {
		InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
		manager.createUser(User.withUsername(user).password(password).roles("ADMIN").build());
		return manager;
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// @formatter:off
		http
			.csrf()
				.disable()
			.authorizeRequests()
				.antMatchers("/api/admin/**").hasRole("ADMIN")
				.antMatchers("/swagger-ui.html", "/v2/api-docs").hasAnyRole("ADMIN")
				.antMatchers("/admin").hasAnyRole("ADMIN")
				.antMatchers("/api/**", "**").permitAll()
				.and()
			.formLogin()
				.and()
					.logout()
					.permitAll();
		
		// @formatter:on
	}
}
