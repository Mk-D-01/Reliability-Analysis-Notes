/* Auto-generated MCQ bank: assignment questions + lecture-based practice. */
window.QUIZ_BANK = [
 {
  "m": 1,
  "src": "assignment",
  "q": "An automobile company observes that most engine failures occur within the first few weeks after delivery due to assembly defects. After this period, failures become rare and occur randomly. These initial failures belong to which region of the bathtub curve?",
  "o": [
   "Useful life region",
   "Wear-out region",
   "Infant mortality region",
   "Random failure region"
  ],
  "a": 2,
  "e": "Failures concentrated right after delivery and caused by assembly/manufacturing defects are 'early life' failures: weak units fail quickly and the hazard rate falls as they are removed. After that, the roughly constant, random failures are the useful-life region; wear-out comes much later with a rising hazard."
 },
 {
  "m": 1,
  "src": "assignment",
  "q": "Which reliability measure represents the probability that a component survives beyond time $t$?",
  "o": [
   "Hazard function",
   "Reliability function",
   "Failure density",
   "Mean lifetime"
  ],
  "a": 1,
  "e": "$R(t)=P(T>t)$ is by definition the probability of surviving beyond $t$. The hazard $h(t)=f(t)/R(t)$ is the instantaneous failure rate given survival, $f(t)$ is the failure density, and the mean lifetime is a single number $\\int R(t)dt$, not a function of $t$."
 },
 {
  "m": 2,
  "src": "assignment",
  "q": "Two independent machines have probabilities of successful operation equal to 0.95 and 0.90 respectively. Find the probability that both machines operate successfully.",
  "o": [
   "0.805",
   "0.855",
   "0.900",
   "0.950"
  ],
  "a": 1,
  "e": "Independent events multiply: $P(A\\cap B)=P(A)P(B)=0.95\\times0.90=0.855$. Adding or taking the minimum would ignore that BOTH must work (a series arrangement)."
 },
 {
  "m": 1,
  "src": "assignment",
  "q": "The following grouped data represents operating hours of machine: Operating Hours (frequency): 0-100 (4), 100-200 (9), 200-300 (12), 300-400 (15), 400-500 (5). Which graphical representation is most suitable?",
  "o": [
   "Pie chart",
   "Bar graph",
   "Histogram",
   "Scatter plot"
  ],
  "a": 2,
  "e": "Grouped (class-interval) continuous data such as operating hours is shown with a histogram: adjacent bars over contiguous intervals, bar height = frequency. A bar graph is for separate categories, a pie chart for proportions of a whole, and a scatter plot needs two variables."
 },
 {
  "m": 1,
  "src": "assignment",
  "q": "The mean operating life of five batteries is 200 hours. Four battery lives are: 180, 190, 210, 220. Find the operating life of the fifth battery.",
  "o": [
   "180",
   "190",
   "200",
   "210"
  ],
  "a": 2,
  "e": "The total of five lives is $5\\times200=1000$. The four known lives sum to $180+190+210+220=800$, so the fifth is $1000-800=200$."
 },
 {
  "m": 1,
  "src": "assignment",
  "q": "Which of the following measures is least affected by extreme observations?",
  "o": [
   "Mean",
   "Range",
   "Variance",
   "Median"
  ],
  "a": 3,
  "e": "The median depends only on the middle rank, so moving an extreme value does not change it. The mean, range and variance all use the actual extreme values and are pulled by outliers."
 },
 {
  "m": 1,
  "src": "assignment",
  "q": "A tire manufacturer wants to determine the inner diameter of a certain grade of tire. Ideally, the diameter would be 570 mm. The data are as follows: 572, 572, 573, 568, 569, 575, 565, 570. Find the variance and standard deviation.",
  "o": [
   "10, 3.16",
   "16, 4",
   "12, 3.56",
   "8, 2.82"
  ],
  "a": 0,
  "e": "Mean $=570.5$. Squared deviations sum to 70, so the sample variance is $70/(8-1)=10$ and $s=\\sqrt{10}=3.16$. (Dividing by $n$ would give 8.75; the sample formula divides by $n-1$.)"
 },
 {
  "m": 2,
  "src": "assignment",
  "q": "From past experience, a stockbroker believes that under present economic conditions a customer will invest in tax-free bonds with probability 0.6, will invest in mutual funds with probability 0.3, and will invest in both tax-free bonds and mutual funds with probability 0.15. Find the probability that a customer will invest in neither tax-free bonds nor mutual funds.",
  "o": [
   "0.15",
   "0.50",
   "0.75",
   "0.25"
  ],
  "a": 3,
  "e": "Use inclusion–exclusion: $P(B\\cup F)=0.6+0.3-0.15=0.75$. 'Neither' is the complement: $1-0.75=0.25$. Subtracting only the overlap, or adding the probabilities, double counts."
 },
 {
  "m": 2,
  "src": "assignment",
  "q": "Three machines A, B, and C produce 25%, 50%, and 25% of a factory's output respectively. The percentage of defective items produced by each machine is 2%, 5%, 3%. Find the probability that a randomly selected item is defective.",
  "o": [
   "0.0375",
   "0.0045",
   "0.0030",
   "0.0025"
  ],
  "a": 0,
  "e": "Law of total probability: $P(D)=\\sum P(M_i)P(D|M_i)=0.25(0.02)+0.50(0.05)+0.25(0.03)=0.005+0.025+0.0075=0.0375$. Each machine's defect rate is weighted by its share of output."
 },
 {
  "m": 3,
  "src": "assignment",
  "q": "An electronics company studies the number of defective products in a randomly selected packet. The probability mass function is $P(X=x)=k(x+2)$, for $x=0,1,2$. What is the value of $k$?",
  "o": [
   "$\\frac{1}{2}$",
   "$\\frac{1}{9}$",
   "$\\frac{1}{7}$",
   "$\\frac{1}{12}$"
  ],
  "a": 1,
  "e": "A PMF must sum to 1: $k(2)+k(3)+k(4)=9k=1$, so $k=1/9$."
 },
 {
  "m": 3,
  "src": "assignment",
  "q": "A manufacturer of industrial sensors classifies each sensor shipment based on the number of defective sensors found during inspection. Let $X$ denote the number of defective sensors in a randomly selected shipment. The probability distribution of $X$: $P(X=0)=0.30$, $P(X=1)=0.25$, $P(X=2)=0.20$, $P(X=3)=0.15$, $P(X=4)=0.10$. According to the company's quality policy, a shipment is rejected if it contains more than 2 defective sensors. What is the probability that a randomly selected shipment will be rejected?",
  "o": [
   "0.20",
   "0.25",
   "0.30",
   "0.45"
  ],
  "a": 1,
  "e": "Rejected means $X>2$, i.e. $X=3$ or $4$: $0.15+0.10=0.25$. 'More than 2' excludes $X=2$."
 },
 {
  "m": 3,
  "src": "assignment",
  "q": "A manufacturer of lithium-ion batteries classifies the number of defective cells found in a randomly selected battery pack. Let $X$ denote the number of defective cells. Distribution: $P(0)=0.30$, $P(1)=0.25$, $P(2)=0.20$, $P(3)=0.15$, $P(4)=0.10$. The company considers a battery pack acceptable if it contains at most 2 defective cells. If 1000 battery packs are produced, how many packs are expected to be acceptable?",
  "o": [
   "550",
   "650",
   "750",
   "850"
  ],
  "a": 2,
  "e": "Acceptable means $X\\le2$: $0.30+0.25+0.20=0.75$. Expected number among 1000 packs $=1000\\times0.75=750$."
 },
 {
  "m": 3,
  "src": "assignment",
  "q": "A printed circuit board (PCB) manufacturing line has historically produced 90% acceptable boards. A quality engineer randomly selects 12 PCBs from a production batch for inspection. According to company policy, the batch is approved if at least 10 PCBs are acceptable. What is the probability that the batch will be approved?",
  "o": [
   "0.1109",
   "0.8891",
   "0.3410",
   "0.7176"
  ],
  "a": 1,
  "e": "$X\\sim\\text{Bin}(12,0.9)$, need $P(X\\ge10)=P(10)+P(11)+P(12)=0.2301+0.3766+0.2824=0.8891$. The option 0.1109 is the complement $P(X\\le9)$."
 },
 {
  "m": 3,
  "src": "assignment",
  "q": "An automobile manufacturer produces a batch of 500 fuel injectors, of which 25 are known to be defective. A quality engineer randomly selects 10 fuel injectors without replacement and records the number of defective injectors in the sample. Which probability distribution is most appropriate for modeling the number of defective injectors in the sample?",
  "o": [
   "Binomial Distribution",
   "Poisson Distribution",
   "Geometric Distribution",
   "Hypergeometric Distribution"
  ],
  "a": 3,
  "e": "Sampling 10 from a finite lot of 500 WITHOUT replacement means trials are dependent and the defective fraction changes after each draw. That is the hypergeometric setting. Binomial needs independent trials with constant $p$ (sampling with replacement or an infinite lot)."
 },
 {
  "m": 3,
  "src": "assignment",
  "q": "A power distribution company experiences an average of 4 transformer failures per month. Assuming a Poisson model, what is the probability that exactly 3 transformer failures occur next month?",
  "o": [
   "0.1465",
   "0.1954",
   "0.2240",
   "0.3056"
  ],
  "a": 1,
  "e": "Poisson with $\\lambda=4$: $P(X=3)=e^{-4}4^3/3!=0.0183\\times64/6=0.1954$."
 },
 {
  "m": 3,
  "src": "assignment",
  "q": "A semiconductor manufacturing process produces defective chips with probability 0.1. Inspections continue until the third defective chip is found. What is the probability that the third defective chip occurs on the 8th inspection?",
  "o": [
   "0.0765",
   "0.0124",
   "0.0298",
   "0.0414"
  ],
  "a": 1,
  "e": "Negative binomial: the 3rd defect on trial 8 means exactly 2 defects in the first 7 trials, then a defect on trial 8: $\\binom72(0.1)^3(0.9)^5=21\\times0.001\\times0.59049=0.0124$."
 },
 {
  "m": 3,
  "src": "assignment",
  "q": "A semiconductor manufacturing company produces a lot of 40 microprocessors. Before dispatch, the quality assurance team identifies 6 microprocessors with minor packaging defects that do not affect functionality. A customer follows a strict acceptance policy: a random sample of 5 microprocessors is selected without replacement, and the lot is rejected if more than one defective package is found in the sample. What is the probability that the lot will be accepted?",
  "o": [
   "0.8421",
   "0.7315",
   "0.6587",
   "0.9154"
  ],
  "a": 0,
  "e": "Hypergeometric with $N=40$, 6 defective, $n=5$. Accept if $X\\le1$: $\\dfrac{\\binom{34}{5}+\\binom61\\binom{34}{4}}{\\binom{40}{5}}\\approx0.846$, the closest listed option (0.8421, the course key; a small rounding difference). The key idea is summing $P(X=0)+P(X=1)$, because 'more than one' rejects."
 },
 {
  "m": 3,
  "src": "assignment",
  "q": "A communication channel successfully transmits a packet with probability 0.8. Packets are transmitted independently until the first transmission failure occurs. What is the probability that the first failure occurs on the 5th transmission attempt?",
  "o": [
   "0.2048",
   "0.0819",
   "0.1024",
   "0.4096"
  ],
  "a": 1,
  "e": "'Until the first failure on the 5th attempt' is geometric: 4 successes then a failure: $0.8^4\\times0.2=0.4096\\times0.2=0.0819$. The option 0.4096 forgets the final failure."
 },
 {
  "m": 3,
  "src": "assignment",
  "q": "A solar panel manufacturer observes that 85% of the panels pass the efficiency test. A quality inspector randomly selects 20 panels from a production batch. Let $X$ denote the number of panels that pass the efficiency test. What are the mean and variance of $X$?",
  "o": [
   "$\\mu=17,\\ \\sigma^2=2.55$",
   "$\\mu=15,\\ \\sigma^2=3.00$",
   "$\\mu=17,\\ \\sigma^2=1.72$",
   "$\\mu=20,\\ \\sigma^2=1.38$"
  ],
  "a": 0,
  "e": "$X\\sim\\text{Bin}(20,0.85)$: mean $np=17$, variance $np(1-p)=20(0.85)(0.15)=2.55$."
 },
 {
  "m": 4,
  "src": "assignment",
  "q": "The diameter $X$ (in cm) of a manufactured shaft has the probability density function $f(x)=kx^2$ if $0\\le x\\le 1$, and $0$ otherwise. Find the probability that the diameter is less than 0.5 cm?",
  "o": [
   "0.125",
   "0.250",
   "0.500",
   "0.750"
  ],
  "a": 0,
  "e": "First find $k$ from $\\int_0^1kx^2dx=k/3=1$, so $k=3$. Then $P(X<0.5)=\\int_0^{0.5}3x^2dx=0.5^3=0.125$. Forgetting to normalise gives wrong values."
 },
 {
  "m": 4,
  "src": "assignment",
  "q": "The duration $X$ (in hours) of uninterrupted operation of a drone during a surveillance mission has PDF $f(x)=\\frac{x}{8}$, $0\\le x\\le 4$. Find the expected operating duration.",
  "o": [
   "2.75",
   "2.67",
   "3.00",
   "3.50"
  ],
  "a": 1,
  "e": "$E[X]=\\int_0^4x\\cdot\\frac x8dx=\\frac18\\cdot\\frac{4^3}{3}=\\frac{64}{24}=2.67$ hours."
 },
 {
  "m": 4,
  "src": "assignment",
  "q": "The time $X$ (in hours) spent by a cloud server processing a batch of user requests is modeled by the probability density function $f(x)=\\frac{3}{32}(4x-x^2)$ if $0\\le x\\le 4$, and $0$ otherwise. What is the probability that the processing time lies between 1 hour and 3 hours?",
  "o": [
   "0.5313",
   "0.6875",
   "0.7500",
   "0.8438"
  ],
  "a": 1,
  "e": "$P(1<X<3)=\\frac{3}{32}\\int_1^3(4x-x^2)dx=\\frac{3}{32}\\left[2x^2-\\frac{x^3}{3}\\right]_1^3=\\frac{3}{32}(9-1.667)=\\frac{3}{32}(7.333)=0.6875$."
 },
 {
  "m": 4,
  "src": "assignment",
  "q": "A cloud service provider monitors the daily volume of data processed by one of its servers. Over several months, the average daily volume was found to be 120 TB with a standard deviation of 15 TB. Historical records indicate that days with unusually low or unusually high data volumes occur much less frequently than days close to the average. Which probability distribution is most appropriate for modeling the daily data volume?",
  "o": [
   "Binomial Distribution",
   "Gamma Distribution",
   "Normal Distribution",
   "Exponential Distribution"
  ],
  "a": 2,
  "e": "A bell-shaped quantity where values near the mean are common and extreme low/high days are rare is the Normal distribution. Exponential and Gamma are skewed and positive-only; Binomial counts successes."
 },
 {
  "m": 4,
  "src": "assignment",
  "q": "The daily energy consumption of a residential complex is modeled using a Normal distribution with mean $\\mu$ and standard deviation $\\sigma$. According to the Empirical Rule, approximately what percentage of observations lie within two standard deviations of the mean?",
  "o": [
   "68.26%",
   "95.44%",
   "99.73%",
   "50%"
  ],
  "a": 1,
  "e": "Empirical rule: within $\\mu\\pm1\\sigma$ is 68.26%, within $\\pm2\\sigma$ is 95.44% and within $\\pm3\\sigma$ is 99.73%."
 },
 {
  "m": 4,
  "src": "assignment",
  "q": "The tensile strength of a composite material follows a Normal distribution with mean 80 MPa and standard deviation 4 MPa. A component is considered unacceptable if its tensile strength is below 72 MPa. What percentage of components are expected to be unacceptable?",
  "o": [
   "1.14%",
   "2.28%",
   "4.56%",
   "15.87%"
  ],
  "a": 1,
  "e": "$z=(72-80)/4=-2$, and $P(Z<-2)=0.0228$, so about 2.28% fall below 72 MPa. The 15.87% option is the $-1\\sigma$ tail."
 },
 {
  "m": 4,
  "src": "assignment",
  "q": "The daily output of a manufacturing process is Normally distributed with mean 500 units and standard deviation 40 units. Management wishes to determine a production target such that only 5% of days exceed this target. What should be the target output?",
  "o": [
   "548.8",
   "565.8",
   "580.8",
   "600.0"
  ],
  "a": 1,
  "e": "Need the 95th percentile: $x=\\mu+z_{0.95}\\sigma=500+1.645\\times40=565.8$. Using $z=1.28$ (90th percentile) would give the wrong target."
 },
 {
  "m": 4,
  "src": "assignment",
  "q": "The time between two consecutive customer arrivals at a self-checkout kiosk follows an Exponential distribution with an average inter-arrival time of 5 minutes. What is the probability that the next customer arrives after more than 8 minutes?",
  "o": [
   "0.2019",
   "0.3679",
   "0.4493",
   "0.5488"
  ],
  "a": 0,
  "e": "Mean $1/\\lambda=5$ min, so $P(T>8)=e^{-8/5}=e^{-1.6}=0.2019$."
 },
 {
  "m": 4,
  "src": "assignment",
  "q": "The probability that a cloud server remains operational for more than 20 hours without interruption is 0.6703. Assuming the uptime follows an Exponential distribution, what is the mean uptime of the server?",
  "o": [
   "40 h",
   "50 h",
   "60 h",
   "80 h"
  ],
  "a": 1,
  "e": "$P(T>20)=e^{-20/\\theta}=0.6703\\Rightarrow20/\\theta=-\\ln0.6703=0.4\\Rightarrow\\theta=50$ h. The mean of an exponential is $1/\\lambda=\\theta$."
 },
 {
  "m": 4,
  "src": "assignment",
  "q": "The amount of network traffic processed by a server follows a Gamma distribution, with shape parameter $\\alpha=5$ and scale parameter $\\beta=3$. What is the variance?",
  "o": [
   "50.26",
   "15.25",
   "45.36",
   "60.18"
  ],
  "a": 2,
  "e": "Gamma with shape $\\alpha$ and scale $\\beta$ has variance $\\alpha\\beta^2=5\\times9=45$, so 45.36 is the matching option (the mean would be $\\alpha\\beta=15$). Do not confuse scale and rate parametrisations."
 },
 {
  "m": 5,
  "src": "assignment",
  "q": "The daily energy consumption of households has standard deviation 24 kWh. How large a sample should be selected so that the standard deviation of the sampling distribution of the sample mean is 3 kWh?",
  "o": [
   "16",
   "64",
   "49",
   "36"
  ],
  "a": 1,
  "e": "$SE=\\sigma/\\sqrt n$: $3=24/\\sqrt n\\Rightarrow\\sqrt n=8\\Rightarrow n=64$."
 },
 {
  "m": 5,
  "src": "assignment",
  "q": "The daily electricity consumption of households in a city has a population mean of 350 kWh and a population standard deviation of 60 kWh. A random sample of 144 households is selected. Assuming the sampling distribution of the sample mean is approximately Normal, what is the probability that the sample mean electricity consumption lies between 345 kWh and 355 kWh?",
  "o": [
   "0.5793",
   "0.9544",
   "0.7887",
   "0.6826"
  ],
  "a": 3,
  "e": "$SE=60/\\sqrt{144}=5$, so $345$ to $355$ is $\\mu\\pm1SE$ and the probability is 0.6826."
 },
 {
  "m": 5,
  "src": "assignment",
  "q": "A telecom company compares internet speeds in two cities. City A: Mean speed = 80 Mbps, Standard deviation = 18 Mbps, Sample size = 81. City B: Mean speed = 75 Mbps, Standard deviation = 12 Mbps, Sample size = 64. What is the probability that the sample mean speed of City A exceeds that of City B by more than 8 Mbps?",
  "o": [
   "0.1151",
   "0.8849",
   "0.5987",
   "0.6915"
  ],
  "a": 0,
  "e": "The difference of means is normal with mean $80-75=5$ and $SE=\\sqrt{18^2/81+12^2/64}=\\sqrt{4+2.25}=2.5$. $P(D>8)=P(Z>(8-5)/2.5=1.2)=0.1151$."
 },
 {
  "m": 5,
  "src": "assignment",
  "q": "Two estimators are used to estimate the same population mean. Estimator A uses a sample size of 25. Estimator B uses a sample size of 100. By what factor is the standard error of Estimator B reduced compared to Estimator A?",
  "o": [
   "1/2",
   "1/4",
   "1/10",
   "2"
  ],
  "a": 0,
  "e": "$SE\\propto1/\\sqrt n$. Going from 25 to 100 multiplies $\\sqrt n$ by 2, so the standard error becomes $1/2$ of before (not 1/4, which would need $n=400$)."
 },
 {
  "m": 5,
  "src": "assignment",
  "q": "The waiting time (in minutes) for customers at a service center exhibits a highly asymmetric distribution with a long right tail. Historical data indicate a population mean of 50 minutes and a population standard deviation of 10 minutes. A researcher randomly selects 400 customers and computes the sample mean waiting time. Which of the following statements is most appropriate regarding the distribution of the sample mean?",
  "o": [
   "It will retain the same right-skewed shape as the population distribution.",
   "It will be approximately Normally distributed.",
   "It will be Uniformly distributed because of the large sample size.",
   "Its distribution cannot be determined without knowing the exact population distribution."
  ],
  "a": 1,
  "e": "By the CLT, with $n=400$ (large) the sample mean is approximately Normal with mean 50 and $SE=10/20=0.5$, even though the population is right-skewed. You do not need to know the exact population distribution."
 },
 {
  "m": 5,
  "src": "assignment",
  "q": "A manufacturer claims that the average tensile strength of a polymer is 50 MPa. A quality engineer randomly selects 15 specimens and obtains a sample mean tensile strength of 53 MPa with a sample standard deviation of 6 MPa. Assuming the population standard deviation is unknown, what is the value of the test statistic used to assess the manufacturer's claim?",
  "o": [
   "1.94",
   "2.12",
   "2.45",
   "3.00"
  ],
  "a": 0,
  "e": "Population $\\sigma$ unknown so use the $t$ statistic: $t=(\\bar x-\\mu_0)/(s/\\sqrt n)=(53-50)/(6/\\sqrt{15})=3/1.549=1.94$."
 },
 {
  "m": 5,
  "src": "assignment",
  "q": "Which of the following statements is/are false as per central limit theorem",
  "o": [
   "The mean of the sampling distribution of the mean is the population mean.",
   "The variance of the distribution of the sample mean is $\\sigma^2/n$.",
   "The sampling distribution becomes less variable with increased sample size.",
   "For populations with larger variances, the sample mean is a reliable estimate of the population mean."
  ],
  "a": 3,
  "e": "The false statement is the last one: a larger population variance makes $\\sigma^2/n$ larger, so the sample mean is LESS reliable at a given $n$. The other three are true results of the CLT/sampling theory."
 },
 {
  "m": 5,
  "src": "assignment",
  "q": "A researcher wants to estimate the average startup time of a new software application. A sample of 12 launches gives a mean startup time of 3.8 seconds and a sample standard deviation of 0.6 seconds. The population standard deviation is unknown. Which distribution should be used for inference about the population mean?",
  "o": [
   "Z-test",
   "t-test",
   "F-test",
   "None of the above"
  ],
  "a": 1,
  "e": "With $n=12$ and $\\sigma$ unknown (estimated by $s$) from a roughly normal population, the standardised mean follows a $t$ distribution with 11 d.f. $Z$ needs known $\\sigma$ or large $n$; $F$ compares variances."
 },
 {
  "m": 5,
  "src": "assignment",
  "q": "Which of the following situations most naturally requires the use of an F-distribution?",
  "o": [
   "Estimating a population mean from a small sample",
   "Comparing the average outputs of two production lines",
   "Comparing the variability of measurements obtained from two instruments",
   "Estimating a population proportion"
  ],
  "a": 2,
  "e": "The $F$ distribution is a ratio of two independent scaled chi-squares, which is exactly the ratio of two sample variances. So comparing variability of two instruments uses $F$; comparing means uses $t$/$z$, and proportions use $z$."
 },
 {
  "m": 5,
  "src": "assignment",
  "q": "A process engineer compares the dimensional variation produced by two machining centers. The first sample contains 16 observations with variance 64. The second sample contains 25 observations with variance 36. What is the F-statistic?",
  "o": [
   "1.78",
   "1.55",
   "2.25",
   "3.75"
  ],
  "a": 0,
  "e": "$F=s_1^2/s_2^2=64/36=1.78$ with $(15,24)$ d.f. (larger variance in the numerator)."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "A valid hypothesis test requires that the null hypothesis ($H_0$) and the alternative hypothesis ($H_a$) satisfy which of the following conditions?",
  "o": [
   "They should overlap so that uncertain parameter values can be included in both hypotheses.",
   "They should be mutually exclusive and collectively exhaustive.",
   "They should both contain the equality sign.",
   "They should be formulated after the sample data are collected."
  ],
  "a": 1,
  "e": "A valid test partitions the parameter space: $H_0$ and $H_a$ must not overlap (mutually exclusive) and together cover all possibilities (exhaustive). They are set BEFORE seeing data, and only $H_0$ carries the equality."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "Which situation requires a two-tailed hypothesis test?",
  "o": [
   "Testing whether the average fuel efficiency is greater than 18 km/L.",
   "Testing whether a new alloy increases fatigue life.",
   "Testing whether a manufacturing process changes the average diameter of shafts.",
   "Testing whether the average downtime is less than 3 hours."
  ],
  "a": 2,
  "e": "A two-tailed test is needed when the alternative is 'different from' (change in either direction), as for shaft diameter changing. 'Greater than', 'increases' and 'less than' are one-directional (one-tailed)."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "Which of the following is TRUE regarding the p-value?",
  "o": [
   "It is the probability that the null hypothesis is true.",
   "Smaller p-values provide stronger evidence against the null hypothesis.",
   "The p-value is always equal to $\\alpha$.",
   "It measures sampling error only."
  ],
  "a": 1,
  "e": "The p-value is $P(\\text{data this extreme}\\mid H_0)$. It is not the probability that $H_0$ is true; smaller p means the observed data would be rarer under $H_0$, so stronger evidence against it."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "A testing laboratory concludes that a bridge component is unsafe although it actually satisfies all safety standards. This decision corresponds to:",
  "o": [
   "Type I Error",
   "Type II Error",
   "Correct decision",
   "Sampling error"
  ],
  "a": 0,
  "e": "Declaring the component unsafe when it is actually fine means rejecting a true null ('component is acceptable'). That is a Type I error (false alarm), with probability $\\alpha$."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "Which statement correctly defines the power of a statistical test?",
  "o": [
   "Probability of rejecting a true null hypothesis",
   "Probability of failing to reject a false null hypothesis",
   "Probability of correctly rejecting a false null hypothesis",
   "Probability of failing to reject a true null hypothesis"
  ],
  "a": 2,
  "e": "Power $=1-\\beta=P(\\text{reject }H_0\\mid H_0\\text{ false})$: the chance of correctly detecting a real effect. 'Reject a true null' is $\\alpha$; 'fail to reject a false null' is $\\beta$."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "A cement supplier claims that the mean compressive strength of its concrete mix is 4000 psi. An engineer suspects the true mean differs from this claim, in either direction, and plans to test a sample of 25 concrete cubes. Which pair correctly states $H_0$ and $H_a$?",
  "o": [
   "$H_0$: $\\mu = 4000$ and $H_a$: $\\mu \\neq 4000$",
   "$H_0$: $\\mu = 4000$ and $H_a$: $\\mu > 4000$",
   "$H_0$: $\\mu = 4000$ and $H_a$: $\\mu < 4000$",
   "$H_0$: $\\mu \\neq 4000$ and $H_a$: $\\mu = 4000$"
  ],
  "a": 0,
  "e": "The engineer suspects a difference in EITHER direction, so $H_a:\\mu\\ne4000$ with $H_0:\\mu=4000$ (equality always sits in $H_0$)."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "A manufacturer claims that the average operating lifetime of its industrial pressure sensors is 2000 hours. A quality engineer believes that the actual average lifetime is lower than the claimed value. A random sample of 36 sensors is tested, yielding a sample mean lifetime of 1940 hours. Assume that the population standard deviation is known to be 120 hours and the lifetimes are normally distributed. At the 5% significance level, which of the following is the correct conclusion?",
  "o": [
   "Fail to reject the null hypothesis because there is insufficient statistical evidence that the average operating lifetime is less than 2000 hours.",
   "Reject the null hypothesis and conclude that there is sufficient statistical evidence that the average operating lifetime is less than 2000 hours.",
   "Fail to reject the null hypothesis because the sample evidence is insufficient to conclude that the average operating lifetime is less than 2000 hours.",
   "Reject the null hypothesis because the sample mean is greater than the claimed average lifetime."
  ],
  "a": 1,
  "e": "Left-tailed $z$-test: $z=(1940-2000)/(120/\\sqrt{36})=-60/20=-3$. This is below $-1.645$ (5% critical value), so reject $H_0$: evidence the mean life is below 2000 h."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "A manufacturer claims that the average breaking strength of a plastic component is 500 N. A quality engineer randomly selects 12 components from a production batch. The sample has an average breaking strength of 494 N with a sample standard deviation of 8 N. Assume that the breaking strengths are normally distributed. At the 5% significance level, which of the following is the most appropriate conclusion?",
  "o": [
   "There is sufficient statistical evidence to conclude that the average breaking strength of the components is less than 500 N.",
   "There is insufficient statistical evidence to conclude that the average breaking strength is less than 500 N.",
   "The null hypothesis should be failed to reject because the sample evidence supports the manufacturer's claim.",
   "The manufacturer's claim is correct because the sample average is close to 500 N."
  ],
  "a": 0,
  "e": "Left-tailed $t$-test: $t=(494-500)/(8/\\sqrt{12})=-2.60$. The critical value $t_{0.05,11}=-1.796$, so $-2.60$ is in the rejection region: reject $H_0$."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "Two different manufacturing processes are used to produce the same mechanical component. To determine whether the variability of the two processes differs, independent samples are collected. The sample variances are 16 mm$^2$ and 4 mm$^2$, based on sample sizes of 11 and 13, respectively. At the 10% significance level, which of the following conclusions is correct?",
  "o": [
   "Fail to reject the null hypothesis because both processes have equal sample sizes.",
   "Reject the null hypothesis because the sample means are different.",
   "Reject the null hypothesis and conclude that the process variances are significantly different.",
   "There is insufficient information to perform an F-test."
  ],
  "a": 2,
  "e": "$F=16/4=4$ with $(10,12)$ d.f. For a two-sided test at 10%, the critical value is $F_{0.05,10,12}\\approx2.75$. Since $4>2.75$, reject $H_0$: the variances differ. The test compares variances, not means, and sample sizes are irrelevant to the decision rule."
 },
 {
  "m": 6,
  "src": "assignment",
  "q": "Two production plants manufacture the same type of aerospace fasteners. Engineers from both plants estimate the average tensile strength using the same sample size and the same confidence level. Plant A has a sample standard deviation of 4 MPa, whereas Plant B has a sample standard deviation of 10 MPa. Which of the following statements is correct?",
  "o": [
   "Plant A will have a wider confidence interval because its variability is lower.",
   "Plant B will have a narrower confidence interval because its variability is higher.",
   "Plant A will have a narrower confidence interval because lower variability results in a smaller standard error.",
   "Both plants will have confidence intervals of equal width because the sample sizes are the same."
  ],
  "a": 2,
  "e": "The margin of error is $t\\cdot s/\\sqrt n$. Same $n$ and confidence level means the multiplier is equal, so the smaller $s$ (Plant A) gives the smaller standard error and the narrower interval."
 },
 {
  "m": 6,
  "src": "assignment",
  "q": "Which of the following statements regarding confidence intervals is incorrect?",
  "o": [
   "Increasing the sample size generally decreases the width of the confidence interval.",
   "Increasing the confidence level generally increases the width of the confidence interval.",
   "A confidence interval provides an estimate of an unknown population parameter.",
   "A wider confidence interval always indicates a more precise estimate of the population parameter."
  ],
  "a": 3,
  "e": "The incorrect statement is the last one: a wider interval means LESS precision (more uncertainty). Larger $n$ narrows it and higher confidence widens it."
 },
 {
  "m": 6,
  "src": "assignment",
  "q": "Two engineers estimate the average crack length in steel beams. Engineer A: Sample size n=36. Engineer B: Sample size n=81. Both engineers use the same confidence level and assume the same population standard deviation. If Engineer A reports a margin of error of 2.1 mm, the margin of error reported by Engineer B is:",
  "o": [
   "1.4 mm",
   "1.2 mm",
   "1.8 mm",
   "0.9 mm"
  ],
  "a": 0,
  "e": "$ME\\propto1/\\sqrt n$, so $ME_B=2.1\\sqrt{36/81}=2.1\\times\\frac69=1.4$ mm."
 },
 {
  "m": 6,
  "src": "assignment",
  "q": "A random sample of 100 automobiles from a city shows that the average annual distance travelled is 20,000 km, with a sample standard deviation of 2,500 km. Assume the population is approximately normally distributed. Construct the 99% confidence interval for the average annual distance travelled.",
  "o": [
   "(19,356 km, 20,644 km)",
   "(19,510 km, 20,490 km)",
   "(19,250 km, 20,750 km)",
   "(19,700 km, 20,300 km)"
  ],
  "a": 0,
  "e": "With $n=100$ use $\\bar x\\pm z_{0.995}s/\\sqrt n=20000\\pm2.576\\times250=20000\\pm644$, i.e. $(19356,20644)$."
 },
 {
  "m": 6,
  "src": "assignment",
  "q": "A machine produces cylindrical metal pieces. A random sample of 8 pieces has a sample mean diameter of 10.0 mm and a sample standard deviation of 0.8 mm. Assume the diameters are approximately normally distributed. Construct the 99% confidence interval for the true mean diameter of the metal pieces.",
  "o": [
   "(9.29 mm, 10.71 mm)",
   "(9.01 mm, 10.99 mm)",
   "(9.55 mm, 10.45 mm)",
   "(9.10 mm, 10.90 mm)"
  ],
  "a": 1,
  "e": "Small sample, $\\sigma$ unknown, so use $t_{7,0.995}=3.499$: $10\\pm3.499\\times0.8/\\sqrt8=10\\pm0.99$, i.e. $(9.01,10.99)$. A $z$ value of 2.576 would give a too-narrow interval."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "A manufacturer claims that at least 85% of the lithium-ion batteries produced remain functional after 500 charging cycles. A reliability engineer wants to verify this claim. A random sample of 250 batteries is tested, and 200 batteries remain functional after 500 charging cycles. The hypotheses are $H_0$: $p=0.85$, $H_1$: $p<0.85$, where p is the true proportion of batteries that remain functional after 500 charging cycles. What is the approximate p-value for this hypothesis test?",
  "o": [
   "0.9894",
   "0.0129",
   "0.0136",
   "0.9871"
  ],
  "a": 2,
  "e": "$\\hat p=200/250=0.8$. $z=\\dfrac{0.8-0.85}{\\sqrt{0.85\\times0.15/250}}=\\dfrac{-0.05}{0.0226}=-2.21$. Left-tail p-value $\\approx0.0134$ (listed 0.0136). It is small, so there is evidence the true proportion is below 0.85."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "An engineer wants to determine whether a software update has improved the battery life of portable medical devices. The battery life of 25 identical devices is measured before and after installing the update. The battery life measurements are paired, and the differences are approximately normally distributed. Which statistical test is most appropriate to determine whether the software update has significantly changed the mean battery life?",
  "o": [
   "Pooled t-test",
   "Z-test",
   "Paired t-test",
   "None of the above"
  ],
  "a": 2,
  "e": "Before/after measurements on the SAME devices are paired, so analyse the 25 differences with a paired $t$-test. A pooled $t$-test assumes independent samples."
 },
 {
  "m": 7,
  "src": "assignment",
  "q": "A manufacturing engineer wants to compare the average fatigue life of welded joints produced using two different welding techniques. A random sample of 20 welded joints produced using Technique A has a mean fatigue life of 620 cycles with a sample standard deviation of 40 cycles. Another random sample of 18 welded joints produced using Technique B has a mean fatigue life of 590 cycles with a sample standard deviation of 35 cycles. Assuming that fatigue life follows a normal distribution and the population variances are equal, compute the t-statistic.",
  "o": [
   "2.27",
   "2.45",
   "2.61",
   "2.08"
  ],
  "a": 1,
  "e": "Pooled variance: $s_p^2=\\dfrac{19(40^2)+17(35^2)}{36}=1413.9$, $s_p=37.6$. $t=\\dfrac{620-590}{37.6\\sqrt{1/20+1/18}}=\\dfrac{30}{12.26}=2.45$."
 },
 {
  "m": 6,
  "src": "assignment",
  "q": "Two manufacturing plants produce identical ball bearings. A quality engineer wants to compare the average diameter of the bearings produced by the two plants. A random sample of 64 bearings from Plant A has a mean diameter of 50.8 mm. The population standard deviation is known to be 2.4 mm. A random sample of 100 bearings from Plant B has a mean diameter of 49.6 mm. The population standard deviation is known to be 2.0 mm. Construct the 95% confidence interval for the difference between the population mean diameters.",
  "o": [
   "(0.72 mm, 1.68 mm)",
   "(0.30 mm, 2.10 mm)",
   "(0.95 mm, 1.45 mm)",
   "(0.49 mm, 1.90 mm)"
  ],
  "a": 3,
  "e": "Known $\\sigma$ so use $z$: difference $=50.8-49.6=1.2$; $SE=\\sqrt{2.4^2/64+2^2/100}=\\sqrt{0.09+0.04}=0.361$; margin $=1.96\\times0.361=0.71$. The CI is about $(0.49,1.91)$."
 },
 {
  "m": 6,
  "src": "assignment",
  "q": "A new rocket-launching system is being considered for the deployment of small, short-range rockets. During experimental testing, 34 out of 40 launches were successful. Construct the 95% confidence interval for the true probability of a successful launch.",
  "o": [
   "(0.23, 0.36)",
   "(0.27, 0.38)",
   "(0.26, 0.39)",
   "(0.74, 0.96)"
  ],
  "a": 3,
  "e": "$\\hat p=34/40=0.85$. $\\hat p\\pm1.96\\sqrt{0.85\\times0.15/40}=0.85\\pm0.11$, i.e. $(0.74,0.96)$. The other options are centred far from 0.85."
 },
 {
  "m": 8,
  "src": "assignment",
  "q": "A researcher wants to compare the average number of cycles to failure for components produced using four different material types (A, B, C, and D). Ten components are tested for each material type, and the number of cycles to failure is recorded. The researcher uses a one-way ANOVA to determine whether the average cycles to failure differ among the four material types. What does the null hypothesis of the one-way ANOVA state?",
  "o": [
   "The variability in cycles to failure is the same for all four material types.",
   "The mean number of cycles to failure is the same for Material A, Material B, Material C, and Material D",
   "The cycles to failure of all components are exactly equal across the four material types.",
   "At least one material type has a significantly different distribution of cycles to failure."
  ],
  "a": 1,
  "e": "One-way ANOVA tests $H_0:\\mu_A=\\mu_B=\\mu_C=\\mu_D$ (equal means). It is not about equal variances (an assumption) and the alternative is that at least one mean differs."
 },
 {
  "m": 8,
  "src": "assignment",
  "q": "A team of engineers is evaluating the durability of three different protective coatings applied to steel components. Each coating group consists of 10 samples tested under identical corrosive conditions, and the corrosion depth (in mm) is measured after 500 hours. The researchers plan to use a one-way ANOVA to compare the mean corrosion depth across the three coating groups. Which of the following is NOT an assumption of one-way ANOVA?",
  "o": [
   "The samples in each coating group are randomly selected and independent of the samples in the other groups.",
   "The response variable (corrosion depth) has unequal variances across the three coating groups.",
   "The response variable (corrosion depth) has equal variances across the three coating groups.",
   "The response variable (corrosion depth) is approximately normally distributed within each coating group."
  ],
  "a": 1,
  "e": "Equal variances (homogeneity) is an ASSUMPTION of one-way ANOVA, so 'unequal variances' is the statement that is NOT an assumption. The others (independence, normality, equal variance) are assumed."
 },
 {
  "m": 8,
  "src": "assignment",
  "q": "In One-way ANOVA, what is the relationship between MSE (Mean Square error) and SSE (Error sum of square)? (Given, $a$ = no of levels of a single factor; $n$ = no of observations per level; $N = a \\cdot n$)",
  "o": [
   "$MSE = \\frac{SSE}{N+a}$",
   "$MSE = \\frac{SSE}{N-a}$",
   "$MSE = SSE \\times (N+a)$",
   "$MSE = SSE \\times (N-a)$"
  ],
  "a": 1,
  "e": "$MSE=SSE/df_{error}$ and $df_{error}=N-a$ (each of the $a$ groups loses one d.f. to its own mean). Mean squares are sums of squares DIVIDED by d.f., never multiplied."
 },
 {
  "m": 8,
  "src": "assignment",
  "q": "What are the degrees of freedom for the between-groups variation and within-groups variation, respectively?",
  "o": [
   "3 and 20",
   "2 and 18",
   "2 and 17",
   "3 and 18"
  ],
  "a": 1,
  "e": "Between-groups d.f. $=k-1=2$ for 3 groups; within-groups d.f. $=N-k=21-3=18$. The total d.f. $N-1=20$ equals $2+18$."
 },
 {
  "m": 8,
  "src": "assignment",
  "q": "Calculate the sum of squares within groups (SSW).",
  "o": [
   "150",
   "270",
   "420",
   "690"
  ],
  "a": 0,
  "e": "SSW is the sum of squared deviations of each observation from its own group mean (random scatter inside groups); the key value is 150. The data table was not captured in the screenshot, so the working is not reproduced here: remember $SSW=SST-SSB$."
 },
 {
  "m": 8,
  "src": "assignment",
  "q": "Which of the following relationships is True as per the formulation of one-way ANOVA? Given, $SS_{Treatments}$ = Treatments Sum of Squares, $\\sigma^2$ = population variance, and $a$ = no of levels of a single factor",
  "o": [
   "$\\frac{SS_{Treatment}}{a+1} = \\sigma^2$",
   "$\\frac{SS_{Treatment}}{a-1} = \\sigma^2$",
   "$SS_{Treatments} \\times (a+1) = \\sigma^2$",
   "$SS_{Treatments} \\times (a-1) = \\sigma^2$"
  ],
  "a": 1,
  "e": "Under $H_0$ the treatment mean square is an unbiased estimate of the common variance: $E[SS_{Treatment}/(a-1)]=\\sigma^2$. It is divided by $a-1$, the treatment degrees of freedom."
 },
 {
  "m": 8,
  "src": "assignment",
  "q": "A company is testing the strength of panels produced using four different curing temperatures: 150C, 175C, 200C, and 225C. Six panels are tested at each temperature, and their strength values are recorded. The ANOVA summary is: $SS_{Total}$ = 1200, $SS_{Treatment}$ = 720, SSE = 480, $df_{Treatments}$ = 3, $df_{Error}$ = 20. The proportion of total variability is explained by curing temperature?",
  "o": [
   "0.60",
   "0.45",
   "0.50",
   "0.35"
  ],
  "a": 0,
  "e": "Proportion explained $=SS_{Treatment}/SS_{Total}=720/1200=0.60$ (this is $\\eta^2$, the ANOVA analogue of $R^2$)."
 },
 {
  "m": 8,
  "src": "assignment",
  "q": "An engineering team is evaluating the performance of industrial cooling fans under three different operating conditions: standard voltage, reduced voltage, and elevated voltage. After 200 hours of operation, each fan is assigned a performance score on a continuous scale from 0 to 100. Independent samples of fans are tested under each of the three operating conditions, and the researchers want to determine whether the mean performance scores differ significantly among the three groups. Which statistical test is most appropriate for this analysis?",
  "o": [
   "Correlation analysis",
   "Analysis of Variance (ANOVA)",
   "Chi-Square test",
   "Paired t-Test"
  ],
  "a": 1,
  "e": "Comparing mean scores of THREE independent groups on a continuous response is the textbook case for one-way ANOVA. Paired $t$ is for matched pairs, chi-square for categorical counts, correlation for association between two variables."
 },
 {
  "m": 8,
  "src": "assignment",
  "q": "A researcher wants to compare the means of five independent groups. Two approaches are being considered: (1) performing separate t-tests for every possible pair of groups, or (2) performing a single one-way ANOVA. If each individual test is conducted at a significance level of 0.05, which of the following statements is correct?",
  "o": [
   "Multiple pairwise t-tests have a higher overall probability of making a Type I error than a single ANOVA.",
   "Multiple pairwise t-tests and ANOVA have the same overall Type I error probability.",
   "A single ANOVA has a higher overall probability of making a Type I error than multiple pairwise t-tests.",
   "The number of groups does not affect the overall Type I error probability of multiple t-tests."
  ],
  "a": 0,
  "e": "Each test at $\\alpha=0.05$ adds Type I error risk. For five groups there are 10 pairs, so family-wise error $\\approx1-0.95^{10}=0.40$, much higher than the single ANOVA's 0.05."
 },
 {
  "m": 8,
  "src": "assignment",
  "q": "A company compares the performance of three types of bearings (A, B, and C). The ANOVA summary gives the following values: $SS_{Total}$ = 960, $SS_{Treatments}$ = 600, SSE = 360. If each type has 8 observations, what are the mean square for treatments (MST), mean square error (MSE), and F-statistic, respectively?",
  "o": [
   "MST = 300, MSE = 30, F = 10",
   "MST = 200, MSE = 17.6, F = 18",
   "MST = 300, MSE = 17.14, F = 17.5",
   "MST = 200, MSE = 30, F = 6.67"
  ],
  "a": 2,
  "e": "$a=3$, $n=8$, $N=24$. $MST=600/(3-1)=300$, $MSE=360/(24-3)=17.14$, $F=300/17.14=17.5$."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "A maintenance engineer ranks 40 industrial machines according to failure severity and maintenance priority. The rankings contain several tied values, and the variables are ordinal rather than continuous. Which method is most appropriate?",
  "o": [
   "Pearson Correlation",
   "Spearman Rank Correlation",
   "Chi-Square Test",
   "Linear Regression"
  ],
  "a": 1,
  "e": "Ordinal ranks with ties and non-continuous data call for a rank-based measure: Spearman's $\\rho$ (monotonic association). Pearson needs continuous, linear relationships."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "For Spearman's rank correlation, if the correlation coefficient is 0.7 and $\\sum_{i=1}^{n} d_i^2 = 49.5$ then the value of sample size 'n' is:",
  "o": [
   "99",
   "20",
   "10",
   "990"
  ],
  "a": 2,
  "e": "$\\rho=1-\\dfrac{6\\sum d^2}{n(n^2-1)}$: $0.7=1-\\dfrac{297}{n(n^2-1)}\\Rightarrow n(n^2-1)=990\\Rightarrow n=10$."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "A reliability engineer studies the relationship between bearing temperature and machine vibration using data collected from 30 industrial machines. The Pearson correlation coefficient is found to be $r = 0.58$. Test whether the correlation is statistically significant at the 5% significance level (two-tailed). Which of the following statements is correct?",
  "o": [
   "The correlation is not significant because the computed t-value is less than the critical value.",
   "The computed t-value is approximately 3.76, and the correlation is significant at the 5% level.",
   "The degrees of freedom are 30, and the correlation is significant because the p-value is greater than 0.05.",
   "The correlation is not significant because $r < 0.60$."
  ],
  "a": 1,
  "e": "$t=r\\sqrt{n-2}/\\sqrt{1-r^2}=0.58\\sqrt{28}/\\sqrt{0.6636}=3.77$ with 28 d.f. The critical value is about 2.048, so the correlation is significant at 5%. The d.f. is $n-2$, not $n$."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "Which of the following three cases depicts 'no correlation' between the two variables X and Y? (Three scatter plots: Case 1 with positive-slope fitted line, Case 2 with negative-slope fitted line, Case 3 with a flat horizontal fitted line)",
  "o": [
   "Case 1 (Plot in the left)",
   "Case 2 (Plot in the center)",
   "Case 3 (Plot in the right)",
   "None of the plots depicts 'no correlation'"
  ],
  "a": 2,
  "e": "No correlation is shown by a flat (zero-slope) fitted line, where $Y$ does not change with $X$. Positive and negative slopes indicate positive and negative correlation."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "In order to find out the correlation between an independent variable X and a dependent variable Y, following information is available. $\\sum_{i=1}^{n}(Y_i-\\bar{Y})(X_i-\\bar{X}) = 466$, $\\sum_{i=1}^{n}(X_i-\\bar{X})^2 = 234$, $\\sum_{i=1}^{n}(Y_i-\\bar{Y})^2 = 1434$. What is the value of Karl Pearson's coefficient of Correlation between X and Y?",
  "o": [
   "-0.6485",
   "0.6485",
   "0.8045",
   "-0.8045"
  ],
  "a": 2,
  "e": "$r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}=\\dfrac{466}{\\sqrt{234\\times1434}}=\\dfrac{466}{579.3}=0.8045$. The sign follows $S_{xy}$ (positive)."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "A reliability engineer wants to determine the strength of the relationship between machine operating temperature and vibration amplitude, both measured as continuous variables. Which statistical technique is most appropriate?",
  "o": [
   "Regression Analysis",
   "Pearson Correlation Analysis",
   "Chi-Square Analysis",
   "Cramer's V Correlation"
  ],
  "a": 1,
  "e": "Two continuous variables, and the aim is the STRENGTH of their linear association, so use Pearson correlation. Regression predicts one variable from another; chi-square and Cramér's V are for categorical data."
 },
 {
  "m": 11,
  "src": "assignment",
  "q": "A predictive maintenance system classifies the condition of industrial equipment into Low Risk, Medium Risk, or High Risk of failure using operational data. Which of the following statements about Multinomial Logistic Regression is correct?",
  "o": [
   "It predicts the remaining useful life (RUL) of equipment as a continuous value.",
   "It estimates the probability that equipment belongs to one of several failure-risk categories.",
   "It can classify equipment only into Healthy or Failed states.",
   "It assumes that the equipment lifetime follows an Exponential distribution."
  ],
  "a": 1,
  "e": "Multinomial logistic regression generalises binary logistic regression to more than two unordered classes (Low/Medium/High risk), giving a probability for each class. It does not predict a continuous RUL."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "A reliability engineer ranks 10 industrial pumps according to their predicted reliability before deployment and their observed reliability after one year of operation. The rankings are shown below. Pump P1-P10; Predicted Reliability Rank: 1,2,3,4,5,6,7,8,9,10; Observed Reliability Rank: 2,1,4,3,6,5,8,7,10,9. What is the Spearman's rank correlation coefficient ($\\rho$) between the predicted and observed reliability rankings?",
  "o": [
   "0.36",
   "0.48",
   "0.88",
   "0.94"
  ],
  "a": 3,
  "e": "$d_i=\\pm1$ for all 10 pumps, so $\\sum d^2=10$. $\\rho=1-\\dfrac{6(10)}{10(99)}=0.94$."
 },
 {
  "m": 8,
  "src": "assignment",
  "q": "Three distinct types of food are tested on three separate groups of rats over a span of six weeks. Applying a one-way ANOVA with a significance level of $\\alpha$ = 0.05, choose the correct option. Data: Food I: 8,12,19,8,6,11; Food II: 4,5,4,6,9,7; Food III: 11,8,7,13,7,9.",
  "o": [
   "There is no variation in the mean weight as the null hypothesis is rejected.",
   "There is no variation in the mean weight as the null hypothesis cannot be rejected.",
   "There is a variation in the mean weight as the null hypothesis is rejected.",
   "There is a variation in the mean weight as the null hypothesis cannot be rejected."
  ],
  "a": 1,
  "e": "$SSB=73.4$, $SSW=155$, $F=(73.4/2)/(155/15)=3.55$. The critical value $F_{0.05,2,15}=3.68$, so $F<F_{crit}$: do NOT reject $H_0$ (no evidence the mean weights differ). Failing to reject is not proof that the means are identical."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "A reliability engineer models the lifetime T of a component using simple linear regression with operating temperature as the predictor. Which assumption is most critical for the least squares estimator to remain unbiased?",
  "o": [
   "Predictor values are normally distributed.",
   "Error terms have zero mean conditioned on the predictor.",
   "Lifetime must follow a normal distribution.",
   "Predictor must be binary."
  ],
  "a": 1,
  "e": "OLS is unbiased when $E[\\varepsilon|X]=0$ (errors have zero mean given the predictor). Normality of $X$ or of $T$ is not required; normal errors are only needed for exact small-sample inference."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "Suppose the coefficient of determination for a reliability degradation model is $R^2$=0.96. Which statement is correct?",
  "o": [
   "96% of failures are correctly classified.",
   "96% of the variation in degradation is explained by the model.",
   "The prediction error is exactly 4%.",
   "The regression coefficients are unbiased."
  ],
  "a": 1,
  "e": "$R^2=1-SSE/SST$ is the fraction of variation in the response explained by the model. It does not mean 96% classification accuracy and says nothing about coefficient bias."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "To estimate the reliability of a complex engineering system, an analyst includes operating temperature, pressure, humidity, vibration level, and lubricant viscosity as predictors in a multiple linear regression model. After adding an additional variable that has no actual relationship with reliability, which statement is always true?",
  "o": [
   "The Sum of Squared Errors (SSE) cannot increase.",
   "The coefficient of determination ($R^2$) must decrease.",
   "The prediction accuracy on future data must improve.",
   "All regression coefficients become statistically insignificant."
  ],
  "a": 0,
  "e": "Adding a predictor can't increase SSE (least squares can set its coefficient to 0), so $R^2$ cannot decrease. But that does not mean the model predicts better on new data (overfitting), and the other coefficients are not necessarily affected."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "A reliability engineer investigates whether the initial reliability score of industrial bearings measured after factory testing can be used to predict their reliability score after one year of field operation. The reliability scores (out of 100) for 15 bearings are given below. Initial Reliability Score: 82,73,95,66,84,89,51,82,75,90,60,81,34,49,87; Reliability Score After One Year: 76,83,89,76,79,73,62,89,77,85,48,69,51,25,74. Using simple linear regression, estimate the relationship between the initial reliability score and the reliability score after one year. Based on the fitted regression model,",
  "o": [
   "0.7651X + 14.3956",
   "12.8X - 234.56",
   "14.21X - 512.78",
   "15.6X - 312.65"
  ],
  "a": 0,
  "e": "$b=S_{xy}/S_{xx}=0.7651$ and $a=\\bar y-b\\bar x=14.40$, so $\\hat y=14.40+0.7651x$. Slopes like 12.8 are impossible for scores on a 0–100 scale."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "Match List-I with List-II. List-I (Correlation Measure): P. Point-biserial correlation, Q. Pearson correlation, R. Cramer's V, S. Spearman correlation. List-II (Data Type / Application): 1. Monotonic relationship between ranked variables, 2. Association between two categorical variables, 3. One continuous and one binary variable, 4. Linear relationship between two continuous variables. Which of the following is the correct matching?",
  "o": [
   "P-3, Q-4, R-2, S-1",
   "P-4, Q-3, R-1, S-2",
   "P-3, Q-1, R-4, S-2",
   "P-2, Q-4, R-3, S-1"
  ],
  "a": 0,
  "e": "Point-biserial: one continuous + one binary variable. Pearson: linear, two continuous. Cramér's V: two categorical variables. Spearman: monotonic relation between ranks."
 },
 {
  "m": 11,
  "src": "assignment",
  "q": "A binary logistic regression model is given by $P(Y=1|X) = \\frac{1}{1+e^{-z}}$ where $z = -2 + 0.8X_1 - 0.5X_2$. For a particular observation, $X_1 = 4$, $X_2 = 3$ and the classification threshold is 0.5. Below the threshold 0.5, the predicted class is 0 and above threshold 0.5, the predicted class is 1. Which of the following is correct?",
  "o": [
   "$z = -0.3$, $P(Y=1|X) \\approx 0.426$, therefore Class 0",
   "$z = 0.3$, $P(Y=1|X) \\approx 0.632$, therefore Class 1",
   "$z = -0.7$, $P(Y=1|X) \\approx 0.332$, therefore Class 0",
   "$z = -0.7$, $P(Y=1|X) \\approx 0.668$, therefore Class 1"
  ],
  "a": 0,
  "e": "$z=-2+0.8(4)-0.5(3)=-0.3$. $p=1/(1+e^{0.3})=0.426<0.5$, so predict Class 0."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "A simple linear regression model of the form $Y = a + bX$ is used to compute the relationship between the variables X and Y. Suppose there are $n$ sample points, $(x_i, y_i), i = 1,2,...,n$, and $\\bar{x}$ and $\\bar{y}$ are their corresponding means. The value of linear regression model coefficient $b$ is given by?",
  "o": [
   "$b = \\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum(x_i-\\bar{x})^2}$",
   "$b = \\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum(y_i-\\bar{y})^2}$",
   "$b = \\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum(x_i-\\bar{x})^2 \\sum(y_i-\\bar{y})^2}$",
   "$b = \\frac{\\sum(x_i-\\bar{x})}{\\sum(y_i-\\bar{y})^2}$"
  ],
  "a": 0,
  "e": "Least squares minimises squared errors and gives $b=\\dfrac{S_{xy}}{S_{xx}}$, covariance of $X,Y$ divided by variance of $X$. Dividing by $S_{yy}$ would be a different quantity."
 },
 {
  "m": 11,
  "src": "assignment",
  "q": "A logistic regression model for predicting equipment failure is $\\log\\left(\\frac{p}{1-p}\\right) = -2.5 + 0.8x$, where $x$ denotes operating stress. Which interpretation of the coefficient 0.8 is correct?",
  "o": [
   "Failure probability increases exactly by 0.8.",
   "Each unit increase in stress multiplies the odds of failure by $e^{0.8}$.",
   "The reliability decreases by exactly 80%.",
   "The logit decreases by 0.8 for every unit increase in stress."
  ],
  "a": 1,
  "e": "The model is linear in the log-odds, so each unit of $x$ adds 0.8 to the log-odds, which multiplies the odds by $e^{0.8}$. It does not change the probability by a fixed amount because the sigmoid is non-linear."
 },
 {
  "m": 11,
  "src": "assignment",
  "q": "A manufacturer develops a model to predict whether a turbine blade will fail within one year (Failure = 1, No Failure = 0) based on operating stress. Why is logistic regression generally preferred over ordinary linear regression?",
  "o": [
   "Logistic regression minimizes SSE more effectively.",
   "Logistic regression estimates event probabilities between 0 and 1 using Maximum Likelihood Estimation.",
   "Logistic regression requires fewer observations.",
   "Logistic regression assumes the response variable follows a normal distribution."
  ],
  "a": 1,
  "e": "A binary outcome needs predictions in $[0,1]$. Logistic regression models $P(Y=1)$ via the sigmoid and is fitted by maximum likelihood. Linear regression can predict outside [0,1] and assumes normal, constant-variance errors."
 },
 {
  "m": 10,
  "src": "assignment",
  "q": "A company records the hourly workload of a server over several days. An Auto-Regressive model AR(p) is used to forecast the next hour's server workload from the previous p hours' observations, with the model coefficients estimated using the Yule-Walker equations. Why is an AR model more appropriate here than an ordinary simple linear regression of server workload against hour number?",
  "o": [
   "AR models do not require historical observations, unlike simple linear regression.",
   "AR models account for the autocorrelation between current and past server-workload values, whereas regression against hour number does not explicitly model this serial dependence.",
   "Simple linear regression against hour number is mathematically identical to an AR(1) model.",
   "Yule-Walker equations can only be used when server workload remains constant over time."
  ],
  "a": 1,
  "e": "Workload at hour $t$ depends on recent past hours (autocorrelation). AR($p$) models that serial dependence directly; regression on hour number only captures a trend and ignores it. Yule–Walker equations estimate AR coefficients from the autocorrelations."
 },
 {
  "m": 11,
  "src": "assignment",
  "q": "An engineer models the probability of bearing failure (Failure = 1, No Failure = 0) using temperature, vibration amplitude, and rotational speed. During parameter estimation, the objective function being maximized is",
  "o": [
   "Sum of squared residuals",
   "Mean Absolute Error",
   "Log-likelihood",
   "Coefficient of Determination ($R^2$)"
  ],
  "a": 2,
  "e": "Logistic regression is fitted by maximum likelihood, so the objective maximised is the log-likelihood. Sum of squared residuals and $R^2$ belong to least squares."
 },
 {
  "m": 11,
  "src": "assignment",
  "q": "In predictive maintenance, suppose all sensor readings increase proportionally, yet the estimated probability of failure remains nearly unchanged. The most likely explanation is",
  "o": [
   "Logistic regression predicts continuous outputs.",
   "Estimated coefficients corresponding to those variables are close to zero.",
   "The sigmoid function becomes linear.",
   "Log-likelihood always remains constant."
  ],
  "a": 1,
  "e": "If $\\hat p$ barely changes when a variable changes, the effect $\\beta x$ is tiny, so the coefficient is close to 0. The sigmoid is never linear and the log-likelihood changes with the data."
 },
 {
  "m": 11,
  "src": "assignment",
  "q": "The sigmoid (logistic) function used in logistic regression is given by $f(x)=\\frac{1}{1+e^{-x}}$. Which of the following is the first-order differentiation of $f(x)$ w.r.t. x?",
  "o": [
   "$f'(x)=f(x)(1-f(x))$",
   "$f'(x)=f(x)(1+f(x))$",
   "$f'(x)=f(x)/(1-f(x))$",
   "$f'(x)=1+f(x)/(1-f(x))$"
  ],
  "a": 0,
  "e": "$f'(x)=\\dfrac{e^{-x}}{(1+e^{-x})^2}=f(x)\\cdot\\dfrac{e^{-x}}{1+e^{-x}}=f(x)(1-f(x))$."
 },
 {
  "m": 11,
  "src": "assignment",
  "q": "A reliability engineer develops a logistic regression model to predict whether an industrial pump will fail within the next 100 operating hours. The estimated coefficient for operating temperature is statistically significant and positive. However, during deployment, the engineer decides to double the unit of temperature measurement from °C to °F without refitting the model. Which statement is MOST appropriate?",
  "o": [
   "The predicted probabilities remain identical because the sigmoid function is unit-invariant.",
   "The predicted probabilities become incorrect because the regression coefficients correspond to the original measurement scale.",
   "The intercept changes automatically, keeping predictions unchanged.",
   "Only the odds change, while the probabilities remain unchanged."
  ],
  "a": 1,
  "e": "The coefficient was fitted for the original unit. Changing the unit of the input without refitting changes the value fed into $\\beta x$, so predictions are no longer consistent. (A unit change should be accompanied by rescaling $\\beta$.)"
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "What does the term \"overfitting\" refer to in Machine Learning?",
  "o": [
   "When a model performs well on the training data but poorly on new data",
   "When a model performs well on new data but poorly on the training data",
   "When a model perfectly fits the training data",
   "When a model is too simple to capture the underlying patterns"
  ],
  "a": 0,
  "e": "Overfitting = the model memorises noise in training data: very low training error but poor generalisation to unseen data. Underfitting is 'too simple'."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "To study the effect of operating temperature on the reliability of an industrial motor, observations were collected over 10 operating cycles. The operating temperature was categorized as High (H), Medium (M), or Low (L), and the motor condition at the end of each cycle was recorded as Failure (F) or Normal (N). What is the value of the class conditional probability of the operating temperature being High, given that the motor experienced Failure, i.e., $P(Temperature = High \\mid Condition = Failure)$. Table (cycles 1-10): Temperature = H, H, L, M, L, M, H, L, L, M; Condition = N, F, F, N, F, F, F, N, F, F.",
  "o": [
   "$\\frac{2}{7}$",
   "$\\frac{1}{5}$",
   "$\\frac{1}{6}$",
   "$\\frac{1}{7}$"
  ],
  "a": 0,
  "e": "$P(H|F)$: of the 7 failure cycles (2,3,5,6,7,9,10), 2 have High temperature (cycles 2 and 7), so $2/7$."
 },
 {
  "m": 11,
  "src": "assignment",
  "q": "A logistic regression model for predicting machine failure contains a vibration coefficient of 0.75. What does this coefficient imply?",
  "o": [
   "A one-unit increase in vibration increases the failure probability by exactly 75%.",
   "A one-unit increase in vibration multiplies the odds of failure by $\\exp(0.75)$, assuming other variables remain constant.",
   "A one-unit increase in vibration decreases the failure probability by 0.75.",
   "Vibration has no effect unless the predicted probability exceeds 0.5."
  ],
  "a": 1,
  "e": "In logistic regression $e^{\\beta}$ is the odds ratio for a one-unit increase with the other variables fixed, so $e^{0.75}\\approx2.12$ times the odds. It is not a fixed change in probability."
 },
 {
  "m": 9,
  "src": "assignment",
  "q": "For the data points $(1,2)$, $(2,3)$, and $(3,5)$, consider the simple linear regression model $\\hat{y}=\\beta_0+\\beta_1 x$. Using the least-squares method, what are the values of $\\beta_0$ and $\\beta_1$?",
  "o": [
   "$\\beta_0=0.33, \\beta_1=1.50$",
   "$\\beta_0=0.33, \\beta_1=1.67$",
   "$\\beta_0=1.00, \\beta_1=1.50$",
   "$\\beta_0=0.50, \\beta_1=1.67$"
  ],
  "a": 0,
  "e": "$\\bar x=2$, $\\bar y=10/3$, $S_{xy}=3$, $S_{xx}=2$, so $\\beta_1=1.5$ and $\\beta_0=3.33-1.5\\times2=0.33$."
 },
 {
  "m": 11,
  "src": "assignment",
  "q": "A study is conducted to find the relationship between the number of hours spent in physical exercise and passing the fitness examination. Data is collected for a total of 10 Indian army aspirants: Hrs. exercise = 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5; Pass/Fail = F, F, F, P, F, F, P, P, P, P. To study how the number of hours spent in physical exercise affects the probability of the aspirant passing the fitness test, among below, which kind of analysis is most suitable?",
  "o": [
   "Multiple Non-linear regression",
   "Multiple Linear regression",
   "Logistic Regression",
   "None of the above"
  ],
  "a": 2,
  "e": "The response (pass/fail) is binary and the predictor (hours) is continuous, so logistic regression is the standard tool. Linear regression is unsuitable for a 0/1 response."
 },
 {
  "m": 11,
  "src": "assignment",
  "q": "A reliability engineer develops the following logistic regression model to predict whether an industrial bearing will fail during the next operating cycle: $\\log\\left(\\frac{p}{1-p}\\right)=-5+0.12T$ where $p$ = probability of bearing failure, $T$ = operating temperature (°C). What is the correct engineering interpretation of the coefficient 0.12?",
  "o": [
   "Every 1°C increase raises the probability of failure by exactly 12%.",
   "Every 1°C increase increases the log-odds of bearing failure by 0.12.",
   "Every 1°C increase multiplies the probability of failure by 0.12.",
   "Operating temperature has no effect on the probability of failure."
  ],
  "a": 1,
  "e": "In logit form each 1°C adds 0.12 to the log-odds (multiplies the odds by $e^{0.12}\\approx1.13$). The effect on probability depends on the starting level, so it is not exactly 12% or a factor of 0.12."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "A reliability engineer builds a Naive Bayesian classifier to predict whether a hydraulic pump will be Operational or Failed, using categorical condition-monitoring attributes: Temperature (High/Normal), Vibration (High/Normal), and Load (Heavy/Light). Which assumption of the Naive Bayesian classifier is most critical to this formulation?",
  "o": [
   "All attributes must be numeric and continuous-valued.",
   "The attributes are conditionally independent of one another, given the class label.",
   "The Operational and Failed classes must overlap significantly in feature space.",
   "The prior probabilities of Operational and Failed must be exactly equal."
  ],
  "a": 1,
  "e": "Naive Bayes assumes that attributes are conditionally independent given the class, so $P(x_1,x_2,x_3|C)=\\prod P(x_i|C)$. It does not need equal priors or numeric features."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "A reliability team recorded the condition and outcome of a hydraulic pump over 10 maintenance shifts, shown below. Using a Naive Bayesian classifier, determine the predicted class for a new instance: Shift = Weekday, Load = Heavy, Vibration = High. Table (Record: Shift, Load, Vibration, Class): 1 Weekday Heavy High Failed; 2 Weekday Normal None Operational; 3 Weekend Light None Operational; 4 Weekday Heavy Normal Operational; 5 Weekend Heavy High Failed; 6 Weekday Normal High Failed; 7 Weekday Light None Operational; 8 Weekend Normal None Operational; 9 Weekday Heavy High Failed; 10 Weekend Light Normal Operational.",
  "o": [
   "Operational, because Heavy load and High vibration are common attribute values overall in the dataset.",
   "Failed, because the class-conditional probability computed for Operational collapses to zero, while Failed remains non-zero.",
   "Operational, because the majority class in the dataset (6 out of 10 records) is Operational.",
   "The classifier cannot make a prediction since the test instance does not exactly match any training record."
  ],
  "a": 1,
  "e": "Operational records (2,3,4,7,8,10) never have Vibration = High, so $P(\\text{High}|O)=0$ and the whole Operational product is 0. For Failed (records 1,5,6,9): $P(F)=0.4$, $P(\\text{Weekday}|F)=3/4$, $P(\\text{Heavy}|F)=3/4$, $P(\\text{High}|F)=1$, giving $0.4\\times0.75\\times0.75\\times1=0.225>0$. Failed is predicted; this is the zero-frequency problem."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "In the pump maintenance dataset of Question 2, the class-conditional probability P(Vibration = High | Operational) = 0 causes the posterior probability of the Operational class to vanish entirely, irrespective of how strongly the other attributes favor it. Which technique is specifically used in Bayesian classification to overcome this zero-probability problem?",
  "o": [
   "Simply collecting more training records, with no change to the probability estimation formula.",
   "The m-estimate (Laplace / additive smoothing) of probability, which adds a small correction so that no class-conditional probability is ever exactly zero.",
   "Removing the Vibration attribute entirely from the model.",
   "Assuming equal prior probabilities for all classes, regardless of the class distribution in the data."
  ],
  "a": 1,
  "e": "A single zero conditional probability wipes out the whole product. Laplace/m-estimate smoothing adds a pseudo-count so no probability is exactly zero. Collecting some more data or dropping the attribute does not fix the estimator."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "A reliability engineer classifies incoming vibration-signature samples from a rotating machine as Healthy or Faulty using a k-Nearest Neighbor (kNN) classifier trained on historical labeled sensor readings. Which of the following correctly explains why kNN is described as a \"lazy learner\"?",
  "o": [
   "It defers all computation until a test sample is presented, without building any explicit model or mathematical relationship during the training phase.",
   "It requires very little memory, since it discards the training data once training is complete.",
   "It converges very slowly during training because it relies on iterative gradient descent.",
   "It builds a fixed mathematical equation relating sensor features to the class label during training, similar to logistic regression."
  ],
  "a": 0,
  "e": "kNN keeps the training data and does all work (distance calculations) at prediction time; no model is built in training. That is what 'lazy' means. It needs to store all the data, so memory is NOT small."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "A bearing-fault kNN classifier uses two vibration-derived features (RMS amplitude, Kurtosis). Healthy training points are A(1, 2), B(2, 0.5), C(0, 1); Faulty training points are D(5, 5), E(6, 3.5), F(4, 6). A new test sample is recorded at T(3, 3). What is the predicted class of T using k = 1, k = 3, and k = 5 respectively?",
  "o": [
   "Healthy, Healthy, Faulty",
   "Healthy, Faulty, Faulty",
   "Faulty, Healthy, Healthy",
   "Faulty, Faulty, Healthy"
  ],
  "a": 0,
  "e": "Distances from $T(3,3)$ (squared): A=5, B=7.25, D=8, E=9.25, F=10, C=13. $k=1$: A (Healthy). $k=3$: A,B,D: 2 Healthy, 1 Faulty, so Healthy. $k=5$: A,B,D,E,F: 2 Healthy, 3 Faulty, so Faulty."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "Consider the following training dataset (Sample: F1, F2, Category): S1: 1,2,X; S2: 2,3,X; S3: 3,4,Y; S4: 4,4,Y; S5: 5,5,Y; S6: 6,5,X; S7: 7,6,X; S8: 8,7,Y; S9: 9,8,Y; S10: 10,9,Y. A new sample Q=(5,4) is to be classified using the K-Nearest Neighbors (KNN) algorithm with Euclidean distance. Which option gives the correct predicted category for Q when K=1 and K=5?",
  "o": [
   "K = 1 → X; K = 5 → X",
   "K = 1 → Y; K = 5 → Y",
   "K = 1 → X; K = 5 → Y",
   "K = 1 → Y; K = 5 → X"
  ],
  "a": 1,
  "e": "Squared distances from $Q(5,4)$: S4=1, S5=1, S6=2, S3=4, S7=8. $K=1$ ties between S4 and S5, both Y. $K=5$: S4(Y), S5(Y), S6(X), S3(Y), S7(X) gives 3 Y vs 2 X, so Y."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "An SVM-based bearing-fault classifier is trained on vibration features, but the Healthy and Faulty classes cannot be perfectly separated by any straight line (or hyperplane) in the original 2D feature space. However, the classes become linearly separable after the data is mapped into a higher-dimensional space. Which SVM formulation and technique correctly addresses this situation?",
  "o": [
   "Linear SVM applied directly and only to the original 2D feature space.",
   "Non-linear SVM, using an appropriate kernel function to implicitly map the data into a higher-dimensional space where it becomes linearly separable.",
   "Naive Bayes classifier, since SVM is fundamentally unable to handle linearly non-separable data.",
   "k-NN with k=1, since distance-based classifiers never require the classes to be linearly separable."
  ],
  "a": 1,
  "e": "When classes are not linearly separable in the input space, a kernel SVM (RBF/polynomial) implicitly maps data to a higher-dimensional space where a linear separator exists, without computing the mapping explicitly. SVM does handle non-separable data."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "For a linearly separable set of pump Healthy/Failed training samples, infinitely many hyperplanes achieve zero training error. Why does SVM specifically select the Maximum Margin Hyperplane (MMH) among all of them?",
  "o": [
   "The MMH minimizes training computation time, regardless of its generalization performance on unseen data.",
   "The MMH maximizes the distance to the nearest training points of each class, which improves the classifier's generalization performance on unseen test data.",
   "The MMH always passes through the origin of the feature space, which simplifies the decision function.",
   "The MMH minimizes the total number of support vectors required for classification."
  ],
  "a": 1,
  "e": "Among all separating hyperplanes, the maximum-margin one stays as far as possible from both classes, so small perturbations in test data are less likely to be misclassified. This is the margin-based generalisation argument."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "The optimization problem used to find the Maximum Margin Hyperplane of a linear SVM fault classifier is described as a convex optimization problem. Which of the following correctly describes this problem and the classical method used to solve it?",
  "o": [
   "A linear objective function with quadratic constraints, solved using gradient descent.",
   "A quadratic objective function with linear constraints, solved using the Lagrange multiplier method.",
   "A non-convex objective function, solved using simulated annealing.",
   "A quadratic objective function with quadratic constraints, solved using dynamic programming."
  ],
  "a": 1,
  "e": "The SVM primal is to minimise $\\frac12\\|w\\|^2$ (quadratic) subject to linear constraints $y_i(w^Tx_i+b)\\ge1$. It is a convex QP solved with Lagrange multipliers (KKT conditions, dual form)."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "Consider a linear SVM with decision function $f(x)=w^T x+b$, where $w=\\begin{bmatrix}2\\\\-1\\end{bmatrix}$, $b=-3$ and the training samples are: $x_1=(2,1), y_1=+1$ and $x_2=(1,3), y_2=-1$. The SVM constraint is $y_i(w^T x_i+b)\\ge 1$. Which statement is correct?",
  "o": [
   "$x_1$ satisfies the constraint, but $x_2$ does not.",
   "$x_1$ does not satisfy the constraint, but $x_2$ does.",
   "Both $x_1$ and $x_2$ satisfy the constraint.",
   "Neither $x_1$ nor $x_2$ satisfies the constraint."
  ],
  "a": 1,
  "e": "$x_1$: $w^Tx_1+b=2(2)-1(1)-3=0$, so $y_1\\cdot0=0<1$: violates. $x_2$: $2(1)-3-3=-4$, so $y_2\\cdot(-4)=4\\ge1$: satisfied. Only $x_2$ satisfies the constraint."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "What is the primary purpose of the Lagrangian formulation in Support Vector Machine (SVM) optimization?",
  "o": [
   "Generate a hyperplane for a non-linear data distribution.",
   "Find the minimum margin hyperplane for a non-linear SVM classifier.",
   "Find the maximum margin hyperplane for a linear SVM classifier.",
   "Find the minimum margin hyperplane for a linear SVM classifier."
  ],
  "a": 2,
  "e": "The Lagrangian turns the constrained margin-maximisation problem (minimise $\\frac12\\|w\\|^2$ subject to the classification constraints) into an unconstrained form whose solution is the MAXIMUM-margin hyperplane for a linear SVM."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "For a linearly separable reliability dataset, the hard-margin SVM solves an optimization problem that minimizes $\\frac{1}{2}\\|w\\|^2$ subject to the classification constraints. Why does minimizing $\\|w\\|^2$ maximize the geometric margin?",
  "o": [
   "Because the geometric margin is inversely proportional to $\\|w\\|$.",
   "Because increasing $\\|w\\|$ always increases the distance between support vectors.",
   "Because minimizing $\\|w\\|$ forces all observations to become support vectors.",
   "Because $\\|w\\|$ represents the number of misclassified reliability observations."
  ],
  "a": 0,
  "e": "The distance from the margin boundary to the hyperplane is $1/\\|w\\|$ (total margin $2/\\|w\\|$), so shrinking $\\|w\\|$ makes the margin larger. Squaring just makes the objective smooth and convex."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "Column 1 of the table below contains the names of some popular kernel functions, and Column 2 contains the expressions of the kernels, but the ordering needs to be corrected. Which is the correct order? Column 1: A) linear kernel, B) Gaussian Kernel, C) Polynomial kernel, D) Laplacian kernel. Column 2: I) $(X^TY+1)^p$, II) $e^{-\\lambda\\|x-y\\|}$, III) $X^TY$, IV) $e^{\\frac{-\\|x-y\\|^2}{2\\sigma^2}}$.",
  "o": [
   "A-I; B-II; C-III; D-IV",
   "A-III; B-II; C-I; D-IV",
   "A-I; B-IV; C-III; D-II",
   "A-III; B-IV; C-I; D-II"
  ],
  "a": 3,
  "e": "Linear: $x^Ty$. Gaussian (RBF): $\\exp(-\\|x-y\\|^2/2\\sigma^2)$. Polynomial: $(x^Ty+1)^p$. Laplacian: $\\exp(-\\lambda\\|x-y\\|)$ (not squared). So A-III, B-IV, C-I, D-II."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "For an n-class classification problem, which of the following statements is True about the One Versus One (OVO) and One Versus All (OVA) strategies of multiclass classification?",
  "o": [
   "In both OVO and OVA strategies, the number of classifiers possible is n",
   "In both OVO and OVA strategies, the number of classifiers possible is n(n-1)/2",
   "In the OVO strategy, the number of classifiers possible is n(n-1)/2, whereas, in the OVA strategy, the number of classifiers possible is n",
   "In the OVO strategy, the number of classifiers possible is n, whereas, in the OVA strategy, the number of classifiers possible is n(n-1)/2"
  ],
  "a": 2,
  "e": "OvO builds one classifier per pair of classes, $\\binom n2=n(n-1)/2$. OvA builds one classifier per class (that class vs the rest), so $n$."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "Which of the following statements is False for the SVM learning strategy?",
  "o": [
   "SVM learning strategy finds only a local minimum of the objective function",
   "SVM learning strategy finds the global minimum of the objective function",
   "SVM learning strategy can also be applied to categorical data by introducing suitable similarity measures",
   "SVM learning strategy can be applied to classify both linear as well as non-linear training data efficiently"
  ],
  "a": 0,
  "e": "The SVM dual is a convex quadratic program, so it has a single GLOBAL minimum with no spurious local minima. 'Finds only a local minimum' is therefore the false statement."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "A manufacturing company collects temperature and vibration measurements from machines to classify them as normal or faulty. The two classes form concentric patterns in the feature space and cannot be separated effectively using a straight line. Which SVM approach is most appropriate?",
  "o": [
   "Linear SVM with a very large C",
   "Polynomial or RBF kernel SVM",
   "Linear SVM with zero support vectors",
   "Increasing the training-set size without changing the classifier"
  ],
  "a": 1,
  "e": "Concentric (ring) classes are not separable by a straight line. A kernel SVM (RBF or polynomial) maps the data so that a curved boundary separates them. Raising $C$ in a linear SVM can't create a curved boundary."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "A machine-learning model based on Support Vector Machines (SVM) is trained to classify machine components as Healthy or Faulty using sensor measurements. During testing, an engineer removes a few training observations that are not support vectors and retrains the SVM. The resulting decision boundary remains unchanged. Which property of SVM does this observation best illustrate?",
  "o": [
   "SVM decision boundaries are determined only by the support vectors; non-support-vector points have no influence on the final hyperplane, regardless of their position relative to the margin.",
   "SVM is a lazy learning algorithm, so the decision boundary is recomputed freshly for every new test point based on all training data.",
   "Removing any training point always changes the decision boundary, since every point contributes to the loss function equally.",
   "SVM decision boundaries depend on the density of training points near the hyperplane, not on any specific subset of points."
  ],
  "a": 0,
  "e": "The decision boundary is defined by the support vectors only (points with $\\alpha_i>0$). Deleting non-support vectors leaves the optimal hyperplane unchanged. SVM is not a lazy learner and not every point matters."
 },
 {
  "m": 12,
  "src": "assignment",
  "q": "For a soft-margin SVM, if $y_i(w^T x_i+b)=0.6$, then the minimum possible slack variable $\\xi_i$ is:",
  "o": [
   "0",
   "0.4",
   "0.6",
   "1.6"
  ],
  "a": 1,
  "e": "The soft-margin constraint is $y_i(w^Tx_i+b)\\ge1-\\xi_i$. With a margin value of 0.6, $\\xi_i\\ge1-0.6=0.4$, so the minimum slack is 0.4."
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "In the infant-mortality phase of the bathtub curve, the hazard rate is:",
  "o": [
   "Zero",
   "Constant",
   "Decreasing with time",
   "Increasing with time"
  ],
  "a": 2,
  "e": "Early failures from manufacturing/assembly defects fade as weak units are removed, so $h(t)$ decreases."
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "Which relationship between the reliability function $R(t)$ and the failure CDF $F(t)$ is correct?",
  "o": [
   "$R(t)=F(t)$",
   "$R(t)=1/F(t)$",
   "$R(t)=F(t)-1$",
   "$R(t)=1-F(t)$"
  ],
  "a": 3,
  "e": "$R(t)=P(T>t)$ and $F(t)=P(T\\le t)$ are complementary."
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "Which three elements appear in the IEC-style definition of reliability?",
  "o": [
   "Cost, size, weight",
   "Intended function, specified operating conditions, stated period of time",
   "Design, manufacture, disposal",
   "Speed, accuracy, price"
  ],
  "a": 1,
  "e": "Reliability is the capability to perform the expected job under specific conditions over an intended period."
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "Five measurements of operating hours are 12, 15, 18, 20, 25. What is the sample variance?",
  "o": [
   "4.95",
   "98",
   "24.5",
   "19.6"
  ],
  "a": 2,
  "e": "Mean = 18; $\\sum(x-\\bar x)^2=98$; divide by $n-1=4$ giving 24.5."
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "Which measure of central tendency is least affected by extreme outliers?",
  "o": [
   "Range",
   "Median",
   "Mean",
   "Standard deviation"
  ],
  "a": 1,
  "e": "The median depends on rank order only, so extreme values barely move it."
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "A component data set has mean 50 h and standard deviation 5 h. What is its coefficient of variation?",
  "o": [
   "250%",
   "1000%",
   "10%",
   "0.1 h"
  ],
  "a": 2,
  "e": "$CV=s/\\bar x=5/50=0.10$."
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "For a right-skewed lifetime distribution, which ordering is typical?",
  "o": [
   "Mean < Median",
   "Mode > Mean",
   "Mean = Median",
   "Mean > Median"
  ],
  "a": 3,
  "e": "The long right tail pulls the mean above the median."
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "The wear-out phase of the bathtub curve is characterised by:",
  "o": [
   "Zero failures",
   "Increasing hazard rate, e.g. Weibull with $\\beta>1$",
   "Decreasing hazard rate",
   "Constant hazard rate"
  ],
  "a": 1,
  "e": "Ageing, fatigue and corrosion drive failures up with time."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "A series system has three independent components with reliabilities 0.90, 0.95 and 0.80. System reliability is:",
  "o": [
   "0.995",
   "0.883",
   "0.684",
   "0.760"
  ],
  "a": 2,
  "e": "Series: $R=\\prod R_i=0.9\\times0.95\\times0.8=0.684$."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "Two independent components with reliabilities 0.9 and 0.8 are in parallel. System reliability is:",
  "o": [
   "0.72",
   "0.99",
   "0.85",
   "0.98"
  ],
  "a": 3,
  "e": "$R=1-(1-0.9)(1-0.8)=0.98$."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "For independent events with $P(A)=0.5$, $P(B)=0.4$, $P(A\\cup B)$ is:",
  "o": [
   "0.45",
   "0.70",
   "0.90",
   "0.20"
  ],
  "a": 1,
  "e": "$0.5+0.4-0.5\\times0.4=0.70$."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "1% of items are defective. A test detects 95% of defectives and falsely flags 5% of good items. $P(\\text{defective}\\mid\\text{flagged})$ is approximately:",
  "o": [
   "0.05",
   "0.95",
   "0.50",
   "0.161"
  ],
  "a": 3,
  "e": "Bayes: $0.0095/(0.0095+0.0495)\\approx0.161$ — the base rate dominates."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "Supplier 1 (60% of parts) has 2% defects; Supplier 2 (40%) has 5%. $P(\\text{defective})$ is:",
  "o": [
   "0.012",
   "0.070",
   "0.032",
   "0.035"
  ],
  "a": 2,
  "e": "Total probability: $0.6\\times0.02+0.4\\times0.05=0.032$."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "If $P(A)>0$, $P(B)>0$ and A, B are mutually exclusive, then A and B are:",
  "o": [
   "Independent",
   "Exhaustive",
   "Dependent",
   "Equal"
  ],
  "a": 2,
  "e": "$P(A\\cap B)=0\\ne P(A)P(B)$, so they cannot be independent."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "A 2-out-of-3 system has identical independent components with reliability 0.9. System reliability is:",
  "o": [
   "0.729",
   "0.810",
   "0.999",
   "0.972"
  ],
  "a": 3,
  "e": "$3(0.9)^2(0.1)+(0.9)^3=0.243+0.729=0.972$."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "$P(A\\cap B)=0.2$ and $P(B)=0.5$. Then $P(A\\mid B)$ is:",
  "o": [
   "0.4",
   "0.1",
   "0.7",
   "2.5"
  ],
  "a": 0,
  "e": "$P(A|B)=P(A\\cap B)/P(B)=0.4$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "For $X\\sim\\text{Bin}(10,0.2)$ the variance is:",
  "o": [
   "1.6",
   "8",
   "2",
   "0.16"
  ],
  "a": 0,
  "e": "$npq=10(0.2)(0.8)=1.6$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "For $X\\sim\\text{Bin}(5,0.3)$, $P(X=2)$ is approximately:",
  "o": [
   "0.0900",
   "0.3087",
   "0.1323",
   "0.5"
  ],
  "a": 1,
  "e": "$\\binom52(0.3)^2(0.7)^3=10\\times0.09\\times0.343=0.3087$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "Failures follow a Poisson process with mean 3 per month. $P(\\text{no failures in a month})$ is:",
  "o": [
   "0.5",
   "$e^{-3}\\approx0.0498$",
   "$3e^{-3}$",
   "0.3"
  ],
  "a": 1,
  "e": "$P(0)=e^{-\\lambda}\\lambda^0/0!$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "For $X\\sim\\text{Poisson}(2)$, $P(X\\le1)$ is approximately:",
  "o": [
   "0.594",
   "0.135",
   "0.271",
   "0.406"
  ],
  "a": 3,
  "e": "$e^{-2}(1+2)=3e^{-2}\\approx0.406$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "Each trial succeeds with probability 0.25. The expected number of trials until the first success is:",
  "o": [
   "4",
   "3",
   "0.25",
   "1"
  ],
  "a": 0,
  "e": "Geometric: $E[X]=1/p=4$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "A lot of 20 has 5 defectives; 3 are drawn without replacement. $P(\\text{no defectives})$ is approximately:",
  "o": [
   "0.422",
   "0.399",
   "0.125",
   "0.250"
  ],
  "a": 1,
  "e": "Hypergeometric: $\\binom{15}{3}/\\binom{20}{3}=455/1140\\approx0.399$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "Trials succeed with probability 0.5. The expected number of trials to get the 3rd success (negative binomial) is:",
  "o": [
   "9",
   "1.5",
   "3",
   "6"
  ],
  "a": 3,
  "e": "$E=r/p=3/0.5=6$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "Four items, each defective with probability 0.1 independently. $P(\\text{at least one defective})$ is:",
  "o": [
   "0.6561",
   "0.3439",
   "0.0001",
   "0.4"
  ],
  "a": 1,
  "e": "$1-(0.9)^4=1-0.6561=0.3439$."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "An exponential lifetime has $\\lambda=0.01$ per hour. $R(100)$ is:",
  "o": [
   "0.632",
   "$e^{-1}\\approx0.368$",
   "0.99",
   "$e^{-0.01}$"
  ],
  "a": 1,
  "e": "$R(t)=e^{-\\lambda t}=e^{-1}$."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "The memoryless property implies for an exponential lifetime that:",
  "o": [
   "The mean equals the variance",
   "The hazard rate increases with age",
   "Older units are more likely to fail",
   "$P(T>s+t\\mid T>s)=P(T>t)$"
  ],
  "a": 3,
  "e": "Survival so far does not change the remaining-life distribution."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "A Weibull distribution with shape $\\beta<1$ has a hazard rate that is:",
  "o": [
   "Decreasing",
   "Constant",
   "Bell-shaped",
   "Increasing"
  ],
  "a": 0,
  "e": "$h(t)=(\\beta/\\eta)(t/\\eta)^{\\beta-1}$ decreases when $\\beta<1$."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "$X\\sim N(100,15^2)$. $P(85<X<115)$ is approximately:",
  "o": [
   "0.683",
   "0.954",
   "0.997",
   "0.500"
  ],
  "a": 0,
  "e": "The interval is $\\mu\\pm1\\sigma$."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "An exponential component has $\\lambda=0.002$ per hour. Its MTTF is:",
  "o": [
   "50 hours",
   "0.002 hours",
   "5000 hours",
   "500 hours"
  ],
  "a": 3,
  "e": "$\\text{MTTF}=1/\\lambda$."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "Weibull with $\\eta=1000$ h, $\\beta=2$. $R(1000)$ equals:",
  "o": [
   "0.5",
   "$e^{-1}\\approx0.368$",
   "$e^{-2}$",
   "0.9"
  ],
  "a": 1,
  "e": "$R(t)=\\exp[-(t/\\eta)^\\beta]=e^{-1}$."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "$X\\sim\\text{Uniform}(0,10)$. $P(X>7)$ is:",
  "o": [
   "0.5",
   "0.7",
   "0.07",
   "0.3"
  ],
  "a": 3,
  "e": "Length 3 out of 10."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "For an exponential distribution the hazard rate is:",
  "o": [
   "Constant, equal to $\\lambda$",
   "Decreasing",
   "Linearly increasing",
   "Zero"
  ],
  "a": 0,
  "e": "$h(t)=f(t)/R(t)=\\lambda$."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "A population has $\\sigma=20$. The standard error of the mean for $n=100$ is:",
  "o": [
   "4",
   "20",
   "2",
   "0.2"
  ],
  "a": 2,
  "e": "$\\sigma/\\sqrt n=20/10=2$."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "The Central Limit Theorem states that for large $n$ the distribution of $\\bar X$ is approximately:",
  "o": [
   "Identical to the population shape",
   "Exponential",
   "Normal, regardless of the population shape (finite variance)",
   "Uniform"
  ],
  "a": 2,
  "e": "This is why $z$-based inference works for non-normal populations with large samples."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "$\\mu=50$, $\\sigma=10$, $n=25$. $P(\\bar X>52)$ is approximately:",
  "o": [
   "0.4207",
   "0.0228",
   "0.1587",
   "0.5"
  ],
  "a": 2,
  "e": "$SE=2$, $z=1$, so $P(Z>1)=0.1587$."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "For a normal population, $(n-1)S^2/\\sigma^2$ follows:",
  "o": [
   "$t$ with $n$ d.f.",
   "$F$ with $(n,n)$ d.f.",
   "$\\chi^2$ with $n-1$ degrees of freedom",
   "Standard normal"
  ],
  "a": 2,
  "e": "This is the basis for variance inference."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "A $t$-statistic computed from a sample of $n=12$ has how many degrees of freedom?",
  "o": [
   "11",
   "10",
   "12",
   "13"
  ],
  "a": 0,
  "e": "d.f. $=n-1$."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "To halve the standard error of the mean, the sample size must be:",
  "o": [
   "Halved",
   "Doubled",
   "Increased by 50%",
   "Quadrupled"
  ],
  "a": 3,
  "e": "$SE\\propto1/\\sqrt n$."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "The ratio of two independent sample variances from normal populations follows:",
  "o": [
   "An $F$ distribution",
   "A $t$ distribution",
   "A binomial distribution",
   "A Poisson distribution"
  ],
  "a": 0,
  "e": "$F=\\dfrac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}$."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "$\\sigma_1=4$, $n_1=16$, $\\sigma_2=6$, $n_2=36$. The standard deviation of $\\bar X_1-\\bar X_2$ is:",
  "o": [
   "$\\sqrt2\\approx1.41$",
   "10",
   "$\\sqrt{10}$",
   "2"
  ],
  "a": 0,
  "e": "$\\sqrt{16/16+36/36}=\\sqrt2$."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "Known $\\sigma=10$, $n=100$, $\\bar x=50$. The 95% CI for $\\mu$ is:",
  "o": [
   "(48.04, 51.96)",
   "(49, 51)",
   "(40, 60)",
   "(45.1, 54.9)"
  ],
  "a": 0,
  "e": "$50\\pm1.96(1)$."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "A 95% confidence interval means:",
  "o": [
   "The sample mean is 95% accurate",
   "95% of the data lie in the interval",
   "About 95% of intervals built this way would contain the true parameter",
   "There is a 95% probability the true mean is in this particular interval"
  ],
  "a": 2,
  "e": "Confidence is a property of the procedure, not of one realised interval."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "Increasing the confidence level from 95% to 99% (same data) makes the interval:",
  "o": [
   "Biased",
   "Unchanged",
   "Wider",
   "Narrower"
  ],
  "a": 2,
  "e": "A larger critical value is needed."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "Sample size needed for a 95% margin of error of 2 with $\\sigma=10$ is:",
  "o": [
   "25",
   "385",
   "97",
   "49"
  ],
  "a": 2,
  "e": "$n=(1.96\\times10/2)^2=96.04\\to97$."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "The sample variance uses divisor $n-1$ because:",
  "o": [
   "It makes $S^2$ an unbiased estimator of $\\sigma^2$",
   "It makes the estimator consistent only",
   "Samples have one fewer observation",
   "It reduces the mean"
  ],
  "a": 0,
  "e": "$E[S^2]=\\sigma^2$ with the $n-1$ divisor."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "Exponential lifetimes have sample mean 200 h. The MLE of $\\lambda$ is:",
  "o": [
   "0.5",
   "200",
   "0.05",
   "0.005"
  ],
  "a": 3,
  "e": "$\\hat\\lambda=1/\\bar x$."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "$\\hat p=0.4$, $n=100$. The approximate 95% CI for $p$ is:",
  "o": [
   "(0.304, 0.496)",
   "(0.35, 0.45)",
   "(0.39, 0.41)",
   "(0.2, 0.6)"
  ],
  "a": 0,
  "e": "$0.4\\pm1.96\\sqrt{0.4\\cdot0.6/100}=0.4\\pm0.096$."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "$n=16$, $\\bar x=20$, $s=4$, $t_{15,0.975}=2.131$. The 95% CI for $\\mu$ is approximately:",
  "o": [
   "(19, 21)",
   "(17.87, 22.13)",
   "(16, 24)",
   "(18.04, 21.96)"
  ],
  "a": 1,
  "e": "$20\\pm2.131(4/4)$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "A Type I error is:",
  "o": [
   "Rejecting a true null hypothesis",
   "Failing to reject a false null hypothesis",
   "Accepting the alternative when it is true",
   "Using the wrong test statistic"
  ],
  "a": 0,
  "e": "Its probability is $\\alpha$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "$H_0:\\mu=50$, $\\sigma=10$, $n=100$, $\\bar x=52$ (two-sided, $\\alpha=0.05$). The decision is:",
  "o": [
   "Reject $H_0$ since $z=2>1.96$",
   "Reject since $z=1$",
   "Fail to reject since $z=0.2$",
   "Fail to reject since $z=2<2.5$"
  ],
  "a": 0,
  "e": "$z=(52-50)/(10/10)=2$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "A p-value of 0.03 means:",
  "o": [
   "The test has 97% power",
   "The effect is 3% large",
   "$H_0$ is true with probability 0.03",
   "If $H_0$ were true, results at least this extreme would occur with probability 0.03"
  ],
  "a": 3,
  "e": "It is a conditional probability computed under $H_0$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "The power of a test is:",
  "o": [
   "$\\alpha$",
   "$1-\\alpha$",
   "$\\beta$",
   "$1-\\beta$, the probability of rejecting a false $H_0$"
  ],
  "a": 3,
  "e": "Power measures sensitivity."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "A $\\chi^2$ goodness-of-fit test has 5 categories and 1 parameter estimated from the data. Degrees of freedom are:",
  "o": [
   "5",
   "3",
   "2",
   "4"
  ],
  "a": 1,
  "e": "$k-1-m=5-1-1=3$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "Lowering $\\alpha$ with the same sample size generally:",
  "o": [
   "Has no effect on $\\beta$",
   "Increases power",
   "Decreases $\\beta$",
   "Increases $\\beta$ (lowers power)"
  ],
  "a": 3,
  "e": "Type I and Type II errors trade off at fixed $n$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "A $\\chi^2$ independence test on a $3\\times4$ contingency table has degrees of freedom:",
  "o": [
   "12",
   "7",
   "3",
   "6"
  ],
  "a": 3,
  "e": "$(r-1)(c-1)=2\\times3$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "Observed counts (18, 22), expected (20, 20). The $\\chi^2$ statistic is:",
  "o": [
   "4",
   "0.8",
   "0.2",
   "0.4"
  ],
  "a": 3,
  "e": "$\\sum(O-E)^2/E=4/20+4/20=0.4$."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "A one-way ANOVA has 4 groups and $N=40$ observations. The degrees of freedom (between, within) are:",
  "o": [
   "(3, 39)",
   "(4, 40)",
   "(36, 3)",
   "(3, 36)"
  ],
  "a": 3,
  "e": "$k-1=3$, $N-k=36$."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "$SSB=60$ (3 groups), $SSW=90$, $N=30$. The F statistic is:",
  "o": [
   "9",
   "4.5",
   "30",
   "0.67"
  ],
  "a": 0,
  "e": "$MSB=30$, $MSW=90/27=3.33$, $F=9$."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "Why not use many pairwise $t$-tests instead of ANOVA?",
  "o": [
   "The family-wise Type I error rate inflates",
   "$t$-tests have lower power for two groups",
   "$t$-tests require equal means",
   "ANOVA needs fewer data"
  ],
  "a": 0,
  "e": "With $m$ tests, $\\alpha_{FW}=1-(1-\\alpha)^m$."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "For 5 groups at $\\alpha=0.05$ with all pairwise tests, the family-wise error rate is about:",
  "o": [
   "0.05",
   "0.10",
   "0.40",
   "0.95"
  ],
  "a": 2,
  "e": "10 comparisons: $1-0.95^{10}\\approx0.401$."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "$SST=200$, $SSB=80$. $SSW$ is:",
  "o": [
   "120",
   "40",
   "280",
   "2.5"
  ],
  "a": 0,
  "e": "$SST=SSB+SSW$."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "The null hypothesis of one-way ANOVA is:",
  "o": [
   "At least two means are equal",
   "All group means are equal",
   "All group variances are equal",
   "The groups are independent"
  ],
  "a": 1,
  "e": "$H_0:\\mu_1=\\dots=\\mu_k$."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "Which is a standard ANOVA assumption?",
  "o": [
   "Non-negative data only",
   "Perfectly correlated groups",
   "Independent observations, normal residuals, equal variances across groups",
   "Equal sample sizes only"
  ],
  "a": 2,
  "e": "Violating these affects validity of the F test."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "An F ratio close to 1 suggests:",
  "o": [
   "The model is perfect",
   "Between-group variability is comparable to within-group variability, so no evidence against $H_0$",
   "Strong evidence of differences",
   "Errors are zero"
  ],
  "a": 1,
  "e": "Under $H_0$, $E[F]\\approx1$."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "Pearson's correlation coefficient $r$ always lies in:",
  "o": [
   "$(0,\\infty)$",
   "$[0,1]$",
   "$[-\\infty,\\infty]$",
   "$[-1,1]$"
  ],
  "a": 3,
  "e": "The sign gives direction, magnitude gives strength of linear association."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "In simple linear regression $R^2=0.81$ with a positive slope. The correlation $r$ is:",
  "o": [
   "-0.9",
   "0.9",
   "0.66",
   "0.81"
  ],
  "a": 1,
  "e": "$r=+\\sqrt{R^2}$ with the slope sign."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "Data (1,2), (2,4), (3,5), (4,7). The least-squares slope is:",
  "o": [
   "1.0",
   "1.6",
   "0.5",
   "2.0"
  ],
  "a": 1,
  "e": "$S_{xy}=8$, $S_{xx}=5$, slope $=1.6$."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "Using that fit $\\hat y=0.5+1.6x$, the prediction at $x=5$ is:",
  "o": [
   "8.5",
   "8.0",
   "7.5",
   "9.5"
  ],
  "a": 0,
  "e": "$0.5+1.6\\times5=8.5$."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "Spearman correlation with $n=5$ and $\\sum d^2=4$ is:",
  "o": [
   "0.96",
   "0.8",
   "0.67",
   "0.2"
  ],
  "a": 1,
  "e": "$1-6(4)/(5\\times24)=0.8$."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "A high correlation between two variables shows that:",
  "o": [
   "One causes the other",
   "They are linearly associated, not necessarily that one causes the other",
   "There is no confounding",
   "The slope is 1"
  ],
  "a": 1,
  "e": "Correlation is not causation."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "Residual plots showing a funnel shape suggest violation of:",
  "o": [
   "Linearity of $R^2$",
   "Independence of $X$",
   "Constant variance (homoscedasticity)",
   "Normality of predictors"
  ],
  "a": 2,
  "e": "Heteroscedasticity."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "In multiple regression, adding a useless predictor will:",
  "o": [
   "Decrease $R^2$",
   "Make SSE larger",
   "Never decrease $R^2$ but may decrease adjusted $R^2$",
   "Always increase adjusted $R^2$"
  ],
  "a": 2,
  "e": "Adjusted $R^2$ penalises extra parameters."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "An AR(1) process $X_t=c+\\phi X_{t-1}+\\varepsilon_t$ is stationary when:",
  "o": [
   "$\\phi=1$",
   "$|\\phi|<1$",
   "$c=0$",
   "$\\phi>1$"
  ],
  "a": 1,
  "e": "The effect of past shocks decays."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "$X_t=2+0.5X_{t-1}+\\varepsilon_t$ and $X_{t-1}=10$. The one-step forecast is:",
  "o": [
   "10",
   "12",
   "5",
   "7"
  ],
  "a": 3,
  "e": "$2+0.5\\times10=7$."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "The long-run mean of that AR(1) process is:",
  "o": [
   "10",
   "2",
   "4",
   "0.5"
  ],
  "a": 2,
  "e": "$c/(1-\\phi)=2/0.5=4$."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "An AR($p$) model predicts the current value using:",
  "o": [
   "The previous $p$ observations",
   "The next $p$ observations",
   "Only the mean",
   "$p$ random seeds"
  ],
  "a": 0,
  "e": "Auto-regression on lagged values."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "For an AR($p$) process, the PACF typically:",
  "o": [
   "Decays slowly forever",
   "Cuts off at lag 1 always",
   "Cuts off after lag $p$",
   "Is always zero"
  ],
  "a": 2,
  "e": "This is used to choose $p$."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "A random walk ($\\phi=1$) is:",
  "o": [
   "White noise",
   "Stationary",
   "Mean-reverting",
   "Non-stationary"
  ],
  "a": 3,
  "e": "Variance grows with time."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "The sigmoid $\\sigma(0)$ equals:",
  "o": [
   "1",
   "0.5",
   "0.25",
   "0"
  ],
  "a": 1,
  "e": "$1/(1+e^0)=0.5$."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "A logistic coefficient $\\beta=0.693$ corresponds to an odds ratio of about:",
  "o": [
   "0.693",
   "2",
   "1.5",
   "0.5"
  ],
  "a": 1,
  "e": "$e^{0.693}\\approx2$."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "logit$(p)=-2+0.5x$. At $x=4$, $p$ is:",
  "o": [
   "0.5",
   "0.73",
   "0.12",
   "1"
  ],
  "a": 0,
  "e": "$z=0\\Rightarrow p=0.5$."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "Logistic regression parameters are estimated by:",
  "o": [
   "Ordinary least squares exactly",
   "Closed-form averaging",
   "k-means",
   "Maximum likelihood"
  ],
  "a": 3,
  "e": "No closed form; solved iteratively."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "The predicted output of logistic regression always lies in:",
  "o": [
   "$(-\\infty,\\infty)$",
   "(0, 1)",
   "$[1,\\infty)$",
   "$\\{0,1\\}$ only"
  ],
  "a": 1,
  "e": "The sigmoid maps log-odds to probabilities."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "$p=0.8$. The log-odds are approximately:",
  "o": [
   "4",
   "0.8",
   "1.386",
   "0.223"
  ],
  "a": 2,
  "e": "Odds $=4$, $\\ln4\\approx1.386$."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "Why is ordinary linear regression poorly suited to binary outcomes?",
  "o": [
   "It always gives $R^2=1$",
   "It cannot use numeric inputs",
   "Predictions can fall outside [0,1] and errors are not normal/homoscedastic",
   "It needs more data"
  ],
  "a": 2,
  "e": "Logistic regression models the log-odds instead."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "The derivative of the sigmoid is $f(x)(1-f(x))$. At $x=0$ it equals:",
  "o": [
   "1",
   "0.25",
   "0.5",
   "0"
  ],
  "a": 1,
  "e": "$0.5\\times0.5$."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "The \"naive\" assumption in Naive Bayes is:",
  "o": [
   "Features are uncorrelated with the class",
   "All classes are equally likely",
   "Features are conditionally independent given the class",
   "Features are normally distributed"
  ],
  "a": 2,
  "e": "$P(x|C)=\\prod P(x_i|C)$."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "k-NN is called a lazy learner because:",
  "o": [
   "It uses no distance",
   "It trains very fast and ignores data",
   "It never needs labels",
   "It stores the training data and defers computation to prediction time"
  ],
  "a": 3,
  "e": "No explicit model is built during training."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "A linear SVM has $w=(3,4)$. The margin width $2/\\|w\\|$ is:",
  "o": [
   "0.4",
   "0.286",
   "2",
   "0.5"
  ],
  "a": 0,
  "e": "$\\|w\\|=5$, so $2/5=0.4$."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "Support vectors are:",
  "o": [
   "All training points",
   "Misclassified points only",
   "Training points lying on or inside the margin that determine the hyperplane",
   "Points farthest from the boundary"
  ],
  "a": 2,
  "e": "Removing non-support vectors does not change the boundary."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "The kernel trick lets an SVM:",
  "o": [
   "Avoid using labels",
   "Remove outliers",
   "Reduce to k-NN",
   "Compute inner products in a high-dimensional space without explicit mapping"
  ],
  "a": 3,
  "e": "It enables non-linear boundaries efficiently."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "For $n=5$ classes, OvA and OvO need how many binary classifiers?",
  "o": [
   "Both: 5",
   "OvA: 5, OvO: 10",
   "Both: 10",
   "OvA: 10, OvO: 5"
  ],
  "a": 1,
  "e": "OvA $=n$; OvO $=n(n-1)/2$."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "A very large $C$ in a soft-margin SVM makes it behave like:",
  "o": [
   "k-NN",
   "A random classifier",
   "A hard-margin SVM (little tolerance to violations)",
   "A larger-margin, more tolerant model"
  ],
  "a": 2,
  "e": "Large $C$ heavily penalises slack."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "A small $k$ in k-NN (e.g. $k=1$) tends to cause:",
  "o": [
   "No error",
   "Low bias, high variance (overfitting)",
   "Underfitting",
   "High bias, low variance"
  ],
  "a": 1,
  "e": "Boundaries follow noise."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "$P(F)=0.4$, $P(x|F)=0.5$; $P(O)=0.6$, $P(x|O)=0.2$. Naive Bayes predicts:",
  "o": [
   "Failed (0.20 vs 0.12)",
   "Cannot determine",
   "Operational (0.12 vs 0.20)",
   "Tie"
  ],
  "a": 0,
  "e": "Compare $P(C)P(x|C)$."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "Laplace smoothing in Naive Bayes is used to:",
  "o": [
   "Speed up training",
   "Remove correlated features",
   "Avoid zero probabilities for unseen feature values",
   "Normalise features"
  ],
  "a": 2,
  "e": "Add a pseudo-count to every category."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "A point has $y f(x)=-0.5$ in a soft-margin SVM. The slack $\\xi$ is:",
  "o": [
   "1.5",
   "0.5",
   "0",
   "1"
  ],
  "a": 0,
  "e": "$\\xi=\\max(0,1-yf)=1.5$."
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "Five measurements are 4, 8, 6, 5, 7. The sample variance is:",
  "o": [
   "1.58",
   "2.5",
   "10",
   "2.0"
  ],
  "a": 1,
  "e": "Mean $=6$; deviations$^2$: 4,4,0,1,1 sum to 10; divide by $n-1=4$: $2.5$. (Dividing by $n$ gives 2; $\\sqrt{2.5}=1.58$ is the standard deviation.)"
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "The mean of 10, 12, 14 and $x$ is 13. Find $x$.",
  "o": [
   "14",
   "18",
   "13",
   "16"
  ],
  "a": 3,
  "e": "Total $=4\\times13=52$; the known three sum to 36, so $x=52-36=16$."
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "Manufacturers run \"burn-in\" tests on electronic units before shipping mainly to:",
  "o": [
   "Increase the wear-out hazard",
   "Measure the useful-life MTTF only",
   "Reduce the variance of the lifetime",
   "Weed out infant-mortality failures"
  ],
  "a": 3,
  "e": "Weak units fail early under stress, so the shipped population has already passed the decreasing-hazard (infant mortality) phase."
 },
 {
  "m": 1,
  "src": "lecture",
  "q": "After a break-in period, a hydraulic pump fails at a roughly constant rate from random causes. Which region of the bathtub curve is this and which model is natural?",
  "o": [
   "Wear-out; exponential",
   "Useful life; exponential",
   "Wear-out; Weibull with $\\beta<1$",
   "Infant mortality; Weibull with $\\beta>1$"
  ],
  "a": 1,
  "e": "A constant hazard rate means the useful-life region, and the exponential distribution is the only one with constant $h(t)$."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "Two independent components in series have reliabilities 0.98 and 0.96. System reliability is:",
  "o": [
   "0.9600",
   "0.9992",
   "0.9800",
   "0.9408"
  ],
  "a": 3,
  "e": "In series both must work: $0.98\\times0.96=0.9408$, lower than either component."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "Three independent components each with reliability 0.7 are in parallel. System reliability is:",
  "o": [
   "0.343",
   "0.900",
   "0.700",
   "0.973"
  ],
  "a": 3,
  "e": "Parallel fails only if ALL fail: $1-(0.3)^3=1-0.027=0.973$."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "$P(A)=0.3$, $P(B)=0.5$, $P(A\\cap B)=0.15$. The events are:",
  "o": [
   "Complementary",
   "Dependent",
   "Independent",
   "Mutually exclusive"
  ],
  "a": 2,
  "e": "Independence needs $P(A\\cap B)=P(A)P(B)=0.15$, which holds. Mutually exclusive would need $P(A\\cap B)=0$."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "Machine A makes 40% of items (3% defective), Machine B makes 60% (1% defective). An item is found defective. $P(\\text{from A})$ is:",
  "o": [
   "0.03",
   "0.40",
   "0.50",
   "0.667"
  ],
  "a": 3,
  "e": "Bayes: $\\dfrac{0.4(0.03)}{0.4(0.03)+0.6(0.01)}=\\dfrac{0.012}{0.018}=0.667$. A is over-represented among defectives because of its higher defect rate."
 },
 {
  "m": 2,
  "src": "lecture",
  "q": "$P(A)=0.5$, $P(B)=0.4$, $P(A\\cap B)=0.1$. The probability of neither A nor B is:",
  "o": [
   "0.5",
   "0.1",
   "0.8",
   "0.2"
  ],
  "a": 3,
  "e": "$P(A\\cup B)=0.5+0.4-0.1=0.8$; neither $=1-0.8=0.2$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "$X\\sim\\text{Bin}(8,0.5)$. $P(X=4)$ is approximately:",
  "o": [
   "0.5",
   "0.2734",
   "0.4096",
   "0.0625"
  ],
  "a": 1,
  "e": "$\\binom84(0.5)^8=70/256=0.2734$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "A call centre receives on average 5 calls per day (Poisson). $P(\\text{at most 2 calls})$ is approximately:",
  "o": [
   "0.1247",
   "0.0067",
   "0.0842",
   "0.4405"
  ],
  "a": 0,
  "e": "$e^{-5}(1+5+12.5)=0.006738\\times18.5=0.1247$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "The number of passing units out of 15, each passing independently with $p=0.6$, has mean and variance:",
  "o": [
   "Mean 9, variance 3.6",
   "Mean 9, variance 0.24",
   "Mean 6, variance 3.6",
   "Mean 9, variance 5.4"
  ],
  "a": 0,
  "e": "$np=9$ and $np(1-p)=15(0.6)(0.4)=3.6$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "Each trial succeeds with $p=0.3$. $P(\\text{first success on the 3rd trial})$ is:",
  "o": [
   "0.343",
   "0.147",
   "0.9",
   "0.027"
  ],
  "a": 1,
  "e": "Geometric: $(0.7)^2(0.3)=0.147$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "A PMF is $P(X=x)=kx$ for $x=1,2,3,4$. The value of $k$ is:",
  "o": [
   "0.2",
   "0.25",
   "0.1",
   "1"
  ],
  "a": 2,
  "e": "The probabilities must sum to 1: $k(1+2+3+4)=10k=1$."
 },
 {
  "m": 3,
  "src": "lecture",
  "q": "Cards are dealt without replacement from a deck and you count aces in a 5-card hand. Which distribution models the count?",
  "o": [
   "Geometric",
   "Hypergeometric",
   "Binomial",
   "Poisson"
  ],
  "a": 1,
  "e": "Without replacement from a finite population the success probability changes after each draw, which is the hypergeometric setting."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "Time to failure is exponential with mean 10 h. $P(T>5)$ is:",
  "o": [
   "$e^{-2}$",
   "$e^{-0.5}\\approx0.6065$",
   "0.3935",
   "0.5"
  ],
  "a": 1,
  "e": "$R(5)=e^{-5/10}$. Note 0.3935 is $P(T\\le5)$."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "$X\\sim N(50,4^2)$. $P(X>56)$ is approximately:",
  "o": [
   "0.0668",
   "0.3085",
   "0.0228",
   "0.1587"
  ],
  "a": 0,
  "e": "$z=(56-50)/4=1.5$ and $P(Z>1.5)=0.0668$."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "$X\\sim N(50,4^2)$. Which value is the 97.72nd percentile?",
  "o": [
   "62",
   "54",
   "56",
   "58"
  ],
  "a": 3,
  "e": "$P(Z<2)=0.9772$, so $x=\\mu+2\\sigma=58$."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "A PDF is $f(x)=2x$ on $[0,1]$. $P(X>0.5)$ is:",
  "o": [
   "0.5",
   "0.75",
   "1",
   "0.25"
  ],
  "a": 1,
  "e": "$P(X>0.5)=1-\\int_0^{0.5}2x\\,dx=1-0.25=0.75$."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "A Gamma distribution has shape 4 and scale 2. Its mean and variance are:",
  "o": [
   "8 and 32",
   "6 and 12",
   "8 and 16",
   "2 and 4"
  ],
  "a": 2,
  "e": "Mean $\\alpha\\beta=8$; variance $\\alpha\\beta^2=4\\times4=16$."
 },
 {
  "m": 4,
  "src": "lecture",
  "q": "A Weibull with $\\beta=2$, $\\eta=500$ h. $R(250)$ is:",
  "o": [
   "$e^{-0.5}$",
   "$e^{-0.25}\\approx0.779$",
   "0.5",
   "0.25"
  ],
  "a": 1,
  "e": "$R=\\exp[-(250/500)^2]=e^{-0.25}$."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "Households have $\\sigma=30$. What sample size gives a standard error of the mean equal to 2?",
  "o": [
   "60",
   "450",
   "225",
   "15"
  ],
  "a": 2,
  "e": "$2=30/\\sqrt n\\Rightarrow\\sqrt n=15\\Rightarrow n=225$."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "$\\mu=50$, $\\sigma=12$, $n=36$. $P(\\bar X<48)$ is approximately:",
  "o": [
   "0.1587",
   "0.0228",
   "0.4325",
   "0.3085"
  ],
  "a": 0,
  "e": "$SE=2$, $z=(48-50)/2=-1$, so $0.1587$."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "The standard error of a sample proportion with $p=0.5$, $n=100$ is:",
  "o": [
   "0.05",
   "0.25",
   "0.005",
   "0.5"
  ],
  "a": 0,
  "e": "$\\sqrt{p(1-p)/n}=\\sqrt{0.25/100}=0.05$."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "A sample of $n=10$ from a roughly normal population has unknown $\\sigma$. The sampling distribution of the standardised mean is:",
  "o": [
   "$F$ with (9, 9) d.f.",
   "Standard normal",
   "$\\chi^2$ with 9 d.f.",
   "$t$ with 9 degrees of freedom"
  ],
  "a": 3,
  "e": "Estimating $\\sigma$ with $s$ gives a $t$ statistic with $n-1$ d.f."
 },
 {
  "m": 5,
  "src": "lecture",
  "q": "Two independent sample means have standard errors 3 and 4. The standard error of their difference is:",
  "o": [
   "12",
   "1",
   "7",
   "5"
  ],
  "a": 3,
  "e": "Variances add: $\\sqrt{3^2+4^2}=5$."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "A 95% CI uses $\\sigma=8$, $n=64$. The margin of error is:",
  "o": [
   "0.98",
   "1.96",
   "8",
   "3.92"
  ],
  "a": 1,
  "e": "$SE=8/8=1$, margin $=1.96\\times1$."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "$\\bar x=100$, $\\sigma=15$, $n=100$. The 90% CI for $\\mu$ is approximately:",
  "o": [
   "(97.53, 102.47)",
   "(98.5, 101.5)",
   "(96.1, 103.9)",
   "(95, 105)"
  ],
  "a": 0,
  "e": "$SE=1.5$; margin $=1.645\\times1.5=2.47$."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "The MLE of a binomial proportion $p$ from $x$ successes in $n$ trials is:",
  "o": [
   "$x$",
   "$n/x$",
   "$\\sqrt{x/n}$",
   "$x/n$"
  ],
  "a": 3,
  "e": "Maximising $x\\ln p+(n-x)\\ln(1-p)$ gives $\\hat p=x/n$."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "Using the conservative $p=0.5$, the sample size for a 95% margin of error of 0.05 on a proportion is:",
  "o": [
   "97",
   "196",
   "1537",
   "385"
  ],
  "a": 3,
  "e": "$n=(1.96/0.05)^2(0.25)=384.16\\to385$."
 },
 {
  "m": 6,
  "src": "lecture",
  "q": "Doubling the sample size changes the CI margin of error by a factor of:",
  "o": [
   "1/2",
   "2",
   "$1/\\sqrt2\\approx0.71$",
   "1/4"
  ],
  "a": 2,
  "e": "Margin $\\propto1/\\sqrt n$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "$H_0:\\mu=100$; $n=9$, $\\bar x=105$, $s=6$, two-sided $\\alpha=0.05$, $t_{8,0.025}=2.306$. The decision is:",
  "o": [
   "Fail to reject ($t=2.5<2.9$)",
   "Fail to reject ($t=0.83$)",
   "Reject $H_0$ ($t=2.5>2.306$)",
   "Reject ($t=5$)"
  ],
  "a": 2,
  "e": "$t=(105-100)/(6/3)=2.5$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "A left-tailed $z$ test gives $z=-1.2$ (p = 0.1151) at $\\alpha=0.05$. You should:",
  "o": [
   "Increase $\\alpha$ after seeing the data",
   "Fail to reject $H_0$",
   "Reject $H_0$",
   "Accept $H_0$ as proven"
  ],
  "a": 1,
  "e": "p-value $>\\alpha$; absence of evidence is not proof of $H_0$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "A genuine defect in a batch exists but the test fails to detect it. This is a:",
  "o": [
   "Type II error",
   "Type I error",
   "Sampling bias",
   "Correct decision"
  ],
  "a": 0,
  "e": "Failing to reject a false $H_0$ has probability $\\beta$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "With $\\alpha$ fixed, increasing the sample size will typically:",
  "o": [
   "Increase $\\alpha$",
   "Have no effect on $\\beta$",
   "Decrease the power",
   "Increase the power"
  ],
  "a": 3,
  "e": "Smaller standard error separates the sampling distributions under $H_0$ and $H_a$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "A die is rolled 60 times with counts 8, 12, 9, 11, 10, 10 (expected 10 each). The $\\chi^2$ statistic and d.f. are:",
  "o": [
   "10 with 5 d.f.",
   "1.0 with 5 d.f.",
   "0.2 with 5 d.f.",
   "1.0 with 6 d.f."
  ],
  "a": 1,
  "e": "$(4+4+1+1+0+0)/10=1.0$; d.f. $=6-1=5$."
 },
 {
  "m": 7,
  "src": "lecture",
  "q": "p-value = 0.03. At $\\alpha=0.01$ the conclusion is:",
  "o": [
   "Reject $H_0$",
   "The test is invalid",
   "Fail to reject $H_0$",
   "Reject at 97% confidence only"
  ],
  "a": 2,
  "e": "Reject only if $p\\le\\alpha$."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "One-way ANOVA with 3 groups of 5 observations. The d.f. (between, within) are:",
  "o": [
   "(3, 15)",
   "(12, 2)",
   "(2, 12)",
   "(2, 14)"
  ],
  "a": 2,
  "e": "$k-1=2$; $N-k=15-3=12$."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "$MSB=40$ and $MSE=8$. The F statistic is:",
  "o": [
   "32",
   "48",
   "0.2",
   "5"
  ],
  "a": 3,
  "e": "$F=MSB/MSE=40/8$."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "$SSE=90$, $N=18$, $a=3$ groups. $MSE$ is:",
  "o": [
   "30",
   "5",
   "6",
   "4.5"
  ],
  "a": 2,
  "e": "$SSE/(N-a)=90/15=6$."
 },
 {
  "m": 8,
  "src": "lecture",
  "q": "$SST=500$, $SSB=350$. The proportion of total variability explained by the factor is:",
  "o": [
   "0.50",
   "0.70",
   "0.30",
   "1.43"
  ],
  "a": 1,
  "e": "$SSB/SST=350/500$; $SSW=150$."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "A correlation of $r=-0.8$ between load and fatigue life means:",
  "o": [
   "A weak positive association",
   "80% of values are negative",
   "No relation",
   "A strong negative linear association; $r^2=0.64$"
  ],
  "a": 3,
  "e": "The sign shows direction, $|r|$ strength, and $r^2$ the variance explained."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "Points (1,3), (2,5), (3,7). The least-squares line is:",
  "o": [
   "$\\hat y=3+x$",
   "$\\hat y=2+x$",
   "$\\hat y=1+3x$",
   "$\\hat y=1+2x$"
  ],
  "a": 3,
  "e": "They lie exactly on a line: slope 2, intercept $3-2=1$."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "$S_{xy}=-300$, $S_{xx}=400$, $S_{yy}=400$. Pearson $r$ is:",
  "o": [
   "0.75",
   "-1.5",
   "-0.5625",
   "-0.75"
  ],
  "a": 3,
  "e": "$r=-300/\\sqrt{400\\times400}=-0.75$."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "Spearman correlation with $n=6$ and $\\sum d^2=14$ is:",
  "o": [
   "0.6",
   "0.4",
   "0.23",
   "0.86"
  ],
  "a": 0,
  "e": "$1-6(14)/(6\\times35)=1-0.4=0.6$."
 },
 {
  "m": 9,
  "src": "lecture",
  "q": "A fitted model is $\\hat y=20+3x$. At $x=5$ the observed $y$ is 38. The residual is:",
  "o": [
   "3",
   "35",
   "18",
   "-3"
  ],
  "a": 0,
  "e": "Prediction $=35$; residual $=y-\\hat y=38-35=3$."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "AR(1) with $\\phi=0.8$, no constant, and $X_{t-1}=50$. The forecast of $X_t$ is:",
  "o": [
   "40",
   "58",
   "62.5",
   "0.8"
  ],
  "a": 0,
  "e": "$\\hat X_t=\\phi X_{t-1}=40$."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "AR(1) with $\\phi=0.6$, no constant, last value 100. The 2-step-ahead forecast is:",
  "o": [
   "72",
   "120",
   "60",
   "36"
  ],
  "a": 3,
  "e": "One step: 60; two steps: $0.6\\times60=\\phi^2\\times100=36$."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "For a stationary AR(1) with $\\phi=0.5$, the autocorrelation at lag 2 is:",
  "o": [
   "0.5",
   "1",
   "0",
   "0.25"
  ],
  "a": 3,
  "e": "$\\rho_k=\\phi^k$, so $\\rho_2=0.25$."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "For an AR(1) process, the Yule–Walker estimate of $\\phi$ equals:",
  "o": [
   "The mean of the series",
   "The lag-2 autocorrelation",
   "The lag-1 autocorrelation $\\hat\\rho_1$",
   "The variance of the series"
  ],
  "a": 2,
  "e": "The Yule–Walker equation for $p=1$ is $\\rho_1=\\phi\\rho_0=\\phi$."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "A series with a clear upward trend is usually made stationary by:",
  "o": [
   "Removing the first value",
   "Squaring",
   "Adding noise",
   "Differencing"
  ],
  "a": 3,
  "e": "$Y_t=X_t-X_{t-1}$ removes a linear trend."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "After fitting an AR model, a good model should leave residuals that are:",
  "o": [
   "White noise (uncorrelated)",
   "Strongly autocorrelated",
   "Increasing",
   "Equal to the data"
  ],
  "a": 0,
  "e": "Remaining autocorrelation means the model missed structure."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "Compared with ordinary regression on time index, an AR model:",
  "o": [
   "Needs no historical data",
   "Uses past values of the series as predictors to capture serial dependence",
   "Only fits constant series",
   "Ignores autocorrelation"
  ],
  "a": 1,
  "e": "Time-series data are autocorrelated, violating the independence assumption of plain regression."
 },
 {
  "m": 10,
  "src": "lecture",
  "q": "An AR(2) model for hourly load needs which inputs?",
  "o": [
   "Only the daily mean",
   "The two previous hourly values",
   "Two random numbers",
   "The next two values"
  ],
  "a": 1,
  "e": "$X_t=c+\\phi_1X_{t-1}+\\phi_2X_{t-2}+\\varepsilon_t$."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "logit$(p)=-3+1.5x$. At $x=3$, $p$ is approximately:",
  "o": [
   "0.818",
   "0.182",
   "0.95",
   "0.5"
  ],
  "a": 0,
  "e": "$z=1.5$; $p=1/(1+e^{-1.5})=0.818$."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "A logistic coefficient of $-0.693$ means each unit increase in $x$ multiplies the odds by about:",
  "o": [
   "-0.693",
   "2",
   "0.693",
   "0.5"
  ],
  "a": 3,
  "e": "$e^{-0.693}=0.5$ (odds halve)."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "The odds of failure are 3. The probability of failure is:",
  "o": [
   "0.67",
   "0.33",
   "3",
   "0.75"
  ],
  "a": 3,
  "e": "$p=\\text{odds}/(1+\\text{odds})=3/4$."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "Raising the classification threshold from 0.5 to 0.8 generally:",
  "o": [
   "Predicts more positives",
   "Changes the fitted coefficients",
   "Predicts fewer positives (higher precision, lower recall)",
   "Has no effect"
  ],
  "a": 2,
  "e": "Only cases with $\\hat p>0.8$ are labelled positive; the model itself is unchanged."
 },
 {
  "m": 11,
  "src": "lecture",
  "q": "Risk is classified as Low, Medium or High (three unordered classes). Which model fits?",
  "o": [
   "Poisson regression",
   "Simple linear regression",
   "Binary logistic regression only",
   "Multinomial logistic regression"
  ],
  "a": 3,
  "e": "It outputs a probability for each of the $K>2$ classes via softmax."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "$P(F)=P(O)=0.5$; $P(x_1|F)=0.6$, $P(x_2|F)=0.5$; $P(x_1|O)=0.2$, $P(x_2|O)=0.4$. Naive Bayes predicts:",
  "o": [
   "Operational (0.04 vs 0.15)",
   "Failed (0.15 vs 0.04)",
   "Failed (0.30 vs 0.08)",
   "Tie"
  ],
  "a": 1,
  "e": "$0.5\\times0.6\\times0.5=0.15$ vs $0.5\\times0.2\\times0.4=0.04$."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "The Euclidean distance between (1,1) and (4,5) is:",
  "o": [
   "3",
   "7",
   "5",
   "25"
  ],
  "a": 2,
  "e": "$\\sqrt{3^2+4^2}=5$."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "For a 2-class kNN, using an odd $k$ helps because:",
  "o": [
   "It guarantees accuracy",
   "It reduces dimensionality",
   "It avoids tied votes",
   "It speeds training"
  ],
  "a": 2,
  "e": "An odd $k$ cannot split evenly between two classes."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "A linear SVM has $w=(1,1)$. The margin width $2/\\|w\\|$ is:",
  "o": [
   "1",
   "2",
   "$\\sqrt2\\approx1.414$",
   "0.707"
  ],
  "a": 2,
  "e": "$\\|w\\|=\\sqrt2$."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "A correctly classified point has $y_i f(x_i)=1.5$. Its slack $\\xi_i$ is:",
  "o": [
   "0",
   "-0.5",
   "0.5",
   "1.5"
  ],
  "a": 0,
  "e": "It satisfies $y f\\ge1$, so $\\xi=\\max(0,1-1.5)=0$."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "A value never seen with a class (count 0) among 5 class records and 3 possible categories. The Laplace ($\\alpha=1$) estimate is:",
  "o": [
   "1/5",
   "1/3",
   "1/8",
   "0"
  ],
  "a": 2,
  "e": "$(0+1)/(5+3)=0.125$."
 },
 {
  "m": 12,
  "src": "lecture",
  "q": "In an RBF kernel SVM, increasing $\\sigma$ (kernel width) generally makes the boundary:",
  "o": [
   "Linear only",
   "Smoother (less flexible)",
   "Unchanged",
   "More jagged"
  ],
  "a": 1,
  "e": "$\\exp(-\\|x-y\\|^2/2\\sigma^2)$ with large $\\sigma$ treats distant points as similar."
 }
];
