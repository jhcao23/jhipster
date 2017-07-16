package technology.touchmars.web.rest.errors;

import java.io.Serializable;
<<<<<<< HEAD
import java.util.Map;
=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

/**
 * View Model for sending a parameterized error message.
 */
public class ParameterizedErrorVM implements Serializable {

    private static final long serialVersionUID = 1L;
<<<<<<< HEAD

    private final String message;
    private final Map<String, String> paramMap;

    public ParameterizedErrorVM(String message, Map<String, String> paramMap) {
        this.message = message;
        this.paramMap = paramMap;
=======
    private final String message;
    private final String[] params;

    public ParameterizedErrorVM(String message, String... params) {
        this.message = message;
        this.params = params;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }

    public String getMessage() {
        return message;
    }

<<<<<<< HEAD
    public Map<String, String> getParams() {
        return paramMap;
=======
    public String[] getParams() {
        return params;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }

}
