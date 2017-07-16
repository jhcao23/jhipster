package technology.touchmars.web.rest.vm;

import technology.touchmars.service.dto.UserDTO;
import javax.validation.constraints.Size;

<<<<<<< HEAD
import java.time.Instant;
=======
import java.time.ZonedDateTime;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import java.util.Set;

/**
 * View Model extending the UserDTO, which is meant to be used in the user management UI.
 */
public class ManagedUserVM extends UserDTO {

    public static final int PASSWORD_MIN_LENGTH = 4;

    public static final int PASSWORD_MAX_LENGTH = 100;

    @Size(min = PASSWORD_MIN_LENGTH, max = PASSWORD_MAX_LENGTH)
    private String password;

    public ManagedUserVM() {
        // Empty constructor needed for Jackson.
    }

    public ManagedUserVM(Long id, String login, String password, String firstName, String lastName,
                         String email, boolean activated, String imageUrl, String langKey,
<<<<<<< HEAD
                         String createdBy, Instant createdDate, String lastModifiedBy, Instant lastModifiedDate,
                        Set<String> authorities) {

        super(id, login, firstName, lastName, email, activated, imageUrl, langKey,
=======
                         String createdBy, ZonedDateTime createdDate, String lastModifiedBy, ZonedDateTime lastModifiedDate,
                        Set<String> authorities) {

        super(id, login, firstName, lastName, email, activated,  imageUrl, langKey,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            createdBy, createdDate, lastModifiedBy, lastModifiedDate,  authorities);

        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String toString() {
        return "ManagedUserVM{" +
            "} " + super.toString();
    }
}
