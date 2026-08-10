# -*- coding: utf-8 -*-
"""
Script to inject comprehensive 'Types of Problems Commonly Solved' into all 12 modules.
"""

import os, re

# Define the additions for each module

MOD01_ADDITION = """
---

## 1.3 Problem Types Commonly Solved in Reliability Foundations & Descriptive Statistics

### Problem Type 1.1: Bathtub Curve Failure Phase & Reliability Strategy Identification
- **Engineering / Exam Scenario:** A quality engineer receives failure data or hazard rate observations over time for a batch of industrial components and must identify which phase of the Bathtub Curve the product is currently operating in, determine the root cause category, and propose appropriate engineering remedies.
- **Trigger Keywords:** *"Infant mortality"*, *"burn-in testing"*, *"useful life"*, *"constant failure rate"*, *"wear-out"*, *"preventive maintenance"*, *"hazard rate trend"*.
- **Solution Strategy:**
  1. **Examine Hazard Trend:**
     - If $\\frac{d h(t)}{dt} < 0$ (Decreasing Failure Rate - DFR) $\\implies$ **Phase I (Infant Mortality)** caused by manufacturing defects/material flaws. *Remedy:* Burn-in screening and strict supplier QA.
     - If $\\frac{d h(t)}{dt} = 0$ (Constant Failure Rate - CFR, $h(t) = \\lambda$) $\\implies$ **Phase II (Useful Life)** caused by random chance environmental overstress shocks. *Governing Model:* Exponential distribution.
     - If $\\frac{d h(t)}{dt} > 0$ (Increasing Failure Rate - IFR) $\\implies$ **Phase III (Wear-out)** caused by mechanical fatigue, corrosion, or insulation aging. *Remedy:* Scheduled replacement and preventive maintenance.

---

### Problem Type 1.2: System Availability & Inherent Maintainability Calculations
- **Engineering / Exam Scenario:** Given Mean Time To Failure (MTTF) and Mean Time To Repair (MTTR) under steady-state operating conditions, compute inherent system availability and determine the required reduction in MTTR to achieve target "nines" of availability (e.g., 99.9% uptime).
- **Trigger Keywords:** *"Operational availability"*, *"MTTF"*, *"MTTR"*, *"uptime ratio"*, *"steady-state availability"*.
- **Core Formula:**
  $$A = \\frac{\\text{MTTF}}{\\text{MTTF} + \\text{MTTR}} = \\frac{\\mu}{\\mu + \\tau}$$
- **Solution Strategy:**
  1. Express both MTTF and MTTR in identical time units (hours, days).
  2. Substitute into $A = \\frac{\\text{MTTF}}{\\text{MTTF} + \\text{MTTR}}$.
  3. To solve for required $\\text{MTTR}^*$ given target availability $A^*$: $\\text{MTTR}^* = \\text{MTTF} \\left( \\frac{1 - A^*}{A^*} \\right)$.

---

### Problem Type 1.3: Five-Number Summary & Outlier Detection in Reliability Telemetry
- **Engineering / Exam Scenario:** Given a dataset of component operating temperatures or vibration amplitudes, determine the Five-Number Summary, calculate the Interquartile Range (IQR), and identify any extreme outliers using Tukey's 1.5×IQR criterion.
- **Trigger Keywords:** *"Quartiles"*, *"IQR"*, *"outlier fences"*, *"box-and-whisker plot"*, *"five-number summary"*.
- **Core Formulas:**
  $$\\text{IQR} = Q_3 - Q_1$$
  $$\\text{Lower Inner Fence} = Q_1 - 1.5 \\times \\text{IQR}, \\quad \\text{Upper Inner Fence} = Q_3 + 1.5 \\times \\text{IQR}$$
- **Solution Strategy:**
  1. Sort data in ascending order: $x_{(1)} \\le x_{(2)} \\le \\dots \\le x_{(n)}$.
  2. Compute Median ($Q_2$), first quartile ($Q_1$), and third quartile ($Q_3$).
  3. Compute $\\text{IQR} = Q_3 - Q_1$.
  4. Flag any data point $x_i < Q_1 - 1.5\\text{IQR}$ or $x_i > Q_3 + 1.5\\text{IQR}$ as an outlier.
"""

