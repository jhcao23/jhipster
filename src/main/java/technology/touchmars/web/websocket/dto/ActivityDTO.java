package technology.touchmars.web.websocket.dto;

<<<<<<< HEAD
import java.time.Instant;

=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
/**
 * DTO for storing a user's activity.
 */
public class ActivityDTO {

    private String sessionId;

    private String userLogin;

    private String ipAddress;

    private String page;

<<<<<<< HEAD
    private Instant time;
=======
    private String time;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }

<<<<<<< HEAD
    public Instant getTime() {
        return time;
    }

    public void setTime(Instant time) {
=======
    public String getTime() {
        return time;
    }

    public void setTime(String time) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.time = time;
    }

    @Override
    public String toString() {
        return "ActivityDTO{" +
            "sessionId='" + sessionId + '\'' +
            ", userLogin='" + userLogin + '\'' +
            ", ipAddress='" + ipAddress + '\'' +
            ", page='" + page + '\'' +
            ", time='" + time + '\'' +
            '}';
    }
}
