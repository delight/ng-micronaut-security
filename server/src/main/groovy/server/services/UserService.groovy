package server.services

import grails.gorm.services.Service
import server.domain.User

@Service(User)
interface UserService {

    User save(String username, String password)

    Long findUserId(String username)

    User find(String username)
}