MOD02_ADDITION = """
---

## 2.5 Problem Types Commonly Solved in Probability & System Reliability

### Problem Type 2.1: Series System Reliability Under Independent Components
- **Engineering / Exam Scenario:** A mission-critical device consists of $n$ sub-assemblies connected such that the failure of any single part halts the entire system (weakest-link model). Given individual component reliabilities $R_1, R_2, \\dots, R_n$, find overall system reliability $R_{\\text{series}}$.
- **Trigger Keywords:** *"Series configuration"*, *"weakest link"*, *"no redundancy"*, *"all components must function"*.
- **Core Formula:**
  $$R_{\\text{series}} = \\prod_{i=1}^n R_i = R_1 \\times R_2 \\times \\dots \\times R_n$$
- **Key Insight:** $R_{\\text{series}} \\le \\min(R_1, R_2, \\dots, R_n)$. The system is always less reliable than its least reliable component.

---

### Problem Type 2.2: Active Parallel Redundant System Reliability
- **Engineering / Exam Scenario:** To improve mission reliability, $n$ identical or non-identical components are connected in parallel such that the system functions as long as at least one component survives.
- **Trigger Keywords:** *"Parallel redundancy"*, *"backup units"*, *"at least one unit operates"*, *"unreliability multiplication"*.
- **Core Formula:**
  $$Q_{\\text{parallel}} = \\prod_{i=1}^n Q_i = \\prod_{i=1}^n (1 - R_i) \\implies R_{\\text{parallel}} = 1 - \\prod_{i=1}^n (1 - R_i)$$
- **For $n$ identical components ($R_i = R$):** $R_{\\text{parallel}} = 1 - (1 - R)^n$.
- **To find required number of redundant units $n$ for target reliability $R^*$:**
  $$1 - (1 - R)^n \\ge R^* \\implies (1 - R)^n \\le 1 - R^* \\implies n \\ge \\frac{\\ln(1 - R^*)}{\\ln(1 - R)}$$

---

### Problem Type 2.3: $k$-out-of-$n$ Active Redundancy Systems
- **Engineering / Exam Scenario:** A multi-engine aircraft with $n$ identical engines requires at least $k$ engines operating normally to maintain altitude, or a voting logic controller with $n$ sensors requires a majority ($k = \\lceil (n+1)/2 \\rceil$) of sensors to agree.
- **Trigger Keywords:** *"k-out-of-n:G system"*, *"at least k operational"*, *"tri-engine aircraft"*, *"majority voting gate"*.
- **Core Formula (for identical units with reliability $R$):**
  $$R_{k/n} = \\sum_{i=k}^n \\binom{n}{i} R^i (1 - R)^{n-i}$$
- **Solution Strategy:**
  1. Identify $n$ (total units) and $k$ (minimum surviving units).
  2. Compute binomial probabilities for each $i = k, k+1, \\dots, n$.
  3. Sum the probabilities to obtain total system survival probability.

---

### Problem Type 2.4: Multi-Source Defect Diagnosis via Bayes' Theorem
- **Engineering / Exam Scenario:** Defective items are produced across $k$ different manufacturing plants or production shifts with known market shares $P(B_i)$ and known defect rates $P(A \\mid B_i)$. Given that a randomly sampled component is defective, determine the posterior probability that it originated from Plant $j$.
- **Trigger Keywords:** *"Bayes' rule"*, *"posterior probability"*, *"given that it is defective"*, *"source attribution"*, *"false positive rate"*.
- **Core Formula:**
  $$P(B_j \\mid A) = \\frac{P(A \\mid B_j) P(B_j)}{\\sum_{i=1}^k P(A \\mid B_i) P(B_i)}$$
"""

