package technology.touchmars.web.rest.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
<<<<<<< HEAD
=======

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
/**
 * Utility class for HTTP headers creation.
 */
public final class HeaderUtil {

    private static final Logger log = LoggerFactory.getLogger(HeaderUtil.class);

    private HeaderUtil() {
    }

    public static HttpHeaders createAlert(String message, String param) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-jhipsterApp-alert", message);
        headers.add("X-jhipsterApp-params", param);
        return headers;
    }

    public static HttpHeaders createEntityCreationAlert(String entityName, String param) {
        return createAlert("A new " + entityName + " is created with identifier " + param, param);
    }

    public static HttpHeaders createEntityUpdateAlert(String entityName, String param) {
        return createAlert("A " + entityName + " is updated with identifier " + param, param);
    }

    public static HttpHeaders createEntityDeletionAlert(String entityName, String param) {
        return createAlert("A " + entityName + " is deleted with identifier " + param, param);
    }

    public static HttpHeaders createFailureAlert(String entityName, String errorKey, String defaultMessage) {
<<<<<<< HEAD
        log.error("Entity processing failed, {}", defaultMessage);
=======
        log.error("Entity creation failed, {}", defaultMessage);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-jhipsterApp-error", defaultMessage);
        headers.add("X-jhipsterApp-params", entityName);
        return headers;
    }
}
