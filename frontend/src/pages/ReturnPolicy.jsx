import React from 'react';
import '../styles/about.css';

const ReturnPolicy = () => {
  return (
    <div className="about-container">
      <div className="about-card" style={{ textAlign: 'left' }}>
        <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
          Return & Refund Policy
        </h2>
        
        <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          At SUMNEXUS, we stand behind the quality of our products. If you are not completely satisfied with your purchase, you may initiate a return within 30 days of receiving your order.
        </p>

        <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>1. Eligibility for Returns</h4>
        <p style={{ marginBottom: '15px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          To be eligible for a return, the item must be unused, in the same condition that it was received, and within its original packaging. Proof of purchase is required.
        </p>

        <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>2. Refund Processing</h4>
        <p style={{ marginBottom: '15px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Once your return is received and inspected, you will be notified of the approval status. Approved refunds will be processed to your original payment method within 5-7 business days.
        </p>

        <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>3. Non-Returnable Items</h4>
        <p style={{ marginBottom: '15px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Certain categories such as perishable items, custom products, digital media, or damaged items do not qualify for returns.
        </p>

        <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>4. Shipping Costs</h4>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          You are responsible for covering return shipping costs. Restocking fees may apply in certain cases.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