MOD03_ADDITION = """
---

## 3.6 Problem Types Commonly Solved in Discrete Probability Distributions

### Problem Type 3.1: Quality Control Batch Sampling (Binomial Distribution)
- **Engineering / Exam Scenario:** A lot contains items produced by a stable manufacturing process with a known constant defect probability $p$. A random sample of $n$ items is inspected with replacement. Find the probability of observing exactly $k$, at most $k$, or at least 1 defective unit.
- **Trigger Keywords:** *"Independent trials"*, *"constant probability p"*, *"fixed sample size n"*, *"sampling with replacement"*, *"at most k defectives"*.
- **Core Formulas:**
  $$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n-k}, \\quad P(X \\ge 1) = 1 - P(X = 0) = 1 - (1 - p)^n$$
- **Solution Strategy:**
  1. Check Bernoulli trial assumptions: $n$ fixed, 2 outcomes, constant $p$, independence.
  2. For "at least 1 defective", use the complement rule $1 - (1-p)^n$.

---

### Problem Type 3.2: Rare Event Failures & Flaw Density (Poisson Distribution)
- **Engineering / Exam Scenario:** Modeling the number of particle defects per square meter of silicon wafer, solder bridge flaws per printed circuit board, or cosmic-ray soft errors per hour in memory chips, where events occur randomly and independently in continuous space/time at an average rate $\\lambda$.
- **Trigger Keywords:** *"Rare defects"*, *"Poisson process"*, *"average rate per unit area/time"*, *"Poisson approximation to Binomial ($n \\ge 100, p \\le 0.05, \\lambda = np$)"*.
- **Core Formula:**
  $$P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}, \\quad k = 0, 1, 2, \\dots$$
- **Zero-Failure Probability:** $P(X = 0) = e^{-\\lambda}$.

---

### Problem Type 3.3: Life Testing Until First Failure (Geometric Distribution)
- **Engineering / Exam Scenario:** Components undergo repeated stress cycles or sequential testing. What is the probability that the first failure occurs on the $k$-th test? What is the probability that the component survives past $k$ cycles?
- **Trigger Keywords:** *"Number of trials until first failure"*, *"memoryless property"*, *"survival past k cycles"*.
- **Core Formulas:**
  $$P(X = k) = (1 - p)^{k-1} p, \\quad P(X > k) = (1 - p)^k, \\quad E[X] = \\frac{1}{p}$$

---

### Problem Type 3.4: Acceptance Sampling Without Replacement (Hypergeometric Distribution)
- **Engineering / Exam Scenario:** A finite batch of size $N$ contains exactly $K$ defective items. An inspector draws a sample of $n$ items *without replacement*. Calculate the exact probability of finding $k$ defectives.
- **Trigger Keywords:** *"Finite population N"*, *"sampling without replacement"*, *"lot acceptance testing"*.
- **Core Formula:**
  $$P(X = k) = \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}}$$
"""

