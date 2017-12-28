package cn.thoughtworks.school.programCenter.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Map;

@Service
public class UserCenterService {

    @Value("${userCenter}")
    private String userCenterUrl;

    public ResponseEntity getUserInfo(Long userId) {
        String getUsersUrl = userCenterUrl + "/api/users/" + userId;
        RestTemplate template = new RestTemplate();
        ResponseEntity<Map> result = template.getForEntity(getUsersUrl, Map.class);
        return result;
    }

    public ResponseEntity getUserByNameOrEmail(String nameOrEmail){
        RestTemplate template = new RestTemplate();
        String getUsersUrl = userCenterUrl + "/api/users";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);

        UriComponentsBuilder builder = UriComponentsBuilder
                .fromUriString(getUsersUrl)
                .queryParam("nameOrEmail", nameOrEmail);
        HttpEntity<?> entity = new HttpEntity<>(headers);

        ResponseEntity<List> result = template.exchange(builder.build().encode().toUri(), HttpMethod.GET, entity, List.class);
        return result;

    }

}
