package com.it342g4.chan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.it342g4.chan.entity.UserEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    
    // Find by username
    Optional<UserEntity> findByUsername(String username);
    
    // Find by email
    Optional<UserEntity> findByEmail(String email);
    
    // Check if username exists
    boolean existsByUsername(String username);
    
    // Check if email exists
    boolean existsByEmail(String email);
    
    // Custom query with JPQL for searching by username
    @Query("SELECT u FROM UserEntity u WHERE u.username LIKE CONCAT('%',:name,'%')")
    List<UserEntity> findByUsernameContaining(@Param("name") String name);

}