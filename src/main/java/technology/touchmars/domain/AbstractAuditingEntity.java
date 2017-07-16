package technology.touchmars.domain;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.envers.Audited;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
<<<<<<< HEAD
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.time.Instant;
=======

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.time.ZonedDateTime;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

/**
 * Base abstract class for entities which will hold definitions for created, last modified by and created,
 * last modified by date.
 */
@MappedSuperclass
@Audited
@EntityListeners(AuditingEntityListener.class)
public abstract class AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @CreatedBy
    @Column(name = "created_by", nullable = false, length = 50, updatable = false)
    @JsonIgnore
    private String createdBy;

    @CreatedDate
    @Column(name = "created_date", nullable = false)
    @JsonIgnore
<<<<<<< HEAD
    private Instant createdDate = Instant.now();
=======
    private ZonedDateTime createdDate = ZonedDateTime.now();
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    @LastModifiedBy
    @Column(name = "last_modified_by", length = 50)
    @JsonIgnore
    private String lastModifiedBy;

    @LastModifiedDate
    @Column(name = "last_modified_date")
    @JsonIgnore
<<<<<<< HEAD
    private Instant lastModifiedDate = Instant.now();
=======
    private ZonedDateTime lastModifiedDate = ZonedDateTime.now();
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

<<<<<<< HEAD
    public Instant getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Instant createdDate) {
=======
    public ZonedDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(ZonedDateTime createdDate) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.createdDate = createdDate;
    }

    public String getLastModifiedBy() {
        return lastModifiedBy;
    }

    public void setLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
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
}
