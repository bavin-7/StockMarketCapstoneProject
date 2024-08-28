package com.example.capston.controller;

import com.example.capston.loanService.LoanService;
import com.example.capston.model.Loan;
import com.example.capston.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.*;

import java.util.List;

@RestController
@RequestMapping("/loans")
//@CrossOrigin(origins="*")
public class LoanController {
    @Autowired
    private LoanRepository loanRepository;

//    @Autowired
//    private Loan loan;
    @Autowired
    private LoanService loanService;
//    @CrossOrigin(origins="*")
    @PostMapping("/{id}")
    Loan newLoan(@RequestBody Loan newLoan, @PathVariable("id") String userId)
    {
        newLoan.setUserId(userId);
        return loanRepository.save(newLoan);
    }
    @GetMapping("/{id}")
    public List<Loan> getUserLoans(@PathVariable("id") String userId) {
        return loanService.getLoansByUserId(userId);
    }

    @PutMapping("/{id}")
    Optional<Loan> newTpa(@RequestBody Loan newLoan,@PathVariable("id") Long id)
    {
        return loanRepository.findById(id).map(loan->{
            loan.setTpa(newLoan.getTpa());
            return loanRepository.save(loan);
        });

    }

}
