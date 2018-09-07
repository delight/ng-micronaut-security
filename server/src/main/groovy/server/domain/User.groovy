package server.domain

import grails.gorm.annotation.Entity
import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import io.micronaut.security.authentication.providers.UserState
import org.grails.datastore.gorm.GormEntity

@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
@Entity
class User implements GormEntity<User>, Serializable, UserState {

    private static final long serialVersionUID = 1

    String username
    String password

    static constraints = {
        password nullable: false, blank: false, password: true
        username nullable: false, blank: false, unique: true
    }

    @Override
    boolean isEnabled() {
        return true
    }

    @Override
    boolean isAccountExpired() {
        return false
    }

    @Override
    boolean isAccountLocked() {
        return false
    }

    @Override
    boolean isPasswordExpired() {
        return false
    }
}