MOD04_ADDITION = """
---

## 4.6 Problem Types Commonly Solved in Continuous Distributions & Hazard Modeling

### Problem Type 4.1: Constant Failure Rate Component Analysis (Exponential Distribution)
- **Engineering / Exam Scenario:** Electronic components operate in Phase II of the Bathtub curve with constant failure rate $\\lambda$ (or known MTTF $= 1/\\lambda$). Calculate mission reliability $R(t)$ for duration $t$, find the failure probability in interval $[t_1, t_2]$, or determine the design mission time $t^*$ for a target reliability $R^*$.
- **Trigger Keywords:** *"Constant failure rate $\\lambda$"*, *"MTTF $= 1/\\lambda$"*, *"memoryless property"*, *"exponential reliability"*.
- **Core Formulas:**
  $$R(t) = e^{-\\lambda t}, \\quad F(t) = 1 - e^{-\\lambda t}, \\quad t^* = -\\frac{\\ln(R^*)}{\\lambda} = -\\text{MTTF} \\ln(R^*)$$
  $$P(t_1 \\le T \\le t_2) = e^{-\\lambda t_1} - e^{-\\lambda t_2}$$

---

### Problem Type 4.2: Mechanical Tolerance & Clearance Interference (Normal Distribution)
- **Engineering / Exam Scenario:** A mechanical assembly consists of a shaft with diameter $X_1 \\sim N(\\mu_1, \\sigma_1^2)$ inserted into a bearing hole with diameter $X_2 \\sim N(\\mu_2, \\sigma_2^2)$. Determine the probability of mechanical interference (clearance $C = X_2 - X_1 < 0$).
- **Trigger Keywords:** *"Shaft and bearing clearance"*, *"interference fit"*, *"linear combination of normal variables"*, *"tolerance stack-up"*.
- **Core Formulas:**
  $$\\text{Clearance } C = X_2 - X_1 \\implies C \\sim N\\left(\\mu_C = \\mu_2 - \\mu_1, \\; \\sigma_C^2 = \\sigma_1^2 + \\sigma_2^2\\right)$$
  $$Z = \\frac{0 - \\mu_C}{\\sigma_C} = \\frac{-(\\mu_2 - \\mu_1)}{\\sqrt{\\sigma_1^2 + \\sigma_2^2}} \\implies P(C < 0) = \\Phi(Z)$$

---

### Problem Type 4.3: Determining Normal Distribution Parameters ($\\mu, \\sigma$) from Two Percentiles
- **Engineering / Exam Scenario:** A manufacturer specifies that $5\\%$ of light bulbs burn out before $800$ hours and $10\\%$ last longer than $1200$ hours. Determine the population mean life $\\mu$ and standard deviation $\\sigma$.
- **Trigger Keywords:** *"Percentile specifications"*, *"find mean and standard deviation"*, *"normal inverse CDF"*.
- **Solution Strategy:**
  1. Translate specifications to $Z$-scores: $P(X < x_1) = p_1 \\implies \\frac{x_1 - \\mu}{\\sigma} = Z_{p_1}$, and $P(X < x_2) = 1 - p_2 \\implies \\frac{x_2 - \\mu}{\\sigma} = Z_{1-p_2}$.
  2. Set up a system of 2 linear equations in $\\mu$ and $\\sigma$:
     $$x_1 = \\mu + Z_{p_1} \\sigma, \\quad x_2 = \\mu + Z_{1-p_2} \\sigma$$
  3. Subtract to find $\\sigma = \\frac{x_2 - x_1}{Z_{1-p_2} - Z_{p_1}}$, then solve for $\\mu$.

---

### Problem Type 4.4: Aging & Wear-Out Modeling via Weibull Distribution
- **Engineering / Exam Scenario:** Given Weibull parameters $\\beta$ (shape), $\\theta$ (scale/characteristic life), and $\\gamma$ (location/guarantee time), compute component reliability at age $t$, evaluate the hazard rate trend, or linearize empirical failure data on Weibull probability paper to estimate $\\beta$ and $\\theta$.
- **Trigger Keywords:** *"Weibull distribution"*, *"shape parameter $\\beta$"*, *"characteristic life $\\theta$"*, *"infant vs wear-out aging"*.
- **Core Formulas:**
  $$R(t) = \\exp\\left[ -\\left(\\frac{t - \\gamma}{\\theta}\\right)^\\beta \\right], \\quad h(t) = \\frac{\\beta}{\\theta} \\left(\\frac{t - \\gamma}{\\theta}\\right)^{\\beta - 1}$$
  $$\\ln\\left[ \\ln\\left(\\frac{1}{R(t)}\\right) \\right] = \\beta \\ln(t) - \\beta \\ln(\\theta) \\quad (\\text{Linearized: } Y = m X + c)$$
"""

