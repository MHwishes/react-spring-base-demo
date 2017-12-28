package cn.thoughtworks.school.programCenter.controllers;

import cn.thoughtworks.school.programCenter.services.UserCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/users")
public class UserController {

    @Autowired
    private UserCenterService userCenterService;

    @RequestMapping(value = "/{userId}", method = RequestMethod.GET)
    public ResponseEntity getUserById(@PathVariable Long userId) {
        return userCenterService.getUserInfo(userId);
    }

}
