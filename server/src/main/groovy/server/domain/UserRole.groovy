package server.domain

import grails.gorm.annotation.Entity
import groovy.transform.ToString
import org.codehaus.groovy.util.HashCodeHelper
import org.grails.datastore.gorm.GormEntity

@ToString(cache=true, includeNames=true, includePackage=false)
@Entity
class UserRole implements GormEntity<UserRole>, Serializable {

    private static final long serialVersionUID = 1

    User user
    Role role

    @Override
    boolean equals(other) {
        if (other instanceof UserRole) {
            other.userId == user?.id && other.roleId == role?.id
        }
    }

    @Override
    int hashCode() {
        int hashCode = HashCodeHelper.initHash()
        if (user) {
            hashCode = HashCodeHelper.updateHash(hashCode, user.id)
        }
        if (role) {
            hashCode = HashCodeHelper.updateHash(hashCode, role.id)
        }
        hashCode
    }

    static constraints = {
        user nullable: false
        role nullable: false
    }

    static mapping = {
        id composite: ['user', 'role']
        version false
    }
}