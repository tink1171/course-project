package com.kp.controller;

import com.kp.model.Company;
import com.kp.model.Page;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.UriComponentsBuilder;


@Controller
public class SiteController {

    @RequestMapping(value = "/page", method = RequestMethod.POST)
    public @ResponseBody String savePage(@RequestBody String page) {
        return "JSON: The company name: Headoffice";
    }

    @RequestMapping(value = "/angularjs-http-service-ajax-post-json-data-code-example", method = RequestMethod.GET)
    public ModelAndView httpServicePostJSONDataExample( ModelMap model ) {
        return new ModelAndView("httpservice_post_json");
    }

    @RequestMapping(value = "/savecompany_json", method = RequestMethod.POST)
    public  @ResponseBody String saveCompany_JSON(@RequestBody String string )   {
        //
        // Code processing the input parameters
        //
        return "The company name: ";
    }
}