MOD05_ADDITION = """
---

## 5.5 Problem Types Commonly Solved in Sampling Distributions & Central Limit Theorem

### Problem Type 5.1: Sample Mean Probabilities via Central Limit Theorem (CLT)
- **Engineering / Exam Scenario:** An assembly line produces capacitors with unknown population distribution having mean $\\mu$ and standard deviation $\\sigma$. A quality engineer inspects a batch of $n \\ge 30$ units. What is the probability that the sample average $\\bar{X}$ falls within a specified interval or exceeds a threshold?
- **Trigger Keywords:** *"Sample mean $\\bar{X}$"*, *"sample size $n \\ge 30$"*, *"non-normal population"*, *"standard error $\\sigma/\\sqrt{n}$"*.
- **Core Formula:**
  $$Z = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\sim N(0, 1) \\implies P(\\bar{X} \\le a) = \\Phi\\left( \\frac{a - \\mu}{\\sigma / \\sqrt{n}} \\right)$$

---

### Problem Type 5.2: Sample Variance & Chi-Square Distribution
- **Engineering / Exam Scenario:** Given a sample of size $n$ drawn from a normal population $N(\\mu, \\sigma^2)$, determine the probability that the sample variance $S^2$ exceeds a critical quality threshold.
- **Trigger Keywords:** *"Sample variance $S^2$"*, *"Chi-Square distribution"*, *"degrees of freedom $\\nu = n-1$"*.
- **Core Formula:**
  $$\\chi^2 = \\frac{(n - 1) S^2}{\\sigma^2} \\sim \\chi^2(n - 1) \\implies P(S^2 > c) = P\\left( \\chi^2(n-1) > \\frac{(n-1)c}{\\sigma^2} \\right)$$

---

### Problem Type 5.3: Comparing Two Independent Variances via $F$-Distribution
- **Engineering / Exam Scenario:** Comparing process variability between two production machines (Machine 1: $n_1, S_1^2$; Machine 2: $n_2, S_2^2$). Find the probability that the sample variance ratio exceeds a specified value under $H_0: \\sigma_1^2 = \\sigma_2^2$.
- **Trigger Keywords:** *"Ratio of sample variances"*, *"F-distribution"*, *"degrees of freedom $(\\nu_1 = n_1-1, \\nu_2 = n_2-1)$"*.
- **Core Formula:**
  $$F = \\frac{S_1^2 / \\sigma_1^2}{S_2^2 / \\sigma_2^2} = \\frac{S_1^2}{S_2^2} \\sim F(n_1 - 1, \\; n_2 - 1)$$
"""

MOD06_ADDITION = """
---

## 6.7 Problem Types Commonly Solved in Estimation & Confidence Intervals

### Problem Type 6.1: Confidence Interval for Population Mean $\\mu$
- **Case A: Known $\\sigma$ or Large Sample ($n \\ge 30$):**
  $$\\bar{x} \\pm Z_{\\alpha/2} \\left( \\frac{\\sigma}{\\sqrt{n}} \\right)$$
- **Case B: Unknown $\\sigma$, Small Sample ($n < 30$, Normal Population):**
  $$\\bar{x} \\pm t_{\\alpha/2, \\, n-1} \\left( \\frac{s}{\\sqrt{n}} \\right)$$
- **Required Sample Size for Margin of Error $E$:**
  $$n = \\left( \\frac{Z_{\\alpha/2} \\cdot \\sigma}{E} \\right)^2$$

---

### Problem Type 6.2: Confidence Interval for Population Variance $\\sigma^2$
- **Core Formula ($100(1-\\alpha)\\%$ CI):**
  $$\\left[ \\frac{(n - 1) s^2}{\\chi^2_{\\alpha/2, \\, n-1}}, \\; \\frac{(n - 1) s^2}{\\chi^2_{1 - \\alpha/2, \\, n-1}} \\right]$$
- **Common Pitfall:** The Chi-Square distribution is strictly non-symmetric! Do NOT subtract a single margin of error from $s^2$; use the two distinct critical values $\\chi^2_{\\alpha/2}$ and $\\chi^2_{1-\\alpha/2}$.

---

### Problem Type 6.3: Confidence Interval for Population Proportion $p$
- **Core Formula (Large Sample Wald Interval):**
  $$\\hat{p} \\pm Z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}, \\quad \\text{where } \\hat{p} = \\frac{x}{n}$$
- **Required Sample Size for Margin of Error $E$ (Conservative $p=0.5$):**
  $$n = \\frac{Z_{\\alpha/2}^2 \\cdot (0.25)}{E^2}$$
"""

