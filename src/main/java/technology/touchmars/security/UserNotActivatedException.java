package technology.touchmars.security;

import org.springframework.security.core.AuthenticationException;

/**
<<<<<<< HEAD
 * This exception is thrown in case of a not activated user trying to authenticate.
=======
 * This exception is throw in case of a not activated user trying to authenticate.
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
 */
public class UserNotActivatedException extends AuthenticationException {

    private static final long serialVersionUID = 1L;

    public UserNotActivatedException(String message) {
        super(message);
    }

    public UserNotActivatedException(String message, Throwable t) {
        super(message, t);
    }
}
