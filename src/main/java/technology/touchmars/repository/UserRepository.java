package technology.touchmars.repository;

import technology.touchmars.domain.User;
<<<<<<< HEAD
=======

import java.time.ZonedDateTime;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< HEAD
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;
import java.time.Instant;
=======

import java.util.List;
import java.util.Optional;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

/**
 * Spring Data JPA repository for the User entity.
 */
<<<<<<< HEAD
@Repository
=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findOneByActivationKey(String activationKey);

<<<<<<< HEAD
    List<User> findAllByActivatedIsFalseAndCreatedDateBefore(Instant dateTime);
=======
    List<User> findAllByActivatedIsFalseAndCreatedDateBefore(ZonedDateTime dateTime);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    Optional<User> findOneByResetKey(String resetKey);

    Optional<User> findOneByEmail(String email);

    Optional<User> findOneByLogin(String login);

    @EntityGraph(attributePaths = "authorities")
    User findOneWithAuthoritiesById(Long id);

    @EntityGraph(attributePaths = "authorities")
    Optional<User> findOneWithAuthoritiesByLogin(String login);

    Page<User> findAllByLoginNot(Pageable pageable, String login);
}
