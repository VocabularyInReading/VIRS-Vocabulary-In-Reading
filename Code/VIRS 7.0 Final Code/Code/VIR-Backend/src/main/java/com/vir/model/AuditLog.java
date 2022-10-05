/*
package com.vir.model;

// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.EnumType;
// import javax.persistence.Enumerated;
// import javax.persistence.Table;
>>>>>>> bf1be2a85f4fb46c3036533f85ddc28e1491ca4d

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import java.io.Serializable;
import java.util.Date;

//exception log: date, data, message, stack trace, tag (vir, can add more in the future for modules/services), exception type, method name?

//https://stackoverflow.com/questions/25415738/how-to-persist-arraylist-within-spring-entity-class
//https://duckduckgo.com/?q=hibernate+array+list+of+another+entity&t=osx&ia=qa
//https://duckduckgo.com/?q=hibernate+CollectionTable+annotations&t=osx&ia=web
//https://www.concretepage.com/hibernate/elementcollection_hibernate_annotation
//https://www.objectdb.com/api/java/jpa
//https://duckduckgo.com/?q=hibernate+enumeration+for+sql+int&t=osx&ia=qa
//https://memorynotfound.com/mapping-enum-types-hibernate-example/
//https://vladmihalcea.com/the-best-way-to-map-an-enum-type-with-jpa-and-hibernate/

//entity to store a log of things like authentication and application errors for later review.
// @Entity
// @Table(name="audit_logs")
public class AuditLog implements Serializable
{
    public enum AUDIT_CODE
    {
        //when a login request is initiated
        LOGIN(1),
        //when a user successfully logs in
        AUTHENTICATED(2),
        //when the login fails to find the user
        DOES_NOT_EXIST(3),
        //wrong password/username combo
        INVALID_CREDENTIALS(4),
        //account gets locked after x numbe of invalid attempts
        ACCOUNT_LOCKED(5),
        //account is already locked previously so can't authenticate at all
        ACCOUNT_ALREADY_LOCKED(6),
        //message for non-authentication or something outside of the auth codes
        MESSAGE(7);
        
        private final int code;
        private AUDIT_CODE(int code)
        {
            this.code = code;
        }
    }
    public enum AUDIT_TYPE
    {
        AUTHENTICATION(1),
        TRACE(2),
        INFORMATION(3),
        DEBUG(4),
        WARNING(5),
        ERROR(6),
        FATAL(7);

        private final int code;
        private AUDIT_TYPE(int code)
        {
            this.code = code;
        }
    }
    private static final long serialVersionUID = 1L;

    private Date dateTimeStamp;
    // @Enumerated(EnumType.ORDINAL)
    private AUDIT_CODE code;
    //type
    private AUDIT_TYPE type;
    //details or extra details?
    private String details;
    //if this entry is tied to a logged in user
    private Integer userId;
    //can be used for logging since emails can be changed
    private String email;
    //can be used for logging since user names can be changed
    private String userName;
    private String ipAddress;
    @Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		AuditLog that = (AuditLog) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}
}
}
*/
