package server.services

import grails.gorm.transactions.Transactional
import groovy.transform.CompileStatic
import io.micronaut.security.authentication.providers.PasswordEncoder
import server.domain.Role
import server.domain.User
import server.domain.UserRole

import javax.inject.Singleton

@CompileStatic
@Singleton
class RegisterService {

    protected final RoleService roleService
    protected final UserService userService
    protected final UserRoleService userRoleService
    PasswordEncoder passwordEncoder

    RegisterService(RoleService roleService,
                    UserService userService,
                    PasswordEncoder passwordEncoder,
                    UserRoleService userRoleService) {
        this.roleService = roleService
        this.userService = userService
        this.userRoleService = userRoleService
        this.passwordEncoder = passwordEncoder
    }

    @Transactional
    void register(String username, String rawPassword, List<String> authorities) {

        User user = userService.find username
        if (!user) {
            final String encodedPassword = passwordEncoder.encode rawPassword
            user = userService.save username, encodedPassword
        }

        if (user && authorities) {

            for (String authority : authorities) {
                Role role = roleService.find authority
                if (!role) {
                    role = roleService.save authority
                }
                UserRole userRole = userRoleService.find user, role
                if (!userRole) {
                    userRoleService.save user, role
                }
            }
        }
    }
}
