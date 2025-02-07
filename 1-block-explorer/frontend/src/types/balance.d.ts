export interface Balance {
  balance: string;
  limit?: string;
  buying_liabilities: string;
  selling_liabilities: string;
  last_modified_ledger?: number;
  is_authorized?: boolean;
  is_authorized_to_maintain_liabilities?: boolean;
  asset_type: string;
  asset_code?: string;
  asset_issuer?: string;
}

export interface BalanceResponse {
  _links: {
    self: { href: string };
    transactions: { href: string; templated: boolean };
    operations: { href: string; templated: boolean };
    payments: { href: string; templated: boolean };
    effects: { href: string; templated: boolean };
    offers: { href: string; templated: boolean };
    trades: { href: string; templated: boolean };
    data: { href: string; templated: boolean };
  };
  id: string;
  account_id: string;
  sequence: string;
  sequence_ledger: number;
  sequence_time: string;
  subentry_count: number;
  last_modified_ledger: number;
  last_modified_time: string;
  thresholds: {
    low_threshold: number;
    med_threshold: number;
    high_threshold: number;
  };
  flags: {
    auth_required: boolean;
    auth_revocable: boolean;
    auth_immutable: boolean;
    auth_clawback_enabled: boolean;
  };
  balances: Balance[];
  signers: {
    weight: number;
    key: string;
    type: string;
  }[];
  num_sponsoring: number;
  num_sponsored: number;
  paging_token: string;
  data_attr: Record<string, unknown>;
}
