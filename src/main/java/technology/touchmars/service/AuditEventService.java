package technology.touchmars.service;

import technology.touchmars.config.audit.AuditEventConverter;
import technology.touchmars.repository.PersistenceAuditEventRepository;
<<<<<<< HEAD
=======
import java.time.LocalDateTime;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import org.springframework.boot.actuate.audit.AuditEvent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

<<<<<<< HEAD
import java.time.Instant;
=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import java.util.Optional;

/**
 * Service for managing audit events.
 * <p>
 * This is the default implementation to support SpringBoot Actuator AuditEventRepository
<<<<<<< HEAD
=======
 * </p>
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
 */
@Service
@Transactional
public class AuditEventService {

    private final PersistenceAuditEventRepository persistenceAuditEventRepository;

    private final AuditEventConverter auditEventConverter;

    public AuditEventService(
        PersistenceAuditEventRepository persistenceAuditEventRepository,
        AuditEventConverter auditEventConverter) {

        this.persistenceAuditEventRepository = persistenceAuditEventRepository;
        this.auditEventConverter = auditEventConverter;
    }

    public Page<AuditEvent> findAll(Pageable pageable) {
        return persistenceAuditEventRepository.findAll(pageable)
            .map(auditEventConverter::convertToAuditEvent);
    }

<<<<<<< HEAD
    public Page<AuditEvent> findByDates(Instant fromDate, Instant toDate, Pageable pageable) {
=======
    public Page<AuditEvent> findByDates(LocalDateTime fromDate, LocalDateTime toDate, Pageable pageable) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        return persistenceAuditEventRepository.findAllByAuditEventDateBetween(fromDate, toDate, pageable)
            .map(auditEventConverter::convertToAuditEvent);
    }

    public Optional<AuditEvent> find(Long id) {
        return Optional.ofNullable(persistenceAuditEventRepository.findOne(id)).map
            (auditEventConverter::convertToAuditEvent);
    }
}
