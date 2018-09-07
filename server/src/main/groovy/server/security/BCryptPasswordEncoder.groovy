package server.security

import io.micronaut.security.authentication.providers.PasswordEncoder
import org.mindrot.jbcrypt.BCrypt

import javax.inject.Singleton

@Singleton
class BCryptPasswordEncoder implements PasswordEncoder {

    private static int workload = 12

    @Override
    String encode(String rawPassword) {
        String salt = BCrypt.gensalt(workload)
        BCrypt.hashpw(rawPassword, salt)
    }

    @Override
    boolean matches(String rawPassword, String encodedPassword) {
        BCrypt.checkpw(rawPassword, encodedPassword)
    }
}
