package com.vir.config;

import static com.google.common.base.Predicates.and;
import static com.google.common.base.Predicates.not;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Configuration class for Swagger.
 * 
 * @author Alfredo Lopez
 *
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {

	// @formatter:off

	@Bean
    public Docket swaggerSpringMvcPlugin() {
        return new Docket(DocumentationType.SWAGGER_2)
            .useDefaultResponseMessages(false)
            .apiInfo(apiInfo())
            .select()
            .paths(and(PathSelectors.regex("/api/.*"), not(PathSelectors.regex("/error.*"))))
            .build();
	}
	
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
            .title("Vocubulary in Reading API")
            .description("This is the Api for the web application.")
            .contact(new Contact("developers", "url", "email"))
            .license("Apache License Version 2.0")
            .licenseUrl("Licence url")
            .version("2.0")
            .build();
    }
    
    // @formatter:on

}