MOD07_ADDITION = """
---

## 7.6 Problem Types Commonly Solved in Hypothesis Testing

### Problem Type 7.1: One-Sample $t$-Test on Process Mean
- **Engineering / Exam Scenario:** Testing whether a new manufacturing process meets the nominal mean lifespan specification $\\mu_0$ based on a small sample of $n < 30$ prototype test results.
- **Hypotheses:** $H_0: \\mu = \\mu_0$ vs. $H_1: \\mu > \\mu_0$ (upper-tailed), $H_1: \\mu < \\mu_0$ (lower-tailed), or $H_1: \\mu \\neq \\mu_0$ (two-tailed).
- **Test Statistic:** $t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}} \\sim t(n - 1)$.
- **Decision Rule:** Reject $H_0$ if $|t| \\ge t_{\\alpha/2, n-1}$ (two-tailed) or $t \\ge t_{\\alpha, n-1}$ (upper-tailed).

---

### Problem Type 7.2: Pearson's Chi-Square Goodness-of-Fit Test
- **Engineering / Exam Scenario:** Verify whether observed failure frequencies across $k$ time intervals follow a theoretical probability distribution (e.g., Poisson or Uniform).
- **Test Statistic:**
  $$\\chi^2 = \\sum_{i=1}^k \\frac{(O_i - E_i)^2}{E_i} \\sim \\chi^2(k - 1 - p)$$
  where $O_i$ are observed counts, $E_i = n P_i$ are expected counts under $H_0$, and $p$ is the number of estimated parameters.
- **Rule of Thumb:** Combine adjacent bins if $E_i < 5$.

---

### Problem Type 7.3: Chi-Square Test of Independence ($r \\times c$ Contingency Tables)
- **Engineering / Exam Scenario:** Determine whether component failure mode (e.g., Electrical vs. Mechanical vs. Thermal) is statistically independent of the manufacturing production shift (Shift A vs. Shift B vs. Shift C).
- **Expected Frequencies:** $E_{ij} = \\frac{R_i \\times C_j}{N}$ (Row Total $\\times$ Column Total / Grand Total).
- **Test Statistic:** $\\chi^2 = \\sum_{i=1}^r \\sum_{j=1}^c \\frac{(O_{ij} - E_{ij})^2}{E_{ij}} \\sim \\chi^2((r - 1)(c - 1))$.
- **Decision Rule:** Reject $H_0$ (Independence) if $\\chi^2 \\ge \\chi^2_{\\alpha, (r-1)(c-1)}$.
"""

MOD08_ADDITION = """
---

## 8.5 Problem Types Commonly Solved in Analysis of Variance (ANOVA)

### Problem Type 8.1: One-Way ANOVA Table Construction & Omnibus $F$-Test
- **Engineering / Exam Scenario:** Testing whether $k \\ge 3$ different supplier materials or machine settings result in identical mean tensile strength.
- **Hypotheses:** $H_0: \\mu_1 = \\mu_2 = \\dots = \\mu_k$ vs. $H_1:$ At least one mean differs.
- **Calculations:**
  $$SSB = \\sum_{i=1}^k n_i (\\bar{x}_{i\\cdot} - \\bar{x}_{\\cdot\\cdot})^2, \\quad SSW = \\sum_{i=1}^k (n_i - 1) s_i^2, \\quad SST = SSB + SSW$$
  $$MSB = \\frac{SSB}{k - 1}, \\quad MSE = \\frac{SSW}{N - k}, \\quad F = \\frac{MSB}{MSE} \\sim F(k-1, N-k)$$
- **Decision:** Reject $H_0$ if $F \\ge F_{\\alpha, k-1, N-k}$.

---

### Problem Type 8.2: Post-Hoc Pairwise Comparisons via Tukey's HSD Test
- **Engineering / Exam Scenario:** After an ANOVA $F$-test rejects $H_0$, determine exactly which specific pairs of group means $(\\mu_i, \\mu_j)$ differ significantly while maintaining overall Family-Wise Error Rate $\\alpha$.
- **Tukey's Honest Significant Difference ($HSD$):**
  $$HSD = q_{\\alpha, \\, k, \\, N-k} \\sqrt{\\frac{MSE}{n}}$$
  where $q$ is the Studentized Range critical value.
- **Decision Rule:** Any pair with $|\\bar{x}_i - \\bar{x}_j| \\ge HSD$ is declared statistically significantly different.
"""

