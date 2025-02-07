export interface TransactionLinks {
  self: {
    href: string;
  };
  account: {
    href: string;
  };
  ledger: {
    href: string;
  };
  operations: {
    href: string;
    templated: boolean;
  };
  effects: {
    href: string;
    templated: boolean;
  };
  precedes: {
    href: string;
  };
  succeeds: {
    href: string;
  };
  transaction: {
    href: string;
  };
}

export interface TimeBounds {
  min_time: string;
  max_time: string;
}

export interface Preconditions {
  timebounds: TimeBounds;
}

export interface TransactionResponse {
  _links: TransactionLinks;
  id: string;
  paging_token: string;
  successful: boolean;
  hash: string;
  created_at: string;
  source_account: string;
  source_account_sequence: string;
  fee_account: string;
  fee_charged: string;
  max_fee: string;
  operation_count: number;
  envelope_xdr: string;
  result_xdr: string;
  fee_meta_xdr: string;
  memo_type: string;
  signatures: string[];
  preconditions: Preconditions;
  ledger_attr: number;
}
