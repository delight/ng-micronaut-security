package server.controllers

import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.security.Secured

@Controller('/dashboard')
@Secured("ROLE_USER")
class DashboardController {

    @Get
    String index() {
        "dashboard data"
    }
}
