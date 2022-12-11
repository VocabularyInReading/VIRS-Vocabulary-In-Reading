package com.vir.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller to redirect to the home page. This is needed because
 * we always need Angular 4 to know where the request is comming from
 * with the html5 mode.
 * 
 * @see <a href="https://angular.io/guide/router#browser-url-styles">
 * 	Appendix: LocationStrategy and browser URL styles</a>
 * @see <a href="http://www.jhipster.tech/tips/010_tip_configuring_html_5_mode.html">
 * 	JHipster Configuring HTML 5 mode</a>
 * @author alfredo
 *
 */

@Controller
public class AngularRedirectController {
	
	@RequestMapping(value = "/{path:[^\\.]*}")
	public String redirectToHome() {
		return "forward:/";
	}
}
