package server.security

import grails.gorm.transactions.ReadOnly
import io.micronaut.security.authentication.providers.AuthoritiesFetcher
import io.reactivex.Flowable
import io.reactivex.schedulers.Schedulers
import org.reactivestreams.Publisher
import server.services.UserRoleService

import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class DatabaseAuthoritiesFetcher implements AuthoritiesFetcher {

    @Inject UserRoleService userRoleService

    @Override
    @ReadOnly
    Publisher<List<String>> findAuthoritiesByUsername(String username) {
        Flowable.fromCallable {
            userRoleService.findAllAuthoritiesByUsername(username)
        }.subscribeOn(Schedulers.io())
    }
}
