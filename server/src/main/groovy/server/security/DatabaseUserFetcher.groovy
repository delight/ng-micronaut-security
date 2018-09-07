package server.security

import io.micronaut.security.authentication.providers.UserFetcher
import io.micronaut.security.authentication.providers.UserState
import io.reactivex.BackpressureStrategy
import io.reactivex.Flowable
import io.reactivex.FlowableOnSubscribe
import io.reactivex.schedulers.Schedulers
import org.reactivestreams.Publisher
import server.domain.User
import server.services.UserService

import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class DatabaseUserFetcher implements UserFetcher {

    @Inject UserService userService

    @Override
    Publisher<UserState> findByUsername(String username) {
        Flowable.create((FlowableOnSubscribe<UserState>) { emitter ->
            User user = userService.find(username)
            if (user) {
                emitter.onNext(user)
            }
            emitter.onComplete()
        }, BackpressureStrategy.ERROR).subscribeOn(Schedulers.io())
    }
}
