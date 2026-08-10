# MODULE 5: Sampling Distributions & The Central Limit Theorem (Lectures 16–21)

## 5.1 Sampling Concepts & The Sample Mean

### 5.1.1 Parameters vs. Statistics
- **Population Parameter:** A fixed, typically unknown numerical characteristic of an entire population (e.g., population mean $\mu$, population variance $\sigma^2$, population proportion $p$).
- **Sample Statistic:** A numerical descriptive measure calculated exclusively from sample data (e.g., sample mean $\bar{X}$, sample variance $S^2$, sample proportion $\hat{p}$). A statistic is a **random variable** whose probability distribution is called its **Sampling Distribution**.
- **Random Sample:** A collection of $n$ independent and identically distributed (i.i.d.) random variables $X_1, X_2, \dots, X_n$ drawn from a parent population $f(x)$.

---

### 5.1.2 Sampling Distribution of the Sample Mean $\bar{X}$
Let $X_1, X_2, \dots, X_n$ be a random sample of size $n$ drawn from a population with mean $\mu$ and finite variance $\sigma^2$.
The sample mean is:
$$\bar{X} = \frac{1}{n} \sum_{i=1}^n X_i$$

#### Expected Value and Variance
- **Expected Value of $\bar{X}$:**
  $$E[\bar{X}] = E\left[ \frac{1}{n} \sum_{i=1}^n X_i \right] = \frac{1}{n} \sum_{i=1}^n E[X_i] = \frac{1}{n} (n\mu) = \mu$$
  *(The sample mean $\bar{X}$ is an **unbiased estimator** of $\mu$.)*
- **Variance of $\bar{X}$ (Infinite Population or with Replacement):**
  $$\text{Var}(\bar{X}) = \text{Var}\left( \frac{1}{n} \sum_{i=1}^n X_i \right) = \frac{1}{n^2} \sum_{i=1}^n \text{Var}(X_i) = \frac{1}{n^2} (n\sigma^2) = \frac{\sigma^2}{n}$$
- **Standard Error ($SE$):** The standard deviation of the sampling distribution:
  $$SE(\bar{X}) = \sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}}$$

#### Finite Population Correction (FPC)
When sampling **without replacement** from a finite population of size $N$:
$$\text{Var}(\bar{X}) = \frac{\sigma^2}{n} \left( \frac{N - n}{N - 1} \right) \implies \sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}} \sqrt{\frac{N - n}{N - 1}}$$
*(Note: FPC is omitted when sample fraction $n/N < 0.05$.)*

---

### 5.1.3 The Central Limit Theorem (CLT)
The **Central Limit Theorem (CLT)** is the foundational pillar of statistical inference.

#### Formal Theorem Statement
Let $X_1, X_2, \dots, X_n$ be an i.i.d. sequence of random variables drawn from **any arbitrary distribution** having a finite mean $\mu$ and finite non-zero variance $\sigma^2$. As the sample size $n$ approaches infinity ($n \to \infty$), the standardized sample mean converges in distribution to the Standard Normal distribution:
$$Z_n = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \xrightarrow{d} N(0, 1)$$

```
Population Distribution (Arbitrary/Skewed) ---> Sampling Distribution of X̄ (n >= 30)
          |                                               ^
     /\   |                                              / \
    /  \  |                                             /   \
  _/    \_|___________________                        _/     \_
```

*Practical Significance:* Regardless of whether the underlying population is uniform, exponential, Poisson, or multimodal, the distribution of the sample mean $\bar{X}$ will be approximately Normal when $n \ge 30$. If the parent population is strictly Normal, $\bar{X}$ is exactly Normal for *any* sample size $n \ge 1$.

---

## 5.2 Sampling Distribution of Sample Variance ($S^2$) & Chi-Square Distribution

### 5.2.1 The Chi-Square ($\chi^2$) Distribution
Let $Z_1, Z_2, \dots, Z_\nu$ be independent standard normal random variables ($Z_i \sim N(0, 1)$). The sum of their squares follows a **Chi-Square distribution with $\nu$ degrees of freedom**:
$$V = \sum_{i=1}^\nu Z_i^2 \sim \chi^2(\nu)$$
- **Support:** $V \in [0, \infty)$
- **Mean:** $E[V] = \nu$
- **Variance:** $\text{Var}(V) = 2\nu$
- **Shape:** Highly skewed to the right for small $\nu$; becomes asymptotically normal as $\nu \to \infty$.

---

### 5.2.2 Distribution of the Sample Variance $S^2$
Let $X_1, X_2, \dots, X_n$ be a random sample from a normal population $N(\mu, \sigma^2)$. The sample variance is:
$$S^2 = \frac{1}{n - 1} \sum_{i=1}^n (X_i - \bar{X})^2$$

