package technology.touchmars.web.rest.vm;

import ch.qos.logback.classic.Logger;
<<<<<<< HEAD
=======
import com.fasterxml.jackson.annotation.JsonCreator;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

/**
 * View Model object for storing a Logback logger.
 */
public class LoggerVM {

    private String name;

    private String level;

    public LoggerVM(Logger logger) {
        this.name = logger.getName();
        this.level = logger.getEffectiveLevel().toString();
    }

<<<<<<< HEAD
=======
    @JsonCreator
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    public LoggerVM() {
        // Empty public constructor used by Jackson.
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    @Override
    public String toString() {
        return "LoggerVM{" +
            "name='" + name + '\'' +
            ", level='" + level + '\'' +
            '}';
    }
}
