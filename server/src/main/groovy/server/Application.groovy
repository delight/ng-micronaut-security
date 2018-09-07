package server;

import io.micronaut.runtime.Micronaut
import io.micronaut.runtime.event.annotation.EventListener
import io.micronaut.runtime.server.event.ServerStartupEvent
import io.micronaut.scheduling.annotation.Async
import server.services.RegisterService

import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class Application {

    @Inject RegisterService registerService

    static void main(String[] args) {
        Micronaut.run(Application)
    }

    @EventListener
    @Async
    void onStartup(ServerStartupEvent event) {
        registerService.register 'admin', 'password', ['ROLE_ADMIN', 'ROLE_USER']
        registerService.register 'user', 'password', ['ROLE_USER']
    }
}