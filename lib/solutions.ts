import { Coins, Box, CreditCard, FileText, Bot, BarChart } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
}

export interface Solution {
  id: string;
  name: string;
  description: string;
  features: Feature[];
  icon: string;
  Icon: LucideIcon;
}

export const businessSolutions: Solution[] = [
  {
    id: "trade-finance",
    name: "Trade Finance Automation",
    description: "Streamline your trade finance operations with intelligent automation and real-time tracking.",
    features: [
      {
        title: "Smart Document Processing",
        description: "Automated processing of trade documents using AI, reducing manual work by up to 80%"
      },
      {
        title: "Real-time Transaction Tracking",
        description: "End-to-end visibility of trade finance transactions with instant status updates"
      },
      {
        title: "Risk Assessment",
        description: "Advanced analytics for better risk assessment and fraud detection"
      },
      {
        title: "Compliance Management",
        description: "Automated compliance checks and regulatory reporting"
      }
    ],
    icon: "coins",
    Icon: Coins
  },
  {
    id: "supply-chain",
    name: "Supply Chain Optimization",
    description: "Enhance your supply chain efficiency with AI-powered insights and automation.",
    features: [
      {
        title: "Inventory Optimization",
        description: "AI-driven inventory management to reduce costs and stockouts"
      },
      {
        title: "Supplier Management",
        description: "Centralized platform for supplier onboarding, evaluation, and collaboration"
      },
      {
        title: "Demand Forecasting",
        description: "Machine learning models for accurate demand prediction"
      },
      {
        title: "Logistics Optimization",
        description: "Route optimization and shipping cost reduction"
      }
    ],
    icon: "box",
    Icon: Box
  },
  {
    id: "payment-solutions",
    name: "Smart Payment Solutions",
    description: "Modernize your payment infrastructure with intelligent processing and reconciliation.",
    features: [
      {
        title: "Automated Reconciliation",
        description: "AI-powered matching of payments with invoices and orders"
      },
      {
        title: "Multi-currency Support",
        description: "Seamless handling of international transactions and currency conversions"
      },
      {
        title: "Payment Analytics",
        description: "Deep insights into payment patterns and cash flow optimization"
      },
      {
        title: "Fraud Prevention",
        description: "Real-time fraud detection and prevention using machine learning"
      }
    ],
    icon: "credit-card",
    Icon: CreditCard
  }
];

export const aiAgents: Solution[] = [
  {
    id: "document-ai",
    name: "Document Processing Agent",
    description: "Intelligent document processing and analysis for trade documentation.",
    features: [
      {
        title: "Multi-format Support",
        description: "Process various document formats including PDFs, images, and scanned documents"
      },
      {
        title: "Data Extraction",
        description: "Accurate extraction of key information from complex trade documents"
      },
      {
        title: "Validation & Verification",
        description: "Automated validation of document content and compliance checks"
      },
      {
        title: "Integration Ready",
        description: "Easy integration with existing systems and workflows"
      }
    ],
    icon: "file-text",
    Icon: FileText
  },
  {
    id: "trade-assistant",
    name: "Trade Assistant Agent",
    description: "AI-powered assistant for trade finance operations and decision support.",
    features: [
      {
        title: "Risk Assessment",
        description: "Real-time risk analysis and recommendations for trade transactions"
      },
      {
        title: "Compliance Monitoring",
        description: "Continuous monitoring of regulatory compliance and updates"
      },
      {
        title: "Market Intelligence",
        description: "AI-driven market insights and trade opportunity identification"
      },
      {
        title: "Process Automation",
        description: "Automated handling of routine trade finance tasks"
      }
    ],
    icon: "bot",
    Icon: Bot
  },
  {
    id: "analytics-agent",
    name: "Analytics & Insights Agent",
    description: "Advanced analytics and reporting for trade finance operations.",
    features: [
      {
        title: "Performance Analytics",
        description: "Detailed analysis of trade finance performance metrics"
      },
      {
        title: "Predictive Insights",
        description: "AI-powered forecasting of trade trends and opportunities"
      },
      {
        title: "Custom Reporting",
        description: "Automated generation of customized reports and dashboards"
      },
      {
        title: "Data Visualization",
        description: "Interactive visualizations of complex trade data"
      }
    ],
    icon: "bar-chart",
    Icon: BarChart
  }
]; 