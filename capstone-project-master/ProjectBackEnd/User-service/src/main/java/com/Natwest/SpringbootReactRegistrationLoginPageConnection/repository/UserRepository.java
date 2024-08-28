package com.Natwest.SpringbootReactRegistrationLoginPageConnection.repository;

import com.Natwest.SpringbootReactRegistrationLoginPageConnection.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User,String> {
    @Query("SELECT CASE WHEN COUNT(u) > 0 THEN true ELSE false END FROM User u WHERE u.email = :email")
    boolean existsByEmail(@Param("email") String email);

    User findByEmailAndPassword(String email, String password);

    User findByUserId(String userId);
}
