"use client"
import React, { useState, useEffect, use } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { DollarSign, Info, Calculator, ArrowRight } from 'lucide-react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

ChartJS.register(ArcElement, Tooltip, Legend);

const MortgageCalculator = () => {
  const [homeValue, setHomeValue] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanAmount, setLoanAmount] = useState(240000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleHomeValueChange = (value) => {
    setHomeValue(value);
    const calculatedDownPayment = (value * downPaymentPercent) / 100;
    setDownPayment(calculatedDownPayment);
    setLoanAmount(value - calculatedDownPayment);
  };

  const handleDownPaymentChange = (value) => {
    setDownPayment(value);
    setDownPaymentPercent((value / homeValue) * 100);
    setLoanAmount(homeValue - value);
  };

  const handleDownPaymentPercentChange = (value) => {
    setDownPaymentPercent(value);
    const calculatedDownPayment = (homeValue * value) / 100;
    setDownPayment(calculatedDownPayment);
    setLoanAmount(homeValue - calculatedDownPayment);
  };

  useEffect(() => {
    // Calculate monthly payment
    const calculateMortgage = () => {
      const principal = loanAmount;
      const monthlyInterest = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      if (monthlyInterest === 0) {
        setMonthlyPayment(principal / numberOfPayments);
        setTotalInterest(0);
      } else {
        const x = Math.pow(1 + monthlyInterest, numberOfPayments);
        const monthly = (principal * x * monthlyInterest) / (x - 1);
        setMonthlyPayment(monthly);
        setTotalInterest(monthly * numberOfPayments - principal);
      }
      setTotalCost(loanAmount + totalInterest);
    };

    calculateMortgage();
  }, [loanAmount, interestRate, loanTerm, totalInterest]);

  const chartData = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ['#9333ea', '#4f46e5'],
        borderColor: ['#9333ea', '#4f46e5'],
        borderWidth: 1,
      },
    ],
  };

//   const chartOptions = {
//     plugins: {
//       legend: {
//         position: 'bottom' as const,
//         labels: {
//           color: '#fff',
//           font: {
//             size: 14,
//           },
//         },
//       },
//     },
//     cutout: '70%',
//     responsive: true,
//     maintainAspectRatio: false,
//   };
const chartOptions = {
      plugins: {
        legend: {
          position: 'bottom', // Removed 'as const'
          labels: {
            color: '#fff',
            font: {
              size: 14,
            },
          },
        },
      },
      cutout: '70%',
      responsive: true,
      maintainAspectRatio: false,
    };
    
  return (
      <>
     
      <NavBar />
    <div className="min-h-screen bg-[#121212] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Mortgage Calculator</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Plan your home purchase with our easy-to-use mortgage calculator. Adjust the parameters to see how they affect your monthly payments and total costs.
          </p>
        </div>

        <div className="bg-[#1A1A1A] rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Calculator className="mr-3 text-purple-500" />
                Mortgage Parameters
              </h2>

              <div className="space-y-6">
                {/* Home Value Slider */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="homeValue" className="block text-sm font-medium text-gray-300">
                      Home Value
                    </label>
                    <span className="text-purple-400 font-semibold">{formatCurrency(homeValue)}</span>
                  </div>
                  <input
                    type="range"
                    id="homeValue"
                    min="50000"
                    max="2000000"
                    step="10000"
                    value={homeValue}
                    onChange={(e) => handleHomeValueChange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">$50k</span>
                    <span className="text-xs text-gray-500">$2M</span>
                  </div>
                </div>

                {/* Down Payment Controls */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="downPayment" className="block text-sm font-medium text-gray-300">
                      Down Payment
                    </label>
                    <span className="text-purple-400 font-semibold">{formatCurrency(downPayment)} ({downPaymentPercent.toFixed(1)}%)</span>
                  </div>
                  <input
                    type="range"
                    id="downPayment"
                    min="0"
                    max={homeValue}
                    step="1000"
                    value={downPayment}
                    onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">$0</span>
                    <span className="text-xs text-gray-500">{formatCurrency(homeValue)}</span>
                  </div>
                </div>

                {/* Down Payment Percentage Slider */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="downPaymentPercent" className="block text-sm font-medium text-gray-300">
                      Down Payment %
                    </label>
                    <span className="text-purple-400 font-semibold">{downPaymentPercent.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    id="downPaymentPercent"
                    min="0"
                    max="50"
                    step="0.5"
                    value={downPaymentPercent}
                    onChange={(e) => handleDownPaymentPercentChange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">0%</span>
                    <span className="text-xs text-gray-500">50%</span>
                  </div>
                </div>

                {/* Loan Amount (Read Only) */}
                <div className="p-4 bg-[#232323] rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-300">Loan Amount</span>
                    <span className="text-purple-400 font-semibold">{formatCurrency(loanAmount)}</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="interestRate" className="block text-sm font-medium text-gray-300">
                      Interest Rate
                    </label>
                    <span className="text-purple-400 font-semibold">{interestRate.toFixed(2)}%</span>
                  </div>
                  <input
                    type="range"
                    id="interestRate"
                    min="0.1"
                    max="10"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">0.1%</span>
                    <span className="text-xs text-gray-500">10%</span>
                  </div>
                </div>

                {/* Loan Term Selector */}
                <div>
                  <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-300 mb-2">
                    Loan Term (Years)
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[15, 20, 30].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setLoanTerm(term)}
                        className={`py-2 rounded-md text-center transition-colors duration-200 ${
                          loanTerm === term
                            ? 'bg-purple-600 text-white'
                            : 'bg-[#232323] text-gray-300 hover:bg-[#2a2a2a]'
                        }`}
                      >
                        {term} Years
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-[#232323] p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <DollarSign className="mr-3 text-purple-500" />
                Mortgage Summary
              </h2>

              {/* Monthly Payment */}
              <div className="p-6 bg-[#1A1A1A] rounded-lg mb-6">
                <h3 className="text-sm font-medium text-gray-400 mb-1">Monthly Payment</h3>
                <div className="text-3xl font-bold text-white">
                  {formatCurrency(monthlyPayment)}
                  <span className="text-sm font-normal text-gray-500 ml-2">/ month</span>
                </div>
              </div>

              {/* Loan Breakdown Chart */}
              <div className="bg-[#1A1A1A] rounded-lg p-6 mb-6">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Loan Breakdown</h3>
                <div className="h-64">
                  <Doughnut data={chartData} options={chartOptions} />
                </div>
              </div>

              {/* Additional Costs */}
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-300">Loan Amount</span>
                  <span className="font-medium text-white">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-300">Total Interest</span>
                  <span className="font-medium text-white">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-300 font-semibold">Total Cost</span>
                  <span className="font-semibold text-purple-400">{formatCurrency(totalCost)}</span>
                </div>
              </div>

              {/* Loan Info */}
              <div className="mt-6 bg-purple-900/20 border border-purple-900/30 rounded-lg p-4 flex items-start">
                <Info className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  This calculation provides an estimate only. Actual loan terms may vary. Does not include property taxes, insurance, or HOA fees.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Mortgage Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-3">Understanding Mortgage Terms</h3>
              <p className="text-gray-400 mb-4">Learn about mortgage terminology and what factors affect your loan terms.</p>
              <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Learn more
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-3">First-Time Home Buyer Guide</h3>
              <p className="text-gray-400 mb-4">Everything you need to know about buying your first home and securing financing.</p>
              <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Read the guide
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-3">Current Mortgage Rates</h3>
              <p className="text-gray-400 mb-4">Stay updated on current mortgage rates and trends in the housing market.</p>
              <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                View rates
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MortgageCalculator;