MOD09_ADDITION = """
---

## 9.6 Problem Types Commonly Solved in Correlation & Linear Regression

### Problem Type 9.1: Fitting OLS Regression & Assessing Model Quality ($R^2, F$)
- **Engineering / Exam Scenario:** Predicting degradation rate $Y$ from operating temperature $X$.
- **Slope & Intercept:**
  $$\\hat{\\beta}_1 = \\frac{S_{xy}}{S_{xx}} = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}, \\quad \\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$$
- **Coefficient of Determination:** $R^2 = \\frac{SSR}{SST} = 1 - \\frac{SSE}{SST} = r^2$.
- **ANOVA for Regression:** $F = \\frac{MSR}{MSE} = \\frac{SSR / 1}{SSE / (n - 2)} \\sim F(1, n-2)$.

---

### Problem Type 9.2: Confidence Interval for Mean Response vs. Prediction Interval for New Unit
- **Confidence Interval for Mean Response $E[Y \\mid X_0]$:**
  $$\\hat{y}_0 \\pm t_{\\alpha/2, n-2} s_e \\sqrt{\\frac{1}{n} + \\frac{(X_0 - \\bar{x})^2}{S_{xx}}}$$
- **Prediction Interval for an Individual New Observation $Y_0$:**
  $$\\hat{y}_0 \\pm t_{\\alpha/2, n-2} s_e \\sqrt{1 + \\frac{1}{n} + \\frac{(X_0 - \\bar{x})^2}{S_{xx}}}$$
- **Key Distinction:** The Prediction Interval is always strictly wider than the Confidence Interval because it accounts for both parameter estimation uncertainty AND individual unit random error $\\epsilon$.
"""

MOD10_ADDITION = """
---

## 10.4 Problem Types Commonly Solved in Time-Series & AR(1) Degradation Modeling

### Problem Type 10.1: AR(1) Stationarity, Unconditional Moments & Yule-Walker
- **Engineering / Exam Scenario:** Sensor vibration time-series $X_t = c + \\phi_1 X_{t-1} + a_t$ with $a_t \\sim WN(0, \\sigma^2)$.
- **Stationarity Check:** Requires $|\\phi_1| < 1$.
- **Unconditional Mean & Variance:**
  $$\\mu = \\frac{c}{1 - \\phi_1}, \\quad \\gamma_0 = \\text{Var}(X_t) = \\frac{\\sigma^2}{1 - \\phi_1^2}$$
- **Autocorrelation Function (ACF):** $\\rho_k = \\phi_1^k$ (exponential decay).

---

### Problem Type 10.2: $h$-Step Ahead Forecasting & Remaining Useful Life (RUL)
- **Point Forecast:** $\\hat{X}_{T+h} = \\mu + \\phi_1^h (X_T - \\mu)$.
- **RUL Calculation:** Find smallest lead time $h^*$ such that forecast $\\hat{X}_{T+h^*}$ reaches the critical degradation threshold $X_{\\text{crit}}$.
"""

MOD11_ADDITION = """
---

## 11.7 Problem Types Commonly Solved in Logistic Regression & Binary Classification

### Problem Type 11.1: Component Failure Probability & Odds Ratio Calculations
- **Given Fitted Model:** $\\text{logit}(p) = \\beta_0 + \\beta_1 X_1 + \\dots + \\beta_k X_k$.
- **Probability of Failure:** $p(\\mathbf{x}) = \\frac{1}{1 + e^{-(\\beta_0 + \\boldsymbol{\\beta}^T\\mathbf{x})}}$.
- **Odds Ratio Effect for Variable $X_j$:** $OR_j = e^{\\beta_j}$. A $1$-unit increase in $X_j$ multiplies failure odds by $e^{\\beta_j}$. For a $\\Delta X_j$-unit increase, $OR = e^{\\Delta X_j \\cdot \\beta_j}$.

---

### Problem Type 11.2: Confusion Matrix & Diagnostic Metric Derivations
- **Formulas:**
  $$\\text{Accuracy} = \\frac{TP + TN}{N}, \\quad \\text{Precision} = \\frac{TP}{TP + FP}, \\quad \\text{Recall (Sensitivity)} = \\frac{TP}{TP + FN}$$
  $$\\text{Specificity} = \\frac{TN}{TN + FP}, \\quad F_1 = \\frac{2 \\cdot \\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}$$
"""

