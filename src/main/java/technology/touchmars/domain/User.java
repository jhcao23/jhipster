package technology.touchmars.domain;

import technology.touchmars.config.Constants;

import com.fasterxml.jackson.annotation.JsonIgnore;
<<<<<<< HEAD
import org.apache.commons.lang3.StringUtils;
=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import org.hibernate.annotations.BatchSize;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Locale;
<<<<<<< HEAD
import java.util.Objects;
import java.util.Set;
import java.time.Instant;
=======
import java.util.Set;
import java.time.ZonedDateTime;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

/**
 * A user.
 */
@Entity
@Table(name = "jhi_user")
<<<<<<< HEAD

=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
public class User extends AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Pattern(regexp = Constants.LOGIN_REGEX)
    @Size(min = 1, max = 100)
    @Column(length = 100, unique = true, nullable = false)
    private String login;

    @JsonIgnore
    @NotNull
    @Size(min = 60, max = 60)
    @Column(name = "password_hash",length = 60)
    private String password;

    @Size(max = 50)
    @Column(name = "first_name", length = 50)
    private String firstName;

    @Size(max = 50)
    @Column(name = "last_name", length = 50)
    private String lastName;

    @Email
<<<<<<< HEAD
    @Size(min = 5, max = 100)
=======
    @Size(max = 100)
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    @Column(length = 100, unique = true)
    private String email;

    @NotNull
    @Column(nullable = false)
    private boolean activated = false;

    @Size(min = 2, max = 5)
    @Column(name = "lang_key", length = 5)
    private String langKey;

    @Size(max = 256)
    @Column(name = "image_url", length = 256)
    private String imageUrl;

    @Size(max = 20)
    @Column(name = "activation_key", length = 20)
    @JsonIgnore
    private String activationKey;

    @Size(max = 20)
    @Column(name = "reset_key", length = 20)
<<<<<<< HEAD
    @JsonIgnore
    private String resetKey;

    @Column(name = "reset_date")
    private Instant resetDate = null;
=======
    private String resetKey;

    @Column(name = "reset_date")
    private ZonedDateTime resetDate = null;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "jhi_user_authority",
        joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "id")},
        inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "name")})
<<<<<<< HEAD

=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    @BatchSize(size = 20)
    private Set<Authority> authorities = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    //Lowercase the login before saving it in database
    public void setLogin(String login) {
<<<<<<< HEAD
        this.login = StringUtils.lowerCase(login, Locale.ENGLISH);
=======
        this.login = login.toLowerCase(Locale.ENGLISH);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public boolean getActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }

    public String getActivationKey() {
        return activationKey;
    }

    public void setActivationKey(String activationKey) {
        this.activationKey = activationKey;
    }

    public String getResetKey() {
        return resetKey;
    }

    public void setResetKey(String resetKey) {
        this.resetKey = resetKey;
    }

<<<<<<< HEAD
    public Instant getResetDate() {
       return resetDate;
    }

    public void setResetDate(Instant resetDate) {
       this.resetDate = resetDate;
    }
=======
    public ZonedDateTime getResetDate() {
       return resetDate;
    }

    public void setResetDate(ZonedDateTime resetDate) {
       this.resetDate = resetDate;
    }

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    public String getLangKey() {
        return langKey;
    }

    public void setLangKey(String langKey) {
        this.langKey = langKey;
    }

    public Set<Authority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<Authority> authorities) {
        this.authorities = authorities;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        User user = (User) o;
<<<<<<< HEAD
        return !(user.getId() == null || getId() == null) && Objects.equals(getId(), user.getId());
=======

        if (!login.equals(user.login)) {
            return false;
        }

        return true;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }

    @Override
    public int hashCode() {
<<<<<<< HEAD
        return Objects.hashCode(getId());
=======
        return login.hashCode();
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }

    @Override
    public String toString() {
        return "User{" +
            "login='" + login + '\'' +
            ", firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", email='" + email + '\'' +
            ", imageUrl='" + imageUrl + '\'' +
            ", activated='" + activated + '\'' +
            ", langKey='" + langKey + '\'' +
            ", activationKey='" + activationKey + '\'' +
            "}";
    }
}
