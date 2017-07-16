package technology.touchmars.service.dto;

import technology.touchmars.config.Constants;

import technology.touchmars.domain.Authority;
import technology.touchmars.domain.User;

import org.hibernate.validator.constraints.Email;
<<<<<<< HEAD
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.*;
import java.time.Instant;
=======

import javax.validation.constraints.*;
import java.time.ZonedDateTime;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import java.util.Set;
import java.util.stream.Collectors;

/**
 * A DTO representing a user, with his authorities.
 */
public class UserDTO {

    private Long id;

<<<<<<< HEAD
    @NotBlank
=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    @Pattern(regexp = Constants.LOGIN_REGEX)
    @Size(min = 1, max = 100)
    private String login;

    @Size(max = 50)
    private String firstName;

    @Size(max = 50)
    private String lastName;

    @Email
    @Size(min = 5, max = 100)
    private String email;

    @Size(max = 256)
    private String imageUrl;

    private boolean activated = false;

    @Size(min = 2, max = 5)
    private String langKey;

    private String createdBy;

<<<<<<< HEAD
    private Instant createdDate;

    private String lastModifiedBy;

    private Instant lastModifiedDate;
=======
    private ZonedDateTime createdDate;

    private String lastModifiedBy;

    private ZonedDateTime lastModifiedDate;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    private Set<String> authorities;

    public UserDTO() {
<<<<<<< HEAD
        // Empty constructor needed for Jackson.
=======
        // Empty constructor needed for MapStruct.
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }

    public UserDTO(User user) {
        this(user.getId(), user.getLogin(), user.getFirstName(), user.getLastName(),
            user.getEmail(), user.getActivated(), user.getImageUrl(), user.getLangKey(),
            user.getCreatedBy(), user.getCreatedDate(), user.getLastModifiedBy(), user.getLastModifiedDate(),
            user.getAuthorities().stream().map(Authority::getName)
                .collect(Collectors.toSet()));
    }

    public UserDTO(Long id, String login, String firstName, String lastName,
        String email, boolean activated, String imageUrl, String langKey,
<<<<<<< HEAD
        String createdBy, Instant createdDate, String lastModifiedBy, Instant lastModifiedDate,
=======
        String createdBy, ZonedDateTime createdDate, String lastModifiedBy, ZonedDateTime lastModifiedDate,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        Set<String> authorities) {

        this.id = id;
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.activated = activated;
        this.imageUrl = imageUrl;
        this.langKey = langKey;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.lastModifiedBy = lastModifiedBy;
        this.lastModifiedDate = lastModifiedDate;
        this.authorities = authorities;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public boolean isActivated() {
        return activated;
    }

    public String getLangKey() {
        return langKey;
    }

    public String getCreatedBy() {
        return createdBy;
    }

<<<<<<< HEAD
    public Instant getCreatedDate() {
=======
    public ZonedDateTime getCreatedDate() {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        return createdDate;
    }

    public String getLastModifiedBy() {
        return lastModifiedBy;
    }

<<<<<<< HEAD
    public Instant getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(Instant lastModifiedDate) {
=======
    public ZonedDateTime getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(ZonedDateTime lastModifiedDate) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.lastModifiedDate = lastModifiedDate;
    }

    public Set<String> getAuthorities() {
        return authorities;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
            "login='" + login + '\'' +
            ", firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", email='" + email + '\'' +
            ", imageUrl='" + imageUrl + '\'' +
            ", activated=" + activated +
            ", langKey='" + langKey + '\'' +
            ", createdBy=" + createdBy +
            ", createdDate=" + createdDate +
            ", lastModifiedBy='" + lastModifiedBy + '\'' +
            ", lastModifiedDate=" + lastModifiedDate +
            ", authorities=" + authorities +
            "}";
    }
}
