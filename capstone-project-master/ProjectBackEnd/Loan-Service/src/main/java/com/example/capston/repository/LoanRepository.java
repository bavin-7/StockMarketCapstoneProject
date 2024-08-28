package com.example.capston.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.capston.model.Loan;
import java.util.List;

public interface LoanRepository extends JpaRepository<Loan,Long> {
   public List<Loan> findByUserId(String userId);
}
