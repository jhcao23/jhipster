package technology.touchmars.web.rest.errors;

<<<<<<< HEAD
import java.util.HashMap;
import java.util.Map;

=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
/**
 * Custom, parameterized exception, which can be translated on the client side.
 * For example:
 *
 * <pre>
 * throw new CustomParameterizedException(&quot;myCustomError&quot;, &quot;hello&quot;, &quot;world&quot;);
 * </pre>
 *
 * Can be translated with:
 *
 * <pre>
<<<<<<< HEAD
 * "error.myCustomError" :  "The server says {{param0}} to {{param1}}"
=======
 * "error.myCustomError" :  "The server says {{params[0]}} to {{params[1]}}"
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
 * </pre>
 */
public class CustomParameterizedException extends RuntimeException {

    private static final long serialVersionUID = 1L;

<<<<<<< HEAD
    private static final String PARAM = "param";

    private final String message;

    private final Map<String, String> paramMap = new HashMap<>();
=======
    private final String message;
    private final String[] params;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    public CustomParameterizedException(String message, String... params) {
        super(message);
        this.message = message;
<<<<<<< HEAD
        if (params != null && params.length > 0) {
            for (int i = 0; i < params.length; i++) {
                paramMap.put(PARAM + i, params[i]);
            }
        }
    }

    public CustomParameterizedException(String message, Map<String, String> paramMap) {
        super(message);
        this.message = message;
        this.paramMap.putAll(paramMap);
    }

    public ParameterizedErrorVM getErrorVM() {
        return new ParameterizedErrorVM(message, paramMap);
    }
=======
        this.params = params;
    }

    public ParameterizedErrorVM getErrorVM() {
        return new ParameterizedErrorVM(message, params);
    }

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
}
