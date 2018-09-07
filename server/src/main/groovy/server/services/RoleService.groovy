package server.services

import grails.gorm.services.Service
import server.domain.Role

@Service(Role)
interface RoleService {

    Role save(String authority)

    Role find(String authority)

    void delete(Serializable id)
}
