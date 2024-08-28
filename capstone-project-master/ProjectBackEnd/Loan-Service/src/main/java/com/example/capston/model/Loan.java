package com.example.capston.model;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name="Loan_data")
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    public void setUserId(String userId) {
        this.userId = userId;
    }

    private String userId;

    private String loanType;
    private long loanAmt;
    private double loanInterest;
    private long loanTime;
    @Getter
    private double tpa;

    public void setTpa(double tpa) {
        this.tpa = tpa;
    }
// Define the many-to-one relationship with User entity


    public Loan(long id, String loanType, long loanAmt, double loanInterest, long loanTime, String userId,double tpa) {
        this.id = id;
        this.loanType = loanType;
        this.loanAmt = loanAmt;
        this.loanInterest = loanInterest;
        this.loanTime = loanTime;
        this.userId=userId;
        this.tpa=tpa;
    }

    public Loan() {
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }

    public void setLoanAmt(long loanAmt) {
        this.loanAmt = loanAmt;
    }

    public void setLoanInterest(double loanInterest) {
        this.loanInterest = loanInterest;
    }

    public void setLoanTime(long loanTime) {
        this.loanTime = loanTime;
    }
}
