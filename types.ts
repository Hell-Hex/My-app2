
export enum AutomationLevel {
  MANUAL = 'MANUAL',
  ASSISTED = 'ASSISTED',
  SEMI_AUTOMATED = 'SEMI_AUTOMATED'
}

export enum SupplierStatus {
  HEALTHY = 'HEALTHY',
  WARNING = 'WARNING',
  BLOCKED = 'BLOCKED',
  OFFLINE = 'OFFLINE'
}

export interface Supplier {
  id: string;
  name: string;
  status: SupplierStatus;
  healthScore: number; // 0-100
  automationLevel: AutomationLevel;
  lastSync: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  supplierSku: string;
  price: number;
  markup: number;
  stock: number;
  category: string;
  supplierId: string;
  image: string;
}

export interface Order {
  id: string;
  customerName: string;
  total: number;
  status: 'PENDING' | 'PREPARING' | 'CONFIRMED' | 'SHIPPED' | 'FAILED';
  supplierId: string;
  date: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  action: string;
  status: 'success' | 'error' | 'info';
  details: string;
}
