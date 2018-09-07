package server.controllers

import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.security.Secured

@Controller('/admin')
@Secured('ROLE_ADMIN')
class AdminController {

    @Get
    String index() {
        "admin data"
    }
}
