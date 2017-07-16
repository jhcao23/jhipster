package technology.touchmars.repository;

import technology.touchmars.config.Constants;
import technology.touchmars.config.audit.AuditEventConverter;
import technology.touchmars.domain.PersistentAuditEvent;

import org.springframework.boot.actuate.audit.AuditEvent;
import org.springframework.boot.actuate.audit.AuditEventRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

<<<<<<< HEAD
=======
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import java.util.Date;
import java.util.List;

/**
 * An implementation of Spring Boot's AuditEventRepository.
 */
@Repository
public class CustomAuditEventRepository implements AuditEventRepository {

    private static final String AUTHORIZATION_FAILURE = "AUTHORIZATION_FAILURE";

    private final PersistenceAuditEventRepository persistenceAuditEventRepository;

    private final AuditEventConverter auditEventConverter;

    public CustomAuditEventRepository(PersistenceAuditEventRepository persistenceAuditEventRepository,
            AuditEventConverter auditEventConverter) {

        this.persistenceAuditEventRepository = persistenceAuditEventRepository;
        this.auditEventConverter = auditEventConverter;
    }

    @Override
    public List<AuditEvent> find(Date after) {
        Iterable<PersistentAuditEvent> persistentAuditEvents =
<<<<<<< HEAD
            persistenceAuditEventRepository.findByAuditEventDateAfter(after.toInstant());
=======
            persistenceAuditEventRepository.findByAuditEventDateAfter(LocalDateTime.from(after.toInstant()));
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        return auditEventConverter.convertToAuditEvent(persistentAuditEvents);
    }

    @Override
    public List<AuditEvent> find(String principal, Date after) {
        Iterable<PersistentAuditEvent> persistentAuditEvents;
        if (principal == null && after == null) {
            persistentAuditEvents = persistenceAuditEventRepository.findAll();
        } else if (after == null) {
            persistentAuditEvents = persistenceAuditEventRepository.findByPrincipal(principal);
        } else {
            persistentAuditEvents =
<<<<<<< HEAD
                persistenceAuditEventRepository.findByPrincipalAndAuditEventDateAfter(principal, after.toInstant());
=======
                persistenceAuditEventRepository.findByPrincipalAndAuditEventDateAfter(principal, LocalDateTime.from(after.toInstant()));
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        }
        return auditEventConverter.convertToAuditEvent(persistentAuditEvents);
    }

    @Override
    public List<AuditEvent> find(String principal, Date after, String type) {
        Iterable<PersistentAuditEvent> persistentAuditEvents =
<<<<<<< HEAD
            persistenceAuditEventRepository.findByPrincipalAndAuditEventDateAfterAndAuditEventType(principal, after.toInstant(), type);
=======
            persistenceAuditEventRepository.findByPrincipalAndAuditEventDateAfterAndAuditEventType(principal, LocalDateTime.from(after.toInstant()), type);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        return auditEventConverter.convertToAuditEvent(persistentAuditEvents);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void add(AuditEvent event) {
        if (!AUTHORIZATION_FAILURE.equals(event.getType()) &&
            !Constants.ANONYMOUS_USER.equals(event.getPrincipal())) {

            PersistentAuditEvent persistentAuditEvent = new PersistentAuditEvent();
            persistentAuditEvent.setPrincipal(event.getPrincipal());
            persistentAuditEvent.setAuditEventType(event.getType());
<<<<<<< HEAD
            persistentAuditEvent.setAuditEventDate(event.getTimestamp().toInstant());
=======
            Instant instant = Instant.ofEpochMilli(event.getTimestamp().getTime());
            persistentAuditEvent.setAuditEventDate(LocalDateTime.ofInstant(instant, ZoneId.systemDefault()));
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            persistentAuditEvent.setData(auditEventConverter.convertDataToStrings(event.getData()));
            persistenceAuditEventRepository.save(persistentAuditEvent);
        }
    }
}