#### Fundamental Theorem on Sample Variance
$$\frac{(n - 1)S^2}{\sigma^2} = \sum_{i=1}^n \left( \frac{X_i - \bar{X}}{\sigma} \right)^2 \sim \chi^2(n - 1)$$
*(Note: 1 degree of freedom is lost because $\bar{X}$ is estimated from the sample.)*
Furthermore, for a normal population, the sample mean $\bar{X}$ and sample variance $S^2$ are **statistically independent**.

---

## 5.3 Student's $t$-Distribution & Snedecor's $F$-Distribution

### 5.3.1 Student's $t$-Distribution
When population variance $\sigma^2$ is unknown, substituting the sample standard deviation $S$ into the standardized mean yields the $t$-statistic.

#### Derivation & Definition
Let $Z \sim N(0, 1)$ and $V \sim \chi^2(\nu)$ be independent random variables. The variable $T$ defined by:
$$T = \frac{Z}{\sqrt{V / \nu}} = \frac{\frac{\bar{X} - \mu}{\sigma / \sqrt{n}}}{\sqrt{\frac{(n-1)S^2 / \sigma^2}{n-1}}} = \frac{\bar{X} - \mu}{S / \sqrt{n}}$$
follows **Student's $t$-distribution with $\nu = n - 1$ degrees of freedom** ($T \sim t(\nu)$).

#### Properties of the $t$-Distribution
1. Symmetric bell-shaped curve centered at $t = 0$.
2. Heavier tails than the Standard Normal distribution (higher dispersion due to uncertainty in estimating $\sigma$ by $S$).
3. As $\nu \to \infty$, $t(\nu) \to N(0, 1)$ (practically identical for $\nu \ge 30$).

---

### 5.3.2 Snedecor's $F$-Distribution
Used for comparing two population variances.

#### Definition
Let $V_1 \sim \chi^2(\nu_1)$ and $V_2 \sim \chi^2(\nu_2)$ be independent chi-square random variables. The ratio:
$$F = \frac{V_1 / \nu_1}{V_2 / \nu_2} = \frac{\frac{(n_1 - 1)S_1^2 / \sigma_1^2}{n_1 - 1}}{\frac{(n_2 - 1)S_2^2 / \sigma_2^2}{n_2 - 1}} = \frac{S_1^2 / \sigma_1^2}{S_2^2 / \sigma_2^2}$$
follows an **$F$-distribution with $\nu_1$ numerator and $\nu_2$ denominator degrees of freedom** ($F \sim F(\nu_1, \nu_2)$).

#### Reciprocal Property
$$F_{1 - \alpha}(\nu_1, \nu_2) = \frac{1}{F_\alpha(\nu_2, \nu_1)}$$

---

## 5.4 Sampling Distributions for Two Samples

### 5.4.1 Difference Between Two Sample Means ($\bar{X}_1 - \bar{X}_2$)
Let independent random samples of sizes $n_1$ and $n_2$ be drawn from populations with means $\mu_1, \mu_2$ and variances $\sigma_1^2, \sigma_2^2$:
- **Mean:** $E[\bar{X}_1 - \bar{X}_2] = \mu_1 - \mu_2$
- **Variance:** $\text{Var}(\bar{X}_1 - \bar{X}_2) = \frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}$
- **Standard Error:** $SE(\bar{X}_1 - \bar{X}_2) = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$
- **Standardized Form:**
  $$Z = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} \sim N(0, 1)$$

---

### 5.4.2 Difference Between Two Sample Proportions ($\hat{p}_1 - \hat{p}_2$)
Let independent binomial samples of sizes $n_1$ and $n_2$ yield sample proportions $\hat{p}_1 = X_1/n_1$ and $\hat{p}_2 = X_2/n_2$:
- **Mean:** $E[\hat{p}_1 - \hat{p}_2] = p_1 - p_2$
- **Variance:** $\text{Var}(\hat{p}_1 - \hat{p}_2) = \frac{p_1(1-p_1)}{n_1} + \frac{p_2(1-p_2)}{n_2}$
- **Standardized Form:**
  $$Z = \frac{(\hat{p}_1 - \hat{p}_2) - (p_1 - p_2)}{\sqrt{\frac{p_1(1-p_1)}{n_1} + \frac{p_2(1-p_2)}{n_2}}} \sim N(0, 1)$$

---

## 5.5 Step-by-Step Worked Tutorial Problems

### Problem 5.1: Sample Mean Probabilities via Central Limit Theorem
**Statement:** An industrial component manufacturing process produces synthetic fibers with a breaking strength having a mean of $\mu = 50\text{ kg}$ and a standard deviation of $\sigma = 4\text{ kg}$. The exact shape of the population distribution is unknown. A random sample of $n = 64$ fibers is tested.
1. What is the sampling distribution of the sample mean $\bar{X}$?
2. What is the probability that the sample mean breaking strength $\bar{X}$ falls between $49\text{ kg}$ and $51\text{ kg}$?
3. What is the probability that $\bar{X}$ is less than $48.8\text{ kg}$?