MOD12_ADDITION = """
---

## 12.8 Problem Types Commonly Solved in Supervised Classifiers & Support Vector Machines

### Problem Type 12.1: Naive Bayes Classification with Laplace Smoothing
- **Engineering / Exam Scenario:** Given categorical sensor symptoms $x_1, x_2, \\dots, x_d$, assign a fault class $C_k$.
- **MAP Rule:** $\\hat{y} = \\arg\\max_{C_k} P(C_k) \\prod_{j=1}^d P(x_j \\mid C_k)$.
- **Laplace Smoothing:** $\\hat{P}(x_j = v \\mid C_k) = \\frac{N_{kj} + 1}{N_k + V}$.

---

### Problem Type 12.2: Hard-Margin SVM Analytical Solution from 2D Coordinates
- **Step-by-Step Procedure:**
  1. Compute dot products $\\mathbf{x}_i^T \\mathbf{x}_j$ for all training pairs.
  2. Set up Dual: $\\max \\sum \\alpha_i - \\frac{1}{2} \\sum \\sum \\alpha_i \\alpha_j y_i y_j (\\mathbf{x}_i^T \\mathbf{x}_j)$ subject to $\\sum \\alpha_i y_i = 0$ and $\\alpha_i \\ge 0$.
  3. Substitute constraint to eliminate one variable and solve $\\frac{\\partial Q}{\\partial \\alpha} = 0$.
  4. If any $\\alpha_i < 0$, set to boundary $\\alpha_i = 0$ and resolve.
  5. Compute weight vector: $\\mathbf{w} = \\sum \\alpha_i y_i \\mathbf{x}_i$.
  6. Compute bias $b = y_k - \\mathbf{w}^T \\mathbf{x}_k$ using any Support Vector with $\\alpha_k > 0$.
  7. Compute margin width $\\gamma = \\frac{2}{\\|\\mathbf{w}\\|}$ and classify query points via $\\text{sign}(\\mathbf{w}^T \\mathbf{x}_{\\text{query}} + b)$.

---

### Problem Type 12.3: Non-Linear Kernel SVM Decision Rule
- **Decision Function:** $f(\\mathbf{x}) = \\text{sign}\\left( \\sum_{i \\in \\text{SV}} \\alpha_i y_i K(\\mathbf{x}_i, \\mathbf{x}) + b \\right)$.
- **Gaussian RBF Kernel:** $K(\\mathbf{x}_i, \\mathbf{x}) = \\exp\\left( -\\gamma \\|\\mathbf{x}_i - \\mathbf{x}\\|^2 \\right)$.
"""

additions = {
    "modules/mod01.md": MOD01_ADDITION,
    "modules/mod02.md": MOD02_ADDITION,
    "modules/mod03.md": MOD03_ADDITION,
    "modules/mod04.md": MOD04_ADDITION,
    "modules/mod05.md": MOD05_ADDITION,
    "modules/mod06.md": MOD06_ADDITION,
    "modules/mod07.md": MOD07_ADDITION,
    "modules/mod08.md": MOD08_ADDITION,
    "modules/mod09.md": MOD09_ADDITION,
    "modules/mod10.md": MOD10_ADDITION,
    "modules/mod11.md": MOD11_ADDITION,
    "modules/mod12.md": MOD12_ADDITION,
}

for fname, addition in additions.items():
    if os.path.exists(fname):
        with open(fname, "r", encoding="utf-8") as f:
            content = f.read()
        if "## Problem Types Commonly Solved" not in content and "Problem Types Commonly Solved" not in content:
            updated = content.strip() + "\n" + addition.strip() + "\n"
            with open(fname, "w", encoding="utf-8") as f:
                f.write(updated)
            print(f"Updated {fname} with Problem Types section.")
        else:
            print(f"{fname} already contains Problem Types section.")

print("All modules successfully updated!")
