package cn.thoughtworks.school.programCenter.controllers;

import cn.thoughtworks.school.programCenter.services.UserCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/")
public class JinshujuDateController {
    @Autowired
    private UserCenterService userCenterService;

    @RequestMapping(value = "/signInProgram", method = RequestMethod.POST)
    public void getUserById(@RequestBody Map data) {

        System.out.println("-----------------data----------------");
        System.out.println(data);
    }
}