**Solution:**
- Since sample size $n = 64 \ge 30$, by the **Central Limit Theorem**, $\bar{X}$ is approximately normally distributed:
  $$\mu_{\bar{X}} = \mu = 50\text{ kg}$$
  $$\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}} = \frac{4}{\sqrt{64}} = \frac{4}{8} = 0.50\text{ kg}$$
  $$\bar{X} \sim N(\mu_{\bar{X}} = 50, \sigma_{\bar{X}} = 0.50)$$
- **Part 2: Probability $P(49 \le \bar{X} \le 51)$:**
  $$Z_1 = \frac{49 - 50}{0.50} = \frac{-1.0}{0.50} = -2.00$$
  $$Z_2 = \frac{51 - 50}{0.50} = \frac{+1.0}{0.50} = +2.00$$
  $$P(49 \le \bar{X} \le 51) = \Phi(2.00) - \Phi(-2.00) = 0.9772 - 0.0228 = 0.9544 \quad (95.44\%)$$
- **Part 3: Probability $P(\bar{X} < 48.8)$:**
  $$Z = \frac{48.8 - 50}{0.50} = \frac{-1.2}{0.50} = -2.40$$
  $$P(\bar{X} < 48.8) = \Phi(-2.40) = 1 - \Phi(2.40) = 1 - 0.9918 = 0.0082 \quad (0.82\%)$$

---

### Problem 5.2: Sample Variance & Chi-Square Distribution
**Statement:** A precision robotic dispenser fills reagent vials such that fill volume is normally distributed with population variance $\sigma^2 = 0.04\text{ mL}^2$. A sample of $n = 10$ vials is drawn. What is the probability that the sample variance $S^2$ exceeds $0.075\text{ mL}^2$?

**Solution:**
- Sample size $n = 10 \implies \text{degrees of freedom } \nu = n - 1 = 9$.
- The statistic $V = \frac{(n-1)S^2}{\sigma^2} \sim \chi^2(9)$.
- Calculate the threshold $\chi^2$ value:
  $$\chi_{\text{calc}}^2 = \frac{(10 - 1)(0.075)}{0.04} = \frac{9 \times 0.075}{0.04} = \frac{0.675}{0.04} = 16.875$$
- From Chi-square distribution tables for $\nu = 9$:
  $$P(S^2 > 0.075) = P(\chi^2(9) > 16.875) \approx 0.0506 \quad (5.06\%)$$
---

## 5.5 Problem Types Commonly Solved in Sampling Distributions & Central Limit Theorem

### Problem Type 5.1: Sample Mean Probabilities via Central Limit Theorem (CLT)
- **Engineering / Exam Scenario:** An assembly line produces capacitors with unknown population distribution having mean $\mu$ and standard deviation $\sigma$. A quality engineer inspects a batch of $n \ge 30$ units. What is the probability that the sample average $\bar{X}$ falls within a specified interval or exceeds a threshold?
- **Trigger Keywords:** *"Sample mean $\bar{X}$"*, *"sample size $n \ge 30$"*, *"non-normal population"*, *"standard error $\sigma/\sqrt{n}$"*.
- **Core Formula:**
  $$Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \sim N(0, 1) \implies P(\bar{X} \le a) = \Phi\left( \frac{a - \mu}{\sigma / \sqrt{n}} \right)$$

---

### Problem Type 5.2: Sample Variance & Chi-Square Distribution
- **Engineering / Exam Scenario:** Given a sample of size $n$ drawn from a normal population $N(\mu, \sigma^2)$, determine the probability that the sample variance $S^2$ exceeds a critical quality threshold.
- **Trigger Keywords:** *"Sample variance $S^2$"*, *"Chi-Square distribution"*, *"degrees of freedom $\nu = n-1$"*.
- **Core Formula:**
  $$\chi^2 = \frac{(n - 1) S^2}{\sigma^2} \sim \chi^2(n - 1) \implies P(S^2 > c) = P\left( \chi^2(n-1) > \frac{(n-1)c}{\sigma^2} \right)$$

---

### Problem Type 5.3: Comparing Two Independent Variances via $F$-Distribution
- **Engineering / Exam Scenario:** Comparing process variability between two production machines (Machine 1: $n_1, S_1^2$; Machine 2: $n_2, S_2^2$). Find the probability that the sample variance ratio exceeds a specified value under $H_0: \sigma_1^2 = \sigma_2^2$.
- **Trigger Keywords:** *"Ratio of sample variances"*, *"F-distribution"*, *"degrees of freedom $(\nu_1 = n_1-1, \nu_2 = n_2-1)$"*.
- **Core Formula:**
  $$F = \frac{S_1^2 / \sigma_1^2}{S_2^2 / \sigma_2^2} = \frac{S_1^2}{S_2^2} \sim F(n_1 - 1, \; n_2 - 1)$$
