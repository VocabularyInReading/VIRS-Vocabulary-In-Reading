package com.vir.repository;

import com.vir.model.Recovery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;


/**
 * Created by ups on 11/10/18.
 */
public interface RecoveryRepository extends JpaRepository<Recovery, Long> {

    public Recovery findByToken(@Param("token") String token);

}
